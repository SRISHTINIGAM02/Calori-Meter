import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ImageBackground} from 'react-native';
import AppHeader from "../components/AppHeader"

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.buttonsContainer}>
       <ImageBackground source={require('../assets/Background.png')} style={styles.backgroundImage}>
        <AppHeader />

        <TouchableOpacity
          style={[styles.weightbutton, { backgroundColor: 'black' }]}
          onPress={() => {
            this.props.navigation.navigate("WeightScreen")
          }}>
          <Text style={styles.buttonText}>Weight Chart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.caloriebutton, { backgroundColor: 'black' }]}
          onPress={() => {
             this.props.navigation.navigate("CalorieChart")
          }}>
          <Text style={styles.buttonText}>Calorie Chart</Text>
        </TouchableOpacity>

         <TouchableOpacity
          style={[styles.exercisebutton, { backgroundColor: 'black' }]}
          onPress={() => {
             this.props.navigation.navigate("ExerciseScreen")
          }}>
          <Text style={styles.buttonText}>Types Of Exercises</Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    flex: 1,
    backgroundColor: "#15193c",
  weightbutton: {
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 500,
    width: 100,
    height: 50,
    marginTop: 450,
  },
  caloriebutton: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: -50,
    width: 100,
    height: 50,
    marginLeft: -20
  },
  exercisebutton:{
   justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: -50,
    width: 100,
    height: 50,
    marginLeft: 200,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontStyle: 'italic',
    fontSize: 15
  },
});
