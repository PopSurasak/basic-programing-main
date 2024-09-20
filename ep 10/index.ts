console.log("1")
console.log("2")
console.log("3")

setTimeout(() => {
    console.log("4")
})

console.log("5")


//zane.com -> No
//tan@ -> Nod
//safe@utk.ac.th -> Yes
//poppy@gmail.com -> Yes
const database = [
    {email : 'user@gmail',
    password : 'Loveyou3000'
    }
]




function refister(email: string, password: string) {
    if (email.includes ('@') && email.lastIndexOf('@') !==email.length - 1){
        if (password.length  > 8 && password.length < 16) {
            const userObject = {
                email: email,
                password: password
            }
            database.push(userObject)
            alert('สมัครสมาชิกแล้วจ้า ยินต้อนรับไอ้โง่' + email)

        } else {
            alert('ระหัสผ่านต้องมากกว่า 8 ตัว และไม่เกิน 16 ตัว')
        }

    }else {
        alert('Email ไม่ถูกต้อง')
    }
}

refister('pop@gmail', 'Loveyou3000')



const database = [
    {email : 'user@gmail',
    password : 'Loveyou3000'
    },
    {
        email : 'user@gmail',
        password : 'Loveyou3000'
    }
]


function login(email: string, password: string) {
    const user = database.filter(function(element, index){
        return element.email === email
    })
    if (user.length > 0) {
        if (user[0].password === password){
            alert('เข้าสู่ระบบสำเร็จ ไม่ยินดีต้อนรับไอ้หอกหัก')
        } else {
            alert('ระหัสผ่านไม่ถูกต้อง โปรดตรวจสอบครับไอ้โง่ ')
        }
    }else {
        alert('ไม่พบผู้ใช้งานในระบบ ไปเขียนใหม่ไอ้ควาย')
    }
}

login('pop@gmail.com','123457แปด')



// กฎการเข้าระหัส
// เปลี่ยน u เป็น +
// เปลี่ยน 6 เป็น *
// เปลี่ยน 0 เป็น ^



const database = [
    {email : 'user@gmail.com',
    password : 'Loveyo+3^^^'
    },
    {
        email : 'user@gmail.com',
        password : 'Loveyo+3^^^'
    }
]

function decryptPassword(password:string){
    return password.replaceAll('+', 'u').replaceAll('*', '6').replaceAll('^', ('0'))
}


function login(email: string, password: string) {
    const user = database.filter(function(element, index){
        return element.email === email
    })
    if (user.length > 0) {
        const realPassword = decryptPassword(user[0].password)
        if (realPassword === password){
            alert('เข้าสู่ระบบสำเร็จ ไม่ยินดีต้อนรับไอ้หอกหัก')
        } else {
            alert('ระหัสผ่านไม่ถูกต้อง โปรดตรวจสอบครับไอ้โง่ ')
        }
    }else {
        alert('ไม่พบผู้ใช้งานในระบบ ไปเขียนใหม่ไอ้ควาย')
    }
}

login('user@gmail.com','Loveyo+3^^^')