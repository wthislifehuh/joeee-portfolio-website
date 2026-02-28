/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import {
    BallCollider,
    CuboidCollider,
    Physics,
    RigidBody,
    useRopeJoint,
    useSphericalJoint,
    RigidBodyProps
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

// replace with your own imports, see the usage snippet for details
// Assets placed in /public
const cardGLB = '/card.glb';
const lanyard = '/lanyard.png';

import './Lanyard.css';

extend({ MeshLineGeometry, MeshLineMaterial });

interface LanyardProps {
    position?: [number, number, number];
    gravity?: [number, number, number];
    fov?: number;
    transparent?: boolean;
}

export default function Lanyard({
    position = [0, 0, 30],
    gravity = [0, -40, 0], //dEBUG ONLY -40
    fov = 20,
    transparent = true
}: LanyardProps) {
    const [isMobile, setIsMobile] = useState<boolean>(() => typeof window !== 'undefined' && window.innerWidth < 768);

    useEffect(() => {
        const handleResize = (): void => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="lanyard-wrapper">
            <Canvas
                camera={{ position, fov }}
                dpr={[1, isMobile ? 1.5 : 2]}
                gl={{ alpha: transparent }}
                onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
            >
                <ambientLight intensity={Math.PI} />
                <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
                    <Band isMobile={isMobile} />
                </Physics>
                <Environment blur={0.75}>
                    <Lightformer
                        intensity={2}
                        color="white"
                        position={[0, -1, 5]}
                        rotation={[0, 0, Math.PI / 3]}
                        scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                        intensity={3}
                        color="white"
                        position={[-1, -1, 1]}
                        rotation={[0, 0, Math.PI / 3]}
                        scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                        intensity={3}
                        color="white"
                        position={[1, 1, 1]}
                        rotation={[0, 0, Math.PI / 3]}
                        scale={[100, 0.1, 1]}
                    />
                    <Lightformer
                        intensity={10}
                        color="white"
                        position={[-10, 0, 14]}
                        rotation={[0, Math.PI / 2, Math.PI / 3]}
                        scale={[100, 10, 1]}
                    />
                </Environment>
            </Canvas>
        </div>
    );
}

interface BandProps {
    maxSpeed?: number;
    minSpeed?: number;
    isMobile?: boolean;
}

function topYAtZ(camera: THREE.PerspectiveCamera, z = 0) {
    // distance from camera to the plane z
    const dist = camera.position.z - z
    const vFov = THREE.MathUtils.degToRad(camera.fov)
    const visibleHeight = 2 * Math.tan(vFov / 2) * dist
    return visibleHeight / 2
}

function Band({ maxSpeed = 20, minSpeed = 2, isMobile = false }: BandProps) { // DEBUG ONLY MAX 50, MINSPEED 2
    const { width, height } = useThree((state) => state.size);
    // Using "any" for refs since the exact types depend on Rapier's internals
    const band = useRef<any>(null);
    const fixed = useRef<any>(null);
    const j1 = useRef<any>(null);
    const j2 = useRef<any>(null);
    const j3 = useRef<any>(null);
    const card = useRef<any>(null);

    const vec = new THREE.Vector3();
    const ang = new THREE.Vector3();
    const rot = new THREE.Vector3();
    const dir = new THREE.Vector3();

    // Higher damping = motion dies faster (less distracting).
    const segmentProps: any = {
        type: 'dynamic' as RigidBodyProps['type'],
        canSleep: true,  // during debugging; re-enable later
        colliders: false,
        angularDamping: 8,
        linearDamping: 8
    };

    const { nodes, materials } = useGLTF(cardGLB) as any;
    const texture = useTexture(lanyard);
    const [curve] = useState(
        () =>
            new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
    );
    const [dragged, drag] = useState<false | THREE.Vector3>(false);
    const [hovered, hover] = useState(false);
    // 
    //     const [hasDragged, setHasDragged] = useState(false);
    // const [showBadge, setShowBadge] = useState(false);

    const baseAnchor = useRef(new THREE.Vector3(0, 8, 0));
    const { size, gl } = useThree();
    const dpr = gl.getPixelRatio();

    const { camera } = useThree()
    const topY = topYAtZ(camera as THREE.PerspectiveCamera, 0) + 0.2
    const anchorY = 8; // spawn baseline
    const cardLocalAttach = useMemo(() => new THREE.Vector3(0, 1.5, 0), []);
    const cardAttachWorld = useMemo(() => new THREE.Vector3(), []);
    const endPoint = useRef(new THREE.Vector3());
    const tmpQuat = useMemo(() => new THREE.Quaternion(), []);
    const tmpVec = useMemo(() => new THREE.Vector3(), []);

    //     useEffect(() => {
    //     if (dragged && !hasDragged) setHasDragged(true);
    // }, [dragged, hasDragged]);


    const segmentLength = isMobile ? 1.12 : 0.4;
    // The length of the rope segment - These joints create the rope chain
    useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], segmentLength]);
    useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], segmentLength]);
    useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], segmentLength]);
    // This joint connects the last segment to the card
    useSphericalJoint(j3, card, [
        [0, 0, 0],
        [0, 1.5, 0]
    ]);

    useEffect(() => {
        if (hovered) {
            document.body.style.cursor = dragged ? 'grabbing' : 'grab';
            return () => {
                document.body.style.cursor = 'auto';
            };
        }
    }, [hovered, dragged]);

    useFrame((state, delta) => {
        if (dragged && typeof dragged !== 'boolean') {
            vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
            dir.copy(vec).sub(state.camera.position).normalize();
            vec.add(dir.multiplyScalar(state.camera.position.length()));
            [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
            card.current?.setNextKinematicTranslation({
                x: vec.x - dragged.x,
                y: vec.y - dragged.y,
                z: vec.z - dragged.z
            });
        }
        if (fixed.current) {
            if (!dragged) {
                // Subtle idle swing

                fixed.current.setNextKinematicTranslation({
                    x: baseAnchor.current.x + Math.sin(state.clock.elapsedTime * 0.5) * 0.3,
                    y: topY,
                    z: baseAnchor.current.z,
                });
                // fixed.current.setNextKinematicTranslation({
                //     x: Math.sin(state.clock.elapsedTime * 0.5) * 0.3,
                //     y: 8, // raised anchor higher
                //     z: 0
                // });
            }

            // [j1, j2].forEach((ref) => {
            //     if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
            //     // The “lerp smoothing” that affects wobble - Reduce maxSpeed (e.g. 15–25) to calm it.
            //     const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
            //     ref.current.lerped.lerp(
            //         ref.current.translation(),
            //         delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
            //     );
            // });
            // curve.points[0].copy(j3.current.translation());
            // curve.points[1].copy(j2.current.lerped);
            // curve.points[2].copy(j1.current.lerped);
            // curve.points[3].copy(fixed.current.translation());
            [j1, j2, j3].forEach((ref) => {
                if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
                const d = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
                ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + d * (maxSpeed - minSpeed)));
            });

            // 1) compute cardAttachWorld FIRST
            const r = card.current.rotation();
            tmpQuat.set(r.x, r.y, r.z, r.w).normalize();
            const p = card.current.translation();
            tmpVec.set(p.x, p.y, p.z);
            cardAttachWorld.copy(cardLocalAttach).applyQuaternion(tmpQuat).add(tmpVec);

            // 2) get j3 point
            const j3p = j3.current.lerped;

            // 3) Blend endpoint
            const blended = endPoint.current.copy(j3p).lerp(cardAttachWorld, 0.75);
            endPoint.current.lerp(blended, 0.35);

            curve.points[0].copy(endPoint.current);
            curve.points[1].copy(j2.current.lerped);
            curve.points[2].copy(j1.current.lerped);
            curve.points[3].copy(fixed.current.translation());
            // per-frame strap animation - More points (32) makes it smoother. Fewer points makes it more rigid/less “alive”.
            band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
            ang.copy(card.current.angvel());
            rot.copy(card.current.rotation());
            card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
        }
    });

    curve.curveType = 'chordal';
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

    return (
        <>
            {/* <group position={[0, 8, 0]}> */}
            <RigidBody ref={fixed} position={[0, anchorY, 0]} type={'kinematicPosition' as RigidBodyProps['type']} />
            {/* <RigidBody ref={fixed} {...segmentProps} type={'kinematicPosition' as RigidBodyProps['type']} /> */}
            <RigidBody position={[0, anchorY - segmentLength, 0]} ref={j1} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
                <BallCollider args={[0.1]} />
            </RigidBody>
            <RigidBody position={[0, anchorY - segmentLength * 2, 0]} ref={j2} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
                <BallCollider args={[0.1]} />
            </RigidBody>
            <RigidBody position={[0, anchorY - segmentLength * 3, 0]} ref={j3} {...segmentProps} type={'dynamic' as RigidBodyProps['type']}>
                <BallCollider args={[0.1]} />
            </RigidBody>
            <RigidBody
                position={[0, anchorY - segmentLength * 3 - 1.45, 0]}
                ref={card}
                {...segmentProps}
                type={dragged ? ('kinematicPosition' as RigidBodyProps['type']) : ('dynamic' as RigidBodyProps['type'])}
            >
                <CuboidCollider args={[0.8, 1.125, 0.01]} />
                <group
                    scale={2.25}
                    position={[0, -1.2, -0.05]}
                    onPointerOver={() => hover(true)}
                    onPointerOut={() => hover(false)}
                    onPointerUp={(e: any) => {
                        e.target.releasePointerCapture(e.pointerId);
                        drag(false);
                    }}
                    onPointerDown={(e: any) => {
                        e.target.setPointerCapture(e.pointerId);
                        drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
                    }}
                >
                    {/*                     {showBadge && !hasDragged && (
                        <Html position={[0, -0.55, 0.2]} center transform={false}>
                            <div className="animate-bounce flex flex-col items-center pointer-events-none transition-opacity duration-1000 opacity-100">
                                <div className="bg-white/10 backdrop-blur-md text-white text-xs tracking-wide rounded-full px-3 py-1 border border-purple-400/40 shadow-[0_0_15px_rgba(168,85,247,0.3)] flex items-center justify-center gap-1.5 whitespace-nowrap">
                                    Drag Me <span className="text-purple-300">✦</span>
                                </div>
                                <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-purple-400/60 mt-0.5" />
                            </div>
                        </Html>
                    )} */}
                    <mesh geometry={nodes.card.geometry}>
                        <meshPhysicalMaterial
                            map={materials.base.map}
                            map-anisotropy={16}
                            clearcoat={isMobile ? 0 : 1}
                            clearcoatRoughness={0.15}
                            roughness={0.9}
                            metalness={0.8}
                        />
                    </mesh>
                    <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
                    <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
                </group>
            </RigidBody>
            {/* </group> */}
            <mesh ref={band} frustumCulled={false} renderOrder={10}>
                <meshLineGeometry />
                {/* The strap material (MAIN LOOK CONTROL) */}

                <meshLineMaterial
                    color="white"
                    // depthTest={false}
                    depthTest={false}
                    // depthWrite={false}   // prevents z-buffer artifacts if supported
                    resolution={isMobile ? [1000, 2000] : [1000, 1000]}
                    // resolution={[width * dpr, height * dpr]}
                    useMap
                    map={texture}
                    // how many times the texture repeats along the strap
                    repeat={isMobile ? [4, 1] : [2, 1]}
                    lineWidth={0.7}
                    transparent
                    opacity={isMobile ? 0.5 : 1}
                />
            </mesh>
        </>
    );
}