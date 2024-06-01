import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const profileImage = require('../assets/profile.png');

const Header = () => (
  <View style={styles.header}>
    <View>
      <Text style={styles.headerText}>Hello, Devs</Text>
      <Text style={styles.subHeaderText}>14 tasks today</Text>
    </View>
    <TouchableOpacity style={styles.profileIcon}>
      <Image source={profileImage} style={styles.profileImage} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#888',
  },
  profileIcon: {
    width: 55,
    height: 55,
    borderRadius: 25,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
});

export default Header;
