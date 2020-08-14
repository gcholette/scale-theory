import { ScaleSemitones, Notes, DiatonicModeSteps, Mode, Note } from "./types"

const {majorSteps, modeOffset, noteSemitonesHashMap, noteSemitonesArray} = require('./constants')

export const getDiatonicModeSteps: (mode: Mode) => DiatonicModeSteps =
    (mode) =>
        [majorSteps.slice(modeOffset[mode.toLowerCase()]), majorSteps.slice(0, modeOffset[mode.toLowerCase()])].flat()

export const getModeSemitones:
    (mode: Mode, tonality: Note) => ScaleSemitones =
    (mode, tonality) => {
        const tonalityIndex = noteSemitonesHashMap[tonality.toUpperCase()]
        const steps = getDiatonicModeSteps(mode)
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

export const getScale: (mode: Mode, tonality: Note) => Notes =
    (mode, tonality) => {
        // todo
        // return right notes, either bemol or sharp, every letter must only appear once
        // right now returning fixed Ab instead of G#, etc
        return getModeSemitones(mode, tonality).map(x => noteSemitonesArray[x])
    }

// should getScale receive pentatonic / diatonic / etc as argument?
