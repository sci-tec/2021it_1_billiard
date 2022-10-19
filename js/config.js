let BALL_R = 0.115;

function getDegree(degree) {
    return degree*(Math.PI/180);  
}

export const PROPS = {
    // initWeight: 50,
    // positionY : 500,
    color1: "#23372f",
    // color2: "red",
    initWeight: 1,
    initMass: 1

}

let DISTANCE_BALLS = {

    x: Math.cos(getDegree(60))*BALL_R*2,
    y: Math.sin(getDegree(60))*BALL_R*2
}

export const POSITION = {
    CAMERA: {
        x: 0.1,
        y: 4, 
        z: 0
        // x: 1,
        // y: 21.5,
        // z: -1
    },
    BALL_BASE: {
        x: 0,
        y: 0,
        z: 0
    },
    // myball: {id: 0, x: DISTANCE_BALLS.x*0 , y: BALL_R + 0.5,z: DISTANCE_BALLS.y*0-0.725},
    // eightBall: [
    //     {id: 1, x: DISTANCE_BALLS.x*0, y: BALL_R + 0.5,z: DISTANCE_BALLS.y*0+0.725},
        
    //     {id: 2, x: DISTANCE_BALLS.x*0.5, y: BALL_R + 0.5, z: DISTANCE_BALLS.y*0.5+0.725},
    //     {id: 3, x: DISTANCE_BALLS.x*-0.5, y: BALL_R + 0.5,z: DISTANCE_BALLS.y*0.5+0.725},
        
    //     {id: 4, x: DISTANCE_BALLS.x*1, y: BALL_R +0.5,z: DISTANCE_BALLS.y*1+0.725},
    //     {id: 5, x: DISTANCE_BALLS.x*0, y: BALL_R + 0.5,z: DISTANCE_BALLS.y*1+0.725},
    //     {id: 6, x: DISTANCE_BALLS.x*-1, y: BALL_R + 0.5,z: DISTANCE_BALLS.y*1+0.725},
        
    //     {id: 7, x: DISTANCE_BALLS.x*1.5, y: BALL_R + 0.5,z: DISTANCE_BALLS.y*1.5+0.725},
    //     {id: 8, x: DISTANCE_BALLS.x*0.5, y: BALL_R + 0.5,z: DISTANCE_BALLS.y*1.5+0.725},
    //     {id: 9, x: DISTANCE_BALLS.x*-0.5, y: BALL_R + 0.5,z: DISTANCE_BALLS.y*1.5+0.725},
    //     {id: 10, x: DISTANCE_BALLS.x*-1.5, y: BALL_R +0.5,z: DISTANCE_BALLS.y*1.5+0.725},
    //     // 散らし目的のダミーボール２個
    // ],
	myball: {id: 0, x: DISTANCE_BALLS.x*0 , y: BALL_R + 0.5,z: DISTANCE_BALLS.y*0-0.725},
    eightBall: [
        {id: 1, x: DISTANCE_BALLS.x*0, y: BALL_R + 0.5,z: DISTANCE_BALLS.y*0+0.725},
        
        {id: 2, x: DISTANCE_BALLS.x*0.5, y: BALL_R + 0.5, z: DISTANCE_BALLS.y*0.5+0.725},
        {id: 3, x: DISTANCE_BALLS.x*-0.5, y: BALL_R + 0.5,z: DISTANCE_BALLS.y*0.5+0.725},
        
        {id: 4, x: DISTANCE_BALLS.x*1, y: BALL_R +0.5,z: DISTANCE_BALLS.y*1+0.725},
        {id: 5, x: DISTANCE_BALLS.x*0, y: BALL_R + 0.5,z: DISTANCE_BALLS.y*1+0.725},
        {id: 6, x: DISTANCE_BALLS.x*-1, y: BALL_R + 0.5,z: DISTANCE_BALLS.y*1+0.725},
        
        {id: 7, x: DISTANCE_BALLS.x*1.5, y: BALL_R + 0.5,z: DISTANCE_BALLS.y*1.5+0.725},
        {id: 8, x: DISTANCE_BALLS.x*0.5, y: BALL_R + 0.5,z: DISTANCE_BALLS.y*1.5+0.725},
        {id: 9, x: DISTANCE_BALLS.x*-0.5, y: BALL_R + 0.5,z: DISTANCE_BALLS.y*1.5+0.725},
        {id: 10, x: DISTANCE_BALLS.x*-1.5, y: BALL_R +0.5,z: DISTANCE_BALLS.y*1.5+0.725},
        // 散らし目的のダミーボール２個
    ],
    boxes: [
        //縦2枚
        // {x:0, y: 0.505, z:1.5, sx:1.6, sy: 0.1, sz:0.1, texture: ("../images/board.png")},
		{x:0, y: 0.55, z:1.5, sx:1.8, sy: 0.2, sz:0.1, texture: ("../images/board.png")},
        // {x:0, y: 0.505, z:-1.5, sx:1.6, sy:0.1, sz:0.1, texture: ("../images/board.png")},
		{x:0, y: 0.55, z:-1.5, sx:1.8, sy:0.2, sz:0.1, texture: ("../images/board.png")},
        //横４枚
        {x:-0.85, y: 0.55, z:0.69895, sx:0.1, sy:0.2, sz:/*1.2725*/1.53, texture: ("../images/board.png")},
        {x:-0.85, y: 0.55, z:0.69895, sx:0.1, sy:0.2, sz:/*1.2725*/1.53, texture: ("../images/board.png")},
        {x:-0.85, y: 0.55, z:-0.69895, sx:0.1, sy:0.2, sz:/*1.2725*/1.53, texture: ("../images/board.png")},
        {x:0.85, y: 0.55, z:0.69895, sx:0.1, sy:0.2, sz:/*1.2725*/1.53, texture: ("../images/board.png")},
        {x:0.85, y: 0.55, z:-0.69895, sx:0.1, sy:0.2, sz:/*1.2725*/1.53, texture: ("../images/board.png")},
        // 床
        {x: -1, y: 0, z: -1, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: 1, y: 0, z: 1, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: 1, y: 0, z: -1, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: -1, y: 0, z: 1, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},

		
		{x: -1, y: 0, z: -3, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: 1, y: 0, z: -3, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: -1, y: 0, z: 3, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: 1, y: 0, z: 3, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},

		{x: 3, y: 0, z: 1, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: 3, y: 0, z: -1, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: -3, y: 0, z: 1, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: -3, y: 0, z: -1, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},

		{x: -3, y: 0, z: -3, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: -3, y: 0, z: 3, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: 3, y: 0, z: -3, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: 3, y: 0, z: 3, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},



		{x: 5, y: 0, z: 1, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: 5, y: 0, z: -1, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: -5, y: 0, z: 1, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: -5, y: 0, z: -1, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},

		{x: -1, y: 0, z: -5, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: -1, y: 0, z: 5, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: 1, y: 0, z: -5, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: 1, y: 0, z: 5, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		
		{x: -5, y: 0, z: 5, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: -5, y: 0, z: -5, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: 5, y: 0, z: -5, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: 5, y: 0, z: 5, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},

		{x: 3, y: 0, z: 5, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: 3, y: 0, z: -5, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: -3, y: 0, z: -5, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: -3, y: 0, z: 5, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},

		{x: -5, y: 0, z: 3, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: -5, y: 0, z: -3, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: 5, y: 0, z: -3, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},
		{x: 5, y: 0, z: 3, sx: 2, sy: 0.01,sz: 2, texture: ("../images/floor.png")},

    //     // billiardの底
        // {x: 0, y: 0.505, z: 0, sx: 1.374, sy: 0.1, sz: 2.9, texture: ("../images/table.png")},
		{x: 0, y: 0.505, z: 0, sx: 1.37, sy: 0.1, sz: 2.9, texture: ("../images/table.png")},
    //     //右床
        {x: 0,y: 0.505, z:0.69895, sx: 1.6, sy: 0.1, sz: 1.272, texture: ("../images/table.png")},
    // //     //左床    
        {x: 0, y: 0.505, z: -0.69895, sx: 1.6, sy: 0.1, sz: 1.272,texture: ("../images/table.png")},
    //     // 真ん中の床
    //     {x : 0, y : 20, z: 10, sx: 40, sy: 0.1, sz: 5, col: "red"}
    ],
    cylinders: [
        // {x: 1.25, y: 0.25, z: 3.8, s1: 0.5, s2:0.5, s3: 0.5, col: "green"},
        // {x: -1.25, y: 0.25, z: -3.8, s1: 0.5, s2:0.5, s3: 0.5, col: "green"},
        // {x: -1.25, y: 0.25, z: 3.8, s1: 0.5, s2:0.5, s3: 0.5, col: "green"},
        // {x: 1.25, y: 0.25, z: -3.8, s1: 0.5, s2:0.5, s3: 0.5, col: "green"},
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