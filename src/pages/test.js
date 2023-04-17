const obj = {
    USD: 1.15,
    EUR: 2.20,
    RUB: 5.50,
    UAD: 3.35,
    KRN: 4.45,
    BBN: 2.23,
    FRN: 1.15,
}

const arr = []

for (let key in obj) {
    arr.push({[key]: obj[key]})
}

console.log(arr)

arr.map(item => console.log(`${Object.keys(item)[0]}: ${item[Object.keys(item)[0]]}`))