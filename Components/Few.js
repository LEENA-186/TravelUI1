
// import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Firstpage from './pages/Firstpage';

//  const Few = () => {
  


//      return (
//          <View style={styles.container}>
//             <Text>
//                 Few
//             </Text>
         

//          </View>
//     );
// };


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//         opacity:0.5,
//     },
// });


// export default Few;
/*This is an Example of React Native Map*/
import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout}  from 'react-native-maps';
 
class Few extends React.Component {
  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    return (
     
        <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
        latitude: 12.977413,
        longitude: 80.251920,
        latitudeDelta: 0.004,
        longitudeDelta: 0.002}}
     >
     <Marker
     coordinate = {{
      latitude: 12.977413,
      longitude: 80.251920}}
      title={'Clayfin'}
      >
      {/* <Callout >
        <Text>Clayfin</Text>
        <Text>Celebrating Craftsmanship</Text>
      </Callout> */}
      <Callout>
        <Text style={{ width: 60, height: 60}}>
      <Image source={require('../Images/Clayfin-logo.png')} 
       style={{ width: 40, height: 40} }
       resizeMode='cover' />
       </Text>
        <Text>Clayfin</Text>
        <Text>Celebrating Craftsmanship</Text>
      </Callout>
      
      {/* <Image source={require('../Images/Clayfin-logo.png')} 
       style={{ width: 35, height: 35} }
       /> */}
      </Marker>


    </MapView>
 
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Few;