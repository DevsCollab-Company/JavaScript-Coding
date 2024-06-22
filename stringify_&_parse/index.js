let data = {
    name: "Sohail Khan",
    age: "23 Year Old",
    Address: {
        Address1: "Rajanpur",
        Address2: "Fazilpur"
    },
    cast: "Babar"
}
const jsonString = '{"name":"John","age":30,"city":"New York"}';

let dataConvertingInJson = JSON.stringify(data)
console.log(dataConvertingInJson);

let dataConvertingInParse = JSON.parse(jsonString)
console.log(dataConvertingInParse);