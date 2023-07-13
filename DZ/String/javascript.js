// // One lisining
// {
// let question = prompt('Вкажіть своє ім`я')
// alert (`Привіт ${question}`)
// }

// // two lisining
// {
//     let question = prompt('Задайте питання')
//     let split = question.split(' ')
//     let join = split.join(' , блін ')
//     alert(join)
// }
// // tree lisining
// {
//     let str = "cANBerRa"
//     str = str[0].slice().toUpperCase() + str.toLowerCase().slice(1)
//     console.log(str)
// }
// four lisining
// {
//     let name = prompt('Enter you name').trim()
//     let surname = prompt('Enter you surname').trim()
//     let firstname = prompt('Enter you firstname').trim()
//     name = name[0].slice().toUpperCase() + name.toLowerCase().slice(1)
//     surname = surname[0].slice().toUpperCase() + surname.toLowerCase().slice(1)
//     firstname = firstname[0].slice().toUpperCase() + firstname.toLowerCase().slice(1)
//     let fullName =` ${name} ${surname} ${firstname} `
//     console.log(fullName)
//     alert(fullName)
// }
// five lisining
// {
//     let str = "Было жарко. Василий пил пиво вприкуску с креветками"
//     let str0 = str.slice(0, 24)
//     str0 += 'чай'
//     let str1 = str.slice(28 ,51)
//     let result = str0 + str1 
//     console.log(result)
// }
// six lisining
// {
    // let str = "какой-то текст в котором есть один тэг <br /> и всякое другое"
    // let str0 =str.length
    // let str1 = str.indexOf('<br />')
    // let str2 = str.slice(0 ,39)
    // let str3 = str.slice(46 ,61)
    // let result = str2 + str3
    // console.log(result) 
// }
// seven lisining
{
    let str = "какой-то текст в котором есть один тэг <br /> и всякое другое"
    let str0 =str.length
    let str1 = str.indexOf('<br />')
    let str2 = str.slice(0 ,39)
    let str3 = str.slice(39, 46).toUpperCase()
    let str4 = str.slice(46 ,61)
    let result = str2 + str3 + str4
    console.log(result)
}


