import * as THREE from 'three';

mat = new THREE.LineBasicMaterial({color: 0x0000ff});
mesh = new THREE.LineSegments(geo, mat);

const cube = new THREE.BufferGeometry(1,1,1);
const geo = new THREE.EdgesGeometry(cube);

function setupScene() {
    const geo = new THREE.SphereGeometry(2);
    const mat = new THREE.MeshLambertMaterial({color: 0xff0000});
    mesh = new THREE.Mesh(geo, mat);
    mesh.position.z = -4;
    setupScene.add(mesh);
    const edges = new THREE.EdgesGeometry(geo);
    mesh2 = new THREE.LineSegments(edges,
        new THREE.LineBasicMaterial({color:0x00ff00});
    mesh2.position.z = -4;
    setupScene.add(mesh2);
    )
}

