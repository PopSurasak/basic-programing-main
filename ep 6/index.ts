let sum: number = 0

for (let i = 1; i <= 31; i++) {
    sum = sum + i
}

console.log('Total', sum)//บวกเลข for Loop



let sua:number = 0
let i: number = 1

while (i <=31) {
    sua = sua + 1
    i++
}

console.log ('Total',sua)//while Loop



let poppy:number = 0
let q: number = 1


do{
    poppy = poppy + q
    q++
} while (q <= 31)

console.log ('total', poppy)//do while Loop

let count: number = 0

while (true) {
    console.log("คอมเม้นแรกนะครับ")
    count++
    if(count=== 10){
        break
    }
}


let count: number = 0


while(true) {
    console.log('ฉันอายุ'+count+'ปี')
    if(count===20){
        break
    }

    count++
}


let pop:number= 0
for (let i = 1; i <= 19; i++){
    console.log('ฉันอายุ' + 1 + 'ปี')
}

let i: number = 1
while (i <= 19) {
    console.log('ฉันอายุ' + 1 + 'ปี')
    i++
}

let i: number = 1
do{
    console.log('ฉันอายุ'+ 1 + 'ปี')
    i++
} while (i <= 19)


    let car1: string = 'Toyota'
let car2: string = 'honda'
let car3: string = 'Suzuki'
let car4: string = 'Yamaha'
let car5: string = 'Mazda'

const cars =['Toyota','honda','Suzuki','Yamaha','Mazda']

cars[2]='worche'

console.log(cars[2])


const cars:string [] =['Toyota','honda','Suzuki','Yamaha','Mazda']

for (let i = 0; i < cars.length; i++){
    if(cars[i]==='Yamaha'){
      console.log('รถซื้อแกง จะไปแรงได้ไง')
    }
}


const namenick:string [] =['save','mix','game','file','pop']

for (let i = 0; i < namenick.length; i++){
    if(namenick[i]==='save'){
       console.log('ไปกินหมู กระทะกัน')
    }
}


const num:number [] =[1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < num.length; i++){
    if(num [i] === 3 ||num [i] === 5||num [ i] === 7){
       num[i] = 0
    }
}
console.log (num)//แทนค่าเลขทิ่กำหนดด้วยเลขที่ต้องการ
