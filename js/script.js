const groceryList = [
    "pane",
    "pasta",
    "riso",
    "mele",
    "cioccolato",
    "alcol al 90%",
    "zucca",
    "pomodori",
    "sigarette",
    "dom pérignon",
    "settimana enigmistica",
    "superpoteri"
]

const groceryUl = document.getElementById("grocery_list_ul");

let x = 0;
while (x < groceryList.length){
    
    const groceryItem = document.createElement("li");
    groceryItem.innerHTML = groceryList[x];
    groceryUl.append(groceryItem);
    x++;
}