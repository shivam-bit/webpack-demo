import "../styles/index.scss";
import React from 'react'
import Recipes from './Recipes';
import monkey from "../images/monkey.gif";
function App() {
  return (
    <><section >
<img src={monkey} alt="" />
        </section>
        <main className="hero">
            <h1>Ohhh Hi REACT!!!!</h1>
            <Recipes/>
        </main>
        </>
  )
}

export default App