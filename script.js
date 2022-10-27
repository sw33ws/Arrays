console.log(`const items = [
    { name : 'Book', price: 5},
    { name : 'Pc', price: 150},
    { name : 'Monitor', price: 100},
    { name : 'Game', price: 300},
    { name : 'House', price: 1320},
]
console.log(items)`)

const items = [
    { name : 'Book', price: 5},
    { name : 'Pc', price: 150},
    { name : 'Monitor', price: 100},
    { name : 'Game', price: 300},
    { name : 'House', price: 1320},
]
console.log(items)

console.log(`const filteredItems = items.filter((item) => {
    return item.price <= 100
})
console.log(filteredItems)`)

const filteredItems = items.filter((item) => {
    return item.price <= 100
})
console.log(filteredItems)

console.log(`const itemName = items.map((item) => {
    return item.name
})
console.log(itemName)`)

const itemName = items.map((item) => {
    return item.name
})
console.log(itemName)

console.log(`const FoundItem = items.find((item) => {
    return item.name === 'Book'
})
console.log(FoundItem)`)

const FoundItem = items.find((item) => {
    return item.name === 'Book'
})
console.log(FoundItem)

console.log(`items.forEach((item) => {
    console.log(item.name)
})`)

items.forEach((item) => {
    console.log(item.name)
})

console.log(`const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})
console.log(hasInexpensiveItems)`)

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})
console.log(hasInexpensiveItems)

console.log(`const ihasInexpensiveItems = items.every((item) => {
    return item.price <= 100
})
console.log(ihasInexpensiveItems)`)

const ihasInexpensiveItems = items.every((item) => {
    return item.price <= 100
})
console.log(ihasInexpensiveItems)

console.log(`const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
console.log(total)`)

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
console.log(total)