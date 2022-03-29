import * as React from 'react';
import { Image, View, StyleSheet} from 'react-native';

export default class Weight extends React.Component {
    render() {
        return (
            <View
                style={styles.weightImage}>
                  <Image 
                source={require("../assets/Avg. Weight Chart.jpg")}>

                </Image>
                

            </View>
        )
    }
}
 
 const styles = StyleSheet.create({
   weightImage:{
       flex: 1,
      justifyContent: "center",
     alignItems: "center",
     width: 310    
   }
 })