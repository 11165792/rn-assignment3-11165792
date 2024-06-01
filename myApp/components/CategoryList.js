import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import CategoryItem from './CategoryItem';

const CategoryList = ({ categories }) => (
  <View>
    <Text style={styles.sectionHeader}>Categories</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
      {categories.map((category, index) => (
        <CategoryItem key={index} category={category} />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 16,
  },
});

export default CategoryList;
