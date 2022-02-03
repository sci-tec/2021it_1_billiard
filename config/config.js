let BALL_R = 0.725;

function getDegree(degree) {
    return degree*(Math.PI/180);  
}

export const PROPS = {
    // initWeight: 50,
    // positionY : 500,
    color1: "#23372f",
    color2: "red",
    initWeight: 1,
    initMass: 1

}

let DISTANCE_BALLS = {

    x: Math.cos(getDegree(5.7))*BALL_R*2,
    y: Math.sin(getDegree(5.7))*BALL_R*2
}

export const POSITION = {
    CAMERA: {
        x: 1,
        y: 22, 
        z: 0
    },
    BALL_BASE: {
        x: 0,
        y: 0,
        z: 0
    },
    myball: {id: 0, x: DISTANCE_BALLS.x*0 , y: BALL_R + 20,z: DISTANCE_BALLS.y*0 -0.725},
    eightBall: [
        {id: 1, x: DISTANCE_BALLS.x*0   , y: BALL_R + 20,z: DISTANCE_BALLS.y*0+0.725},
        {id: 2, x: DISTANCE_BALLS.x*0.057 , y: BALL_R + 20, z: DISTANCE_BALLS.y*0.57+0.725},
        {id: 3, x: DISTANCE_BALLS.x*-0.057, y: BALL_R + 20,z: DISTANCE_BALLS.y*0.57 +0.725},
        {id: 4, x: DISTANCE_BALLS.x*0.114, y: BALL_R +20,z: DISTANCE_BALLS.y*1.14 +0.725},
        {id: 5, x: DISTANCE_BALLS.x*0, y: BALL_R + 20,z: DISTANCE_BALLS.y*1.14 +0.725},
        {id: 6, x: DISTANCE_BALLS.x*-0.114, y: BALL_R + 20,z: DISTANCE_BALLS.y*1.14 +0.725},
        {id: 7, x: DISTANCE_BALLS.x*0.171, y: BALL_R + 20,z: DISTANCE_BALLS.y*1.71 +0.725},
        {id: 8, x: DISTANCE_BALLS.x*0.057, y: BALL_R + 20,z: DISTANCE_BALLS.y*1.71 +0.725},
        {id: 9, x: DISTANCE_BALLS.x*-0.057, y: BALL_R + 20,z: DISTANCE_BALLS.y*1.71 +0.725},
        {id: 10, x: DISTANCE_BALLS.x*-0.171, y: BALL_R +20,z: DISTANCE_BALLS.y*1.71 +0.725},
        // 散らし目的のダミーボール２個
        // {id: 11, x: DISTANCE_BALLS.x*-2.5, y: BALL_R,z: DISTANCE_BALLS.y*3 },
        // {id: 12, x: DISTANCE_BALLS.x*0.3, y:BALL_R ,z: DISTANCE_BALLS.y*2 }
    ],
    boxes: [
        //縦2枚
        {x:0, y: 21.55, z:14.625, sx:16, sy: 3, sz:0.25},
        {x:0, y: 21.55, z:-14.625, sx:16, sy:3, sz:0.25},
        //横４枚
        {x:-23.75, y: 21.55, z:25.625, sx:2.5, sy:3, sz:48.75,},
        {x:-23.75, y: 21.55, z:-25.625, sx:2.5, sy:3, sz:48.75},
        {x:23.75, y: 21.55, z:25.625, sx:2.5, sy:3, sz:48.75},
        {x:23.75, y: 21.55, z:-25.625, sx:2.5, sy:3, sz:48.75},
        // 床
        {x: 0, y: 0, z: 0, sx: 1000, sy: 0.1,sz: 1000,col: "blue"},
    //     // billiardの底
        {x: 0, y: 20, z: 0, sx: 13.74, sy: 0.1, sz: 29, col: "red"},
    //     //右床
        {x: 0,y: 20, z:6.9325, sx: 16, sy: 0.1, sz: 12.725, col: "red"},
    // //     //左床    
        {x: 0, y: 20, z: -6.9325, sx: 16, sy: 0.1, sz: 12.725, col: "red"},
    //     // 真ん中の床
    //     {x : 0, y : 20, z: 10, sx: 40, sy: 0.1, sz: 5, col: "red"}
    ],
    cylinders: [
        {x: 12.5, y: 10, z: 38, s1: 5, s2:5, s3: 19.95, col: "green"},
        {x: -12.5, y: 10, z: -38, s1: 5, s2:5, s3: 19.95, col: "green"},
        {x: -12.5, y: 10, z: 38, s1: 5, s2:5, s3: 19.95, col: "green"},
        {x: 12.5, y: 10, z: -38, s1: 5, s2:5, s3: 19.95, col: "green"},
    ],
    // grounds: [
    //     //床
    //     
    //     {}
    // ]
     //床
  // objects.push(Ground(1000,1000,0, 0, 0, "blue",PROPS));
  // //billiardの底
  // // objects.push(Ground(50, 110, 0, 0, 0, "red"))
  // objects.push(Ground(40, 110, 0, 20, 0, "red"))
  // // 右床
  // objects.push(Ground(50, 48.75, 0, 20, 25.625,"red"))
  // // 左床
  // objects.push(Ground(50, 48.75, 0, 20, -25.625,"red"))
  // // 真ん中床
  // objects.push(Ground(40, 0, 0, 20, 0,"red"))
}