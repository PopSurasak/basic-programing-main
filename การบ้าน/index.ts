function bMi (Kilo:number,Weight:number){
    let score:number=Kilo / (Weight*Weight)
    if (score < 18.50){
        return 'น้ำหนักน้อยผอม'
    } else if (score < 22.90){
        return 'ปกติ(สุขภาพดี)'
    } else if (score < 24.90){
        return 'ท้วม/โรคอ้วนระดับ1'
    } else if (score < 29.90){
        return 'อ้วน/โรคอ้วนระดับ2'
    } else if (score < 30){
        return 'อ้วนมาก/โรคอ้วนระดับ3'
    }
}

console.log(bMi(90,1.76))