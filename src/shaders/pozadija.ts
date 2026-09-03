import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const BackGround1 = shaderMaterial(
  {
    uTime: 0,
    uTwist: 0,
    uWave: 0
  },
 // =======================================================
// VERTEX SHADER
// Ovdje mijenjaš OBLIK geometrije.
// Radi jednom za svaki vertex.
// =======================================================

  
  `
  varying vec2 vUv;

void main(){

    vUv = uv;

    gl_Position =
        projectionMatrix *
        modelViewMatrix *
        vec4(position,1.0);

}

  `,

  // =======================================================
// FRAGMENT SHADER
// Ovdje određuješ IZGLED.
// Radi za svaki piksel.
// =======================================================


   `
  

varying vec2 vUv;


void main(){

    vec3 top = vec3(0.01,0.1,0.03);

    vec3 sky = vec3(0.3,0.6,0.15);

    vec3 pearl = vec3(0.82,0.84,0.88);

    vec3 blue = vec3(0.02,0.12,0.95);

    vec3 color = top;

    color = mix(color, sky,
        smoothstep(0.10,0.40,vUv.y));

    color = mix(color, pearl,
        smoothstep(0.42,0.55,vUv.y));

    color = mix(pearl, blue,
        1.0-smoothstep(0.15,1.0,vUv.y));

    // tanak svijetli horizont
    float horizon =
        exp(-pow((vUv.y-0.48)*70.0,2.0));

    color += vec3(1.0,1.0,1.0) * horizon * 0.38;

    gl_FragColor = vec4(color,1.0);
}
  `

  
);

extend({ BackGround1 });

export { BackGround1 };