function add(a: number, b : number) {     
    return a + b
}

console.log(add(5,8))

function remove(a: number, b: number) {     
    return a - b
}
console.log (remove(10,7))

function adds(a: number, b: number, c: number, d: number) {
    return (a*b*c*d)
}
console.log (adds(210,100,30,65))

function grade(homework: number,midterm: number,finall: number){
    let score: number = homework + midterm + finall

    if (score < 50){
        return 'เกรดF'
    } else if (score < 60) {
        return 'เกรดD'
    } else if (score <70) {
        return 'เกรดC'
    } else if (score <80) {
        return 'เกรดB'
    } else {
        return 'เกรดA'
    }
}
   

console.log(grade(13,27,30))