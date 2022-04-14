export class APIError extends Error {
  public constructor({ message }: { message: string }) {
    super(message);
    this.name = 'APIError';

    Object.setPrototypeOf(this, APIError.prototype)
  }
}