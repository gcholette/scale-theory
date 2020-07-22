"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScale = void 0;
var _a = require('./constants'), majorSteps = _a.majorSteps, modes = _a.modes, noteSemitonesHashMap = _a.noteSemitonesHashMap, noteSemitonesArray = _a.noteSemitonesArray;
var getSteps = function (modeIndex) { return [majorSteps.slice(modeIndex + 1), majorSteps.slice(0, modeIndex)].flat(); };
var getScaleSemitones = function (modeIndex, tonalityIndex) {
    var steps = getSteps(modeIndex);
    console.log('steps', steps);
    var tones = steps.reduce(function (acc, step) {
        if (acc.length === 0) {
            var val = (step + tonalityIndex) % 12;
            return [tonalityIndex, val];
        }
        else {
            var val = (acc[acc.length - 1] + step) % 12;
            return __spreadArrays(acc, [val]);
        }
    }, []);
    return tones;
};
exports.getScale = function (modeIndex, note) {
    return getScaleSemitones(modes.ionian, noteSemitonesHashMap[note]).map(function (x) { return noteSemitonesArray[x]; });
};
/*
console.log('C Major: ', getScaleSemitones(modes.ionian, noteSemitonesHashMap['C']).map(x => noteSemitonesArray[x]))
console.log('D Natural minor: ', getScaleSemitones(modes.aeolian, noteSemitonesHashMap['D']).map(x => noteSemitonesArray[x]))
console.log('A lydian: ', getScaleSemitones(modes.lydian, noteSemitonesHashMap['A']).map(x => noteSemitonesArray[x]))
console.log('B lydian: ', getScaleSemitones(modes.lydian, noteSemitonesHashMap['B']).map(x => noteSemitonesArray[x]))
console.log('Bb lydian: ', getScaleSemitones(modes.lydian, noteSemitonesHashMap['Bb']).map(x => noteSemitonesArray[x]))

console.log('A', getScaleSemitones(modes.lydian, noteSemitonesHashMap['A']))
console.log('A', getScaleSemitones(modes.lydian, noteSemitonesHashMap['A']))
 */
