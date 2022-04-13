import React from 'react';
import { ImageBackground, StyleSheet, Text, View , TouchableOpacity} from "react-native";

const image = { uri: "https://images.unsplash.com/photo-1649171935643-c6f01b3d7a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" };

const New = ({navigation}) => {
    return (
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
         <TouchableOpacity onPress={() => navigation.navigate('Profile')} ><Text style={styles.text}>Get Started</Text></TouchableOpacity>
        </ImageBackground>
       </View>
    );
};
   const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      margin:50,
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });

  export default New;