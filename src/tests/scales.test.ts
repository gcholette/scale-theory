import {getModeSemitones, getScale, getModeSteps} from '../scales'

test('getModeSteps Diatonic ionian', () => {
    const steps = getModeSteps('ionian')
    expect(steps).toStrictEqual([2, 2, 1, 2, 2, 2, 1])
})

test('getModeSteps Diatonic aeolian', () => {
    const steps = getModeSteps('aeolian')
    expect(steps).toMatchObject([2, 1, 2, 2, 1, 2, 2])
})

test('getModeSteps Diatonic mixolodian', () => {
    const steps = getModeSteps('mixolodian')
    expect(steps).toMatchObject([2, 2, 1, 2, 2, 1, 2])
})

test('getModeSteps Pentatonic ionian', () => {
    const steps = getModeSteps('ionian', "pentatonic")
    expect(steps).toMatchObject([2, 2, 3, 2, 2])
})

test('getModeSteps Pentatonic dorian', () => {
    const steps = getModeSteps('dorian', 'pentatonic')
    expect(steps).toMatchObject([2, 3, 2, 2, 2])
})

test('getModeSteps Pentatonic phrygian', () => {
    const steps = getModeSteps('phrygian', 'pentatonic')
    expect(steps).toMatchObject([3, 2, 2, 2, 2])
})

test('getModeSteps Pentatonic aeolian', () => {
    const steps = getModeSteps('aeolian', 'pentatonic')
    expect(steps).toMatchObject([2, 2, 3, 2, 2])
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

test('getScale A Pentatonic Minor', () => {
    const scale = getScale('minor', 'A', 'pentatonic')
    expect(scale).toStrictEqual(['A', 'C', 'E', 'G', 'A'])
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



