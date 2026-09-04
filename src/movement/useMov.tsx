import { useFrame } from "@react-three/fiber";
import { RefObject, useRef } from "react";
import { Group, Mesh } from "three";

export function useM(
  mesh: RefObject<Mesh | null>,
  movingUp: RefObject<boolean>,
  rigRef: RefObject<Group | null>,
  rigRef1: RefObject<Group | null>,
  movingRig: RefObject<boolean>,
  kick: RefObject<boolean>,
  tox: RefObject<boolean>,
  leftKey1: RefObject<boolean>,
  
  // NOVO
  rotating: RefObject<boolean>,
  rightKey1: RefObject<boolean>,
  wildSpin: RefObject<boolean>,
) {

  // =====================================================
  // KICK PHYSICS
  // =====================================================

  // Trenutna vertikalna brzina

  const velocityY = useRef(0);

  // Gravitacija

  const gravity = -3.5;

  const leftSpeed = 4;
  const wildTime = 4;


  useFrame(({ clock }, delta) => {

    if (!rigRef.current) return;


    // =====================================================
    // NORMAL ROTATION
    // =====================================================

    if (movingRig.current) {

      rigRef.current.rotation.y +=
        delta * 3;

    }


    // =====================================================
    // EXTRA ROTATION / PREVRTANJE
    // =====================================================

    if (rotating.current) {

      // rotiranje oko Y

      rigRef.current.rotation.y +=
        delta * 1.63;

      // prevrtanje naprijed / nazad

      rigRef.current.rotation.x +=
        delta * 1.5;

      // prevrtanje lijevo / desno

      rigRef.current.rotation.z +=
        delta * .1;

    }


    // =====================================================
    // KICK
    // =====================================================

    if (kick.current) {

      // Jak početni skok

      velocityY.current = 2.8;

      // Jedan kick = jedan skok

      kick.current = false;

    }


    // =====================================================
    // GRAVITY
    // =====================================================

    velocityY.current +=
      gravity * delta;


    // =====================================================
    // APPLY MOVEMENT
    // =====================================================

    rigRef.current.position.y +=
      velocityY.current * delta;


    // =====================================================
    // GROUND
    // =====================================================

    if (rigRef.current.position.y < -1.5) {

      rigRef.current.position.y = -1.5;

      velocityY.current = 0;


      ///

         // =====================================================
    // MOVEMENT LEFT
    // =
    // ====================================================

  
    if (leftKey1.current) {

      rigRef.current.position.x -=
        leftSpeed * delta;

      rigRef.current.rotation.x -=
        leftSpeed * delta;  

      
      rigRef.current.rotation.z -=
        1.5 * delta;    

    }

    //desno 

       if (rightKey1.current) {

      rigRef.current.position.x +=
        leftSpeed * delta;
      
      rigRef.current.rotation.z -=
        1.5 * delta;    

    }



      // =====================================================
      // TOX
      // =====================================================

      // tvoja postojeća TOX logika


  if (wildSpin.current) {
  const speed =
    10 + Math.sin(clock.elapsedTime * 2) * 2;

  rigRef.current.rotation.y += speed * delta;
}

    }

  });

}