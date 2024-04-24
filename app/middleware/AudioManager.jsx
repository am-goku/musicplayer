import { useEffect } from 'react'
import { useAudio } from '../context/AudioContext'

function AudioManager({ children }) {

    const { isPlaying, soundObject } = useAudio()


    const togglePlayback = async () => {
        try {
            if (!isPlaying) {
                await soundObject.pauseAsync();
            } else {
                await soundObject.playAsync();
            }
        } catch (error) {
            console.log(error, isPlaying);
        }
    };


    useEffect(() => {
        togglePlayback();
    }, [isPlaying])

    return children;
}

export default AudioManager