function commentFactory (author , text ){
    return{
        author,
        date : new Date(),
        rate  : 0 ,
        text
    }

}
function foodFactory(name , type , price , deliverTime  , isReady  ) {
    return{
        name ,
        type  ,
        price  ,
        deliverTime  ,
        rate : 0,
        comment : [] ,
        isReady ,
        order : function isPremiumUser(a){
            if (a){
                console.log(0.8*price , this.rate )
            }
            else {
                console.log(price , this.rate )
            }
        }
    }
}

// const pizza = foodFactory("mix", "fastfood" , "60000" , "45 minutes" , "Yes"  )
// const pizzaCommnet = commentFactory("akbar" , "This was a good pizza")
// pizza.comment.push(pizzaCommnet) ;
// console.log(pizza)
// pizza.order(true)

function CommentConstructor  (author , text) {
        this.author = author ;
        this.date = new Date() ;
        this.rate = 0 ;
        this. text = text
}

function FoodConstructor  (name , type , price , deliverTime  , isReady )  {
            this.name = name
            this.type  = type
            this.price = price
            this. deliverTime = deliverTime
            this.rate = 0
            this.comment = []
            this. isReady = isReady
            this.order = function isPremiumUser(a) {
            if (a) {
                console.log(0.8 * price, this.rate)
            } else {
                console.log(price, this.rate)
            }
    }
}

const pizza = new FoodConstructor("mix", "fastfood" , "60000" , "45 minutes" , "Yes" )
// const pizzaComment = new CommentConstructor("akbar" , "This was a good pizza")
// pizza.comment.push(pizzaComment) ;
// console.log(pizza)
// pizza.order(true)


//---------------------------/// Exercise 2 ////////////////----------------------///

const obj1 = {
    key0 : false ,
    key1 : "vall" ,
    key2 : 30 ,
    key3 : [0 , 1 , 2] ,
    key4 : {name : "Mahed"}
}

const obj2 = {
    key0 : false ,
    key1 : "vall" ,
    key2 : 30 ,
    key3 : [0 , 1 , 2] ,
    key4 : {name : "Mahed"}
}
// const isEqual = (object1 , object2) => {
//     let object1Keys = Object.keys(object1)
//     let object1Val = Object.values(object1)
//     let object2Keys = Object.keys(object2)
//     let object2Val = Object.values(object2)
//
//     if (object1Keys.length === object2Keys.length) {
//         for (i = 0; i <= 2; i++) {
//             if (object1Keys[i] !== object2Keys[i] || object1Val[i] !== object2Val[i]) {
//                 return false
//             }
//         }
//         arrayChecker(object1.key3 , object2.key3)
//         objectChecker(object1.key4 , object2.key4)
//     }
// }
//
// const arrayChecker =(a,b) =>
// {
//     if(a.length!==b.length)
//         return false;
//     else
//     {
//         for( i=0;i<a.length;i++)
//             if(a[i]!==b[i])
//                 return false;
//         return true;
//     }
// }
//
// const objectChecker = ( a,b) => {
//     if (Object.entries(a).toString() !== Object.entries(b).toString()) {
//         return false
//     } else {
//         return true
//     }
// }

const isEqual = (object1 , object2) => { // Baraye neveshtane in tike be ma'naye vagheyie kalame PARE PARE shodam !!!!
    console.log(JSON.stringify(object1) === JSON.stringify(object2))
}
isEqual(obj1,obj2)

let a = 1 ;
let b = a ;
const isSame = (object1 , object2) => {
    console.log(object1 === object2)
}

isSame(a ,b )





