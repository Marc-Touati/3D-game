import * as THREE from 'three'
print("hello");
// Initialisation de la scène
var scene = new THREE.Scene();

// Initialisation de la caméra
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Initialisation du rendu
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Ajout d'un cube à la scène
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );

scene.add( cube );

// Ajout d'un sol à la scène
var groundGeometry = new THREE.PlaneGeometry( 20, 20 );
var groundMaterial = new THREE.MeshBasicMaterial( { color: 0xcccccc } );
var ground = new THREE.Mesh( groundGeometry, groundMaterial );
ground.rotation.x = - Math.PI / 2;
ground.position.y = -1;
scene.add( ground );

// Positionnement de la caméra
camera.position.z = 15;
camera.position.y = 5;
camera.position.x = 3;

// Gestion des touches du clavier
var speed = 0.1;
var left = false;
var right = false;
var forward = false;
var backward = false;

function onKeyDown( event ) {
    switch ( event.keyCode ) {
        case 37: // Flèche gauche
            left = true;
            break;
        case 38: // Flèche haut
            forward = true;
            break;
        case 39: // Flèche droite
            right = true;
            break;
        case 40: // Flèche bas
            backward = true;
            break;
    }
}

function onKeyUp( event ) {
    switch ( event.keyCode ) {
        case 37: // Flèche gauche
            left = false;
            break;
        case 38: // Flèche haut
            forward = false;
            break;
        case 39: // Flèche droite
            right = false;
            break;
        case 40: // Flèche bas
            backward = false;
            break;
    }
}

document.addEventListener( 'keydown', onKeyDown, false );
document.addEventListener( 'keyup', onKeyUp, false );

// Boucle de rendu
function animate() {
    requestAnimationFrame( animate );
    if ( left ) {
        cube.position.x -= speed;
    }
    if ( right ) {
        cube.position.x += speed;
    }
    if ( forward ) {
        cube.position.z -= speed;
    }
    if ( backward ) {
        cube.position.z += speed;
    }

    renderer.render( scene, camera );
}

animate();
