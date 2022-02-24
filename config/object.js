// export function Ground(props) {
//   const {position, size, weight, mass, color} = props
//     // cannon body ----------
//     // const body = new CANNON.Body({
//     //   mass: 0 // mass == 0 makes the body static
//     // })
//     var body = new CANNON.Body({
//       // mass: mass, // kg
//       mass: 0, // kg
//       position: new CANNON.Vec3(position.x, position.y, position.z), // m
//     })
//     body.addShape(new CANNON.Plane())
//     // cannonではz軸を上向きの軸としてるので、床を設置するとxy面に床が生成される
//     // three.jsだとy軸を上向き軸としがちなので、変な感じにならないようにx軸に90度回転させてあげる。
//     body.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2)
//     // three mesh ----------
//     const geometry = new THREE.PlaneGeometry(size.s1, size.s2)
//     const material = new THREE.MeshBasicMaterial({
//       color: color,
//       side: THREE.DoubleSide
//     })
//     const mesh = new THREE.Mesh(geometry, material)
//     mesh.rotation.x = -Math.PI / 2
//     mesh.position.y = 0;
  
//     return { body, mesh }
// }

export function Cylinder(props) {
  const {position, size, weight, mass, color} = props
  let mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(size.s1, size.s2, size.s3, 50),
    new THREE.MeshPhongMaterial({ 
    color: color
  })); 
  // scene.add(Cylinder); 
  // let geometry = THREE.CylinderGeometry()
  mesh.position.set(position.x, position.y, position.z);
  return { body:null, mesh };
}


export function Box(props) {
    const {point, size, weight, mass,color, image} = props
    console.log(image);
    var body = new CANNON.Body({
      mass: 0, // kg
      position: new CANNON.Vec3(point.x, point.y, point.z), // m
      shape: new CANNON.Box(new CANNON.Vec3(size.x / 2, size.y / 2, size.z / 2))
    })
    // 回転追加してみる
    // body.angularVelocity.set(Math.random(), Math.random(), 0)
    var geometry = new THREE.BoxGeometry(size.x, size.y, size.z)
    var material = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.0
    })

    if(image != undefined) {
      const texture = THREE.ImageUtils.loadTexture(`images/${image}`) // 画像テクスチャ
      material = new THREE.MeshPhongMaterial({map: texture}) // 画像テクスチャのマテリアル
    } else {
      
    }

    var mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(point.x, point.y, point.z)
    return { body, mesh }
}
    
/**
 ボールを作る
*/
export function Sphere(props, textureImage) {
  
    const {weight,point} = props
    var body = new CANNON.Body({
      // mass: mass, // k 
      mass: 1, // kg
      position: new CANNON.Vec3(point.x, point.y, point.z), // m
      shape: new CANNON.Sphere((0.057))
    })
    console.log(body);
    console.log(props);

    const geometry = new THREE.SphereGeometry(0.057,32,16);
    // const material = new THREE.MeshBasicMaterial( { color: props.color } );
  
    // マテリアルにテクスチャーを設定
    const material = new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load(textureImage)
    });
  
    const mesh = new THREE.Mesh( geometry, material );
    return { body, mesh }
}