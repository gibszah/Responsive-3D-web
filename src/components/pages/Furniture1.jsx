/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 furniture1.glb --transform
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
	const { nodes, materials } = useGLTF("/furniture1-transformed.glb");
	return (
		<group
			{...props}
			dispose={null}
		>
			<mesh
				geometry={nodes.HUG_ARMCHAIRHUG_Armchair_602_014.geometry}
				material={materials.Base}
				position={[0, 40.99, 0]}
				scale={43.31}
			/>
		</group>
	);
}

useGLTF.preload("/furniture1-transformed.glb");
