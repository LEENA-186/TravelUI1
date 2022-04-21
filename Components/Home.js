
import React, { Component } from 'react';
import {useState} from 'react'
import { View, Text, Image,StyleSheet,ImageBackground,FlatList,ScrollView,TextInput,TouchableOpacity} from 'react-native';
// import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
const Home = () => {
    const image = {  uri:"https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"}

const [gallery,setGallery]=useState([
{image : {  uri:"https://images.unsplash.com/photo-1575336127377-71c4af9ce931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=355&q=80"}, title:'Dal Lake,Jammu And Kashmir',key:'1'},
{image : {  uri:"https://images.unsplash.com/photo-1607324486266-0d251e7f1a34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"}, title:'Ranathambore National Park ,Rajasthan',key:'2'},
{image : {  uri:"https://images.unsplash.com/photo-1648998017341-b7ec15989902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=657&q=80"}, title:'Dhawki,Meghalaya',key:'3'},
{image : {  uri:"https://images.unsplash.com/photo-1574616343659-f67de01e2681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"}, title:'Agatti Island,Lakshadweep',key:'4'},
{image : {  uri:"https://images.unsplash.com/photo-1559186820-3e8201de3879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"}, title:'Andaman and Nicobar Islands',key:'5'},
])
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
                 fontWeight="bold"
                 /> 
                 <Ionicons name='search' size={22} fontWeight="bold" color='#000000' style={{position:'absolute',top:199,right:60,opacity:0.6}}/>             
                 </View>
                 <Ionicons name='menu' size={30} fontWeight="bold" color='white' style={{position:'absolute',top:15,left:16,opacity:0.6}}/> 
                </ImageBackground>
            </View>
            <View>
  <View>
      <Text style={{marginTop:5,fontSize:25,fontWeight:'bold',color:'#000000',marginLeft:12}}>TopTrending</Text>
  </View>
         <View>
             <FlatList
             horizontal={true}
             data={gallery}
             renderItem={({item})=>{
                 return (
                     <View style={{paddingVertical:15,paddingLeft:15}}>
                      <TouchableOpacity>
                          <Image source={item.image} style={{width:160,marginRight:1,height:230,borderRadius:10}}/>
                      <View style={styles.design}> 
                      <Feather name='map-pin' size={19} fontWeight="bold" color='white' style={styles.imagelocation}/> 
                     <Text style={styles.imagetext}>{item.title}</Text></View>
                      </TouchableOpacity>
                    </View>
                 )
             }}         
             />

         </View>
         <View style={{padding:7,flexDirection:'row',justifyContent:'space-between'}}>
             <Text style={{fontSize:22,fontWeight:'bold',color:'black'}}>
             Top Rated Packages
             </Text></View>
         </View>
        </View>
    );
};

const styles = StyleSheet.create({
   Dark:{
position:'absolute',
top:0,
right:0,
left:0,
height:270,
backgroundColor:'#000',
opacity:0.5,
borderBottomRightRadius:65,
   },
   search:{
paddingTop:100,
paddingLeft:16,
   },
   User:{
       marginTop:1,
fontSize:40,
fontWeight:'bold',
color:'white',
},
Greet:{
    fontSize:16,
    fontWeight:'bold',
    color:'white'
},
searchBox:{
    marginTop:186,
    backgroundColor:'#fff',
    color:'#000000',
    paddingLeft:24,
    width:'90%',
    padding:12,
    borderTopRightRadius:40,
    borderBottomRightRadius:40,
    borderTopLeftRadius:40,
    borderBottomLeftRadius:40,
},
design:{
width:150,
height:200,
marginRight:5,
borderRadius:10,
position:'absolute',
// backgroundColor:'#000',
// opacity:0.2,
},
imagetext:{
    position:'absolute',
    color:'white',
    marginTop:44,
    left:15,
     bottom:19,
},
imagelocation:{
  position:'absolute',
   color:'white',
   marginTop:4,
//    fontSize:14,
   left:24,
   bottom:1, 
   opacity:1,
},
});


export default Home;
