// let dog = {
//     Name: "Dax",
//     Breed: "Shiba Inu",
//     Age: 5
// };

// let JSONString = JSON.stringify(dog);

// document.getElementById('todos').innerHTML = JSONString;

// let JSONBack = JSON.parse(JSONString);

// document.getElementById('myDog').innerHTML = JSONBack.Name + " is a " + JSONBack.Breed;

// localStorage.setItem("Name", "Daxis");
// document.getElementById('myDog').innerHTML = localStorage.getItem('Name');



// This function gets the task from input
function get_todos() {
    // This makes an array of tasks that are input
    let todos = new Array;

    // This pulls the tak that was saved in the browser memory
    let todos_str = localStorage.getItem('todo');

    /* If the input is not null then JSON.parse will
    communicate with the web browser to make the task a JavaScript object */
    if(todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// Add task to get_todos function array
function add() {
    // Create variable from task input
    let task = document.getElementById('task').value;
    let todos = get_todos();
    
    // Add new task to end of array
    todos.push(task);

    // Convert task to JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = "";
    show();

    return false;
}

// Function to display tasks on screen
function show() {
    let todos = get_todos();

    // Set up each task as an UL
    let html = '<ul>';

    // Display task in order of input
    for(let i = 0; i < todos.length; i++) {
        // Display task as a list and create button with an 'x'
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">X</button></li>';
    };
    html += '</ul>';

    // Display the task as a list
    document.getElementById('todos').innerHTML = html;

    document.querySelectorAll('.remove').forEach(btn => {
        btn.addEventListener('click', event => {
            remove(event.target.id);
        });
    });
}

// Remove selected TODO from local storage
function remove(i) {
    let todos = get_todos();
    todos.splice(i, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
}

// Display task input when 'Add Item' is clicked
document.getElementById('add').addEventListener('click', add);

// This will keep inputs displayed on screen
show();