window.onload = ()=>{
    const oneToNine = [1,2,3,4,5,6,7,8,9]
    // Make a table
    for(let i=0;i<81;i++){
        let elm = document.createElement("span")
        elm.innerHTML = i%9+1
        elm.style.border = "1px solid"
        elm.id = "insideSDK"
        document.getElementById("grid").appendChild(elm)
        if(elm.innerHTML == 6 || elm.innerHTML == 3){
            elm.style.borderRight = "4px solid"
        }
        if((i>=9*2 && i<9*3)||(i>=9*5 && i<9*6)){
            elm.style.borderBottom = "4px solid"
        }
    }
    let spans = document.getElementsByTagName("span")
    
    // Shuffle an array
    function shuffled_arr(arr){
        let shuffled = []
        while(shuffled.length<arr.length){
            let rand = arr[Math.floor(Math.random()*arr.length)]
            if(shuffled.indexOf(rand) == -1){
                shuffled.push(rand)
            }
        }
        return shuffled
    }
    // Check if an array has a repeated number
    function repeat_found(arr){
        let rep = false
        for (let index = 0; index < arr.length; index++){
            for (let j = 0; j < arr.length; j++) {
                if((arr[index].innerHTML===arr[j].innerHTML) && (index!==j)){
                    rep = true
                }
            }
        }
        return rep
    }
    
    
    // Function to swap two elements in the array "spans"  
    function processLine(spans,ind,j) {
        let temp = spans[ind].innerHTML
        spans[ind].innerHTML = spans[j].innerHTML
        spans[j].innerHTML = temp
    
    }
    
    
    //          First Line
    function firstLine(){
        let line1 = shuffled_arr(oneToNine)
        for(let i=0;i<9;i++){
            spans[i].innerHTML = line1[i]
        }
    }
    firstLine()
    //           Second Line
    function secondLine(){
    for(let ind=9;ind<12;ind++){
        if([spans[0].innerHTML,spans[1].innerHTML,spans[2].innerHTML].indexOf(spans[ind].innerHTML)!= -1){
            for(let j=12;j<15;j++){
                if([spans[0].innerHTML,spans[1].innerHTML,spans[2].innerHTML].indexOf(spans[j].innerHTML) == -1 && [spans[3].innerHTML,spans[4].innerHTML,spans[5].innerHTML].indexOf(spans[ind].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
            for(let j=15;j<18;j++){
                if([spans[0].innerHTML,spans[1].innerHTML,spans[2].innerHTML].indexOf(spans[j].innerHTML) == -1 && [spans[6].innerHTML,spans[7].innerHTML,spans[8].innerHTML].indexOf(spans[ind].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
        }
    }
    let randArr = shuffled_arr([spans[9].innerHTML,spans[10].innerHTML,spans[11].innerHTML])
    for(let ind=9;ind<12;ind++){
        spans[ind].innerHTML = randArr[ind-9]
    }
    
    for(let ind=12;ind<15;ind++){
        if([spans[3].innerHTML,spans[4].innerHTML,spans[5].innerHTML].indexOf(spans[ind].innerHTML)!= -1){
            for(let j=9;j<12;j++){
                if([spans[3].innerHTML,spans[4].innerHTML,spans[5].innerHTML].indexOf(spans[j].innerHTML) == -1 && [spans[0].innerHTML,spans[1].innerHTML,spans[2].innerHTML].indexOf(spans[ind].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
            for(let j=15;j<18;j++){
                if([spans[3].innerHTML,spans[4].innerHTML,spans[5].innerHTML].indexOf(spans[j].innerHTML) == -1 && [spans[6].innerHTML,spans[7].innerHTML,spans[8].innerHTML].indexOf(spans[ind].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
        }
    }
    
    for(let ind=15;ind<18;ind++){
        if([spans[6].innerHTML,spans[7].innerHTML,spans[8].innerHTML].indexOf(spans[ind].innerHTML)!= -1){
            for(let j=9;j<12;j++){
                if([spans[6].innerHTML,spans[7].innerHTML,spans[8].innerHTML].indexOf(spans[j].innerHTML) == -1 && [spans[0].innerHTML,spans[1].innerHTML,spans[2].innerHTML].indexOf(spans[ind].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
            for(let j=12;j<15;j++){
                if([spans[6].innerHTML,spans[7].innerHTML,spans[8].innerHTML].indexOf(spans[j].innerHTML) == -1 && [spans[3].innerHTML,spans[4].innerHTML,spans[5].innerHTML].indexOf(spans[ind].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
        }
    }
    randArr = shuffled_arr([spans[15].innerHTML,spans[16].innerHTML,spans[17].innerHTML])
    for(let ind=15;ind<18;ind++){
        spans[ind].innerHTML = randArr[ind-15]
    }
    }
    
    secondLine()
    
    //          Third Line
    function thirdLine(){
    let line12_1 = [spans[0].innerHTML,spans[1].innerHTML,spans[2].innerHTML,spans[9].innerHTML,spans[10].innerHTML,spans[11].innerHTML]
    let line3_1 = shuffled_arr(oneToNine.filter(x=>{return line12_1.indexOf(x.toString())===-1}))
    for (let index = 18; index < 21; index++) {
        spans[index].innerHTML = line3_1[index-18]
    }
    
    let line12_2 = [spans[3].innerHTML,spans[4].innerHTML,spans[5].innerHTML,spans[12].innerHTML,spans[13].innerHTML,spans[14].innerHTML]
    let line3_2 = shuffled_arr(oneToNine.filter(x=>{return line12_2.indexOf(x.toString())===-1}))
    for (let index = 21; index < 24; index++) {
        spans[index].innerHTML = line3_2[index-21]
    }
    
    let line12_3 = [spans[6].innerHTML,spans[7].innerHTML,spans[8].innerHTML,spans[15].innerHTML,spans[16].innerHTML,spans[17].innerHTML]
    let line3_3 = shuffled_arr(oneToNine.filter(x=>{return line12_3.indexOf(x.toString())===-1}))
    for (let index = 24; index < 27; index++) {
        spans[index].innerHTML = line3_3[index-24]
    }
    }
    
    thirdLine()
    
    //          Fourth Line
    
    function fourthLine(){
    for(let ind=27;ind<36;ind++){
        if([spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML,spans[ind-9].innerHTML].indexOf(spans[ind].innerHTML)!= -1){
            for(let j=27;j<36;j++){
                if([spans[j-(9*3)].innerHTML,spans[j-(9*2)].innerHTML,spans[j-9].innerHTML].indexOf(spans[ind].innerHTML) == -1 && [spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML,spans[ind-9].innerHTML].indexOf(spans[j].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
        }
    }
    }
    fourthLine()
    
    
    //          Fifth Line
    
    
    function fifthLine(){
    let randArr = shuffled_arr(oneToNine)
    for(let i=36;i<45;i++){
        spans[i].innerHTML = randArr[i-36]
    }
    for(let ind=36;ind<39;ind++){
        if([spans[27].innerHTML,spans[28].innerHTML,spans[29].innerHTML,spans[ind-(9*4)].innerHTML,spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML].indexOf(spans[ind].innerHTML)!= -1){
            for(let j=39;j<42;j++){
                if([spans[30].innerHTML,spans[31].innerHTML,spans[32].innerHTML,spans[j-(9*4)].innerHTML,spans[j-(9*3)].innerHTML,spans[j-(9*2)].innerHTML].indexOf(spans[ind].innerHTML) == -1 && [spans[27].innerHTML,spans[28].innerHTML,spans[29].innerHTML,spans[ind-(9*4)].innerHTML,spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML].indexOf(spans[j].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
            for(let j=42;j<45;j++){
                if([spans[33].innerHTML,spans[34].innerHTML,spans[35].innerHTML,spans[j-(9*4)].innerHTML,spans[j-(9*3)].innerHTML,spans[j-(9*2)].innerHTML].indexOf(spans[ind].innerHTML) == -1 && [spans[27].innerHTML,spans[28].innerHTML,spans[29].innerHTML,spans[ind-(9*4)].innerHTML,spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML].indexOf(spans[j].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
            for(let j=36;j<39;j++){
                if([spans[j-(9*4)].innerHTML,spans[j-(9*3)].innerHTML,spans[j-(9*2)].innerHTML].indexOf(spans[ind].innerHTML) == -1 && [spans[ind-(9*4)].innerHTML,spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML].indexOf(spans[j].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
        }
    }
    for(let ind=39;ind<42;ind++){
        if([spans[30].innerHTML,spans[31].innerHTML,spans[32].innerHTML,spans[ind-(9*4)].innerHTML,spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML].indexOf(spans[ind].innerHTML)!= -1){
            for(let j=36;j<39;j++){
                if([spans[27].innerHTML,spans[28].innerHTML,spans[29].innerHTML,spans[j-(9*4)].innerHTML,spans[j-(9*3)].innerHTML,spans[j-(9*2)].innerHTML].indexOf(spans[ind].innerHTML) == -1 && [spans[30].innerHTML,spans[31].innerHTML,spans[32].innerHTML,spans[ind-(9*4)].innerHTML,spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML].indexOf(spans[j].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
            for(let j=42;j<45;j++){
                if([spans[33].innerHTML,spans[34].innerHTML,spans[35].innerHTML,spans[j-(9*4)].innerHTML,spans[j-(9*3)].innerHTML,spans[j-(9*2)].innerHTML].indexOf(spans[ind].innerHTML) == -1 && [spans[30].innerHTML,spans[31].innerHTML,spans[32].innerHTML,spans[ind-(9*4)].innerHTML,spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML].indexOf(spans[j].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
            for(let j=39;j<42;j++){
                if([spans[j-(9*4)].innerHTML,spans[j-(9*3)].innerHTML,spans[j-(9*2)].innerHTML].indexOf(spans[ind].innerHTML) == -1 && [spans[ind-(9*4)].innerHTML,spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML].indexOf(spans[j].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
        }
    }
    for(let ind=42;ind<45;ind++){
        if([spans[33].innerHTML,spans[34].innerHTML,spans[35].innerHTML,spans[ind-(9*4)].innerHTML,spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML].indexOf(spans[ind].innerHTML)!= -1){
            for(let j=36;j<39;j++){
                if([spans[27].innerHTML,spans[28].innerHTML,spans[29].innerHTML,spans[j-(9*4)].innerHTML,spans[j-(9*3)].innerHTML,spans[j-(9*2)].innerHTML].indexOf(spans[ind].innerHTML) == -1 && [spans[33].innerHTML,spans[34].innerHTML,spans[35].innerHTML,spans[ind-(9*4)].innerHTML,spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML].indexOf(spans[j].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
            for(let j=39;j<42;j++){
                if([spans[30].innerHTML,spans[31].innerHTML,spans[32].innerHTML,spans[j-(9*4)].innerHTML,spans[j-(9*3)].innerHTML,spans[j-(9*2)].innerHTML].indexOf(spans[ind].innerHTML) == -1 && [spans[33].innerHTML,spans[34].innerHTML,spans[35].innerHTML,spans[ind-(9*4)].innerHTML,spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML].indexOf(spans[j].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
            for(let j=42;j<45;j++){
                if([spans[j-(9*4)].innerHTML,spans[j-(9*3)].innerHTML,spans[j-(9*2)].innerHTML].indexOf(spans[ind].innerHTML) == -1 && [spans[ind-(9*4)].innerHTML,spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML].indexOf(spans[j].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
        }
    }
    }
    
    
    
    
    //          Sixth Line
    
    function sixthLine() {
    let line45_1 = [spans[27].innerHTML,spans[28].innerHTML,spans[29].innerHTML,spans[36].innerHTML,spans[37].innerHTML,spans[38].innerHTML]
    for (let index = 45; index < 48; index++) {
        spans[index].innerHTML = oneToNine.filter(x=>{return line45_1.indexOf(x.toString())==-1})[index-45]
    }
    for(let ind=45;ind<48;ind++){
        if([spans[ind-(9*5)].innerHTML,spans[ind-(9*4)].innerHTML,spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML,spans[ind-9].innerHTML].indexOf(spans[ind].innerHTML)!= -1){
            for(let j=45;j<48;j++){
                if([spans[j-(9*5)].innerHTML,spans[j-(9*4)].innerHTML,spans[j-(9*3)].innerHTML,spans[j-(9*2)].innerHTML,spans[j-9].innerHTML].indexOf(spans[ind].innerHTML) == -1 && [spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML,spans[ind-9].innerHTML].indexOf(spans[j].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
        }
    }
    let line45_2 = [spans[30].innerHTML,spans[31].innerHTML,spans[32].innerHTML,spans[39].innerHTML,spans[40].innerHTML,spans[41].innerHTML]
    for (let index = 48; index < 51; index++) {
        spans[index].innerHTML = oneToNine.filter(x=>{return line45_2.indexOf(x.toString())===-1})[index-48]
    }
    for(let ind=48;ind<51;ind++){
        if([spans[ind-(9*5)].innerHTML,spans[ind-(9*4)].innerHTML,spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML,spans[ind-9].innerHTML].indexOf(spans[ind].innerHTML)!= -1){
            for(let j=48;j<51;j++){
                if([spans[j-(9*5)].innerHTML,spans[j-(9*4)].innerHTML,spans[j-(9*3)].innerHTML,spans[j-(9*2)].innerHTML,spans[j-9].innerHTML].indexOf(spans[ind].innerHTML) == -1 && [spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML,spans[ind-9].innerHTML].indexOf(spans[j].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
        }
    }
    let line45_3 = [spans[33].innerHTML,spans[34].innerHTML,spans[35].innerHTML,spans[42].innerHTML,spans[43].innerHTML,spans[44].innerHTML]
    for (let index = 51; index < 54; index++) {
        spans[index].innerHTML = oneToNine.filter(x=>{return line45_3.indexOf(x.toString())===-1})[index-51]
    }
    for(let ind=51;ind<54;ind++){
        if([spans[ind-(9*5)].innerHTML,spans[ind-(9*4)].innerHTML,spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML,spans[ind-9].innerHTML].indexOf(spans[ind].innerHTML)!= -1){
            for(let j=51;j<54;j++){
                if([spans[j-(9*5)].innerHTML,spans[j-(9*4)].innerHTML,spans[j-(9*3)].innerHTML,spans[j-(9*2)].innerHTML,spans[j-9].innerHTML].indexOf(spans[ind].innerHTML) == -1 && [spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML,spans[ind-9].innerHTML].indexOf(spans[j].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
        }
    }
    }
    
    
    function fifth_sixthLine(){
    while(repeat_found([spans[0],spans[9],spans[18],spans[36],spans[45]])||repeat_found([spans[36],spans[37],spans[38],spans[45],spans[27],spans[28],spans[29]])
    ||repeat_found([spans[1],spans[10],spans[19],spans[37],spans[46]])||repeat_found([spans[37],spans[36],spans[38],spans[46],spans[27],spans[28],spans[29]])
    ||repeat_found([spans[2],spans[11],spans[20],spans[38],spans[47]])||repeat_found([spans[38],spans[36],spans[37],spans[47],spans[27],spans[28],spans[29]])
    ||repeat_found([spans[3],spans[12],spans[21],spans[39],spans[48]])||repeat_found([spans[39],spans[40],spans[41],spans[48],spans[30],spans[31],spans[32]])
    ||repeat_found([spans[4],spans[13],spans[22],spans[40],spans[49]])||repeat_found([spans[39],spans[40],spans[41],spans[49],spans[30],spans[31],spans[32]])
    ||repeat_found([spans[5],spans[14],spans[23],spans[41],spans[50]])||repeat_found([spans[39],spans[40],spans[41],spans[50],spans[30],spans[31],spans[32]])
    ||repeat_found([spans[6],spans[15],spans[24],spans[42],spans[51]])||repeat_found([spans[42],spans[43],spans[44],spans[51],spans[33],spans[34],spans[35]])
    ||repeat_found([spans[7],spans[16],spans[25],spans[43],spans[52]])||repeat_found([spans[42],spans[43],spans[44],spans[52],spans[33],spans[34],spans[35]])
    ||repeat_found([spans[8],spans[17],spans[26],spans[44],spans[53]])||repeat_found([spans[42],spans[43],spans[44],spans[53],spans[33],spans[34],spans[35]])){
        fifthLine()
        sixthLine()
    }
    }
    
    fifth_sixthLine()
    
    
    //         Seventh Line
    function seventh_Line(){
    let randArr = shuffled_arr(oneToNine)
    for(let ind=54;ind<63;ind++){
        spans[ind].innerHTML = randArr[ind-54]
    }
    for(let ind=54;ind<63;ind++){
        if([spans[ind-(9*6)].innerHTML,spans[ind-(9*5)].innerHTML,spans[ind-(9*4)].innerHTML,spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML,spans[ind-9].innerHTML].indexOf(spans[ind].innerHTML)!= -1){
            for(let j=54;j<63;j++){
                if([spans[j-(9*6)].innerHTML,spans[j-(9*5)].innerHTML,spans[j-(9*4)].innerHTML,spans[j-(9*5)].innerHTML,spans[j-(9*4)].innerHTML,spans[j-(9*3)].innerHTML,spans[j-(9*2)].innerHTML,spans[j-9].innerHTML].indexOf(spans[ind].innerHTML) == -1 && [spans[ind-(9*3)].innerHTML,spans[ind-(9*2)].innerHTML,spans[ind-9].innerHTML].indexOf(spans[j].innerHTML) == -1){
                    processLine(spans,ind,j)
                }
            }
        }
    }
    }
    
    function seventhLine(){
    while(repeat_found([spans[0],spans[9],spans[18],spans[27],spans[36],spans[45],spans[54]])
    ||repeat_found([spans[1],spans[10],spans[19],spans[28],spans[37],spans[46],spans[55]])
    ||repeat_found([spans[2],spans[11],spans[20],spans[29],spans[38],spans[47],spans[56]])
    ||repeat_found([spans[3],spans[12],spans[21],spans[30],spans[39],spans[48],spans[57]])
    ||repeat_found([spans[4],spans[13],spans[22],spans[31],spans[40],spans[49],spans[58]])
    ||repeat_found([spans[5],spans[14],spans[23],spans[32],spans[41],spans[50],spans[59]])
    ||repeat_found([spans[6],spans[15],spans[24],spans[33],spans[42],spans[51],spans[60]])
    ||repeat_found([spans[7],spans[16],spans[25],spans[34],spans[43],spans[52],spans[61]])
    ||repeat_found([spans[8],spans[17],spans[26],spans[35],spans[44],spans[53],spans[62]])){
        seventh_Line()
    }
    }
    seventhLine()
    
    
    //         Line Eight and Nine 
    
    function newArr(arr,index){
        let arrX = []
        for(let i=0;i<arr.length;i++){
            if(i!==index){
                arrX.push(arr[i])
            }
        }
        return arrX
    }
    
    
    function lineEightNine(){
    for (let i = 0; i < 9; i++) {
        let arrX = [spans[i+0].innerHTML,spans[i+9].innerHTML,spans[i+18].innerHTML,spans[i+27].innerHTML,spans[i+36].innerHTML,spans[i+45].innerHTML,spans[i+54].innerHTML]
        arrX = shuffled_arr(oneToNine.filter(x=>{return arrX.indexOf(x.toString())===-1}))
        spans[i+63].innerHTML = arrX[0]
        spans[i+72].innerHTML = arrX[1]
    }
    let line8 = [spans[63].innerHTML,spans[64].innerHTML,spans[65].innerHTML,spans[66].innerHTML,spans[67].innerHTML,spans[68].innerHTML,spans[69].innerHTML,spans[70].innerHTML,spans[71].innerHTML]
    let line9 = [spans[72].innerHTML,spans[73].innerHTML,spans[74].innerHTML,spans[75].innerHTML,spans[76].innerHTML,spans[77].innerHTML,spans[78].innerHTML,spans[79].innerHTML,spans[80].innerHTML]
    for(let i=63;i<72;i++){
        line8 = [spans[63].innerHTML,spans[64].innerHTML,spans[65].innerHTML,spans[66].innerHTML,spans[67].innerHTML,spans[68].innerHTML,spans[69].innerHTML,spans[70].innerHTML,spans[71].innerHTML]
        line9 = [spans[72].innerHTML,spans[73].innerHTML,spans[74].innerHTML,spans[75].innerHTML,spans[76].innerHTML,spans[77].innerHTML,spans[78].innerHTML,spans[79].innerHTML,spans[80].innerHTML]
        if(newArr(line8,i%9).indexOf(spans[i].innerHTML)!==-1||newArr(line9,i%9).indexOf(spans[i+9].innerHTML)!==-1){
            if(newArr(line9,i%9).indexOf(spans[i].innerHTML)===-1||newArr(line8,i%9).indexOf(spans[i+9].innerHTML)===-1){
                processLine(spans,i,i+9)
            }
        }
    }
    line8 = [spans[63].innerHTML,spans[64].innerHTML,spans[65].innerHTML,spans[66].innerHTML,spans[67].innerHTML,spans[68].innerHTML,spans[69].innerHTML,spans[70].innerHTML,spans[71].innerHTML]
    line9 = [spans[72].innerHTML,spans[73].innerHTML,spans[74].innerHTML,spans[75].innerHTML,spans[76].innerHTML,spans[77].innerHTML,spans[78].innerHTML,spans[79].innerHTML,spans[80].innerHTML]
    for(let i=63;i<72;i++){
        let line8 = [spans[63].innerHTML,spans[64].innerHTML,spans[65].innerHTML,spans[66].innerHTML,spans[67].innerHTML,spans[68].innerHTML,spans[69].innerHTML,spans[70].innerHTML,spans[71].innerHTML]
        let line9 = [spans[72].innerHTML,spans[73].innerHTML,spans[74].innerHTML,spans[75].innerHTML,spans[76].innerHTML,spans[77].innerHTML,spans[78].innerHTML,spans[79].innerHTML,spans[80].innerHTML]
        if(newArr(line8,i%9).indexOf(spans[i].innerHTML)!==-1||newArr(line9,i%9).indexOf(spans[i+9].innerHTML)!==-1){
            processLine(spans,i,i+9)
        }
    }
    }
    
    
    
    let line8 = [spans[63],spans[64],spans[65],spans[66],spans[67],spans[68],spans[69],spans[70],spans[71]]
    let line9 = [spans[72],spans[73],spans[74],spans[75],spans[76],spans[77],spans[78],spans[79],spans[80]]
    
    lineEightNine()
    
    function finalFunc(){
    while(repeat_found(line8)||repeat_found(line9)){
        seventhLine()
        lineEightNine()
    }
    }
    finalFunc()
    
    
    function colors(){
    let colors = {"red":1,"orange":2,"brown":3,"blue":4,"yellow":5,"white":6,"purple":7,"gray":8,"green":9}
    for (let key in colors) {
        for(let i=0;i<81;i++){
            if(spans[i].innerHTML == colors[key]){
                spans[i].style.background = key
            }
        }
    }
    }
    
    colors()
    
    document.getElementById("btn").onclick = ()=>{
        for (let ind = 0; ind < 81; ind++) {
            spans[ind].style.background = "white"
        }
        firstLine()
        secondLine()
        thirdLine()
        fourthLine()
        fifth_sixthLine()
        seventhLine()
        lineEightNine()
        finalFunc()
        colors()
    }
    
    
    
    
    }
    
    
    
    