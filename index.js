// Code your solutions in this file
// for (let age = 30; age < 40; age ++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger
// }

// const gifts = ['teddy bear', 'drone', 'doll'];
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
       
//     }
//     return gifts
// }
// wrapGifts(gifts)


function writeCards(arrayOfNames, eventName) {
    let newArray = []
    for (let n = 0; n < arrayOfNames.length; n++) {
    newArray.push(`Thank you, ${arrayOfNames[n]}, for the wonderful ${eventName} gift!`)
    }
     return newArray  
}
// writeCards([ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise')

function countDown(integer) {
     while (integer >= 0) {
        console.log(integer--)
        
    }
}