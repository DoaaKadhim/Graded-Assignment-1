//R-ALAB 308.4.1 - Working with Data Collections
//CSV part 1
const csv1 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

const lines1 = csv1.split("\n")
console.log(lines1);
for (const line of lines1) {
    const [id, name, occup, age] = line.split(",");
    console.log(`${id}, ${name}, ${occup}, ${age}`);
}

// //2D array/array - part 2
const test =
    "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
console.log(test);
const twoDArray1 = test.split("\n").map((element) => element.split(","));
console.log(twoDArray1);

// //2Day array/obj - part 3
const test_input = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"],
];

const attr = test_input.shift();

const result = test_input.map((value) => {
    const obj = {

    };
    attr.forEach((key, values) => {
        obj[key.toLowerCase()] = value[values];
    });
    return obj;
});

console.log(result);

// part 4 remove last element

const part3_input = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"],
];

const attrs = part3_input.shift();

const results = part3_input.map((element) => {
    const obj = {};
    attrs.forEach((attr, i) => {
        obj[attr.toLowerCase()] = element[i];
    });
    return obj;
});

let popped = results;
popped.pop();
console.log(popped);


// part 5 
let newData = results;

if (newData.length > 0) {
    const headers = Object.keys(newData[0]);

    let csvString = headers.join(',') + '\n';

    csvString += newData.map(row =>
        headers.map(field => {
            let value = row[field] || '';
            if (value.includes(',') || value.includes('\n') || value.includes('"')) {
                value = `"${value.replace(/"/g, '""')}"`;
            } else {
                value = String(value);
            }
            return value;
        }).join(',')
    ).join('\n');


    console.log(csvString);
}
