import React, { useState } from "react";
import "./styles.css";

let dataBase = {
  "🍏": "Green Apple",
  "🍎": "Red Apple",
  "🥑": "Avacado",
  "🥦": "Broccoli",
  "🧄": "Garlic",
  "🍬": "Candy",
  "🍭": "Lolipop",
  "🍪": "Cookie",
  "🍩": "Donut",
  "🍕": "Pizza",
  "🌮": "Taco",
  "🥓": "Bacon",
  "🌭": "Hot Dog",
  "🌯": "Burito",
  "🥜": "Peanuts",
  "🥥": "Coconut"
};

let foodItems = Object.keys(dataBase);

export default function App() {
  const [items, setItems] = useState("");

  function itemClickHandler(item) {
    setItems(dataBase[item]);
  }

  function changeEventHandler(event) {
    let food = dataBase[event.target.value];
    if (food === undefined) {
      setItems("Sorry we dont have that food item in our database");
    } else {
      setItems(food);
    }
  }

  return (
    <div className="App">
      <h1>Know IT before you Eat IT!</h1>
      <input onChange={changeEventHandler} />

      <div style={{ margin: "10px", fontSize: "20px" }}>{items}</div>
      <span style={{ margin: "20px", textDecoration: "underline" }}>
        Food items
      </span>

      {foodItems.map(function (eachItem) {
        return (
          <span
            key={eachItem}
            onClick={() => itemClickHandler(eachItem)}
            style={{
              display: "inline-block",
              margin: "10px",
              cursor: "pointer",
              fontSize: "25px",
              width: "150px",
              height: "50px",
              marginTop: "5px"
            }}
          >
            {eachItem}
          </span>
        );
      })}
    </div>
  );
}
