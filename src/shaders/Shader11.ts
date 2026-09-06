import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";


// =========================================================
// HIPI MATERIAL
// =========================================================

const HipiMaterial1 = shaderMaterial(

  // =======================================================
  // UNIFORMS
  // =======================================================

  {
    uTime: 0,

    // 0 -> 1
    uWaveTrigger: 0,

    // Širina glavnog glowa
    uWaveWidth: 0.06,

    // Jačina glowa
    uWaveStrength: 1.0,

    // Oblik glowa
    uWaveShape: 1.0,

    // Pravac talasa
    //
    // 0 = TOP -> BOTTOM
    // 1 = BOTTOM -> TOP
    // 2 = CENTER -> TOP
    // 3 = CENTER -> BOTTOM
    // 4 = OSCILLATION
    //
    uWaveType: 4,
    uWaveColor: [0.15, 0.85, 1.0],
  },


  // =========================================================
  // VERTEX SHADER
  // =========================================================

  `
uniform float uWaveType;
uniform float uWaveTrigger;

varying vec2 vUv;
varying vec3 vWorldPosition;

void main() {

    vUv = uv;

    vec3 newPosition = position;

    float progress =
        clamp(
            uWaveTrigger,
            0.0,
            1.0
        );
if (uWaveType < 0.5) {

    float scale =
        1.0 +
        sin(progress * 4.0) * 2.15;

    newPosition *= scale;
}

    // OVDE mora newPosition
    vec4 worldPosition =
        modelMatrix *
        vec4(newPosition, 1.0);

    vWorldPosition =
        worldPosition.xyz;

    gl_Position =
        projectionMatrix *
        viewMatrix *
        worldPosition;
}

  `,


  // =========================================================
  // FRAGMENT SHADER
  // =========================================================

  `

  varying vec2 vUv;
  varying vec3 vWorldPosition;
  uniform vec3 uWaveColor;


  // =======================================================
  // UNIFORMS
  // =======================================================

  uniform float uTime;

  uniform float uWaveTrigger;

  uniform float uWaveWidth;

  uniform float uWaveStrength;

  uniform float uWaveShape;

  uniform float uWaveType;


  void main() {


      // ===================================================
      // 1. PROGRESS
      // ===================================================

      float progress =
          clamp(
              uWaveTrigger,
              0.0,
              1.0
          );


      // ===================================================
      // 2. WAVE TRAVEL
      // ===================================================

      float travel =
          1.5;


      float waveProgress =
          progress *
          travel;

// ===================================================
// 3. WAVE AXIS + POSITION
// ===================================================

float wavePosition;

float waveAxis;


// ===================================================
// TYPE 0
// TOP -> BOTTOM
// ===================================================

if (uWaveType < 0.5) {

   waveAxis =
    vUv.y;

float wave =
    tan(
        vUv.x * 2.0 +
        progress * 4.0
    );

wave =
    clamp(
        wave,
        -2.0,
        2.0
    );

wavePosition =
    1.25 -
    waveProgress +
    wave * 0.08;
}


// ===================================================
// TYPE 1
// BOTTOM -> TOP
// ===================================================

else if (uWaveType < 1.5) {

   float spread =
    waveProgress * 0.75;

float topWave =
    0.5 + spread;

float bottomWave =
    0.5 - spread;

float topDistance =
    abs(vUv.y - topWave);

float bottomDistance =
    abs(vUv.y - bottomWave);

float distanceToWave =
    min(
        topDistance,
        bottomDistance
    );
}


// ===================================================
// TYPE 2
// LEFT -> RIGHT
// ===================================================

else if (uWaveType < 2.5) {

    // horizontalno + malo vertikalnog pomjeranja
    float x = vUv.x;
    float y = vUv.y;

    waveAxis =
        x +
        y * 2.35;

    wavePosition =
        -0.25 +
        waveProgress * 1.5;
}

// ===================================================
// TYPE 3
// RIGHT -> LEFT
// ===================================================

else if (uWaveType < 3.5) {
        float x = vUv.x;
        float y = vUv.y;

        waveAxis =
            x +
            y * 2.35;

        wavePosition =
            1.25 -
            waveProgress * 1.5
            +
            sin(
                x * 1.0 +
                progress * 6.28318
            ) * 2.12
            +
            sin(
                x * 8.0 -
                progress * 4.0
            ) * 0.08;
}


// ===================================================
// TYPE 4
// CENTER -> OUTSIDE
// ===================================================

else if (uWaveType < 4.5) {

 waveAxis =
    vUv.y;

wavePosition =
    0.1 +
    waveProgress * 0.75 +
    sin(
        vUv.x * 1.0 +
        progress * 6.28318
    ) * 0.020;
}


// ===================================================
// TYPE 5
// OUTSIDE -> CENTER
// ===================================================

else if (uWaveType < 5.5) {

 float angle =
    atan(
        vWorldPosition.z,
        vWorldPosition.x
    );

waveAxis =
    vWorldPosition.y;

float spiral =
    sin(
        angle * 2.0 +
        progress * 9.14159 * 2.0
    );

wavePosition =
    -2.5 +
    progress * 4.0 +
    spiral *
    (0.15 + progress * 0.45);
}


// ===================================================
// TYPE 6
// VERTICAL OSCILLATION
// ===================================================

else if (uWaveType < 6.5) {
float x = vUv.x;
        float y = vUv.y;

        waveAxis =
            x +
            y * 2.35;

        wavePosition =
            1.25 -
            waveProgress * 1.5
            +
            cos(
                x * 11.0 +
                progress * 6.28318
            ) * 2.12
            +
            cos(
                x * 11.0 -
                progress * 4.0
            ) * 0.8
            +
            sin(
                x * 11.0 -
                progress * 4.0
            ) * 0.8    ;

}


// ===================================================
// TYPE 7
// HORIZONTAL OSCILLATION
// ===================================================

else {

    waveAxis =
        vUv.x;

    wavePosition =
        0.5 +
        sin(
            progress *
            6.28318 *
            2.0
        ) *
        0.45;
}


     

      // ===================================================
      // 4. Y POSITION
      // ===================================================

      float y =
          vUv.y;


      // ===================================================
      // 5. DISTANCE
      // ===================================================

      float distanceToWave =
          abs(
              y -
              wavePosition
          );


      // ===================================================
      // 6. MAIN GLOW
      // ===================================================

      float glow =
          1.0 -
          smoothstep(
              0.0,
              uWaveWidth,
              distanceToWave
          );


      // ===================================================
      // 7. WAVE SHAPE
      // ===================================================

      glow =
          pow(
              max(
                  glow,
                  0.0
              ),
              max(
                  uWaveShape,
                  0.01
              )
          );


      // ===================================================
      // 8. SOFT OUTER GLOW
      // ===================================================

      float softGlow =
          1.0 -
          smoothstep(
              0.0,
              0.20,
              distanceToWave
          );


      // ===================================================
      // 9. TRAIL
      // ===================================================

      float behind;


      // ===================================================
      // TOP -> BOTTOM
      // ===================================================

      if (
          uWaveType < 0.5
      ) {

          behind =
              wavePosition -
              y;

      }


      // ===================================================
      // BOTTOM -> TOP
      // ===================================================

      else if (
          uWaveType < 1.5
      ) {

          behind =
              y -
              wavePosition;

      }


      // ===================================================
      // CENTER -> TOP
      // ===================================================

      else if (
          uWaveType < 2.5
      ) {

          behind =
              y -
              wavePosition;

      }


      // ===================================================
      // CENTER -> BOTTOM
      // ===================================================

      else if (
          uWaveType < 3.5
      ) {

          behind =
              wavePosition -
              y;

      }


      // ===================================================
      // OSCILLATION
      // ===================================================

      else {

          behind =
              abs(
                  y -
                  wavePosition
              );

      }


      // ===================================================
      // 10. TRAIL SHAPE
      // ===================================================

      float trail =
          smoothstep(
              0.0,
              0.40,
              behind
          );


      trail *=
          1.0 -
          smoothstep(
              0.0,
              0.35,
              behind
          );


      // ===================================================
      // 11. COLORS
      // ===================================================

      vec3 baseColor =
          vec3(
              0.008,
              0.025,
              0.05
          );


      vec3 blue =
          vec3(
              0.03,
              0.18,
              0.40
          );


      vec3 cyan =
          uWaveColor;


      vec3 white =
          vec3(
              1.0
          );


      // ===================================================
      // 12. BASE
      // ===================================================

      vec3 color =
          baseColor;


      // ===================================================
      // 13. SOFT GLOW
      // ===================================================

      color +=
          blue *
          softGlow *
          1.5;


      // ===================================================
      // 14. MAIN GLOW
      // ===================================================

      color +=
          cyan *
          glow *
          4.0 *
          uWaveStrength;


      // ===================================================
      // 15. TRAIL
      // ===================================================

      color +=
          cyan *
          trail *
          1.0 *
          uWaveStrength;


      // ===================================================
      // 16. WHITE CENTER
      // ===================================================

      color +=
          white *
          glow *
          2.0 *
          uWaveStrength;


      // ===================================================
      // 17. FINAL BRIGHTNESS
      // ===================================================

      if (uWaveType < 0.5) {
    // TYPE 0 — CRVENA / VATRA
   color *= vec3(4.5, 4.8, 5.0);
}

else if (uWaveType < 1.5) {
    // TYPE 1 — PLAVA / ICE
    color *= vec3(0.5, 2.5, 5.0);
}

else if (uWaveType < 2.5) {
    // TYPE 2 — LJUBIČASTA / ENERGY
    color *= vec3(3.5, 0.5, 5.0);
}

else if (uWaveType < 3.5) {
    // TYPE 3 — ZELENA / TOXIC
    color *= vec3(0.4, 5.0, 1.0);
}

else if (uWaveType < 4.5) {
    // TYPE 4 — ZLATNA / FIRE
    color *= vec3(5.0, 3.0, 0.3);
}

else if (uWaveType < 5.5) {
    // TYPE 5 — CYAN / SPIRAL
    color *= vec3(0.2, 4.0, 5.0);
}

else if (uWaveType < 6.5) {
    // TYPE 6 — MAGENTA / CHAOS
    color *= vec3(5.0, 0.3, 3.5);
}

else if (uWaveType > 6.5) {
    // TYPE 6 — MAGENTA / CHAOS
    color *= vec3(0.7, 0.03, 0.02);
}


      // ===================================================
      // 18. ALPHA
      // ===================================================

      float alpha =
          2.95;


      // ===================================================
      // 19. OUTPUT
      // ===================================================

      gl_FragColor =
          vec4(
              color,
              alpha
          );

  }

  `
);


// =========================================================
// EXTEND
// =========================================================

extend({
  HipiMaterial1,
});


// =========================================================
// EXPORT
// =========================================================

export {
  HipiMaterial1,
};