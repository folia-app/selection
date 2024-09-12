const urlInfo = window.location.hash.substr(1).split("-");
let tokenId = parseInt(urlInfo[0]);
let backgroundOffset = 0;
let backgroundOverride =
  typeof window.backgroundOverride !== "undefined"
    ? window.backgroundOverride
    : urlInfo.length > 1
      ? parseInt(urlInfo[1])
      : false;
if (backgroundOverride > 3) {
  backgroundOverride = false;
}
if (!tokenId) {
  tokenId = Math.floor(Math.random() * 150) + 1;
}

import { setBg, solidityKeccak256, randomRange } from "./bg.js";

let seed = solidityKeccak256(["uint256"], [tokenId]);
if (
  tokenId == 1 &&
  seed !== "0xb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6"
) {
  throw new Error(
    "invalid token id should be " +
      "0xb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6"
  );
}

import { Random } from "./random.js";
const R = new Random(seed);

import ClipperLib from "./clipper.js";

let svg;

let win_w = window.innerWidth;
let win_h = window.innerHeight;

let largestSide = win_w >= win_h ? win_w : win_h;

var marginFactor = R.int(3, 10);
var margin = parseInt(largestSide / marginFactor);
var amount = R.int(100, 500);
var elWidth = R.int(2, 300);
var elHeight = R.int(2, 300);
var angle = R.int(0, 360);

const showHole = randomRange(0, 10, seed) == 0;

let configSeed = solidityKeccak256(["bytes32"], [seed]);
const showRectangles = showHole || randomRange(0, 1, configSeed) == 0;

configSeed = solidityKeccak256(["bytes32"], [configSeed]);
const showPolygons =
  showHole || !showRectangles || randomRange(0, 1, configSeed) == 0;

configSeed = solidityKeccak256(["bytes32"], [configSeed]);
const showGrid = randomRange(0, 3, configSeed) == 0;

configSeed = solidityKeccak256(["bytes32"], [configSeed]);
const showStar = randomRange(0, 15, configSeed) == 0;

configSeed = solidityKeccak256(["bytes32"], [configSeed]);
const showFrame = randomRange(0, 3, configSeed) == 0;

configSeed = solidityKeccak256(["bytes32"], [configSeed]);
const rotateAllRectangles = randomRange(0, 1, configSeed) == 0;

let gridVal = R.int(5, 10);
let gridMargin = R.int(1, 3);
let gridCLipType = R.int(0, 2);
let frameAmount = R.int(4, 50);
// if (showHole) {
//   showRectangles = true;
//   showPolygons = true;
// }

let selectionObjectsOrigin = {
  x: R.int(margin, win_w - margin * 2),
  y: R.int(margin, win_h - margin * 2),
};
let selectionObjects = generateEmptySelectionObjects();
let polygonObjects = generatePolygonObjects();

window.onload = init;
function init() {
  svg = document.querySelector("svg");

  svg.onclick = function () {
    backgroundOffset++;
    setBg(seed, backgroundOffset, backgroundOverride);
  };
  setBg(seed, backgroundOffset, backgroundOverride);
  renderSelections();
}

function generateEmptySelectionObjects() {
  let sa = [];
  for (let i = 0; i < 1000; i++) {
    let s = new SelectionObject();
    sa.push(s);
  }
  return sa;
}

function SelectionObject() {
  this.x = 0;
  this.y = 0;
  this.w = 0;
  this.h = 0;
  this.xR = R.float();
  this.yR = R.float();
  this.wR = R.float();
  this.hR = R.float();

  this.getPath = function () {
    this.marginize();
    let p = [
      [
        { X: this.x, Y: this.y },
        { X: this.x + this.w, Y: this.y },
        { X: this.x + this.w, Y: this.y + this.h },
        { X: this.x, Y: this.y + this.h },
      ],
    ];
    return p;
  };

  this.setValue = function (p, v) {
    this[p] = parseInt(v);
  };

  this.marginize = function () {
    if (this.x + this.w > win_w) {
      this.x = win_w - this.w;
    }
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.y + this.h > win_h) {
      this.y = win_h - this.h;
    }
    if (this.y < 0) {
      this.y = 0;
    }
  };
}

