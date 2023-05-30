//  {
//     var a = 5; 
//     var b, c;
//     b = a * 5;  
//     b = c = b/2;
//     prompt(b)
// }

// {
//     let question = +prompt('Вкажіть скільки вам років ?')
//     let year = 2023
//     let result = year - question
//     alert(`Ви ${result} року народження`)
// }

// {
//     let question = +prompt('Вкажіть скільки *С потрібно перетворити в Фаренгейт ?')
//     let fahrenheit = 273    
//     let result = fahrenheit + question
//     alert(`Задана вами температу в Фаренгейтах буде  ${result}`)
// }

// {
//     let question = +prompt('Вкажіть число')
//     let question1 = +prompt('Вкажіть число')
//     let division = question/question1
//     let result =Math.floor(division)
//     alert(`Ваш результат ${result}`)
// }

// {
//     const rate = +prompt('Введіть курс валюти')
//     const question = +prompt('Введіть суму яку хочете перевести в гривні ₴')
//     const result = rate * question
//     const resultat = result.toFixed(2)
//     alert(`Сума в гривнях дорівнює: ${resultat}`)
// }

{
    let floor = prompt("Введіть кількість поверхів");
    let apartment = prompt("Введіть кількість квартир на поверсі");
    let room = prompt("Введіть номер квартири");
    let entrance = Math.ceil(room / (floor * apartment));
    let floor1 = Math.ceil((room % (floor * apartment)) / apartment);
    alert(`Під'їзд номер ${entrance}\nПоверх номер ${floor1}`);
}