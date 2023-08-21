import { useState } from 'react'

function Form({ data, setData }) {
	// controlled inputs use state
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [time, setTime] = useState('')

	function submitHandler(e) {
		// prevent default behavior
		e.preventDefault()
		// create a new todo object that fits the data schema
		const newTodo = {
			title,
			description,
			time
		}
		// set the data array to include the new todo object
		setData([...data, newTodo])
		setTitle('')
		setDescription('')
		setTime('')
	}

	return (
		<form onSubmit={submitHandler}>
			<input
				type='text'
				placeholder='Title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				type='text'
				placeholder='Description'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<input
				type='text'
				placeholder='Time'
				value={time}
				onChange={(e) => setTime(e.target.value)}
			/>
			<button type='submit'>Submit</button>
		</form>
	)
}

export default Form
