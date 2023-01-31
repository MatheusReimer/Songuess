function run(input){
    let finalResult = [] //array of bools
    const parantheses = ["(",")"]
    input.map((item)=>{
        let openParantheses = []
        let closedParantheses = []
        for(let i = 0; i < item.length; i++){
            if(item[i]===parantheses[0]){
                openParantheses.push(item[i])
            }
            if(item[i]===parantheses[1]){
                closedParantheses.push(item[i])
            }
        }
        if(openParantheses.length!==closedParantheses.length){
            console.log("false tamanho")
            finalResult.push(false)
        }
        else{
            for(let i =0; i<openParantheses.length; i++){
             if(item.indexOf(openParantheses[i])>item.indexOf(closedParantheses[i])){
                console.log("false ordem")
                finalResult.push(false)
            }
        }
        finalResult.push(true)
    
    }
})
   return finalResult  
}

console.log(run(["(a,b))","()"]))