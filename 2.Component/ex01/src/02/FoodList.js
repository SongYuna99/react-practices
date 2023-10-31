import React from "react";
import FoodListItem from "./FoodListItem";

function FoodList({ foods }) {
  const foodItems = [];
  foods.forEach((food) => {
    foodItems.push(<FoodListItem name={food.name} count={food.counts} />);
  });

  return (
    <ul>
      {foods.map((food) => {
        return (
          <FoodListItem key={food.no} name={food.name} count={food.counts} />
        );
      })}
    </ul>
  );
}

export default FoodList;
