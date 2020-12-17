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
  "🥥": "Coconut",
  "🍇": "Grapes",
  "🍞": "Bread",
  "🌶️": "Hot Pepper",
  "🍗": "Poultry Leg",
  "🍈": "Melon",
  "🍙": "Rice Ball",
  "🍊": "Tangerine",
  "🥝": "Kiwi Frurit",
  "🌽": "Ear of Corn",
  "🌰": "Chesnut",
  "🥖": "Baguette Bread",
  "🍟": "French Fries",
  "🥞": "Pancakaes",
  "🧇": "Wasffle",
  "🧆": "Falafel",
  "🍝": "Spaghetti",
  "🦪": "Oyster"
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
      <h1 style={{ margin: "40px", color: "white" }}>
        Know IT before you Eat IT!
      </h1>
      <hr />
      <input
        style={{ borderRadius: "5px", marginTop: "20px" }}
        placeholder="put your input here or click on any of the item below"
        onChange={changeEventHandler}
      />

      <div
        style={{ marginBottom: "40px", marginTop: "30px", fontSize: "20px" }}
      >
        <strong>{items}</strong>
      </div>
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
              marginTop: "5px",
              width: "110px"
            }}
          >
            {eachItem}
          </span>
        );
      })}
    </div>
  );
}
