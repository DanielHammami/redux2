const person = {
  name: "John",
  address: {
    country: "USA",
    city: "San Francisco",
  },
};
const updated = Object.assign({}, person, { name: "Bob", age: 30 });
// => equal
const updated = { ...person, name: "Bob" };

updated.address.city = "New York";

/*
log person =>

const person = {
  name: "John",
  address: {
    country: "USA",
    city: "New York",
  },
};
*/

const updated = {
  ...person,
  address: {
    ...person.address,
    city: "New York",
  },
  name: "Bob",
};

/*
log person =>

const person = {
  name: "John",
  address: {
    country: "USA",
    city: "San Francisco",
  },
};
*/
