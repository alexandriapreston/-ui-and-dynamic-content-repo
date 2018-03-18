function groceryList() {
	
    var item = document.getElementById("groceryInput").value
	var text = document.createTextNode(item)
	
    if (item.length == 0) {
        alert("you forgot to enter stuff!");
    }else{
    
    var newItem = document.createElement("li")
	newItem.appendChild(text)
    document.getElementById("groceryList").appendChild(newItem)
    
    }
}

