// Save references to HTML elements
const itemInput = document.getElementById("item-input");
const addButton = document.getElementById("add-button");
const shoppingList = document.getElementById("shopping-list");
const feedback = document.querySelector(".feedback");

// Function to add a new item to the list
function addItem() {
  const item = document.createElement("li");

  // Check if the text field is empty
  if (itemInput.value.trim() !== "") {
    item.textContent = itemInput.value;
    shoppingList.appendChild(item);
    feedback.textContent = "";
    itemInput.value = "";
    itemInput.focus();
  } else {
    feedback.textContent = "Please enter an item.";
  }
}

// Register the addItem function for the button click event
addButton.addEventListener("click", addItem);