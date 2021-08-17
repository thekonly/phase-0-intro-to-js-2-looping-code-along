// Code your solutions in this file
//for (let age=30; age <40; age++) {
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
//}

function writeCards(names,event) {
    const messages = []
    for (let counter =0; counter < names.length; counter++)  {
        messages.push(`Thank you, ${names[counter]}, for the wonderful ${event} gift!`);
    } 
    return messages;

}

function countDown(int) {
    while (int >= 0) {
        console.log(int)
        int--;
    }
}