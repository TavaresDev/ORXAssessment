import { Button, Checkbox } from "@mui/material"
import React, { useState, useEffect } from "react"
import styled from "styled-components"

const TodoListWrapper = styled.div`
	border-top: 1px dashed purple;
	padding: 1rem;

	h3 {
		text-align: center;
	}
	& > div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		p {
			padding: 0rem 1rem;
		}
	}
`

const TodoList = ({ name, userTodos }) => {
	const [todos, setTodos] = useState(userTodos)
	const [completedTodos, setCompletedTodos] = useState(0)
	const [totalTodos, setTotalTodos] = useState(0)

	// update Todos total
	useEffect(() => {
		setCompletedTodos(0)
		setTotalTodos(0)
		todos.forEach((todo) => {
			setTotalTodos((totalTodos) => totalTodos + 1)
			if (todo.completed == true) {
				setCompletedTodos((completedTodos) => completedTodos + 1)
			}
		})
	}, [todos])

	const handleChange = (id) => {
		let updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				console.log(todo)
				todo.completed = !todo.completed
			}
			return todo
		})
		setTodos(updatedTodos)
	}

	const handleDelete = (id) => {
		let updatedTodos = todos.filter((todo) => todo.id !== id)
		setTodos(updatedTodos)
	}

	return (
		<TodoListWrapper>
			<h3>
				{name} Todos {completedTodos} / {totalTodos}
			</h3>

			{todos.map((todo) => (
				<div key={todo.id}>
					<Checkbox
						checked={todo.completed}
						onChange={() => handleChange(todo.id)}
						inputProps={{ "aria-label": "controlled" }}
					/>
					<p>{todo.title}</p>
					<Button onClick={() => handleDelete(todo.id)}> Delete</Button>
				</div>
			))}
		</TodoListWrapper>
	)
}

export default TodoList
