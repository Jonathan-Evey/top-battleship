import _ from "lodash";
import Ship from "./ship";

let sub = Ship(3);

console.log(sub);
sub.hit("A: 1");
console.log(sub.hits);

console.log(sub.isSunk());
