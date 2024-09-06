const me = {
    firstName: 'Isus',
    lastName: 'zazazalnw',
    age:10,
    Call: '1668',
    home:'000/00',
    atmoo: '-',
    road:'kqeo4ew1',
    khwang:'apaqewdo3ew',
    district:'AQDSSPLP',
    province:'fadlelkpq',
    zipcode:'2910839173',
    Email:'dkopdjlspdldpaw@gamil.com',//การบ้าน
    fan: {
        firstName:'faning',
        lastName:'ok',
        AKA:'fan',
        animal: {
            animalfull:'nigga',
            color: 'black',
        }
    },
    bro: {
        firstName:'ratchathep',
        lastName:'rattamawong',
        AKA:'save',
        animal:{
            animalok:'dog',
            color:'black',
        }
    }
}


console.log(me.bro.firstName)

const myFriend = [{
    firstName: 'Lisa',
    lastName: 'Mama',
    AKA: 'Kpop',
    age: 16//index(0)
},{
    firstName: 'Lisa',
    lastName: 'Mama',
    AKA: 'Kgb',
    age: 15//index(1)
},{
    firstName: 'Lisa',
    lastName: 'Mama',
    AKA: 'Rgb',
    age: 20//index(2)
},{
    firstName: 'Lisa',
    lastName: 'Mama',
    AKA: 'Gta',
    age: 18//index(3)
}]

const myFriendAKA = myFriend.map(function(element, index){
    return({
        firstName: element.firstName,
        AKA: element.AKA
    })
})

console.log(myFriend)

const myFriendMoreThan = myFriend.filter(function(element, index){
    return element.age > 19 && element.lastName === 'Mama'
})

console.log(myFriendMoreThan)