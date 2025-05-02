let numbers = [2,3,4,5,6,7]
number = [1,2,3,4,5]

const answers = numbers.map(square)
const sols = numbers.map(cube)
console.log(sols)
console.log(answers)
function square(element){
    return Math.pow(element,2)
}
function cube(element){
    return Math.pow(element,3)
}
function squares(element,index,array){
    array[index] = element * 2
}
const fors = number.forEach(squares)
console.log(fors)