import { Box, Card } from "@mui/material"
import React from "react"
import { useState } from "react"

export const UserList = ({ children }) => {
	return <div style={{ margin: "6px" }}>{children}</div>
}

const User = ({ name, email, phoneNumber, address, website, todos }) => {
	const [todo, setTodo] = useState([])

	const getTodos = () => {
		console.log("teste")

		//filter the todos by UserID
	}

	return (
		<Card>
			<Box m={2}>
				<UserList>{name}</UserList>
				<UserList>{email}</UserList>
				<UserList>{phoneNumber}</UserList>
				<UserList>{address}</UserList>
				<UserList>{website}</UserList>

				<button onClick={getTodos}>Get user Todos</button>

				
			</Box>
		</Card>
	)
}

export default User
