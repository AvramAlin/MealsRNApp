import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import { useEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
// import { useRoute } from "@react-navigation/native";

const MealsOverview = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0; // daca n ar exista niciun categoryId in meal , ar returna -1 indexOf
  });

  useEffect(() => {
    // useLayoutEffect daca nu merge cu useEffect, dar cred ca si a luat update RN
    const catTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
