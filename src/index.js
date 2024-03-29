import * as THREE from 'three';
import WEBGL from './webglChecker';

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var INTERSECTED;
var renderer = new THREE.WebGLRenderer();
var width = window.innerWidth;
var height = window.innerHeight;
var camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 0.1, 3000 );
var scene = new THREE.Scene();
var material = new THREE.MeshLambertMaterial({color: 0x1B1B60});
var material2 = new THREE.MeshLambertMaterial({color: 0x2E90D8});
var material6 = new THREE.MeshLambertMaterial({
    color: 0x2ffffff,
        opacity: 0.8,
    transparent: true});
var material4 = new THREE.MeshLambertMaterial({
    color: 0x2E90D8,
    opacity: 0.8,
    transparent: true
});
var geometry = new THREE.CubeGeometry(100, 100, 100);
var geometry2 = new THREE.CubeGeometry(400, 10, 800);
var geometry3 = new THREE.CubeGeometry(430, 10, 830);
var geometry5 = new THREE.CubeGeometry(130, 10, 130);
var mesh = new THREE.Mesh(geometry, material);
var mesh2 = new THREE.Mesh(geometry2, material2);
var mesh3 = new THREE.Mesh(geometry3, material);
var mesh4 = new THREE.Mesh(geometry5, material4);
var geometry4 = new THREE.CylinderGeometry(5, 5, 3, 100);
var geometry6 = new THREE.CylinderGeometry(40, 40, 3, 100);
var cylinder = new THREE.Mesh(geometry4, material);
var cylinder2 = new THREE.Mesh(geometry6, material6);


init();
animate();

function init () {
    // Renderer
    renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.setClearColor(0xffffff, 1)
    renderer.setClearColor(0x0E0E32, 1)
    renderer.setSize( width, height );

    // Camera    
    // var camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 3000 );
    camera.position.set(0, 2, 0);
    
    // Scene
    document.body.appendChild( renderer.domElement );
    
    // let helper = new THREE.CameraHelper(camera);
    // scene.add(helper)
    
    // Lights
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    var pointLight = new THREE.PointLight(0xffffff, 0.8);
    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
    scene.add( directionalLight );
    ambientLight.castShadow = true;
    pointLight.castShadow = true;
    
    
    scene.add(ambientLight);
    scene.add(pointLight);
    
    mesh.position.set(250, 50, -1000);
    mesh.rotation.x = 0.7;
    mesh.rotation.y = 0.85;
    
    mesh.castShadow = true;
    mesh.receiveShadow = false;
    
    mesh2.position.set(-250, 0, -1020);
    mesh2.rotation.x = 0.7;
    mesh2.rotation.y = 0.85;
    
    mesh3.position.set(-250, -5, -1020);
    mesh3.rotation.x = 0.7;
    mesh3.rotation.y = 0.85;

    mesh4.position.set(-350, 220, -1000);
    mesh4.rotation.x = 0.7;
    mesh4.rotation.y = 0.85;

    cylinder.position.set(-570, 150, -750)
    cylinder.rotation.x = 0.7;
    cylinder.rotation.y = 0.85;

    cylinder2.position.set(-360, 230, -750)
    cylinder2.rotation.x = 0.7;
    cylinder2.rotation.y = 0.85;
    
    scene.add(mesh);
    scene.add(mesh2);
    scene.add(mesh3);
    scene.add(mesh4);
    scene.add(cylinder);
    scene.add(cylinder2);
    window.addEventListener( 'resize', onWindowResize, false );
    document.addEventListener('mousemove', onDocumentMouseMove, false);
}

function onWindowResize(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    camera.left = width / - 2;
    camera.right = width / 2;
    camera.top = height / 2;
    camera.bottom = height / - 2;
    camera.updateProjectionMatrix();
    renderer.setSize( width, height );
    renderer.render(scene, camera);
}

function onDocumentMouseMove(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function animate() {
    // requestAnimationFrame(animate);
    render();
}

function render () {
    renderer.render(scene, camera);
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;
    // mesh2.rotation.x -= 0.01;
    // mesh2.rotation.y -= 0.01;
    requestAnimationFrame(render);
}

// function render() {

//     // find intersections
//     var vector = new THREE.Vector3(mouse.x, mouse.y, 1).unproject(camera);
//     raycaster.set(camera.position, vector.sub(camera.position).normalize());
//     var intersects = raycaster.intersectObjects(scene.children);
//     if (intersects.length > 0) {
//         if (INTERSECTED != intersects[0].object) {
//             if (INTERSECTED) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
//              /*******************************************************************/   
//             /// You can change the Z position like the way done below
//             intersects[0].object.position.z += 10;
//             /********************************************************************/
//             INTERSECTED = intersects[0].object;
//             INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
//             INTERSECTED.material.emissive.setHex(0xff0000);
//             INTERSECTED.position.x += 10;
//         }
//     } else {
//         if (INTERSECTED) { 
//             INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
//             INTERSECTED.position.x -= 10;
//         }
//         INTERSECTED = null;
//     }
//     renderer.render(scene, camera);
// }

// requestAnimationFrame(render);
