import { DiatonicModeSteps, PentatonicModeSteps, Notes } from "./types"

export const diatonicSteps: DiatonicModeSteps = [2, 2, 1, 2, 2, 2, 1]
export const pentatonicSteps: PentatonicModeSteps = [2, 2, 3, 2, 2]

export const noteSemitonesArray: Notes =
  ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B']

export const noteSymbols: Notes =
  ['Cb', 'C', 'C#',
    'Db', 'D', 'D#',
    'Eb', 'E', 'E#',
    'Fb', 'F', 'F#',
    'Gb', 'G', 'G#',
    'Ab', 'A', 'A#',
    'Bb', 'B', 'B#']

export const noteSemitonesHashMap = {
  'C': 0,
  'C#': 1,
  'Db': 1,
  'D': 2,
  'D#': 3,
  'Eb': 3,
  'E': 4,
  'F': 5,
  'F#': 6,
  'Gb': 6,
  'G': 7,
  'G#': 8,
  'Ab': 8,
  'A': 9,
  'A#': 10,
  'Bb': 10,
  'B': 11
}

export const modeOffset = {
  ionian: 0,
  major: 0,
  dorian: 1,
  phrygian: 2,
  lydian: 3,
  mixolodian: 4,
  aeolian: 5,
  minor: 5,
  locrian: 6
}

