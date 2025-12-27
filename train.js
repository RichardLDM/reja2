
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

console.log(countLetter("e", "engineer"));
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