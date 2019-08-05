// Global todo list.
// Put a few todos in there to start with!
// This is mostly for testing purposes.

const list = ["milk", "sugar", "eggs"]


// Print a todo.
// For now, just console log it!

function printValue(e){
    console.log(e)
}

// Print everything on our todo list, INDIVIDUALLY.
// Make SURE to use the above function!
function PrintAllValues(){
    list.forEach(function(todo){
        printValue(todo)
    })
}
// Add an item to our todo list.
// Where on the list should we add it?
// No wrong answer here as long as you can defend the decision!
function addItem(item){
    list.unshift(item)
}
// Remove an item at a given index from our todo list.
function removeItem(index){
    list.splice(index, 1)
}
printValue(405) 
PrintAllValues(list) 
console.log("==================================================")
addItem("Cheese")
PrintAllValues(list)
console.log("==================================================")

removeItem(1)
PrintAllValues(list)
console.log("==================================================")
