// define the MenuItem class
class MenuItem {
    // Constructor initializes the name and description when a new object is created
    constructor(name, description) {
    this.name = name;
    this.description = description;
    }
    
    // Method to return a string representation of the MenuItem object
    view() {
    return `${this.name}: ${this.description}`;
    }
}
// define the Menu class
class Menu {
    // constructor initialized the items array when a new object is created
    constructor() {
    this.items = [];
    }
 
    // method to create a new MenuItem object
    // prompts the user to enter the name and description
    // pushes the new MenuItem to the items array
    create() {
        let name = prompt("Enter the item's name:");
        let description = prompt("Enter the item's description:");
        let item = new MenuItem(name, description);
        this.items.push(item);
    }

    // method to view all MenuItem objects in the items array
    // if the array is empty, it alerts the user that the menu is empty
    // otherwise it constructs a string of all menu items and alerts the user with the string
    view() {
        if (this.items.length === 0) {
            alert("The menu is empty.");
            return; 
        }

        let  output = '';
        for (let i = 0; i < this.items.length; i++) {
            output += `Item ${i + 1}: ${this.items[i].view()}\n`;
        }

        alert(output);
    }

    // method to delete a MenuItem object from the items array
    // prompts the user to enter an index, then checks if the index is valid
    // if the index is invalid, it alerts the user with an error message
    // otherwise, it removes the item at the given index from the array
    delete() {
        let index = prompt("Enter the index of the item to delete:");
        index = parseInt(index);
        if (isNaN(index) || index < 0 || index >= this.items.length) {
            alert("Invalid index.");
            return;
        }
        
        this.items.splice(index, 1);
    }

}
   
// create a new Menu object
let menu = new Menu();

// run a loop to prompt the user for an action and perform the action
// the loop continues indefinitely until the user closes the browser tab
while (true) {
    let action = prompt("Enter 'create' to add a new menu item, 'view' to see the menu, or 'delete' to remove an item:");
    switch (action.toLowerCase()) {
        case 'create':
            menu.create();
            break;
        case 'view':
            menu.view();
            break;
        case 'delete':
            menu.delete();
            break;
        default:
            alert("Invalid action. Please try again.");
            break;
    }
}