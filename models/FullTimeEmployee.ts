// FullTimeEmployee.ts
import Employee from './Employee';

export default class FullTimeEmployee extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
  }

  calculateSalary(): number {
    // Implement salary calculation for full-time employees
    return 50000; // Example salary for full-time employees
  }
}
