export class Patient {
  constructor(
    public name: string,
    public code: number
  ) { }

  toString(): string {
    return `${this.name}: ${this.code}`
  }
}