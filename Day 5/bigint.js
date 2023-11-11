const bigIntA = BigInt(1234567890123456789012345678901234567890);
const bigIntB = BigInt('9876543210987654321098765432109876543210');


const sum = bigIntA + bigIntB;
const difference = bigIntA - bigIntB;
const product = bigIntA * bigIntB;
const quotient = bigIntA / bigIntB;

console.log('Sum:', sum.toString());
console.log('Difference:', difference.toString());
console.log('Product:', product.toString());
console.log('Quotient:', quotient.toString());