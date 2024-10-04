const cars = ['Tokota','BMW','Honda']

cars.length //3
cars[2]= 'Suzuki' // เข้าถึงค่า


for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}//for loop ต้องมีแบบนี้เสมอ

let i = 0
while (cars.length) {
    console.log("while", cars[i]) ;
    i++;
}



const person = {
    firstName: 'John',
    LastName: 'Doe',
    age: 15,
    isMale:true,
    sister: {
        firstName: 'Jane',
        LastName: 'Doe',
        age: 12,
        isMale: false
    }
}

person.sister.LastName
person.age = 16