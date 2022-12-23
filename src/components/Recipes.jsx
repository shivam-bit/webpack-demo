import { useState } from "react";




const Recipes = () => {
    const someRandomObject = {
        randomKey1: "randomValue1",
      };
      
      const someRandomObject2 = {
        ...someRandomObject,
        randomKey2: "randomValue23",
      };
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Change state</h3>
      <button onClick={() => setRecipe(someRandomObject)}>Object1</button>
      <button onClick={() => setRecipe(someRandomObject2)}>Object2</button>
      
      <ul>
        {Object.keys(recipe).map((material, index) => {
          return <li key={index}>
            {material} :{recipe[material]}
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Recipes;