function shopping(input){
    let buddget = Number(input[0])
    let videocardQty = Number(input[1])
    let processorQty = Number(input[2])
    let ramQty = Number(input[3])

    let videocardPrice = videocardQty*250
    let processorPrice = videocardPrice*0.35*processorQty
    let ramPrice = videocardPrice*0.1*ramQty

    let expenses = videocardPrice+processorPrice+ramPrice

    if (videocardQty > processorQty) {expenses = expenses*0.85
            } else {expenses=expenses
 
    }

    let amount= Math.abs(expenses-buddget).toFixed(2)
    
    if (expenses <= buddget) {console.log(`You have ${amount} leva left!`)
 
    } else {console.log(`Not enough money! You need ${amount} leva more!`)
 
    }
 
} shopping(["920.45",
"3",
"1",
"1"])