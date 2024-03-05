<template>
    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
    <div>
      <h1>Employee Management System</h1>
      <div v-for="employee in employees" :key="employee.name">
        <p>Name: {{ employee.name }}</p>
        <p>Age: {{ employee.age }}</p>
        <p>Salary: {{ employee.calculateSalary() }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import FullTimeEmployee from './models/FullTimeEmployee';
  import PartTimeEmployee from './models/PartTimeEmployee';
  
  export default defineComponent({
    name: 'Main',
    components: {
      FullTimeEmployee,
      PartTimeEmployee,
    },
    data() {
      return {
        employees: [
          new FullTimeEmployee('John Doe', 30),
          new PartTimeEmployee('Jane Smith', 25),
        ],
      };
    },
  });
  </script>
  
  

  