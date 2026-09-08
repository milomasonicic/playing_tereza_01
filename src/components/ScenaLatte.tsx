import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { BackGround1 } from "../shaders/pozadija";

import LatteField from "./LatteField";

export default function LatteFieldScena()
{

return(
    <>
    
        <LatteField></LatteField>
    </>
)



}