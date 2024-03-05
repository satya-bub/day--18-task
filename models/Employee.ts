// Employee.ts
export default class Employee {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }

  calculateSalary(): number {
    // Base implementation for calculating salary
    return 0;
  }
}
