import "./styles/index.scss";

const someRandomObject = {
  randomKey1: "randomValue1",
};

const someRandomObject2 = {
  ...someRandomObject,
  randomKey2: "randomValue23",
};

console.log({ someRandomObject, someRandomObject2 });
