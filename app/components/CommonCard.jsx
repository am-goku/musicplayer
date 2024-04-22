import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

function CommonCard() {
    return (
        <>
            <Image style={styles.musicCard} source={require('../assets/test-cards/1.jpg')} />
            <Image style={styles.musicCard} source={require('../assets/test-cards/2.jpg')} />
            <Image style={styles.musicCard} source={require('../assets/test-cards/3.jpg')} />
            <Image style={styles.musicCard} source={require('../assets/test-cards/4.jpg')} />
            <Image style={styles.musicCard} source={require('../assets/test-cards/5.jpg')} />
        </>
    )
}

export default CommonCard


const styles = StyleSheet.create({
    musicCard: {
        width: 150,
        height: 150,
        backgroundColor: 'white',

        borderRadius: 40,
        borderWidth: 10,
        borderColor: 'white',
        shadowColor: 'white',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
    }
})