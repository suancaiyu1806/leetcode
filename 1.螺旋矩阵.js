const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

const directionEnum = {
  right: "right",
  down: "down",
  left: "left",
  up: "up",
};

const directionLink = {
  [directionEnum.right]: directionEnum.down,
  [directionEnum.down]: directionEnum.left,
  [directionEnum.left]: directionEnum.up,
  [directionEnum.up]: directionEnum.right,
};

const coorEnum = {
  x: "x",
  y: "y",
};

let curDirection = directionEnum.right;
let curStep = 0;
const totalStep = matrix.length * matrix[0]?.length;
const curCoor = { [coorEnum.x]: 0, [coorEnum.y]: -1 };
const result = [];

const printMatrix = (direction) => {
  if (curStep >= totalStep) return;
  let changeCoor;
  let changeNum = 0;
  switch (direction) {
    case directionEnum.right:
      changeCoor = coorEnum.y;
      changeNum = 1;
      break;
    case directionEnum.down:
      changeCoor = coorEnum.x;
      changeNum = 1;
      break;
    case directionEnum.left:
      changeCoor = coorEnum.y;
      changeNum = -1;
      break;
    case directionEnum.up:
      changeCoor = coorEnum.x;
      changeNum = -1;
      break;
  }

  while (true) {
    changeCoor && (curCoor[changeCoor] = curCoor[changeCoor] + changeNum);
    const curVal = matrix[curCoor.x]?.[curCoor.y];
    if (curVal !== undefined) {
      result.push(curVal);
      matrix[curCoor.x][curCoor.y] = undefined;
      curStep = curStep + 1;
    } else {
      curCoor[changeCoor] = curCoor[changeCoor] - changeNum; // 越界恢复
      break;
    }
  }

  printMatrix(directionLink[direction]);
};

printMatrix(directionEnum.right);
console.log(result);
