let BALL_R = 1;

function getDegree(degree) {
    return degree*(Math.PI/180);  
}

export const PROPS = {
    // initWeight: 50,
    initWeight: 1,
    initMass: 3,
    // positionY : 500,
    color1: "#23372f",
    color2: "red",
    r: BALL_R,
}

let DISTANCE_BALLS = {
    x: Math.cos(getDegree(60))*BALL_R*2,
    y: Math.sin(getDegree(60))*BALL_R*2
}

export const POSITION = {
    CAMERA: {
        x: 30,
        y: 50, 
        z: -50
    },
    BALL_BASE: {
        x: 0,
        y: 10,
        z: 0
    },
    myball: {id: 0, x: DISTANCE_BALLS.x*0 , y: BALL_R,z: DISTANCE_BALLS.y*-20 },
    eightBall: [
        {id: 1, x: DISTANCE_BALLS.x*0 , y: BALL_R,z: DISTANCE_BALLS.y*0 },
        {id: 2, x: DISTANCE_BALLS.x*1 , y: BALL_R, z: DISTANCE_BALLS.y*1 },
        {id: 3, x: DISTANCE_BALLS.x*-1, y: BALL_R,z: DISTANCE_BALLS.y*1 },
        {id: 4, x: DISTANCE_BALLS.x*2, y: BALL_R,z: DISTANCE_BALLS.y*2 },
        {id: 5, x: DISTANCE_BALLS.x*0, y: BALL_R,z: DISTANCE_BALLS.y*2 },
        {id: 6, x: DISTANCE_BALLS.x*-2, y: BALL_R,z: DISTANCE_BALLS.y*2 },
        {id: 7, x: DISTANCE_BALLS.x*3, y: BALL_R,z: DISTANCE_BALLS.y*3 },
        {id: 8, x: DISTANCE_BALLS.x*1, y: BALL_R,z: DISTANCE_BALLS.y*3 },
        {id: 9, x: DISTANCE_BALLS.x*-1, y: BALL_R,z: DISTANCE_BALLS.y*3 },
        {id: 10, x: DISTANCE_BALLS.x*-3, y: BALL_R,z: DISTANCE_BALLS.y*3 },
        // 散らし目的のダミーボール２個
        // {id: 11, x: DISTANCE_BALLS.x*-2.5, y: BALL_R,z: DISTANCE_BALLS.y*3 },
        // {id: 12, x: DISTANCE_BALLS.x*0.3, y:BALL_R ,z: DISTANCE_BALLS.y*2 }
    ],
    boxes: [
        //縦2枚
        {x:0, y: 1.5, z:53.75, sx:40, sy: 3, sz:2.5},
        {x:0, y: 1.5, z:-53.75, sx:40, sy:3, sz:2.5},
        //横４枚
        {x:-23.75, y: 1.5, z:25.625, sx:2.5, sy:3, sz:48.75},
        {x:-23.75, y: 1.5, z:-25.625, sx:2.5, sy:3, sz:48.75},
        {x:23.75, y: 1.5, z:25.625, sx:2.5, sy:3, sz:48.75},
        {x:23.75, y: 1.5, z:-25.625, sx:2.5, sy:3, sz:48.75},
    ],
    cylinders: [
        {x: 12.5, y: -100, z: 38, s1: 5, s2:5, s3: 199.9, col: "green"},
        {x: -12.5, y: -100, z: -38, s1: 5, s2:5, s3: 199.9, col: "green"},
        {x: -12.5, y: -100, z: 38, s1: 5, s2:5, s3: 199.9, col: "green"},
        {x: 12.5, y: -100, z: -38, s1: 5, s2:5, s3: 199.9, col: "green"},
    ]
}