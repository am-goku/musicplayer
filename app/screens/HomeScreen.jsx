import { ImageBackground, StatusBar, StyleSheet, View, ScrollView, Text } from 'react-native'
import CommonCard from '../components/CommonCard'

function HomeScreen() {

    return (
        <>
            <ImageBackground resizeMode='cover' style={styles.background} source={require('../assets/background.jpg')}>

                <ScrollView horizontal={true} style={styles.ScrollView}>
                    <View style={styles.CardContainer}>
                        <CommonCard />
                    </View>
                </ScrollView>


            </ImageBackground>
        </>
    )
}

export default HomeScreen


//Style Section

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center'
    },

    ScrollView: {
        width: "100%",
        display: "flex",
        gap: 10,
        flexDirection: "row",
        position: "absolute",
        top: StatusBar.currentHeight + 50,
        padding: 20,
    },

    CardContainer: { display: "flex", flexDirection: "row", gap: 10, paddingEnd: 25 },


})