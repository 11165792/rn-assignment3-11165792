import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryList from './components/CategoryList';
import TaskList from './components/TaskList';

const categories = [
  { title: 'Exercise', tasks: '12 Tasks', image: require('./assets/onlinework.png') },
  { title: 'Study', tasks: '12 Tasks', image: require('./assets/deskwoman.png') },
  { title: 'Code', tasks: '8 Tasks', image: require('./assets/coder.png') },
  { title: 'Events', tasks: '5 Tasks', image: require('./assets/calender.png') },
  { title: 'Organize', tasks: '10 Tasks', image: require('./assets/organize.png') },
  { title: 'Meeting', tasks: '7 Tasks', image: require('./assets/meeting.png') },
  { title: 'Leisure', tasks: '6 Tasks', image: require('./assets/leisure.jpg') },
  { title: 'News', tasks: '9 Tasks', image: require('./assets/news.png') },
];

const tasks = [
  "Mobile App Development",
  "Web Development",
  "Push Ups",
  "Learn",
  "Meeting",
  "Microsoft Event",
  "w3school bootcamp",
  "Java Reading",
  "Paul Ammah Lecture Event",
  "Interim Assessment",
  "DEV conference",
  "Final Semester Project",
  "Data Structures and Algorithms workshop",
  "Friday To Do List",
  "Arduino programming"
];

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />
      <CategoryList categories={categories} />
      <TaskList tasks={tasks} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAF3EB',
    paddingTop: 60,
  },
});

export default App;
