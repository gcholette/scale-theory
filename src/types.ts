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

export type ScaleType = 'diatonic' | 'pentatonic'

export type Semitone = 0 | 1 | 2  | 3 | 4 | 5 | 
                       6  | 7 | 8 | 9 | 10 | 11

export type DiatonicModeStep = 1 | 2
export type PentatonicModeStep = 2 | 3 | 4

export type DiatonicModeSteps = DiatonicModeStep[]
export type PentatonicModeSteps = PentatonicModeStep[]

export type ScaleSemitones = Semitone[]

export type Notes = Note[]

export type Steps = (DiatonicModeStep | PentatonicModeStep)[]