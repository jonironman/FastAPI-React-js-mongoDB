import TodoItem from "./Todo";

 function TodoView(props){
    return(
        <div>
            <ul>
                123
                {props.todoList.map(todo => <TodoItem todo={todo} />)}
            </ul>
        </div> 
    )
}

export default TodoView