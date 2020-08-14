import {getModeSemitones, getScale, getDiatonicModeSteps} from '../scales'

test('getDiatonicModeSteps ionian', () => {
    const steps = getDiatonicModeSteps('ionian')
    expect(steps).toStrictEqual([2, 2, 1, 2, 2, 2, 1])
})

test('getDiatonicModeSteps aeolian', () => {
    const steps = getDiatonicModeSteps('aeolian')
    expect(steps).toMatchObject([2, 1, 2, 2, 1, 2, 2])
})

test('getDiatonicModeSteps mixolodian', () => {
    const steps = getDiatonicModeSteps('mixolodian')
    expect(steps).toMatchObject([2, 2, 1, 2, 2, 1, 2])
})

test('getModeSemitones C Major', () => {
    const semitones = getModeSemitones('ionian', 'C')
    expect(semitones).toMatchObject([0, 2, 4, 5, 7, 9, 11, 0])
})

test('getModeSemitones D phrygian', () => {
    const semitones = getModeSemitones('phrygian', 'D')
    expect(semitones).toMatchObject([2, 3, 5, 7, 9, 10, 0, 2])
})

test('getModeSemitones B Lydian', () => {
    const semitones = getModeSemitones('phrygian', 'D')
    expect(semitones).toMatchObject([2, 3, 5, 7, 9, 10, 0, 2])
})

test('getScale C Major', () => {
    const scale = getScale('ionian', 'C')
    expect(scale).toStrictEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])
})

test('getScale A Natural minor', () => {
    const scale = getScale('minor', 'A')
    expect(scale).toStrictEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A'])
})

/*
test('C# Major scale generation', () => {
  const scale = getScale('Ionian', 'C#')
  // should be D#, G#, A#, B# instead of Eb Ab Bb C
  expect(scale).toStrictEqual(['C#', 'Eb', 'F', 'F#', 'Ab', 'Bb', 'C', 'C#'])
})

test('D Lydian scale generation', () => {
  const scale = getScale('Lydian', 'D')
  expect(scale).toStrictEqual(['D', 'E', 'F#', 'Ab', 'A', 'B', 'C#', 'D'])
})

test('D Locrian scale generation', () => {
  const scale = getScale('locrian', 'D')
  expect(scale).toStrictEqual(['D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'])
})



test('B Dorian scale generation', () => {
  const scale = getScale('dorian', 'B')
  expect(scale).toStrictEqual(['B', 'C#', 'D', 'E', 'F#', 'Ab', 'A', 'B'])
})

test('F# Mixolodian scale generation', () => {
  const scale = getScale('mixolodian', 'F#')
  // should be G#, A#, D# instead of Ab Bb and Eb
  expect(scale).toStrictEqual(['F#', 'Ab', 'Bb', 'B', 'C#', 'Eb', 'E', 'F#'])
}) */



