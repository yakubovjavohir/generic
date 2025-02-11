

function create<T extends { id: number }>(items: T[], idCounter: number, item: Omit<T, 'id'>): [T[], T] {
  const newItem = { ...item, id: idCounter } as T;
  return [[...items, newItem], newItem];
}

function update<T extends { id: number }>(items: T[], id: number, updatedItem: Partial<T>): [T[], T | null] {
  const index = items.findIndex(item => item.id === id);
  if (index === -1) {
      return [items, null];
  }
  const updated = { ...items[index], ...updatedItem } as T;
  return [[...items.slice(0, index), updated, ...items.slice(index + 1)], updated];
}

function deleteItem<T extends { id: number }>(items: T[], id: number): T[] {
  return items.filter(item => item.id !== id);
}

function getOneById<T extends { id: number }>(items: T[], id: number): T | null {
  return items.find(item => item.id === id) || null;
}

function getAll<T>(items: T[]): T[] {
  return items;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  categoryId: number;
}

let users: User[] = [];
let categories: Category[] = [];
let products: Product[] = [];
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

