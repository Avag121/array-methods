let inventory = ["sword", "potion", "shield", "bow", "key"]

inventory.push("ak-47", "Makarov")

console.log(inventory);

inventory.pop()

inventory.shift()

inventory.unshift("anotherSword")

console.log(inventory.includes("potion"));

console.log(inventory.indexOf("shield"));

console.log(inventory.slice(1 , 3));

console.log(inventory.splice(2));

inventory.push("frfrr")

console.log(inventory);

inventory.forEach(function(inventory) {
    console.log(`Item - `+inventory);
});
