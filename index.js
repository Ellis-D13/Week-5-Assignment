// define a class as 'MenuItem' which has a name and description property
class MenuItem {
    constructor(name, description) {
    this.name = name;
    this.description = description;
    }
    
    view() {
    //console.log(`${this.name} plays ${this.position}`)
    return `${this.name}: ${this.description}`;
    }
    }
    class Menu {
    constructor() {
    this.items = [];
    }
  // Menu class has 'items' proper which is an array that stores the menu items   
    create() {
        let name = prompt("Enter the item's name:");
        let description = prompt("Enter the item's description:");
        let item = new MenuItem(name, description);
        this.items.push(item);
    }

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
   
// usage 
let menu = new Menu();

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