export class MapperError extends Error {
  public constructor({ message }: { message: string }) {
    super(message);
    this.name = 'MapperError';

    Object.setPrototypeOf(this, MapperError.prototype)
  }
}