
// E-TASK
function getReverse(hi) {
    if (hi === "") {
        return hi;
    } else {
        return getReverse(hi.substr(1)) + hi[0];
    }
}

console.log(getReverse("Hello"));

// // D-TASK

// function checkContent(a, b) {
//     if (a.length !== b.length) return false;
    
//     for (let word of a) {
//         if (!b.includes(word)) {
//             return false;
//         }
//     } 
//     return true;
// }

// console.log(checkContent("study", "yutds"));

// function check(a, b) {
//     //  a = "absshghs";
//     //  b = "ahsjahsjka";
//     // result = a === b;
//     a = "study";
//     b = "yutds"
//     result = a !== b;
//     console.log(result)
// }

// check();
/*
// C-TASK update
class NewSHop {
    

        
    constructor(product, price, remaining) {
        this.product = product;
        this.price = price; 
        this.remaining = remaining;
        

        
    }

    vaqt() {
        const time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        return `${hours}:${minutes}`;
    }
    products() {
            console.log(`NewShop: The price of the ${this.product} is ${this.price}$ and there is ${this.remaining} left at ${this.vaqt()}!`);
        }

    qabul(qoshish) {
        this.remaining = this.remaining + qoshish;
    }

    sotish(ayrish) {
        this.remaining = this.remaining - ayrish;
    }

};

const newshop = new NewSHop("non", 2, 3);
const newshop2 = new NewSHop("cola", 5, 7);
const newshop3= new NewSHop("lagmon", 7, 3);

newshop2.sotish(3);
newshop2.qabul(5);
newshop2.products();

newshop.sotish(1);
newshop.qabul(10);
newshop.products();

newshop3.sotish(5);
newshop3.qabul(2);
newshop3.products();


// C-TASK 
class SHOP {
    

        
    constructor(product, price, remaining, data) {
        this.product = product;
        this.price = price; 
        this.remaining = remaining;
        this.data = data;

        
    }


    products() {
            console.log(`SHOP: The price of the ${this.product} is ${this.price}$ and there is ${this.remaining} left at ${this.data}pm!`);
        }

    qabul(qoshish) {
        this.remaining = this.remaining + qoshish;
    }

    sotish(ayrish) {
        this.remaining = this.remaining - ayrish;
    }

};

const shop = new SHOP("non", 2, 3, "08:40");
const shop2 = new SHOP("cola", 5, 7, "08:40");
const shop3= new SHOP("lagmon", 7, 3, "08:40");

shop2.sotish(3);
shop2.qabul(5);
shop2.products();

shop.sotish(1);
shop.qabul(10);
shop.products();

shop3.sotish(5);
shop3.qabul(2);
shop3.products();

*/

// // B-task
// function countDigits(sort) {
//     let count = 0;
//     for (let i = 0; i < sort.length; i++) {
//         if (/\d/.test(sort[i])) {
//             count++;
//         }
//     }
//     return count;
// }

// // console.log(countDigits("djtfy6sdsuya5gdwgui86868iuh"));

// // const raqam = "hsdiuy87s76sd7t86tsdt876";
// // const count2 = countDigits(raqam)
// // console.log("Raqamlar soni:", count2);

// const count = countDigits("hsdiuy87s76sd7t86tsdt876")
// console.log("Raqamlar soni2:", count);

/*
// C-TASK

function harfSanash(c, letter) {
    let count = 0;
    for (let a = 0; a < letter.length; a++) {
        if (letter[a] === c) {
            count++;
        }
    }
    return count;
}

console.log(harfSanash('r', "pracyice makes perfect"));

// B-TASK

function sanash(e, gap) {
    let count = 0;
    for (let i = 0; i < gap.length; i++) {
        if (gap[i] === e) {
            count++;
        }

    }

    return count;
}

console.log(sanash("a", "asosan a harfini sanash"));

// A-TASK
function countLetter(a, word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === a) {
            count++;
        }
    }

    return count;
}

console.log(countLetter("e", "engineer")); */
/*
// Event loop and Callback
console.log("Jack Ma maslahatlari!")
const list = [
    "Yaxshi talaba bo'ling!", // 0-20
    "To'g'ri boshliq tanlang va ko'proq xato qling!", // 20-30
    "O'zingizga ishlashni boshlang!", // 30-40
    "Siz kuchli bo'lgan narsalarni qling!", // 40-50
    "Yoshlarga investitsya qling!", // 50-60
    "Endi dam oling!", //60

];


async function maslahatBering(a, callback) {
   if(typeof a !== 'number') throw new Error("Insert number!", null);
   else if(a <= 20) return list[0];
   else if(a > 20  && a <= 30) return list[1];
   else if(a > 30  && a <= 40) return list[2];
   else if(a > 40  && a <= 50) return list[3];
   else if(a > 50  && a <= 60) return list[4];
   else {
    // return new Promise((resolve, reject) =>{
    //     setInterval(() => {
    //         resolve(list[5]);
    //     }, 3000);
    // });
    // setTimeout(function () {
    //     return list[0];
    // }, 3000);

    setInterval(function () {
        callback(null, list[5]);
    }, 5000);
    
   }
}

console.log("0");
maslahatBering(70, (err, data) => {
    if (err) console.log("ERROR:", err);
    else {
        console.log(data);
    }
});

console.log("Passed here 0")
*/
// call via async / await
// async function run() {
//     let javob = await maslahatBering(80);
//     console.log(javob);
//     // javob = await maslahatBering(33);
//     // console.log(javob);
//     // javob = await maslahatBering(50);
//     // console.log(javob);
//     // javob = await maslahatBering(70);
//     // console.log(javob);
// }
//  run();
// // call via then / catch
// maslahatBering(7)
//    .then(data => {
//     maslahatBering(22)
//    .then(data => {
//     maslahatBering(33)
//    .then(data => {
//     console.log("Javob:", data);
// })
//    .catch((err) => {
//     console.log("ERROR:", err);
// });

//     console.log("Javob:", data);
// })
//    .catch((err) => {
//     console.log("ERROR:", err);
// });

//     console.log("Javob:", data);
// })
//    .catch((err) => {
//     console.log("ERROR:", err);
// });

// console.log("Passed here 1");


// function maslahatBering(a, callback) {
//    if(typeof a !== 'number') callback("Insert number!", null);
//    else if(a <= 20) callback(null, list[0]);
//    else if(a > 20  && a <= 30) callback(null, list[1]);
//    else if(a > 30  && a <= 40) callback(null, list[3]);
//    else if(a > 40  && a <= 50) callback(null, list[3]);
//    else if(a > 50  && a <= 60) callback(null, list[4]);
//    else {
//     setTimeout(function () {
//         callback(null, list[5]);
//     }, 3000);
    
//    }
// }
// console.log("Passed here 0");
// maslahatBering(65, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else {
//         console.log("Javob:", data);
//     }
    
// });

// console.log("Passed here 0");

/*
console.log("Train task ishga tushdi!");

console.log("Web Serverni Boshlanishi!");

const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session code


// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code

app.get("/hello", function (req, res) {
    res.end("<h1 style='color: blue;'>Hello World!</h1>");
});

app.get("/gift", function (req, res) {
    res.end("<h1 style='color: green;'>Siz sovgalar sahifasidasz!</h1>");
}); 



const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
}); */