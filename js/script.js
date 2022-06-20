// //card
// VanillaTilt.init(document.querySelectorAll(".card-item"), {
//   max: 25,
//   speed: 400,
// });

//AOS import
AOS.init();

// 3d animation
const blue = "#004C77";
const yellow = "#F9D555";
const darkYellow = "edc649";

const illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  resize: true,
  dragRotate: true,
  zoom: 1.5,
});

let cat = new Zdog.Anchor({
  addTo: illo,
  translate: { x: -100, y: 20 },
  rotate: { y: 45 },
});

let catBody = new Zdog.Shape({
  addTo: cat,
  path: [{ x: -50 }, { x: 50 }],
  // position right above hips
  // ( hips.stroke + chest.stroke ) / 2
  translate: { y: -40, z: -100 },
  rotate: { y: Zdog.TAU / 4 },
  stroke: 120,
  color: yellow,
});

let catHead = new Zdog.Shape({
  addTo: cat,
  path: [{ x: -16 }, { x: 16 }],
  stroke: 150,
  color: yellow,
  backFace: false,
  translate: { y: -100 },
});

let catFace = new Zdog.Group({
  addTo: catHead,
  translate: { y: -20, z: 70 },
});

let catEar = new Zdog.Polygon({
  addTo: catHead,
  radius: 20,
  sides: 3,
  stroke: 20,
  color: yellow,
  translate: { x: -60, y: -60, z: -20 },
  rotate: { z: Zdog.TAU / 4 },
});

catEar.copy({
  translate: { x: 60, y: -60, z: -20 },
  rotate: { z: -Zdog.TAU / 4 },
});

catEar.copy({
  color: "white",
  fill: true,
  radius: 20,
  stroke: 1,
  translate: { x: -60, y: -60, z: -10 },
  rotate: { z: Zdog.TAU / 4 },
  backface: false,
});

catEar.copy({
  color: "white",
  fill: true,
  radius: 20,
  stroke: 1,
  translate: { x: 60, y: -60, z: -10 },
  rotate: { z: -Zdog.TAU / 4 },
  backface: false,
});

let catEye = new Zdog.Ellipse({
  addTo: catFace,
  diameter: 10,
  fill: true,
  color: blue,
  translate: { x: 20, y: 10 },
  backface: false,
});

catEye.copy({
  translate: { x: -20, y: 10 },
});

let catNose = new Zdog.Polygon({
  addTo: catFace,
  radius: 8,
  fill: true,
  sides: 3,
  // stroke: 10,
  color: blue,
  translate: { x: 0, y: 30 },
  rotate: { z: Zdog.TAU / 2 },
  backface: false,
});

let whiskerGroup = new Zdog.Group({
  addTo: catFace,
  translate: { x: 20, y: 30, z: -5 },
});

let whisker = new Zdog.Shape({
  addTo: whiskerGroup,
  path: [{ x: -20 }, { x: 20 }],
  rotate: { z: 0 },
  stroke: 5,
  translate: { x: 30, y: 15 },
  rotate: { z: 60 },
  color: blue,
  backface: false,
});

whisker.copy({
  translate: { x: 30, y: -10 },
  rotate: { z: -60 },
});

whiskerGroup.copyGraph({
  translate: { x: -30, y: 30 },
  rotate: { z: Zdog.TAU / 2 },
});

let catFeet = new Zdog.Shape({
  addTo: catBody,
  path: [{ x: -20 }, { x: 20 }],
  translate: { x: 60, y: 60, z: 30 },
  rotate: { z: Zdog.TAU / 4 },
  stroke: 26,
  color: yellow,
});

catFeetBall = new Zdog.Shape({
  addTo: catFeet,
  path: [{ x: -5 }, { x: 10 }],
  translate: { x: 24, y: -10, z: 0 },
  rotate: { z: Zdog.TAU / 4 },
  stroke: 20,
  color: yellow,
});

catFeet.copyGraph({
  translate: { x: 60, y: 60, z: -30 },
  rotate: { z: Zdog.TAU / 6 },
});

catFeet.copyGraph({
  translate: { x: -60, y: 60, z: 30 },
  rotate: { z: Zdog.TAU / 3 },
});

catFeet.copyGraph({
  translate: { x: -60, y: 60, z: -30 },
});

// let catFaceShadow=new Zdog.Shape({
//   addTo:catFace,
//   path:[{x:10},{x:-10}],

//   color:'black',
//   translate:{x:10},
// })

let catTail = new Zdog.Ellipse({
  addTo: catBody,
  diameter: 100,
  quarters: 1,
  stroke: 24,
  translate: { x: -100, y: -80, z: 0 },
  rotate: { z: Zdog.TAU / 2 },
  color: yellow,
});

let catBelly = new Zdog.Ellipse({
  addTo: catBody,
  width: 100,
  height: 50,
  fill: true,
  color: "white",
  translate: { y: 50 },
  rotate: { x: Zdog.TAU / 4 },
});

let toastGroup = new Zdog.Group({
  addTo: cat,
  translate: { z: -160, y: -110 },
  rotate: { x: Zdog.TAU / 4 },
  scale: 0.7,
});

let toast = new Zdog.RoundedRect({
  addTo: toastGroup,
  width: 100,
  height: 30,
  fill: true,
  stroke: 30,
  cornerRadius: 100,
  color: "#b7704d",
});

