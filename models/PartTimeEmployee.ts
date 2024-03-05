// PartTimeEmployee.ts
import Employee from './Employee';

export default class PartTimeEmployee extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
  }

  calculateSalary(): number {
    // Implement salary calculation for part-time employees
    return 20000; // Example salary for part-time employees
  }
}
