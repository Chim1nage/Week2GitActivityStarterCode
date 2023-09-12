import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);

const result_mult = calc.multiply(2, 3);
console.log(`result_add = ${result_add}`);
console.log(`result_mult = ${result_mult}`);

const result_sub = calc.subtract(7, 3);
console.log(`result_add = ${result_add}`);
console.log(`result_sub = ${result_sub}`);

const result_div = calc.divide(9, 3);
console.log(`result_div = ${result_div}`);
