function helloWorld() {
    console.log("สวัสดี")
}

้helloWorld() // ไม่มี input ไม่มี output

function helloName(name: string) {
    console.log(name)
}

helloName('poppy')
function getPi(){
    return 3.14
}

getPi()
console.log(getPi())

function st(fname: string, sname: string){

    if (fname === 'mix' || sname === 'zane') {
        console.log ('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

st( 'mix' ,'zane' )

function st(fname: string, sname: string, pname: string) {

    if (fname === 'mix' && sname === 'zane' || pname === 'forth'){
        console.log ('พร้อมเรียน')
    }else {
        console.log ('ยังไม่พร้อม')
    }
}

st('mix','zane','forth')

function st(hman: string, cm: number, kilo: number) {

    if (hman === 'man' && (cm  > 170 || kilo > 50 && kilo <= 110)){
        console.log ('จับใบดำใบแดง')
    }else {
        console.log ('ไม่เข้าเกณฑ์')
    }
}

st('man',182,90)

function st(old: number, salary: number, deposit: number) {

    if (old > 16 && salary < 70000 && deposit < 500000) {
        console.log ('รับเงิน10000')
    }else{
        console.log ('อดแดก')
    }
}

st(17,50000,400000)