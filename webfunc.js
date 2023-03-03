
function randomnum() {
    let x =  Math.floor(Math.random() * 100)
    if (x < 42 && x > 0) {
        return `${x}, which is less than the meaning of life`
    }
    else if (x === 42) {
        return `${x}, the meaning of life`
    }
    else if (x > 42 && x < 100) {
        return `${x}, which is (numerically speaking) greater than than the meaning of life`
    } 
}

function randNum(){
    document.getElementById("randNum").innerHTML = randomnum();
}