function generatePolygonObjects() {
  let pa = [];
  for (let i = 0; i < 1; i++) {
    let p = new PolygonObject();
    p.createRn();
    pa.push(p);
  }
  return pa;
}

function PolygonObject() {
  this.startX = R.int(margin, win_w - margin);
  this.startY = R.int(margin, win_h - margin);
  this.polyLength = R.int(400, 1000);
  this.stepVar = R.int(100, 1000);
  this.rnArray = [];
  this.path;
  this.marginVar = R.int(1, 30);
  this.applyMargin = R.int(0, 2) == 0 ? false : true;

  this.makePolygon = function () {
    this.path = [[]];
    let polX = parseInt(this.startX);
    let polY = parseInt(this.startY);
    this.path[0].push({ X: polX, Y: polY });
    let expon = Math.round(this.rnArray[0]) == 0 ? false : true;

    for (let i = 0; i < this.polyLength; i++) {
      if (expon) {
        polX += -1 * i + parseInt(this.rnArray[i * 2] * 2 * i);
        polY += -1 * i + parseInt(this.rnArray[i * 2 + 1] * 2 * i);
      } else {
        polX += -1 * this.stepVar + this.rnArray[i * 2] * this.stepVar * 2;
        polY += -1 * this.stepVar + this.rnArray[i * 2 + 1] * this.stepVar * 2;
      }

      if (this.applyMargin) {
        polX = this.marginize(polX, "w", i);
        polY = this.marginize(polY, "h", i);
      }
      this.path[0].push({ X: polX, Y: polY });
    }
    this.path[0].push({ X: parseInt(this.startX), Y: parseInt(this.startY) });
  };

  this.createRn = function () {
    for (let i = 0; i < this.polyLength * 2; i++) {
      this.rnArray.push(R.float());
    }
  };

  this.marginize = function (pos, dim, i) {
    if (dim == "w") {
      if (pos > win_w - margin) {
        pos =
          win_w -
          margin -
          this.marginVar +
          parseInt(this.rnArray[i * 2] * this.marginVar * 2);
      } else if (pos < margin) {
        pos =
          margin -
          this.marginVar +
          parseInt(this.rnArray[i * 2] * this.marginVar * 2);
      }
    } else if (dim == "h") {
      if (pos > win_h - margin) {
        pos =
          win_h -
          margin -
          this.marginVar +
          parseInt(this.rnArray[i * 2 + 1] * this.marginVar * 2);
      }
      if (pos < margin) {
        pos =
          margin -
          this.marginVar +
          parseInt(this.rnArray[i * 2 + 1] * this.marginVar * 2);
      }
    }
    return pos;
  };

  this.getPath = function () {
    return this.path;
  };
}

