const str: string = 'นายสุรศักดิ์ แสงเชื้อพ่อ'

console.log(str.slice(3,12)) // ใส่เลขเพื่อตัดตามจำนวนตัวอักษร



const str: string = 'นายสุรศักดิ์ รักบ้อง รักดูด เชิดชูกัญชา คล้ำจุนยาเสพติด โค๊กสบัด ครัชเสีย'

console.log(str.slice(str.indexOf('เชิดชูกัญชา'),str.indexOf('เชิดชูกัญชา')+"เชิดชูกัญชา".length))//ตัดคำ



const str: string = 'นายสุรศักดิ์ รักบ้อง รักดูด เชิดชูกัญชา คล้ำจุนยาเสพติด โค๊กสบัด ครัชเสีย'

console.log(str.split(","))




const hha:string = 'นายสๆุรศักดิ์ ทดสอบ'

console.log(haa.replaceAll('ทดสอบ','ตัวเอง')) //replace แทนที่คำแรก replaceAll แทนที่คำทั้งหมด




function getPrefix(FullName: string){
    if (FullName.includes('นาย')){
        return 'นาย'
    }else if (FullName.includes('นางสาว')) {
        return 'นางสาว'
    }else '-'
}

console.log(getPrefix('นายสุรศักดิ์ แสงเชื้อพ่อ'))

//&&เป็นจริง ||หรือ 