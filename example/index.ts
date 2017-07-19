import { Cube, Point } from "../src";

// tslint:disable

const runExample = (cube1: Cube, cube2: Cube) => {
  console.log(`cube1 = ${cube1}`);
  console.log(`cube2 = ${cube2}`);
  const interception = cube1.interception(cube2);
  if(!interception.equals(Cube.undefined)) {
    console.log(`The Interception is ${interception}`);
    console.log(`The volume is ${interception.volume()}`);
  } else {
    console.log("There is not interception");
  }
}

const cube1 = new Cube(new Point(1, 0, 2), 7);
const cube2 = new Cube(new Point(-2, 3, 1), 5);
const cube3 = new Cube(new Point(0, -3, 2), 4);
const cube4 = new Cube(new Point(-5, 4, -6), 3);
const cube5 = new Cube(new Point(0, -3, -2), 4);
const cube6 = new Cube(new Point(-2, -3, -2), 8);

console.log("Example 1. With overlapping");
runExample(cube1, cube2);
console.log("Example 2. With overlapping");
runExample(cube1, cube3);
console.log("Example 3. Without overlapping");
runExample(cube2, cube4);
console.log("Example 4. Adjacent");
runExample(cube3, cube5);
console.log("Example 5. One inside another");
runExample(cube5, cube6);
