// very simply put, interfaces are extendable,
// types are not.

// interface Person {
//   name: string
// }

// interface Student extends Person {
//   school: string
// }

// or

// type Person = {
//   name: string;
// };

// type Student = Person & {
//   school: string;
// };

// this is ok

// interface Person {
//   name: string
// }

// interface Person {
//   age: number
// }

// this is not ok: Duplicate identifier 'Person'.ts(2300)

// type Person = {
//   name: string;
// };

// type Person = {
//   age: number;
// };
