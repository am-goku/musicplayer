import { useEffect } from 'react'
import { useAudio } from '../context/AudioContext'

function AudioManager({ children }) {

    const { isPlaying, soundObject, setIsPlaying } = useAudio()


    const togglePlayback = async () => {
        try {
            if(soundObject){
                if (!isPlaying) {
                    await soundObject.pauseAsync();
                } else {
                    await soundObject.playAsync();
                }
            }
        } catch (error) {
            console.log(error, isPlaying);
        }
    };

    useEffect(() => {
        if(soundObject) setIsPlaying(true)
        else setIsPlaying(false)
    }, [soundObject])


    useEffect(() => {
        togglePlayback();
    }, [isPlaying])

    return children;
}

export default AudioManager