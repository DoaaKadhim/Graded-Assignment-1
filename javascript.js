
//Part1 Refactoring Old Code
let csvData = ("ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26");

function parseCSV(csvString) {
    const rows = csvString.trim().split('\n');
    const headers = rows[0].split(',').map(header => header.toLowerCase());
    return rows.slice(1).map(row => {
        const values = row.split(',');
        return headers.reduce((obj, header, index) => {
            obj[header] = values[index] || '';
            return obj;
        }, {});
    });
}
const transformedObjects = parseCSV(csvData);
transformedObjects.forEach(obj => console.log(obj));

console.log("Part2---------------------------------------------------------------------");
//Part 2: Expanding Functionality
let csvData2 = ("ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26");

function parseCSV(csvString) {
    const rows = csvString.split('\n');
    const data = rows.map(row => row.split(','));
    const numColumns = data[0].length;

    for (let i = 1; i < data.length; i++) {
        while (data[i].length < numColumns) {
            data[i].push('');
        }
    }
    return data;
}
const parsedData = parseCSV(csvData2);
console.log(parsedData);

console.log("Part3---------------------------------------------------------------------");
//Part 3: Transforming Data
let test_input = [
    ["ID", "Name", "Occupation", "Age"],
    ["42", "Bruce", "Knight", "41"],
    ["57", "Bob", "Fry Cook", "19"],
    ["63", "Blaine", "Quiz Master", "58"],
    ["98", "Bill", "Doctor’s Assistant", "26"],
];

function transData(data) {
    const topRaw = data[0].map(top => top.toLowerCase());

    return data.slice(1).map(row => {
        let rowObj = {};
        for (let i = 0; i < topRaw.length; i++) {
            rowObj[topRaw[i]] = row[i] || '';
        }
        return rowObj;
    });
}
let transformObj = transData(test_input);
console.log(transformObj);

console.log("part 4----------------------------------------------------");

//Part 4: Sorting and Manipulating Data
const transObj = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
];

//remove the last element from the array.
function modify(data) {
    data.pop();
    // just check the line that is beeing removed
    // console.log("remove",data.pop());

    // insert object at index 1
    data.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

    // add object to the end
    data.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

    // average age
    let totalAge = 0;
    for (let item of data) {
        totalAge = totalAge + Number(item.age);
        //check the out put
        //console.log("total"+totalAge)
    }
    const averageAge = totalAge / data.length;

    return { data, averageAge };
};
const result = modify(transObj);

console.log("Modified Data:", result.data);
console.log("Average Age:", result.averageAge);

console.log("Part5---------------------------------------------------------------------");
//Part 5 Full Circle
const input = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];
// try to convert data to csv
function convToCsv(data) {
    const topRow = Object.keys(data[0]);
    let csvStr = topRow.join(',');

    for (let x of data) {
        const row = topRow.map(top => x[top]).join(',');
        csvStr = csvStr + '\n' + row;
    }
    return csvStr;
}
const csvStr = convToCsv(input);
console.log(csvStr);
