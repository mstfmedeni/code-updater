export class CodeUpdaterError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CodeUpdaterError";
  }
}
