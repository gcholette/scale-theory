import { ScaleSemitones, Notes, DiatonicModeSteps, Mode, Note, PentatonicModeSteps, Semitone, ScaleType, Steps } from "./types"

import { diatonicSteps, modeOffset, noteSemitonesHashMap, noteSemitonesArray, pentatonicSteps, noteSymbols } from './constants'

const getDiatonicModeSteps: (mode: Mode) => DiatonicModeSteps =
    (mode) =>
        [diatonicSteps.slice(modeOffset[mode.toLowerCase()]), diatonicSteps.slice(0, modeOffset[mode.toLowerCase()])].flat()

const getPentatonicModeSteps: (mode: Mode) => PentatonicModeSteps =
    (mode) =>
        [pentatonicSteps.slice(modeOffset[mode.toLowerCase()]), pentatonicSteps.slice(0, modeOffset[mode.toLowerCase()])].flat()

const semitoneToNote: (semitone: Semitone) => Note =
    (semitone) => {
        return noteSemitonesArray[semitone]
    }

export const getModeSteps: (mode: Mode, scaleType?: ScaleType) => Steps =
    (mode, scaleType = "diatonic") => {
        switch (scaleType) {
            case "diatonic": return <DiatonicModeSteps>getDiatonicModeSteps(mode)
            case "pentatonic": return <PentatonicModeSteps>getPentatonicModeSteps(mode)
        }
    }

export const getModeSemitones:
    (mode: Mode, tonality: Note, scaleType?: ScaleType) => ScaleSemitones =
    (mode, tonality, scaleType = "diatonic") => {
        const tonalityIndex = noteSemitonesHashMap[tonality.toUpperCase()]
        const steps = getModeSteps(mode, scaleType)
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




export const getScale: (mode: Mode, tonality: Note, scaleType?: ScaleType) => Notes =
    (mode, tonality, scaleType = "diatonic") => {
        // todo
        // return right notes, either bemol or sharp, every letter must only appear once
        // right now returning fixed Ab instead of G#, etc
        const semitones = getModeSemitones(mode, tonality, scaleType)
        const notes = semitones.map(x => semitoneToNote(x))
        return notes
    }

// should getScale receive pentatonic / diatonic / etc as argument?
