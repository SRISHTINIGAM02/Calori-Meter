import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default class ExerciseScreen extends React.Component {
  render() {
    return (
      <View>
       <Text style={styles.exercise}>
        <h3>Exercises</h3>
        </Text>
          <Image  source={require("../assets/Face Exercises.jpg")}/>
        <Text style={styles.exercise}>
         Face Exercises
        </Text>
          <Image  source={require('../assets/Neck Exercises.jpg')}/>
        <Text style={styles.exercise}>
         Neck Exercises
        </Text>
          <Image  source={require('../assets/Shoulder Exercises.jpg')}/>
        <Text style={styles.exercise}>
         Shoulder Exercises
        </Text>
          <Image  source={require('../assets/Stomach Exercises.jpg')}/>
        <Text style={styles.exercise}>
         Stomach Exercises
        </Text>
        <Image  source={require('../assets/Thighs Exercises.jpg')}/>
        <Text style={styles.exercise}>
         Thighs Exercises
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  exercise: {
    color: 'Black',
    fontSize: 25,
    textAlign: 'right'
  },
});
