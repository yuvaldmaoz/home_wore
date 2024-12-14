const fs = require('fs'); // ייבוא מודול מערכת הקבצים
const path = require('path'); // ייבוא מודול לניהול נתיבים

// הגדרת נתיב לתיקיית הטקסט
const dirPath = path.join(__dirname, '/EX3');//מרכיב את המסלול לקובץ הטקסט


//מערך מחרוזות
let file_name_arr = new Array(10); // יצירת מערך בגודל 10

for (let index = 0; index < 10; index++) {
    file_name_arr[index] = (index+1).toString() + ".txt"; // יצירת שם קובץ והכנסתו למערך
}

// console.log(file_name_arr); // הדפסת המערך

//לא גדול מכמות שורות


let allLines = [];
let k =0;

    for (let i = 0; i < file_name_arr.length; i++) {

        const textIn = fs.readFileSync(`${dirPath}/${file_name_arr[i]}`, 'utf-8');
        const arr = textIn.split('\r\n');

            for (let j = 0; j <= i; j++)
                 allLines[k++] = arr[j];
            
    }   


// console.log(allLines)



fs.writeFileSync(`${dirPath}/output.txt`,  allLines.join('\n'), 'utf-8');


