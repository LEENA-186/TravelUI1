
import React from "react";
import { VStack, Center, NativeBaseProvider,Image,ScrollView } from "native-base";

function Example() {
  return <ScrollView>
  <VStack space={3} justifyContent="flex-start">
      <Center>
    <Image source={{
      uri: "https://images.unsplash.com/photo-1649794484760-d8a32a1fa4ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    }} alt="Alternate Text" size={500} /> 
    </Center>
    <Center>
    <Image source={{
      uri: "https://images.unsplash.com/photo-1649790247335-42156c080db6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    }} alt="Alternate Text" size={500}  /> 
    </Center><Center>
    <Image source={{
      uri: "https://images.unsplash.com/photo-1548263594-a71ea65a8598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
    }} alt="Alternate Text" size={500}  /> 
    </Center>
    <Center>
    <Image source={{
      uri: "https://images.unsplash.com/photo-1649794484760-d8a32a1fa4ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    }} alt="Alternate Text" size={500} /> 
    </Center>
    <Center>
    <Image source={{
      uri: "https://images.unsplash.com/photo-1649794484760-d8a32a1fa4ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    }} alt="Alternate Text" size={500}  /> 
    </Center>
    
    </VStack>
    </ScrollView>
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
// import React from "react";
// import { VStack, Image, ScrollView, Heading, Center, NativeBaseProvider } from "native-base";

// function Example() {
//   return <>
//       <Heading mb="10" textAlign="center" mt="3">
//         Image Sizes
//       </Heading>
//       <ScrollView px="20">
//         {
//         /* <Center mt="3" h="80"> */
//       }

//         <VStack space={2} justifyContent="center" alignItems="center" safeAreaTop // my={6}
//       mb={6}>
//           {["2xl", "2xl", "2xl", "2xl", "2xl", "2xl"].map(size => <Image key={size} size={size} resizeMode="cover" source={{
//           uri: "https://wallpaperaccess.com/full/317501.jpg"
//         }} alt={"Alternate Text " + size} />)}
//         </VStack>
//         {
//         /* </Center> */
//       }
//       </ScrollView>
//     </>;
// }

//     export default () => {
//         return (
//           <NativeBaseProvider>
//             <Center flex={1} px="3">
//                 <Example />
//             </Center>
//           </NativeBaseProvider>
//         );
//     };
    