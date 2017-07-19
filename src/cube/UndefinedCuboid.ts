import { ICuboid } from "./Cuboid";
import { IPoint } from "./Point";

export class UndefinedCuboid implements ICuboid {
  private static singletonInstance: ICuboid;

  public readonly center: IPoint;
  public readonly length: number;
  public readonly width: number;
  public readonly height: number;
  public readonly top: IPoint;
  public readonly bottom: IPoint;

  public static get instance(): ICuboid {
    return UndefinedCuboid.singletonInstance || (UndefinedCuboid.singletonInstance = new UndefinedCuboid());
  }

  private constructor() {
  }

  public volume(): number {
    return 0;
  }

  public interception(cuboid: ICuboid): ICuboid {
    return this;
  }

  public equals(cuboid: ICuboid): boolean {
    return this === (cuboid as UndefinedCuboid);
  }

  public toString() {
    return "Undefined cuboid";
  }
}
