// Array store todo item
var itemList = []
    // Flag to record all, active, completed status
var status = "all"
    // Make border of all button default
document.getElementById("all").style.border = "1px solid rgb(170, 170, 170)";
// Hide todo-app__footer by default
document.getElementsByClassName("todo-app__footer")[0].style.display = "none";
// Set event listener to input
const input = document.getElementById("todo-input");
input.addEventListener("keyup", event => {
    if (event.keyCode === 13 && event.target.value !== "") {
        // Text displayed in todo item
        textDisplayedInItem = event.target.value;
        // Create todo item
        const itemNode = createNewItem(textDisplayedInItem);
        const newItem = {
            node: itemNode,
            isComplete: false
        };
        // Push new todo item in array and redisplay window
        itemList.push(newItem);
        reDisplay();
        // Reset input vield
        event.target.value = "";
    }
});

// Function to return new todo item
function createNewItem(textDisplayedInItem) {
    // Create html element which we need
    const itemNode = document.createElement("LI");
    const wrapper = document.createElement("DIV");
    const checkBox = document.createElement("INPUT");
    const label = document.createElement("LABEL");
    const inputText = document.createElement("H1");
    const imageX = document.createElement("IMG");
    // Set html element to what we want
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", itemList.length);
    checkBox.addEventListener("click", event => {
        id = event.target.id;
        var child = event.target.parentElement.parentElement.childNodes[1];
        if (event.target.checked) {
            itemList[id].isComplete = true;
            child.style["textDecoration"] = "line-through";
            child.style["opacity"] = 0.5;
        } else {
            itemList[id].isComplete = false;
            child.style["textDecoration"] = "none";
            child.style["opacity"] = 1;
        }
        reDisplay();
    });
    label.setAttribute("for", itemList.length);
    wrapper.appendChild(checkBox);
    wrapper.appendChild(label);
    wrapper.classList.add("todo-app__checkbox");
    itemNode.appendChild(wrapper);
    inputText.classList.add("todo-app__item-detail");
    inputText.innerHTML = textDisplayedInItem;
    itemNode.appendChild(inputText);
    imageX.setAttribute("src", "./img/x.png");
    imageX.setAttribute("alt", "X button");
    imageX.classList.add("todo-app__item-x");
    imageX.addEventListener("click", event => {
        targetID = event.target.parentElement.childNodes[0].childNodes[0].id;
        itemList.splice(targetID, 1);
        reDisplay();
    });
    itemNode.appendChild(imageX);
    itemNode.classList.add("todo-app__item");
    return itemNode;
}

// If all button clicked, we need to do something
function allButtonClicked() {
    status = "all";
    reDisplay();
    document.getElementById("all").style.border = "1px solid rgb(170, 170, 170)";
    document.getElementById("active").style.border = "1px solid transparent";
    document.getElementById("completed").style.border = "1px solid transparent";

}

// If active button clicked, we need to do something
function activeButtonClicked() {
    status = "active";
    reDisplay();
    document.getElementById("active").style.border = "1px solid rgb(170, 170, 170)";
    document.getElementById("all").style.border = "1px solid transparent";
    document.getElementById("completed").style.border = "1px solid transparent";
}

// If completed button clicked, we need to do something
function completedButtonClicked() {
    status = "completed";
    reDisplay();
    document.getElementById("completed").style.border = "1px solid rgb(170, 170, 170)";
    document.getElementById("active").style.border = "1px solid transparent";
    document.getElementById("all").style.border = "1px solid transparent";
}

// Redisplay whole window
function reDisplay() {
    element = document.getElementById("todo-list");
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }
    if (status === "all") {
        for (var i = 0; i < itemList.length; i++) {
            element.appendChild(itemList[i].node);
            itemList[i].node.childNodes[0].childNodes[0].setAttribute("id", i);
            itemList[i].node.childNodes[0].childNodes[1].setAttribute("for", i);
        }
    } else if (status === "active") {
        for (var i = 0; i < itemList.length; i++) {
            itemList[i].node.childNodes[0].childNodes[0].setAttribute("id", i);
            itemList[i].node.childNodes[0].childNodes[1].setAttribute("for", i);
            if (!itemList[i].isComplete) {
                element.appendChild(itemList[i].node);
            }
        }
    } else if (status === "completed") {
        for (var i = 0; i < itemList.length; i++) {
            itemList[i].node.childNodes[0].childNodes[0].setAttribute("id", i);
            itemList[i].node.childNodes[0].childNodes[1].setAttribute("for", i);
            if (itemList[i].isComplete) {
                element.appendChild(itemList[i].node);
            }
        }
    }
    reDisplayItemCount();
    reDisplayCompletedButton();
    if (itemList.length === 0) {
        document.getElementsByClassName("todo-app__footer")[0].style.display = "none";
    } else {
        document.getElementsByClassName("todo-app__footer")[0].style.display = "flex";
    }
}

// Redisplay item count
function reDisplayItemCount() {
    activeItemCount = 0;
    for (var i = 0; i < itemList.length; i++) {
        if (!itemList[i].isComplete) {
            activeItemCount++;
        }
    }
    document.getElementById("todo-app__itemCount").innerHTML = (activeItemCount) + " left";
}

// Clear all completed todo items
function clearCompleted() {
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i].isComplete) {
            itemList.splice(i, 1);
            i--;
        }
    }
    reDisplay();
}

// If there is at least one completed todo item, we neew to show clear completed button, otherwise hide it
function reDisplayCompletedButton() {
    isDisplay = false;
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i].isComplete) {
            isDisplay = true;
            break;
        }
    }
    if (isDisplay) {
        document.getElementById("clearCompleted").style.display = "flex";
    } else {
        document.getElementById("clearCompleted").style.display = "none";
    }
}