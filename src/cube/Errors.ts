export default class Errors {
  public static invalidCuboidSizeError(size: number): Error {
    return new Error(`${size} is an invalid cuboid size. The cuboid size must be a positive number.`);
  }
}
