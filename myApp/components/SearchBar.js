import React from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const filterObject = require('../assets/filter.png');

const SearchBar = () => (
  <View style={styles.searchContainer}>
    <TextInput style={styles.searchInput} placeholder="Search" />
    <TouchableOpacity style={styles.filterIcon}>
      <Image source={filterObject} style={styles.filterImage} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingHorizontal: 8,
    marginRight: 20,
  },
  filterIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0522F',
    borderRadius: 16,
  },
  filterImage: {
    width: 50,
    height: 50,
  },
});

export default SearchBar;
