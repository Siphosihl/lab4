import { useFoodItems } from "./FoodItemsContext";
import { useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";

export default function Index() {


  const { setFoodItems, fooditems } = useFoodItems([]);


  const toggleFoodItem = (id) => {
    setFoodItems(
      fooditems.map((fooditem) =>
        fooditem.id === id
          ? {
            ...fooditem,
            added: !fooditem.added,
          }
          : fooditem
      )
    );
  }

  return (
    <View
      style={{
        flex: 1,
        
      }}
    >
      {
        // Map over the fooditems array and render a  component for each fooditem
        // showing the fooditem title, and a status icon if the fooditem is added to cart
        fooditems?.map((fooditem) => (
          <Pressable
            key={fooditem.id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}

            // Toggle the fooditem completed status when pressed
            onPress={() => toggleFoodItem(fooditem.id)}
          >
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                color: fooditem.added ? "#ccc" : "#000",
                textDecorationLine: fooditem.added ? "line-through" : "none",
              }}
            >
              {fooditem.title}
            </Text>
            {fooditem.completed && (
              <Text
                style={{
                  color: "#ccc",
                  fontSize: 16,
                  marginRight: 8,
                }}
              >
                ✅
              </Text>
            )}
          </Pressable>
        ))
      }
    </View>
  );
}