import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CategoryItem = ({ category }) => (
  <View style={styles.category}>
    <View style={styles.categoryTextContainer}>
      <Text style={styles.categoryText}>{category.title}</Text>
      <Text style={styles.categoryTasks}>{category.tasks}</Text>
    </View>
    <Image source={category.image} style={styles.categoryImage} />
  </View>
);

const styles = StyleSheet.create({
  category: {
    width: 200,
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 18,
    borderRadius: 10,
    elevation: 2,
    marginRight: 18,
    position: 'relative',
  },
  categoryTextContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  categoryTasks: {
    fontSize: 14,
    color: '#888',
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginTop: 40,
    alignSelf: 'center',
  },
});

export default CategoryItem;
