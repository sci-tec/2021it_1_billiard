import { POSITION, PROPS } from './config/config.js'
import { Ground, Box, Sphere, Cylinder } from './config/object.js'
let scene, world;
let camera, controls, renderer;
let objects;
let myball;
let lastTime

const fixedTimeStep = 1.0 / 60.0; // seconds
const maxSubSteps = 10;

window.onload = function() {
  init()
  render()
  animate(0)
}

function init() {

  objects = [];

  // 物理の世界
  world = new CANNON.World()
  world.gravity.set(0, -9.82, 0)

  // 見た目の世界
  scene = new THREE.Scene()

  // カメラ、ライト設置
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
  camera.position.set( POSITION.CAMERA.x, POSITION.CAMERA.y, POSITION.CAMERA.z)
  const ambient = new THREE.AmbientLight(0xffffff, 1.0)
  scene.add(ambient)
  const direction = new THREE.DirectionalLight(0xffffff, 1)
  scene.add(direction)

  // マウスでグリグリ
  controls = new THREE.OrbitControls(camera)
  controls.maxDistance = 5000.0

  // オブジェクト作成
  generate()

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  $("#btnFire").click((e)=>{
    myball.body.velocity.set(0,0,50)
  });
  $("#btnFireRandom").click((e)=>{
    myball.body.velocity.set(Math.random()*100-50,0,Math.random()*100-50);
  });

}

function generate() {
  objects.push(Ground(1000,1000,0, -200, 0, "blue",PROPS));
  objects.push(Ground(50, 110, 0, 0, 0, "red"))
  //壁
  for(let i=0; i<POSITION.boxes.length; i++) {
    let box = new Box({
      point: {x: POSITION.boxes[i].x, y: POSITION.boxes[i].y, z: POSITION.boxes[i].z},
      size: {x: POSITION.boxes[i].sx, y: POSITION.boxes[i].sy, z: POSITION.boxes[i].sz},
      weight: PROPS.initWeight,
      mass: PROPS.initMass
    })
    objects.push(box);
  }
  for(let i=0; i<POSITION.cylinders.length; i++) {
    let cylinder = new Cylinder({
    position: {x: POSITION.cylinders[i].x, y: POSITION.cylinders[i].y, z: POSITION.cylinders[i].z},
    size: {s1: POSITION.cylinders[i].s1, s2: POSITION.cylinders[i].s2, s3: POSITION.cylinders[i].s3},
    weight: PROPS.initWeight,
    mass: PROPS.initMass,
    color: POSITION.cylinders[i].col 
  })
  objects.push(cylinder);
  }

  // 玉
  for(let i = 0; i < POSITION.eightBall.length; i++) {
    let ball = new Sphere({
      // color: POSITION.eightBall[i].col,
      point: {x: POSITION.eightBall[i].x, y: POSITION.eightBall[i].y, z: POSITION.eightBall[i].z},
      size: {x: PROPS.r, y: PROPS.r, z: PROPS.r},
      weight: PROPS.initWeight,
      mass: PROPS.initMass,
      r: PROPS.r
    }, `images/${i+1}.png` )
    objects.push(ball);
  }

  // 自玉
  myball = new Sphere({
    color: POSITION.myball.col,
    point: {x: POSITION.myball.x, y: POSITION.myball.y, z: POSITION.myball.z},
    size: {x: PROPS.r, y: PROPS.r, z: PROPS.r},
    weight: PROPS.initWeight,
    mass: PROPS.initMass,
    r: PROPS.r
  }, `images/9.png` )
  objects.push(myball);


  // var mat3_ground = new CANNON.ContactMaterial(groundMaterial, mat3, { friction: 0.0, restitution: 0.9 });
  // world.addContactMaterial(mat3_ground);

  // 生成したオブジェクトを追加
  objects.map(d=>{
    scene.add(d.mesh)
    console.log(d)
    if(d.body != null) {
      world.addBody(d.body)
    }  
  })
}

function animate(time) {
  requestAnimationFrame(animate)
  if (lastTime !== undefined) {
    // var dt = (time - lastTime) / 1;
    var dt = (time - lastTime) / 100;
    world.step(fixedTimeStep, dt, maxSubSteps);
  }
  for(let i=0; i<objects.length; i++) {
    const { mesh, body } = objects[i];
    if(body != null) {
    mesh.position.copy(body.position)
    mesh.quaternion.copy(body.quaternion)
    }    
  }
  lastTime = time
  render()
}

function render() {
  renderer.render(scene, camera)
}