import React, { createContext, useContext, useEffect, useState } from 'react'

const AudioContext = createContext();

export const useAudio = () => useContext(AudioContext)

function AudioProvider({ children }) {

    const [soundObject, setSoundObject] = useState(null);

    const [isPlaying, setIsPlaying] = useState(false);


    return (
        <AudioContext.Provider value={{ soundObject, setSoundObject, isPlaying, setIsPlaying }}>
            {children}
        </AudioContext.Provider>
    )
}

export default AudioProvider
