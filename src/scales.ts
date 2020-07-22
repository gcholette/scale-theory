const { majorSteps, modes, noteSemitonesHashMap, noteSemitonesArray } = require('./constants')

export const getSteps = (modeIndex) => [ majorSteps.slice(modeIndex), majorSteps.slice(0, modeIndex)].flat()

export const getScaleSemitones = (modeIndex, tonalityIndex) => {
	const steps = getSteps(modeIndex)
	console.log('steps', steps)
	const tones = steps.reduce((acc, step) => {
		if (acc.length === 0) {
		  const val = (step + tonalityIndex) % 12
			return [tonalityIndex, val]
		} else {
			const val = (acc[acc.length -1] + step) % 12
			return [...acc, val]
		}
	}, [])

	return tones 
}

export const getScale = (modeIndex, note) => {
	return getScaleSemitones(modes.ionian, noteSemitonesHashMap[note]).map(x => noteSemitonesArray[x])

}

/*
console.log('C Major: ', getScaleSemitones(modes.ionian, noteSemitonesHashMap['C']).map(x => noteSemitonesArray[x]))
console.log('D Natural minor: ', getScaleSemitones(modes.aeolian, noteSemitonesHashMap['D']).map(x => noteSemitonesArray[x]))
console.log('A lydian: ', getScaleSemitones(modes.lydian, noteSemitonesHashMap['A']).map(x => noteSemitonesArray[x]))
console.log('B lydian: ', getScaleSemitones(modes.lydian, noteSemitonesHashMap['B']).map(x => noteSemitonesArray[x]))
console.log('Bb lydian: ', getScaleSemitones(modes.lydian, noteSemitonesHashMap['Bb']).map(x => noteSemitonesArray[x]))

console.log('A', getScaleSemitones(modes.lydian, noteSemitonesHashMap['A']))
console.log('A', getScaleSemitones(modes.lydian, noteSemitonesHashMap['A']))
 */
