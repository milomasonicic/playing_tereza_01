import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const TwistMaterial11 = shaderMaterial(
  {
    uTime: 0,
    uType: 1,

    // COLOR + INTENSITY
    uColor: [0.08, 0.32, 0.45],
    uIntensity: 2,
     // ACTIVE
    uActive: 0,
    
  },

  // =====================================
  // VERTEX
  // =====================================

  `
  uniform float uTime;
  uniform float uType;

  varying vec3 vPosition;
  attribute vec3 color;
  varying vec3 vColor;

  void main() {

    vec3 p = position;

    if (uType < 1.5) {

      gl_PointSize = 3.6;

    } else if (uType < 2.5) {

      gl_PointSize = 0.85;

    } else if (uType < 3.5) {

      gl_PointSize = 2.8;

    } else if (uType < 4.5) {

      gl_PointSize = 16.8;

    } else if (uType < 5.5) {

        gl_PointSize = 18.0;

      }

    gl_Position =
      projectionMatrix *
      modelViewMatrix *
      vec4(p, 1.0);
  }
  `,

  // =====================================
  // FRAGMENT
  // =====================================

  `
  uniform float uType;

uniform vec3 uColor;
uniform float uIntensity;

varying vec3 vPosition;
uniform float uActive;

void main() {

  // =====================================
  // PARTICLE SHAPE
  // =====================================

  vec2 uv =
    gl_PointCoord - 0.5;

  float dist =
    length(uv);

  float glow;


  // =====================================
  // TYPE 5 - ENERGY SHAPE
  // =====================================

  if (uType >= 4.5 && uType < 5.5) {

    float x = abs(uv.x);
    float y = abs(uv.y);

    // horizontal ray
    float horizontal =
      1.0 - smoothstep(
        0.0,
        0.08,
        y
      );

    // vertical ray
    float vertical =
      1.0 - smoothstep(
        0.0,
        0.8,
        x
      );

    // central glow
    float center =
      1.0 - smoothstep(
        0.0,
        0.22,
        dist
      );

    glow =
      max(
        max(horizontal, vertical),
        center
      );

    // dodatni soft glow
    glow *=
      1.0 - smoothstep(
        0.15,
        0.5,
        dist
      );

  }
  else {

    // =====================================
    // NORMAL PARTICLE
    // =====================================

    glow =
      1.0 - smoothstep(
        0.5,
        0.0,
        dist
      );

  }


  // =====================================
  // COLOR
  // =====================================

  vec3 color;


  if (uType < 1.5) {

    color = uColor;

  }
  else if (uType < 2.5) {

    color = uColor;

  }
  else if (uType < 3.5) {

    color = uColor;

  }
  else if (uType < 4.5) {

    color = uColor;

  }
  else if (uType < 5.5) {

    // TYPE 5
    color = uColor;

  }


  // =====================================
  // GLOW
  // =====================================

  color *= glow * 3.0;


  // =====================================
  // INTENSITY
  // =====================================

  color *= uIntensity;


  // =====================================
  // FINAL
  // =====================================

  gl_FragColor =
    vec4(
      color,
      glow * uActive
    );

}
  `
);

extend({
  TwistMaterial11
});


declare module "@react-three/fiber" {
  interface ThreeElements {
    twistMaterial11: any;
  }
}


export {
  TwistMaterial11,
};