import {
  squarePaint,
  imgPaint,
  CirclePaint,
  StraightPaint,
  FloorPaint,
} from "./updatePaint";

export let square = [];
export let img = [];
export let circle = [];
export let straight = [];
export let floor = [];

let paint;

const drawContainer = document.querySelector(".drawingless");
const paints = drawContainer.dataset.paints;

//캔버스
const ctx = document.getElementById("canvas").getContext("2d");
const ctx3 = document.getElementById("floor1").getContext("2d");
const ctx4 = document.getElementById("floor2").getContext("2d");
const ctx5 = document.getElementById("img1").getContext("2d");

//바닥
function drawFloor() {
  let i, r;
  for (i = floor.length - 1; i > -1; i--) {
    r = floor[i];
    ctx3.lineWidth = r.border; 
    ctx4.lineWidth = r.border;
    if (r.color == 1) {
      draw1();
      ctx3.fillRect(r.sx, r.sy, r.ex - r.sx, r.ey - r.sy);
      ctx3.strokeRect(r.sx, r.sy, r.ex - r.sx, r.ey - r.sy);
    } else if (r.color == 2) {
      draw2();
      ctx4.fillRect(r.sx, r.sy, r.ex - r.sx, r.ey - r.sy);
      ctx4.strokeRect(r.sx, r.sy, r.ex - r.sx, r.ey - r.sy);
    }
  }
}

//사각형
function drawSquare() {
  let i, r;
  for (i = square.length - 1; i > -1; i--) {
    r = square[i];
    ctx.lineWidth = r.border; 
    ctx.fillStyle = r.color;
    ctx.fillRect(r.sx, r.sy, r.ex - r.sx, r.ey - r.sy);
    ctx.strokeRect(r.sx, r.sy, r.ex - r.sx, r.ey - r.sy);
  }
}

//원
function drawCircle() {
  let i, r;
  for (i = circle.length - 1; i > -1; i--) {
    r = circle[i];
    ctx.lineWidth = r.border;
    ctx.beginPath();
    if (r.ex >= r.sx) {
      ctx.arc(r.sx, r.sy, r.ex - r.sx, 0, 360);
    } else if (r.ex < r.sx) {
      ctx.arc(r.sx, r.sy, r.sx - r.ex, 0, 360);
    }
    ctx.fillStyle = r.color;
    ctx.fill();
    ctx.stroke();
  }
}

//직선
function drawStraight() {
  let i, r;
  for (i = straight.length - 1; i > -1; i--) {
    r = straight[i];
    ctx.lineWidth = r.border;
    ctx.beginPath();
    ctx.moveTo(r.sx, r.sy);
    ctx.lineTo(r.ex, r.ey);
    ctx.stroke();
  }
}

//이미지
function drawImg() {
  let i, r;
  for (i = img.length - 1; i > -1; i--) {
    r = img[i];
    ctx5.drawImage(r.img, r.sx, r.sy);
  }
}

function loadPaint() {
  const paintArr = JSON.parse(paints);
  paintArr.forEach((el) => {
    switch (el.name) {
      case "square":
        paint = new squarePaint(
          el._id,
          el.sxPos,
          el.syPos,
          el.exPos,
          el.eyPos,
          el.color,
          el.border,
          el.name
        );
        square.push(paint);
        break;
      case "circle":
        paint = new CirclePaint(
          el._id,
          el.sxPos,
          el.syPos,
          el.exPos,
          el.eyPos,
          el.color,
          el.border,
          el.name
        );
        circle.push(paint);
        break;
      case "straight":
        paint = new StraightPaint(
          el._id,
          el.sxPos,
          el.syPos,
          el.exPos,
          el.eyPos,
          el.color,
          el.border,
          el.name
        );
        straight.push(paint);
        break;
      case "image":
        paint = new imgPaint(
          el._id,
          el.sxPos,
          el.syPos,
          el.exPos,
          el.eyPos,
          el.color,
          el.name,
          el.list
        );
        img.push(paint);
        break;
      case "floor":
        paint = new FloorPaint(
          el._id,
          el.sxPos,
          el.syPos,
          el.exPos,
          el.eyPos,
          el.color,
          el.border,
          el.name
        );
        floor.push(paint);
        break;
    }
  });
}

function init() {
  if (paints) {
    loadPaint();
    drawFloor();
    drawSquare();
    drawCircle();
    drawStraight();
    drawImg();
  }
}

init();