function renderSelections(treatAllAsTrue = false) {
  // let solution_paths;
  let clip_paths;
  let subj_paths = [
    [
      { X: (win_w / 2) * -1, Y: win_h / 2 },
      { X: (win_w / 2) * -1 + 1, Y: win_h / 2 },
      { X: (win_w / 2) * -1 + 1, Y: win_h / 2 + 1 },
      { X: (win_w / 2) * -1, Y: win_h / 2 + 1 },
    ],
  ];

  // rectangles
  if (showRectangles || treatAllAsTrue) {
    let sx = selectionObjectsOrigin.x;
    let sy = selectionObjectsOrigin.y;

    for (let i = 0; i < amount; i++) {
      selectionObjects[i].setValue("w", 1 + elWidth * selectionObjects[i].wR);
      selectionObjects[i].setValue("h", 1 + elHeight * selectionObjects[i].hR);
      selectionObjects[i].setValue("x", sx);
      selectionObjects[i].setValue("y", sy);

      sx += 100 - parseInt(selectionObjects[i].xR * 200);
      sy += 100 - parseInt(selectionObjects[i].yR * 200);

      clip_paths = selectionObjects[i].getPath();

      let angles = rotateAllRectangles
        ? angle
        : parseInt(360 * selectionObjects[i].wR);
      clip_paths = rotatePath(angles, clip_paths);

      subj_paths = clipPathToAll(subj_paths, clip_paths, "union");
    }
  }

  // polygons
  if (showPolygons || treatAllAsTrue) {
    let poly = polygonObjects[0];
    poly.makePolygon();

    clip_paths = poly.getPath();
    let fillTypes = [
      ClipperLib.PolyFillType.pftNegative,
      ClipperLib.PolyFillType.pftPositive,
    ];
    const clip_paths_simp = ClipperLib.Clipper.SimplifyPolygons(
      clip_paths,
      fillTypes[0]
    );
    subj_paths = clipPathToAll(subj_paths, clip_paths_simp, "union");
  }

  // grid
  if (showGrid || treatAllAsTrue) {
    let gridSize = largestSide / gridVal;
    let clip_paths = [[]];
    for (let i = 0; i <= largestSide / gridSize; i++) {
      for (let j = 0; j <= largestSide / gridSize; j++) {
        clip_paths.push([
          { X: i * gridSize + gridMargin, Y: j * gridSize + gridMargin },
          {
            X: i * gridSize + gridSize - gridMargin,
            Y: j * gridSize + gridMargin,
          },
          {
            X: i * gridSize + gridSize - gridMargin,
            Y: j * gridSize + gridSize - gridMargin,
          },
          {
            X: i * gridSize + gridMargin,
            Y: j * gridSize + gridSize - gridMargin,
          },
        ]);

        //clip_paths = [[{X:i*gridSize,Y:j*gridSize},{X:i+gridSize,Y:j},{X:i+gridSize,Y:j+gridSize},{X:i,Y:j+gridSize}]]; //star
      }
    }

    let clipTypes = ["difference", "intersection", "union"];
    subj_paths = clipPathToAll(subj_paths, clip_paths, clipTypes[gridCLipType]);
  }

  // star
  if (showStar || treatAllAsTrue) {
    let largestSide = win_w >= win_h ? win_w : win_h;
    let gridSize = largestSide / gridVal;
    let clip_paths = [[]];
    for (let i = 0; i <= largestSide / gridSize; i++) {
      for (let j = 0; j <= largestSide / gridSize; j++) {
        clip_paths = [
          [
            { X: i * gridSize, Y: j * gridSize },
            { X: i + gridSize, Y: j },
            { X: i + gridSize, Y: j + gridSize },
            { X: i, Y: j + gridSize },
          ],
        ]; //star
        subj_paths = clipPathToAll(subj_paths, clip_paths, "union");
      }
    }
  }

  // frames
  if (showFrame || treatAllAsTrue) {
    let clip_paths = [[]];
    for (let i = 0; i < frameAmount; i += 2) {
      let v = i * R.int(2, 20);

      const clip_path1 = [
        [
          { X: v + 10, Y: v + 10 },
          { X: win_w - v - 10, Y: v + 10 },
          { X: win_w - v - 10, Y: win_h - v - 10 },
          { X: v + 10, Y: win_h - v - 10 },
        ],
        [
          { X: v * 2 + 10, Y: v * 2 + 10 },
          { X: v + 10, Y: v + 10 },
        ],
      ];
      const clip_path2 = [
        [
          { X: v + 20, Y: v + 20 },
          { X: win_w - v - 20, Y: v + 20 },
          { X: win_w - v - 20, Y: win_h - v - 20 },
          { X: v + 20, Y: win_h - v - 20 },
          { X: v + 20, Y: v + 20 },
        ],
      ];
      clip_paths = clipPathToAll(clip_path1, clip_path2, "difference");
      subj_paths = clipPathToAll(subj_paths, clip_paths, "union");
    }
  }

  //viewport clipping
  clip_paths = [
    [
      { X: 0, Y: 0 },
      { X: win_w, Y: 0 },
      { X: win_w, Y: win_h },
      { X: 0, Y: win_h },
    ],
  ];
  subj_paths = clipPathToAll(subj_paths, clip_paths, "intersection");

  //center hole
  if (showHole || treatAllAsTrue) {
    let ch_w = win_w / 2 + selectionObjects[0].wR * margin;
    let ch_h = win_h / 2 + selectionObjects[0].hR * margin;
    let ch_x = (win_w - ch_w) / 2;
    let ch_y = (win_h - ch_h) / 2;
    clip_paths = [
      [
        { X: ch_x, Y: ch_y },
        { X: ch_x + ch_w, Y: ch_y },
        { X: ch_x + ch_w, Y: ch_y + ch_h },
        { X: ch_x, Y: ch_y + ch_h },
      ],
    ];
    subj_paths = clipPathToAll(subj_paths, clip_paths, "difference");
  }

  let svgPath = paths2string(subj_paths);

  // if path empty show all styles
  if (svgPath == "M0,0" && !treatAllAsTrue) {
    renderSelections(true);
  } else if (svgPath == "M0,0") {
    console.error(
      `empty path on token ID after setting treatAllAsTrue ${tokenId}`
    );
  } else {
    document.querySelector("#selectionPath").setAttribute("d", svgPath);
  }
}

