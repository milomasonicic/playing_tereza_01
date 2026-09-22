import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const TwistMaterial2 = shaderMaterial(
  {
    uColor1: [0.015, 0.035, 0.20],
    uColor2: [0.75, 0.06, 0.32],
     uTime: 0, 
     uActive: 0

  },


  `
  uniform float uTime;

  varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vWorldPosition;
uniform float uActive;

void main() {

    
    vec3 p = position;

    float originalX = p.x;
    float originalY = p.y;

  

    // =================================
    // VISEĆA TKANINA
    // =================================

    float hanging =
        pow(abs(originalX), 1.5);

    p.z -= hanging * 0.35;

        float folds =
        sin(originalX * 14.0)
        * 0.08;

    p.z += folds;


    float angle =
    originalY *
    5.0 *
    0.55;

    angle +=
        sin(originalY * 6.0 + uTime * 4.0)
        * 0.8
        * 0.55;
        

    float pulse =
    1.0 +
    0.12 *
    sin(uTime * 1.0) *
    0.55;

    p *= pulse;

    vWorldPosition = (modelMatrix * vec4(p,1.0)).xyz;
    vNormal = normalize(normalMatrix * normal);
    vPosition = p;

    gl_Position =
        projectionMatrix *
        modelViewMatrix *
        vec4(p,1.0);
}

`,

  `
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vWorldPosition;
uniform float uActive;
uniform vec3 uColor1;
uniform vec3 uColor2;

uniform float uTime;

void main() {

    // =========================================
    // PINK / BLUE MATERIAL
    // =========================================

    vec3 blue = uColor1;
vec3 pink = uColor2;

    // vrlo širok, spor gradient
    float g =
        sin(vPosition.y * 2.2 + uTime * 0.35)
        * 0.5 + 0.5;

    g = smoothstep(0.15, 0.85, g);

    vec3 color = mix(blue, pink, g);


    // =========================================
    // LAGANO DISANJE
    // =========================================

    float breathe =
        sin(uTime * 1.5) * 0.035;

    color *= 1.0 + breathe;


    // =========================================
    // FRESNEL
    // =========================================

    vec3 V =
        normalize(cameraPosition - vWorldPosition);

    vec3 N =
        normalize(vNormal);

    float fresnel =
        1.0 - max(dot(N, V), 0.0);

    fresnel = pow(fresnel, 3.0);


    // samo BLAGO plavo svjetlo na rubovima
    color +=
        vec3(0.02, 0.08, 0.35)
        * fresnel
        * 0.8;


    // =========================================
    // SUPTILNI GLOW
    // =========================================

    float glow =
        1.0 -
        length(vPosition * 0.04);

    glow =
        pow(
            clamp(glow, 0.0, 1.0),
            3.0
        );

    // glow prati osnovni pink/blue materijal
    vec3 glowColor =
        mix(
            vec3(0.03, 0.10, 0.35),
            vec3(0.8, 0.08, 0.30),
            g
        );

    color +=
        glowColor
        * glow
        * 0.35;


    // =========================================
    // HDR
    // =========================================

    float brightness =
    mix(5.15, 18.0, uActive);

color *= brightness * 2.32;

    gl_FragColor =
        vec4(color, uActive);
}
  `
);

extend({ TwistMaterial2 });

export { TwistMaterial2 };

/*

uniform float uWave;
uniform float 0.55;
varying vec3 vPosition;
varying vec3 vNormal;

void main() {


    vec3 p = position;

    vNormal = normalize(normalMatrix * normal);

    float r = length(p.xz);

 


    // TALAS DEFORMACIJE
    float wave =
        sin(r * 100.0 - p.y * 8.0);


    // =========================
    // MASKA PO VISINI
    // =========================
    // pretvara Y u 0-1 vrijednost
        float height = p.y / 0.9;

            float deformMask =
            smoothstep(0.2, 0.8, height);


        float deform =
            0.55 * deformMask;


    // =========================
    // INFLATE
    // =========================

    float inflate =
        1.0 + wave * 0.38 * deform;


    p *= inflate;


    // sitno pomjeranje
    p.x += wave * 0.05 * deform;


    // šaljemo promijenjenu poziciju
    vPosition = p;


    gl_Position =
        projectionMatrix *
        modelViewMatrix *
        vec4(p,1.0);

}*/