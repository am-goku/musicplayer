import { Audio } from "expo-av";
import { useAudio } from "../context/AudioContext";


const { setSoundObject } = useAudio();


export const newAudio = async (url) => {
    Audio.Sound.createAsync(
        { uri: url }
    ).then((response) => {
        setSoundObject(response.sound)
    }).catch((error) => {
        console.error('Error loading audio:', error);
    })
}