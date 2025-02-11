"use strict";
function create(items, idCounter, item) {
    const newItem = Object.assign(Object.assign({}, item), { id: idCounter });
    return [[...items, newItem], newItem];
}
function update(items, id, updatedItem) {
    const index = items.findIndex(item => item.id === id);
    if (index === -1) {
        return [items, null];
    }
    const updated = Object.assign(Object.assign({}, items[index]), updatedItem);
    return [[...items.slice(0, index), updated, ...items.slice(index + 1)], updated];
}
function deleteItem(items, id) {
    return items.filter(item => item.id !== id);
}
function getOneById(items, id) {
    return items.find(item => item.id === id) || null;
}
function getAll(items) {
    return items;
}
let users = [];
let categories = [];
let products = [];
let idCounter = 1;
// Users 
[users] = create(users, idCounter++, { name: "John Doe", email: "john@example.com" });
[users] = create(users, idCounter++, { name: "Alice", email: "alice@example.com" });
[users] = create(users, idCounter++, { name: "Bob", email: "bob@example.com" });
console.log("Users created", getAll(users));
users = deleteItem(users, 1);
console.log("Users deleted:", getAll(users));
[users] = update(users, 2, { email: "alice.new@example.com" });
console.log("Users updated:", getAll(users));
// Categories 
[categories] = create(categories, idCounter++, { name: "tropic" });
console.log("Category created", getAll(categories));
[categories] = update(categories, idCounter - 1, { name: "tropics" });
console.log("Categories updated:", getAll(categories));
categories = deleteItem(categories, idCounter - 1);
console.log("Categories deleted:", getAll(categories));
// Products 
[products] = create(products, idCounter++, { name: "banana", price: 20000, categoryId: 1 });
console.log("Products created", getAll(products));
[products] = update(products, idCounter - 1, { name: "mango", price: 150000, categoryId: 2 });
console.log("Products updated:", getAll(products));
products = deleteItem(products, idCounter - 1);
console.log("Products deleted:", getAll(products));
