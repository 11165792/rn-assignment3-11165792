import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => (
  <View style={styles.ongoingTasks}>
    <Text style={styles.sectionHeader}>Ongoing Task</Text>
    {tasks.map((task, index) => (
      <TaskItem key={index} task={task} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  ongoingTasks: {
    marginTop: 24,
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default TaskList;
