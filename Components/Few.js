
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import Firstpage from './pages/Firstpage';

const Few = () => {
    return (
        <View style={styles.container}>
            {/* <Firstpage/> */}
           <Text>HII THIS IS FEW PAGE</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});


export default Few;
