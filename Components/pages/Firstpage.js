// import React,{useState,useRef} from "react"
// import {View,Text,StyleSheet,FlatList,Animated, SliderBase} from "react-native"
// import Slider from "../../Slider";
// import Secondpage from "./Secondpage";
// const Firstpage = () =>{
//     const [currentIndex,setCurrentIndex]=useState(0);
//     const ScrollX = useRef(new Animated.Value(0)).current;
//     const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;
//     const viewableitemsChanged = useRef(({viewableItems})=>{setCurrentIndex(viewableItems[0].index)})
//     return(
// <View style={styles.container}>
//     <View style={{flex:3}}>
//    <FlatList data={Slider} 
//    renderItem={({ item }) => <Secondpage item={item}/>}
//    horizantal
//    showsHorizontalScrollIndicator
//    pagingEnabled 
//    bounces={false}  
//    keyExtractor={(item)=>item.id}
//    onscroll={Animated.event([{nativeEvent:{contentOffset:{ x : ScrollX }}}],
//     {useNativeDriver:false})}
  
//   scrollEventThrottle={32}
//    onViewableItemsChanged={viewableitemsChanged}
//    viewabilityConfig={viewConfig}
// //    ref={slidesRef}
//    />
//    </View> 
// </View>

//     );
// };

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:"center",
//         alignItems:"center",
//     },
// });
// export default Firstpage