toast.copy({
  width: 80,
  height: 80,
  cornerRadius: 0,
  translate: { z: 0, y: 50 },
});

let toastFace = new Zdog.Group({
  addTo: toastGroup,
});

let toastTop = new Zdog.RoundedRect({
  addTo: toastFace,
  width: 80,
  height: 80,
  fill: true,
  cornerRadius: 10,
  translate: { z: 0, y: 50 },
  color: "white",
});

let toastTop2 = new Zdog.RoundedRect({
  addTo: toastFace,
  width: 100,
  height: 30,
  fill: true,
  stroke: 1,
  cornerRadius: 100,
  color: "white",
});

let butter = new Zdog.Shape({
  addTo: toastFace,
  path: [{ x: 20 }, { x: -20 }],
  stroke: 8,
  color: yellow,
  translate: { y: 20 },
  rotate: { z: -160 },
});

butter.copy({
  translate: { y: 30 },
  rotate: { z: 160 },
});

butter.copy({
  translate: { y: 40 },
  rotate: { z: -160 },
});

butter.copy({
  translate: { y: 50 },
  rotate: { z: 160 },
});
butter.copy({
  translate: { y: 60 },
  rotate: { z: -160 },
});

let electAnchor = new Zdog.Anchor({
  addTo: illo,
});

let electGroup = new Zdog.Group({
  addTo: electAnchor,
  translate: { x: 200, y: 100 },
  scale: 0.4,
});

let elect = new Zdog.Polygon({
  addTo: electGroup,
  radius: 20,
  sides: 3,
  stroke: 10,
  color: "#EA0",
  fill: true,
});

elect.copy({
  rotate: { z: Zdog.TAU / 2 },
});

let elect2 = electGroup.copyGraph({
  addTo: electAnchor,
  translate: { x: -200, y: 200 },
  scale: { z: 20 },
  scale: 0.2,
});

let elect3 = electGroup.copyGraph({
  addTo: electAnchor,
  translate: { x: 100, y: -200, z: 40 },
  scale: 0.4,
});

let elect4 = electGroup.copyGraph({
  addTo: electAnchor,
  translate: { x: 300, y: -100, z: -200 },
  scale: 0.6,
  color: "#EA0",
});

let elect5 = electGroup.copyGraph({
  addTo: electAnchor,
  translate: { x: -140, y: -150, z: -100 },
  scale: 0.2,
});

let electAnchor2 = new Zdog.Anchor({
  addTo: illo,
});

let elect6 = electGroup.copyGraph({
  addTo: electAnchor2,
  translate: { x: -200, y: 200 },
  scale: { z: 20 },
  scale: 0.01,
});

let elect7 = electGroup.copyGraph({
  addTo: electAnchor2,
  translate: { x: 100, y: -200, z: 40 },
  scale: 0.4,
});

let elect8 = electGroup.copyGraph({
  addTo: electAnchor2,
  translate: { x: 300, y: -100, z: -200 },
  scale: 0.6,
  color: "#EA0",
});

let elect9 = electGroup.copyGraph({
  addTo: electAnchor2,
  translate: { x: -140, y: -150, z: -100 },
  scale: 0.2,
});

let electAnchor3 = new Zdog.Anchor({
  addTo: illo,
});

let elect10 = electGroup.copyGraph({
  addTo: electAnchor3,
  translate: { x: -200, y: 200 },
  scale: { z: 20 },
  scale: 0.01,
});

let elect11 = electGroup.copyGraph({
  addTo: electAnchor3,
  translate: { x: 100, y: -200, z: 40 },
  scale: 0.4,
});

let elect12 = electGroup.copyGraph({
  addTo: electAnchor3,
  translate: { x: 300, y: -100, z: -200 },
  scale: 0.6,
  color: "#EA0",
});

let elect13 = electGroup.copyGraph({
  addTo: electAnchor3,
  translate: { x: -140, y: -150, z: -100 },
  scale: 0.2,
});

let circleAnchor = new Zdog.Anchor({
  addTo: illo,
});

// let circle=new Zdog.Ellipse({
//   addTo:illo,
//   diameter:600,
//   stroke:20,
//   translate:{z:-500},
//   rotate:{y:20},
//   color:'#EA0',
// })

// let circle2=circle.copy({
//   translate:{z:-500},
//   diameter:800,
//   stroke:10,
//   color:'#EA0',
// })

// let ground=new Zdog.Cylinder({
//   addTo: illo,
//   diameter: 300,
//   length: 10,
//   stroke: false,
//   color: '#C25',
//   backface: '#E62',
//   translate:{z:-100,y:200},
//   rotate:{x:Zdog.TAU/4},
// });

// let catBodyShadow = new Zdog.Hemisphere({
// 	addTo: catBody,
// 	fill: true,
// 	diameter: 130,
//   translate:{z:20},
// 	rotate: {x: 130},
// 	color: '#dbb741',
// 	backface: false,
// })

function animate() {
  cat.rotate.z += 0.04;
  electAnchor.rotate.z += 0.02;
  electAnchor2.rotate.z += 0.008;
  electAnchor3.rotate.z += 0.01;
  // circle.rotate.y+=0.03;
  // circle2.rotate.x+=0.03;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();
