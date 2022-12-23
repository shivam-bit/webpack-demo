const someRandomObject = {
    "randomKey1":"randomValue1"
}

const someRandomObject2 = {
    ...someRandomObject,
    "randomKey2":"randomValue2"
}

console.log({someRandomObject,someRandomObject2});