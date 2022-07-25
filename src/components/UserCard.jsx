import { Button} from "@mui/material"
import styled from "styled-components"
import React from "react"
import TodoList from "./TodoList"
import { useState } from "react"


const UserWrap = styled.div`
	margin: 1rem;
	border-radius: 5px;
	background: #ddd;
	display: flex;
	flex-direction: column;
`
const UserContainer = styled.div`
	& header {
		padding:0.5rem;
		margin-bottom: 1rem;
		border-radius: 5px;
		color:white;
		background: #777;
		border-bottom: solid green 1px;
	}
	& > div {

		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	padding: 1rem;
	& > div > div {
		padding: 0.2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`

const UserCard = ({
	id,
	name,
	email,
	phoneNumber,
	address,
	website,
	todos,
}) => {
	const [userTodo, setUserTodo] = useState([])
	const [isTodoOpen, setIsTodoOpen] = useState(false)

	const getTodos = (userId) => {
		const userTodo = todos.filter((todo) => {
			return todo.userId == userId
		})
		setUserTodo(userTodo)
		setIsTodoOpen(!isTodoOpen)
	}

	return (
		<UserWrap>
			<UserContainer>
				<header> <span>{name}</span></header>
				<div>
					<div>
						<div>Email: {email}</div>
						<div>Phone: {phoneNumber}</div>
						<div>Website: {website}</div>
					</div>
					<div>
						<div>Adress: {address.street}, {address.suite}</div>
						<div>City: {address.city}</div>
						<div>Zipcode: {address.zipcode}</div>
				
					</div>
					<div>
						<Button variant='contained' onClick={() => getTodos(id)}>
							Show To-dos
						</Button>
			
					</div>
				</div>
			</UserContainer>

			{isTodoOpen && (
				<TodoList name={name} userTodos={userTodo}/>
					
			)}
		</UserWrap>
	)
}

export default UserCard
