import Todo from '../src/components/Todo';




function App() {
	return (
		<div>
			<h1>My Todos</h1>
      <Todo text='Learn react'/>
      
		</div>
	);
}

export default App;


// <Todo text='Learn react'/> -> text is used as props.text in Todo.js