function addToList() {
    // create a new paragraph element/ P Tag
    let para = document.getElementById("inputField")
    let newItem = document.createElement("li");

    newItem.textContent = para.value; // set the text content of the new item

    document.getElementById("list").appendChild(newItem); // append the new item to the list
    para.value = ""; // clear the input field after appending
}