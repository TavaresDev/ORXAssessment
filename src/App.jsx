import React, { useState, useEffect } from "react"
import { Box, Container, TextField } from "@mui/material"
import UserCard from "./components/UserCard"

const App = () => {
	const [users, setUsers] = useState([])
	const [todo, setTodo] = useState([])
	const [filteredUsers, setFilteredUsers] = useState([])
	const [searchField, setSearchField] = useState("")

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => {
				setUsers(json)
				console.log(json)
			})
	}, [])

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((response) => response.json())
			.then((json) => {
				console.log(json)
				setTodo(json)
			})
	}, [])

	// update users based on search
	useEffect(() => {
		setFilteredUsers(users)
	}, [users])

	// filter users list based on names
	useEffect(() => {
		const filteredList = users.filter((user) => {
			const name = user.name.toLowerCase()
            return name.indexOf(searchField.toLowerCase()) >= 0
		})
		setFilteredUsers(filteredList)
	}, [searchField])

	return (
		<Container maxWidth='md'>
			<h1>ORX Technical Assessment</h1>
			<Box p={2} >
				<TextField
					onChange={(e) => setSearchField(e.target.value)}
					placeholder='Search'
					fullWidth
					id='filterUsers'
				/>
			</Box>

			<div>
				{users.length !== 0 ? (
					filteredUsers.map((user) => (
						<UserCard
							key={user.id}
							id={user.id}
							name={user.name}
							email={user.email}
							phoneNumber={user.phone}
							address={user.address}
							website={user.website}
							todos={todo}
						/>
					))
				) : (
					<div>Loading</div>
				)}
			</div>
		</Container>
	)
}

export default App
