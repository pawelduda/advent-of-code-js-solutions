'use strict'

var fs = require('fs')
var path = require('path')

var inputFilePath = path.join(__dirname, 'input.txt')
var input = fs.readFileSync(inputFilePath, 'utf8')
var floor = 0

for (let i = 0; i < input.length; i++) {
  if (input.charAt(i) === '(') {
    floor += 1
  } else if (input.charAt(i) === ')') {
    floor -= 1
  }
}

console.log(floor)
