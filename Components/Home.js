
import React, { Component } from 'react';
import { View, Text, StyleSheet,ImageBackground,FlatList} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
//import {Feather} from 'react-native-vector-icons/Feather';

const Home = () => {
    const image = {  uri:"https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"}
return (
        <View >
            <View>
                <ImageBackground
                source={image}
                style={{width:'100%',height:270}}
                imageStyle={{borderBottomRightRadius:65}}
                >
               <View style={styles.Dark}>
                   <View style={styles.search}>
                       <Text style={styles.User}>Hi, User</Text>
                       <Text style={styles.Greet}>Where would you like to travel</Text>
                   </View>
               </View>
               <View>
                 <TextInput
                 style={styles.searchBox}
                 placeholder='Search Destination'
                 placeholderTextColor='#666'
                 /> 
                 {/* <Feather  name='search' size={22} color='#eee' style={{position:'absolute',top:30,right:60,opacity:0.6}}/>       */}
                </View>
                </ImageBackground>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
//    Dark:{
// position:'absolute',
// top:0,
// right:0,
// left:0,
// height:270,
// backgroundColor:'#000',
// opacity:0.5,
// borderBottomRightRadius:65,
//    },
   search:{
paddingTop:100,
paddingLeft:16,
   },
   User:{
fontSize:40,
fontWeight:'bold',
color:'white',
},
Greet:{
    fontSize:16,
    fontWeight:'normal',
    color:'white'
},
searchBox:{
    marginTop:16,
    backgroundColor:'#fff',
    paddingLeft:24,
    width:'90%',
    padding:12,
    borderTopRightRadius:40,
    borderBottomRightRadius:40,
    borderTopLeftRadius:40,
    borderBottomLeftRadius:40,

},
});


export default Home;
