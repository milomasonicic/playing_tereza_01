import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const TwistMaterial1 = shaderMaterial(
  {
    uTime: 0,
    uType:1,
  },

  // VERTEX
  `
  uniform float uTime; 
  varying vec3 vPosition;
  attribute vec3 color;
  varying vec3 vColor;
  uniform float uType;


  void main() { 
  vec3 p = position; 
   if (uType < 1.5) {
        gl_PointSize = 2.2;
    } else if (uType < 2.5) {
        gl_PointSize = 3.5;
    } else if (uType < 3.5) {
        gl_PointSize = 2.8;
    } else if (uType < 4.5) {
        gl_PointSize = 0.8;
    }
  gl_Position = 
  projectionMatrix * modelViewMatrix * vec4(p, 1.0); 
  
  }
  `,

  // FRAGMENT
  `
 uniform float uType;

  varying vec3 vPosition;

  void main() {

    // =====================================
    // PARTICLE SHAPE
    // =====================================

    vec2 uv =
      gl_PointCoord - 0.5;

    float dist =
      length(uv);

    float glow =
      1.0 - smoothstep(
        0.5,
        0.0,
        dist
      );

    // =====================================
    // COLOR
    // =====================================

    vec3 color;

    if (uType < 1.5) {

      // TYPE 1 = CYAN

      color = vec3(
         0.01,
        0.04,
        0.05
      );

    }
    else if (uType < 2.5) {

      // TYPE 2 = RED

      color = vec3(
        1.0,
        0.0,
        0.0
      );

    } else if (uType < 3.5) {
        
     color = vec3(
        0.005,
        0.01,
        0.12
      );
    
    } else if (uType < 4.5) {
        
   color = vec3(
        1.0,
        0.90,
        0.80
      );
    
    }


    // =====================================
    // GLOW
    // =====================================

    color *= glow * 3.0;

    // =====================================
    // INTENSITY
    // =====================================

    if (uType < 1.5) {
    color *= 1.5;
    } else if (uType < 2.5) {
        color *= 8.0;
    } else if (uType < 3.5) {
        color *= 1.7;
    } else if (uType < 4.5) {
        color *= 11.4;
    }

    gl_FragColor =
      vec4(
        color,
        glow
      );
  }
  `
  
);

extend({
  TwistMaterial1,
});


declare module "@react-three/fiber" {
  interface ThreeElements {
    twistMaterial1: any;
  }
}


export {
  TwistMaterial1,
};




