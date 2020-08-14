export type Note = 'Cb' | 'C' | 'C#' | 
                   'Db' | 'D' | 'D#' | 
                   'Eb' | 'E' | 'E#' |
                   'Fb' | 'F' | 'F#' | 
                   'Gb' | 'G' | 'G#' | 
                   'Ab' | 'A' | 'A#' |
                   'Bb' | 'B' | 'B#'

export type Mode = 'ionian'  | 'aeolian'    | 'dorian'   | 
                   'lydian'  | 'mixolodian' | 'phrygian' | 
                   'locrian' | 'major'      | 'minor'

export type DiatonicModeStep = 1 | 2

export type DiatonicModeSteps = DiatonicModeStep[]

export type ScaleSemitones = number[]


export type Notes = Note[]