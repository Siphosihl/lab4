import React, { useState } from "react";
import { View, Text, Image, FlatList, Pressable, Button, Alert } from "react-native";
import { useFoodItems } from "./FoodItemsContext";


export default function CartScreen() {
  
  const { fooditems, setFoodItems } = useFoodItems();

  // Calculate total cost, use parseFloat to ensure price is a number
  const totalCost = fooditems
    .filter((item) => item.added)
    .reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);

  // Update item quantity 
  const updateQuantity = (id, quantity) => {
    setFoodItems(
      fooditems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // Remove item from cart 
  const removeFromCart = (id) => {
    setFoodItems(
      fooditems.map((item) =>
        item.id=== id ? { ...item, added: false, quantity: 1 } : item
      )
    );
  };

  // Continue to checkout 
  const proceedToCheckout = () => {
    Alert.alert(
      "Checkout Confirmation",
      "Are you sure you want to checkout?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK",
          onPress: () => {
            setFoodItems(
              fooditems.map((item) =>
                item.added ? { ...item, added: false, quantity: 1 } : item
              )
            );
          },
        },
      ]
    );
  };

  // Render each cart item
  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#ddd",
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: 80, height: 80, marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
        <Text>Price: R{item.price}</Text>
        <Text>Quantity: {item.quantity}</Text>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Pressable
            style={{
              padding: 5,
              backgroundColor: "#ccc",
              marginRight: 10,
              borderRadius: 5,
            }}
            onPress={() => updateQuantity((item.id), item.quantity - 1)}
          >
            <Text>-</Text>
          </Pressable>
          <Pressable
            style={{
              padding: 5,
              backgroundColor: "#ccc",
              borderRadius: 5,
            }}
            onPress={() => updateQuantity((item.id), item.quantity + 1)}
          >
            <Text>+</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        style={{
          padding: 10,
          backgroundColor: "#dc3545",
          borderRadius: 5,
        }}
        onPress={() => removeFromCart(item.id)}
      >
        <Text style={{ color: "#fff" }}>Remove</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Cart
      </Text>
      <FlatList
        data={fooditems.filter((item) => item.added)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>Your cart is empty</Text>}
      />
      <View
        style={{
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: "#ddd",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Total: R{totalCost.toFixed(2)}
        </Text>
        <Button title="Proceed to Checkout" onPress={proceedToCheckout} />
      </View>
    </View>
  );
}


