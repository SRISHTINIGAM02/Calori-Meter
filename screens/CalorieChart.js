import * as React from 'react';
import { Image, View, StyleSheet} from 'react-native';

export default class CalorieChart extends React.Component {
    render() {
        return (
            <View
                style={styles.calorieChart}>
                <Image source= {require("../assets/Calorie Chart.jpg")}>

                </Image>
            </View>
        )
    }
}
 const styles = StyleSheet.create({
   calorieChart:{
     flex: 1,
     justifyContent: "center",
    alignItems: "center",
     width: 700,
     height:20
   }
 })