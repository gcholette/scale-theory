"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
var scales_1 = require("../scales");
/*
test('C Major scale generation', () => {
  const scale = getScale(modes.ionian, 'C')
  expect(scale).toStrictEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'])
})

test('C# Major scale generation', () => {
  const scale = getScale(modes.ionian, 'C#')
  expect(scale).toStrictEqual(['C#', 'Eb', 'F', 'F#', 'Ab', 'Bb', 'C', 'C#'])
}) */
test('A Natural minor scale generation', function () {
    var scale = scales_1.getScale(constants_1.modes.aeolian, 'A');
    expect(scale).toStrictEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'A']);
});
