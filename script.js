let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
let empty = document.getElementById('item');

// Submit event
form.addEventListener('submit', addItem);

// Delete event

itemList.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyup', filterItems);

// Add Item
function addItem(e){
	e.preventDefault();

	// Get Input Value
	let newItem = document.getElementById('item').value;

	// Create new list item
	let li = document.createElement('li');
	
	li.className = 'list-group-item'; 

	// Add text node with input value
	li.appendChild(document.createTextNode(newItem));

	// Create delete button element

	let deleteBtn = document. createElement('button');

	// Add classes to delete button
	deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

	// Append text node
	deleteBtn.appendChild(document.createTextNode('X'));

	// Append button to li
	li.appendChild(deleteBtn);

	// Append li to list
	if (newItem.length > 0){
	 	itemList.appendChild(li);
	 	empty.value = "";
	}
}

// Remove item

function removeItem(e) {
	if(e.target.classList.contains('delete')) {
		if(confirm ('Are You Sure')) {
			let li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

// filter items

function filterItems(e){
	// convert to lowercase
	let text = e.target.value.toLowerCase();
	// get list items
	let = itemList.getElementsByTagName('li');
	// convert to an array
	Array.from(items).forEach(function(item){
		let itemName = item.firstChild.textContent;
		if(itemName.toLowerCase().indexOf(text) != -1){
			item.style.display = 'block';
		}	else {
			item.style.display = 'none';
		}
	});
}