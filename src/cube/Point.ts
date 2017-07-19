export interface IPoint {
  readonly x: number;
  readonly y: number;
  readonly z: number;
  sum(point: IPoint): IPoint;
  mult(scalar: number): IPoint;
  middle(point: IPoint): IPoint;
  equals(point: IPoint): boolean;
  toString(): string;
}

export class Point implements IPoint {
  constructor(public readonly x: number, public readonly y: number, public readonly z: number) {
  }

  public sum(point: IPoint): IPoint {
    return new Point(this.x + point.x, this.y + point.y, this.z + point.z);
  }

  public mult(scalar: number): IPoint {
    return new Point(this.x * scalar, this.y * scalar, this.z * scalar);
  }

  public middle(point: IPoint): IPoint {
    return this.sum(point).mult(0.5);
  }

  public equals(point: IPoint): boolean {
    return point && this.x === point.x && this.y === point.y && this.z === this.z;
  }

  public toString() {
    return `(${this.x}, ${this.y}, ${this.z})`;
  }
}
