// Create a table with span elements and false nums in each span element 
let falseNums = []
for(let i=0;i<81;i++){
    let elm = document.createElement("span")
    falseNums[i] = []
    elm.style.border = "1px solid"
    elm.id = "insideSDK"
    document.getElementById("grid").appendChild(elm)
    if((i+1)%3==0 && (i+1)%9!=0){
        elm.style.borderRight = "4px solid"
    }
    if((i>=9*2 && i<9*3)||(i>=9*5 && i<9*6)){
        elm.style.borderBottom = "4px solid"
    }
}
let spans = document.getElementsByTagName("span")

// Generate first random row
row1 = []
for (let i = 0; i < 9; i++) {
    let rand
    do{
        rand = 1+Math.floor(Math.random()*9)
    }while(row1.includes(rand))
    row1[i] = rand
    spans[i].innerHTML = rand
}

// Check the position of the current element inside the square
function currentPosSquare(spanInd){
    let row, column
    if (spanInd%27<9){
        row = 0
    }else if(spanInd%27>=18){
        row = 2
    }else{
        row = 1
    }
    if (spanInd%3==0){
        column = 0
    }else if((spanInd+1)%3==0){
        column = 2
    }else{
        column = 1
    }
    return [row,column]
}
let randValue = 1+Math.floor(Math.random()*9)
let currentInd = 18
let currentNum = randValue
console.log(randValue);
spans[currentInd].innerHTML = currentNum

// Check if elements are repeated in two different indexes 
function repeated(ind1,ind2) {
    return (ind1 != ind2 && spans[ind1].innerHTML == spans[ind2].innerHTML)
}

//Repeated Horizontal and Vertical Lines
function repeatedLines(currentInd){
    for (let i = 0; i < 9; i++) {
        if (repeated(9*i+currentInd%9,currentInd)||repeated(currentInd-currentInd%9 + i,currentInd)){
            return true
        }
    }
}

// Repeated Square
function repeatedSquare(currentInd) {
    let firstPosSquare = currentInd - 9*currentPosSquare(currentInd)[0] - currentPosSquare(currentInd)[1]
    for (let i = 0; i < 3; i++){
        if(repeated(firstPosSquare+i,currentInd)||repeated(firstPosSquare+9+i,currentInd)||repeated(firstPosSquare+18+i,currentInd)){
            return true
        }
    }
    return false
}

// Backtracking
for (let currentInd = 9; currentInd < 81;){
    spans[currentInd].innerHTML = currentNum
    if(repeatedLines(currentInd)||repeatedSquare(currentInd)||falseNums[currentInd].includes(currentNum)){
        if(!falseNums[currentInd].includes(currentNum)){
            falseNums[currentInd].push(currentNum)
        }
        if(falseNums[currentInd].length == 9){
            falseNums[currentInd] = []
            spans[currentInd].innerHTML = ""
            currentInd--
            currentNum = parseInt(spans[currentInd].innerHTML)
            falseNums[currentInd].push(currentNum)
        }else{
            currentNum = (currentNum%9)+1
        }
    }else{
        currentInd++
        currentNum = randValue
    }
}



for(let i=0;i<81;i++){
    let objColors = {1:"red",2:"blue",3:"brown",4:"yellow",5:"gray",6:"green",7:"skyblue",8:"orange",9:"white"}
    spans[i].style.background = objColors[spans[i].innerHTML]
}



