import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import WeightScreen from './screens/WeightScreen';
import CalorieChart from './screens/CalorieChart';
import ExerciseScreen from './screens/ExerciseScreen';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 


export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  WeightScreen:WeightScreen,
  CalorieChart:CalorieChart,
  ExerciseScreen:ExerciseScreen
})

const AppContainer = createAppContainer(AppNavigator)
