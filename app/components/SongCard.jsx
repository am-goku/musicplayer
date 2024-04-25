import React from 'react'
import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'



function SongCard({ title, artist, image, album }) {
    
    const {height, width} = useWindowDimensions();

    return (
        <>
            <View >
                <Image
                    style={styles.mainCard(height)}
                    resizeMode='cover'
                    source={{ uri: image }}
                />

                <View style={styles.dataHeader}>
                    <Text numberOfLines={1} style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.author}>{artist || album}</Text>
                </View>
            </View>
        </>
    )
}

export default SongCard


const styles = StyleSheet.create({



    mainCard: (height) => {return {
        width: 300,
        height: height/2,
        borderRadius: 20,
        borderWidth: 20,
        marginTop: 30,
    }},

    dataHeader: {
        width: 300,
        flexDirection: 'column',
        padding: 10,
        overflow: "hidden",
        // marginTop: 40
    },

    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
    },

    author: {
        color: "#fff",
        fontWeight: 'bold',
        marginTop: 10
    },
});