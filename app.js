let users = [
  { id: 1, name: "Ali", age: 22, active: true },
  { id: 2, name: "Vali", age: 25, active: false },
  { id: 3, name: "Sami", age: 30, active: true },
];
function newProducts(a, b) {
  let y = {
    id: (users.length += 1),
    name: b[0],
    age: b[1],
    active: b[2],
  };
  return a.push(y);
}
let neww = ["Jon", 18, true];
newProducts(users, neww);
console.log(users);
function active(a) {
  return a.filter((item) => item.active === true);
}
console.log(active(users));
function update(id, a) {
  return a.map((item) => {
    if (item.id === id) {
      return { ...item, name: "Isfandiyor" };
    }
    return item;
  });
}

console.log(update(2, users));
function deletes(id, users) {
  return users.filter((item) => item.id !== id);
}
console.log(deletes(1, users));
