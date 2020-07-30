const {majorSteps, modes, noteSemitonesHashMap, noteSemitonesArray} = require('./constants')

export const getModeSteps: (mode: string) => number[] =
    (mode) =>
        [majorSteps.slice(modes[mode.toLowerCase()]), majorSteps.slice(0, modes[mode.toLowerCase()])].flat()

export const getModeSemitones:
    (mode: string, tonality: string) => number[] =
    (mode, tonality) => {
        const tonalityIndex = noteSemitonesHashMap[tonality.toUpperCase()]
        const steps = getModeSteps(mode)
        return steps.reduce((acc, step) => {
            if (acc.length === 0) {
                const val = (step + tonalityIndex) % 12
                return [tonalityIndex, val]
            } else {
                const val = (acc[acc.length - 1] + step) % 12
                return [...acc, val]
            }
        }, [])
    }

export const getScale: (mode: string, tonality: string) => string[] =
    (mode, tonality) => {
        // todo
        // return right notes, either bemol or sharp, every letter must only appear once
        // right now returning fixed Ab instead of G#, etc
        return getModeSemitones(mode, tonality).map(x => noteSemitonesArray[x])
    }

// getModeSemitones -> diatonic scales only?
// should getScale receive pentatonic / diatonic / etc as argument?
