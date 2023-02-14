/*

*/

function xify(str) {
    let output = ''
    for (let i = 0; i < str.length; i++) {
        output += 'x'
    }
    return output
}

console.log(xify('Makai'))



function yellingChars(str) {
    let x = ''

    for (let i = 0; i < str.length; i++) {
        x = x + str[i] + '!'
    }
    return x
}

console.log(yellingChars('goodness'))


function indexChars(str) {
    let x = ''

    for (let i = 0; i < str.length; i++) {
        x += i + str[i]
    }
    return x
}

console.log(indexChars('Makai'))


function exclaim(str) {
    let x = str.split((''))
    for (let i = 0; i < x.length; i++) {
        if (x[i] === '.' || x[i] === '?') {
            x[i] = '!'
        }
    }
    x = x.join('')
    return x
}

console.log(exclaim('What are you doing? Are you a fool?'))
// console.log(exclaim('This is fine.'))



function truncate(str) {
    if (str.length > 15) {
        let output = str.slice(0, 15)
        return output + '...'
    }
    return str
}

console.log(truncate('The fault, dear Brutus, is not in our stars, but in ourselves.'))
// console.log(truncate("Well, that's just, like, your opinion man."))



function ciEmailify(name) {
    let email = '@codeimmersives.com'
    let output = name.split(' ')
    output = output.join('.')
    return output + email
}

console.log(ciEmailify('colin jaffe'))
console.log(ciEmailify('Anthony DeRosa'))



function reverse(str) {
    let output = str.split('')
    output = output.reverse()
    output = output.join('')
    return output
}

console.log(reverse('colin'))



function onlyVowels(str) {
    let output = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u') {
            output += str[i]
        }
    }
    return output
}

console.log(onlyVowels('Colin Jaffe'))



function crazyCase(word) {
    let x = ''
    for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
            x += word[i].toLowerCase()
        } else {
            x += word[i].toUpperCase()
        }
    }
    return x
}

console.log(crazyCase('hello'))



function titleCase(str) {
    let output = str.split(' ')
    let x = ''
    for (let i = 0; i < output.length; i++) {
        x += output[i][0].toUpperCase()
    }
    
    return x
}

console.log(titleCase('return of the king'))



function camelCase() {

}

// console.log()




function crazyCase2ReturnOfCrazyCase() {

}

// console.log(crazyCase2ReturnOfCrazyCase())