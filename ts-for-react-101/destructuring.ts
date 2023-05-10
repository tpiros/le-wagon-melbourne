const person = {
  name: 'John',
  age: 25,
};

// const greeting = ({ name }) => {
// const greeting = ({ name }: { name: string }) => {
//   return `Hi, ${name}!`;
// };

// or
type greetingArgs = {
  name: string;
};

const greeting = ({ name }: greetingArgs) => {
  return `Hi, ${name}!`;
};

greeting({ name: person.name });
