import { isTriplet } from "./pythagoras";

const lang: string = "TypeScript";
const greeting: string = `Hello, ${lang}!`;
debugger
console.log(greeting);
console.log(isTriplet(3, 4, 5));

for (let a = 1; a <= 20; a++) {
    for (let b = a; b <= 20; b++) {
      for (let c = b; c <= 20; c++) {
        if (isTriplet(a, b, c)) {
          console.log(`Triplet gefunden: ${a}, ${b}, ${c}`);
        }
      }
    }
  }