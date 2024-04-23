import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'



function SongCard({ title, artist, image, album }) {
    console.log(title);
    return (
        <>
            <View >
                <Image
                    style={styles.mainCard}
                    resizeMode='cover'
                    source={{ uri: image }}
                />

                <View style={styles.dataHeader}>
                    <Text numberOfLines={1} style={styles.name}>
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
        overflow: "hidden",
        marginTop: 40
    },

    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        // width: "auto",
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