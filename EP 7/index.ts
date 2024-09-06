const score = [10,23,30,33]

let ssum:number = 0 

for (let i = 0; i < score.length; i++){
    ssum = ssum + score [i]
}
let avg = ssum/score.length // ค่าเฉลี่ย
console.log ("total:",ssum) // หาผลรวม for loop
console.log ("Avg",avg)// หาค่าเฉลี่ย for loop


const myStudents: string ="เซน,แทน,เวฟ,รุ้ง,เท็ก,สร"
const myStudentstsArray: string[] = myStudents.split(',')


console.log(myStudents)
console.log(myStudentstsArray[0])

const fullName: String = 'สุดสวย สวยสุด'

console.log(fullName.split(' ')[1]) //เลือกตัดคำแบบ array[number]

console.log(fullName.slice(0, fullName.indexOf(' '))) // แบบstring


const sus: string = "ควาย*ช้าง*จระเข้*เหี้ย"

const susArray: string[] = sus.split("*")

console.log(susArray)//Arrayคือ[] ทำให้ใช้คำสั่งสั้นลง ใส่splitด้วย




const ssus: string = "ควาย*ช้าง*จระเข้*แมว"

const susAsrray: string[] = sus.split("*")

console.log("ตั้งต้น",susArray)

susArray.pop() //เอาตัวสุดท้ายออก

console.log("เอาตัวสุดท้ายออก: ",susArray)

susArray.push('ลิง') // ใส่ต่อท้าย

console.log("ใส่ต่อท้าย: ", susArray)

susArray.shift()//เอาตัวหน้าออก

console.log("เอาตัวหน้าออก: ", susArray)

susArray.unshift('หนูท่อ')//ใส่ตัวหน้า

console.log("ใส่ตัวหน้า:", susArray)



const fruits = ["Banana","Orange","Apple","Mango"]

fruits.sort() // เรียงA-Z

console.log(fruits)

fruits.reverse()//เรียงZ-A

console.log(fruits)

const fruitsslice = fruits.slice(0,2)// ตัดคำ แต่ต้องสร้างตัวแปรออกมาอีกหนึ่ง

console.log(fruitsslice)


const friendName:string = "เซฟ,เกม,มิกซ์,ฟิวส์"

const friendNameArray:string[] = friendName.split(',')

friendNameArray.sort()
console.log(friendNameArray)

friendNameArray.reverse()
console.log(friendNameArray)//แบบฝึกหัด


const meie = {
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
    Email:'dkopdjlspdldpaw@gamil.com'//การบ้าน
}

console.log(me.firstName)

//ประวัติส่วนตัว

//ชื่อ: Isus
//นามสกุล:zazazalnw
//อายุ:10
//เบอร์:1668
//บ้าน:000/00
//หมู่ที่:-
//ถนน:kqeo4ew1
//แขวง:apaqewdo3ew
//เขต:AQDSSPLP
//จังหวัด:fadlelkpq
//เลขสไปรษณีย์:2910839173
//อีเมล:dkopdjlspdldpaw@gmail.com