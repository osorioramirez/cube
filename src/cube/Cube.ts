import { Cuboid } from "./Cuboid";
import { IPoint } from "./Point";

export class Cube extends Cuboid {
  constructor(center: IPoint, length: number) {
    super(center, length, length, length);
  }

  public toString() {
    return `Cube: { center: ${this.center}, length: ${this.length} }`;
  }
}
