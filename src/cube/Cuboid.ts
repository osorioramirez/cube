import Errors from "./Errors";
import { IPoint, Point } from "./Point";
import { UndefinedCuboid } from "./UndefinedCuboid";

export interface ICuboid {
  readonly center: IPoint;
  readonly length: number;
  readonly height: number;
  readonly width: number;
  readonly top: IPoint;
  readonly bottom: IPoint;
  volume(): number;
  interception(cuboid: ICuboid): ICuboid;
  equals(cuboid: ICuboid): boolean;
  toString(): string;
}

export class Cuboid implements ICuboid {

  public static fromTopBottom(top: IPoint, bottom: IPoint): ICuboid {
    const center = top.middle(bottom);
    const length = top.x - bottom.x;
    const height = top.y - bottom.y;
    const width = top.z - bottom.z;
    if (length > 0 && height > 0 && width > 0) {
      return new Cuboid(center, length, height, width);
    }

    return Cuboid.undefined;
  }

  public static get undefined(): ICuboid {
    return UndefinedCuboid.instance;
  }

  protected topCorner: IPoint;
  protected bottomCorner: IPoint;

  constructor(
    public readonly center: IPoint,
    public readonly length: number,
    public readonly height: number,
    public readonly width: number,
  ) {
    if (this.length <= 0) {
      throw Errors.invalidCuboidSizeError(this.length);
    }
    if (this.height <= 0) {
      throw Errors.invalidCuboidSizeError(this.height);
    }
    if (this.width <= 0) {
      throw Errors.invalidCuboidSizeError(this.width);
    }
  }

  public get top(): IPoint {
    return this.topCorner ||
      (this.topCorner = this.center.sum((new Point(this.length, this.height, this.width)).mult(0.5)));
  }

  public get bottom(): IPoint {
    return this.bottomCorner ||
      (this.bottomCorner = this.center.sum((new Point(this.length, this.height, this.width)).mult(-0.5)));
  }

  public volume(): number {
    return this.length * this.height * this.width;
  }

  public interception(cuboid: ICuboid): ICuboid {
    const top = new Point(
      Math.min(this.top.x, cuboid.top.x),
      Math.min(this.top.y, cuboid.top.y),
      Math.min(this.top.z, cuboid.top.z),
    );
    const bottom = new Point(
      Math.max(this.bottom.x, cuboid.bottom.x),
      Math.max(this.bottom.y, cuboid.bottom.y),
      Math.max(this.bottom.z, cuboid.bottom.z),
    );
    return Cuboid.fromTopBottom(top, bottom);
  }

  public equals(cuboid: ICuboid): boolean {
    return cuboid &&
      this.center.equals(cuboid.center) &&
      this.length === cuboid.length &&
      this.height === cuboid.height &&
      this.width === cuboid.width;
  }

  public toString() {
    return `Cuboid: { center: ${this.center}, length: ${this.length}, height: ${this.height}, width: ${this.width}}`;
  }
}
