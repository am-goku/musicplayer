import React from 'react'
import { Animated, Image, StyleSheet, Text, View } from 'react-native'



function SongCard() {
    return (
        <>
            <View >
                <Image
                    style={styles.mainCard}
                    resizeMode='cover'
                    source={require("../assets/test-cards/1.jpg")} />

                <View style={styles.dataHeader}>
                    <Animated.Text numberOfLines={1} style={styles.title}>
                        Don't Forget where You Belong hhhhhh hhhhhhhhh
                    </Animated.Text>
                    <Text style={styles.author}>One Direction</Text>
                </View>
            </View>
        </>
    )
}

export default SongCard


const styles = StyleSheet.create({



    mainCard: {
        width: 300,
        height: 500,
        borderRadius: 20,
        borderWidth: 20
    },

    dataHeader: {
        width: 300,
        flexDirection: 'column',
        padding: 10,
        overflow: "hidden"
    },

    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        width: "auto",
    },

    author: {
        color: "#fff",
        fontWeight: 'bold',
        marginTop: 10
    },
});

const slideIn = {
    from: {
        transform: 'translateX(-100%)',
    },
    to: {
        transform: 'translateX(0%)',
    }
}