function clipPathToAll(subj_paths, clip_paths, type) {
  // type: 'intersection', 'union' or 'difference';
  let cpr = new ClipperLib.Clipper();
  ClipperLib.JS.ScaleUpPaths(subj_paths, 1);
  ClipperLib.JS.ScaleUpPaths(clip_paths, 1);
  cpr.AddPaths(subj_paths, ClipperLib.PolyType.ptSubject, true);
  cpr.AddPaths(clip_paths, ClipperLib.PolyType.ptClip, true);

  let subject_fillType = ClipperLib.PolyFillType.pftNonZero;
  let clip_fillType = ClipperLib.PolyFillType.pftNonZero;
  const solution_paths = new ClipperLib.Paths();
  type = type.charAt(0).toUpperCase() + type.slice(1);
  cpr.Execute(
    ClipperLib.ClipType["ct" + type],
    solution_paths,
    subject_fillType,
    clip_fillType
  );

  return solution_paths;
}

function paths2string(paths) {
  let svgpath = "",
    i,
    j;
  let scale = 1;
  for (i = 0; i < paths.length; i++) {
    for (j = 0; j < paths[i].length; j++) {
      if (!j) svgpath += "M";
      else svgpath += "L";
      svgpath += paths[i][j].X / scale + ", " + paths[i][j].Y / scale;
    }
    svgpath += "Z";
  }
  if (svgpath == "") svgpath = "M0,0";
  return svgpath;
}

function rotatePath(angle, path) {
  const pA = [path[0][0].X, path[0][0].Y];
  const pB = rotateCoordinate(
    path[0][0].X,
    path[0][0].Y,
    path[0][1].X,
    path[0][1].Y,
    angle
  );
  const pC = rotateCoordinate(
    path[0][0].X,
    path[0][0].Y,
    path[0][2].X,
    path[0][2].Y,
    angle
  );
  const pD = rotateCoordinate(
    path[0][0].X,
    path[0][0].Y,
    path[0][3].X,
    path[0][3].Y,
    angle
  );
  let rotatedPath = [
    [
      { X: pA[0], Y: pA[1] },
      { X: pB[0], Y: pB[1] },
      { X: pC[0], Y: pC[1] },
      { X: pD[0], Y: pD[1] },
    ],
  ];
  return rotatedPath;
}

function rotateCoordinate(cx, cy, x, y, angle) {
  var radians = (Math.PI / 180) * angle,
    cos = Math.cos(radians),
    sin = Math.sin(radians),
    nx = cos * (x - cx) + sin * (y - cy) + cx,
    ny = cos * (y - cy) - sin * (x - cx) + cy;
  return [nx, ny];
}

let resizeTimer;
window.onresize = function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(resizeEnded, 500);
};

function resizeEnded() {
  win_w = window.innerWidth; // tool width added
  win_h = window.innerHeight;
  largestSide = win_w >= win_h ? win_w : win_h;
  margin = parseInt(largestSide / marginFactor);
  renderSelections();
}
