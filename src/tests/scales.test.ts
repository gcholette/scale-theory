import { modes } from '../constants'
import { getScale } from '../scales'

/*test('getSteps aeolian should return 2 1 2 2 1 2', () => {

}) */

/*
test('C Major scale generation', () => {
  const scale = getScale(modes.ionian, 'C')
  expect(scale).toStrictEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])
})

test('C# Major scale generation', () => {
  const scale = getScale(modes.ionian, 'C#')
  expect(scale).toStrictEqual(['C#', 'Eb', 'F', 'F#', 'Ab', 'Bb', 'C', 'C#'])
}) */

test('A Natural minor scale generation', () => {
  const scale = getScale(modes.aeolian, 'A')
  expect(scale).toStrictEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A'])
})
