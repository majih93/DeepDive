// string은 배열처럼, 특정 문자에 접근하는 것이 가능함

let myName = "Fred";

console.log(myName[0]);
// F

// 하지만, string은 불변하는 원시값인데 배열의 원소는 변경할 수 있지 않아?

myName[2] = "a";
console.log(myName);
