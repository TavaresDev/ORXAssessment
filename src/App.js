import React, { useState, useEffect } from "react"

import { Box, Container, Grid, TextField } from '@mui/material';
import User from "./components/User";

const App = () => {
  const [users, setUsers] = useState([])
  const [todo, setTodo] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [searchField, setSearchField] = useState("")

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        setUsers(json)
        console.log(json)
      });

  }, [])

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          setTodo(json)
        });
  
    }, [])


  // update users based on search
  useEffect(() => {
    setFilteredUsers(users)
  }, [users])

  // filter users list based on names
  useEffect(() => {
    const filteredList = users.filter((user) => {
      const name = user.name.toLowerCase()
      const email = user.email.toLowerCase()
      if (name.indexOf(searchField.toLowerCase()) && email.indexOf(searchField.toLowerCase()) >= 0) {
        return true
      }
      return false
    })
    setFilteredUsers(filteredList)
  }, [searchField])


  return (
    <Container maxWidth='md'>
      
      <h1>ORX Technical Assessment</h1>
      <Box mt={6} mb={3}>

        <TextField
          onChange={(e) => setSearchField(e.target.value)}
          placeholder='Search'
          fullWidth
          id='filterUsers'
  
        />
      </Box>


      <Grid
        container
        direction='column'
        justify='space-between'
        alignItems='center'>
        {users.length !== 0 ? (
          filteredUsers.map((user) => (
            <User
              key={user.id}
              name={user.name}
              email={user.email}
              phoneNumber={user.phone}
              address={user.address.city}
              website={user.website}
              todos={todo}
            />
          ))
        ) : (
          <div>Loading</div>
        )}
      </Grid>
    </Container>


  )
}

export default App