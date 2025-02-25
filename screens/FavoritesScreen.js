import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";

const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container2}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <MealsList items={favoriteMeals} />;
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24180f",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#24180f",
  },
  text: {
    fontFamily: "dmsans-bold",
    fontSize: 18,
    color: "#ccc",
  },
});
