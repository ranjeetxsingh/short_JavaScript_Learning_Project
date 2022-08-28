let input = false ;

let todoList = [];

while(input !== 'quit') {

    input = prompt("what would you like to do !");

    if(input === 'new') {
        let todo = prompt("add a new task");
        todoList.push(todo);
        console.log(`${todo}  added to List`);
    }
    else if (input === 'list') {
        console.log("* * * * * * * *");
        let i = 0;
        for(let item of todoList) {
            console.log(i, item);
            i++;
        }
        console.log("* * * * * * * *");
    }
    else if(input === 'delete') {
        let index = parseInt(prompt("Enter the index of To-Do you want to delete"));
        while(!index){
            index = parseInt(prompt("Uh-Oh!!! Enter the index of To-Do you want to delete"));
        }
        console.log(`${todoList[index]} removed from the List`);
        todoList.splice(index , 1 );
    }
}













