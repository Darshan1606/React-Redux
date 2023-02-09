import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { 
    id: '0', 
    name: 'Tianna Jenkins' 
  },
  { 
    id: '1', 
    name: 'Kevin Grant' 
  },
  { 
    id: '2', 
    name: 'Madison Price' 
  }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded: (state, action) => {
      state.push(action.payload)
    },
    userUpdated: (state, action) => {
      const { id, name } = action.payload
      const existingUser = state.find(user => user.id === id)
      if (existingUser) {
        existingUser.name = name
      }
    }
  }
})

export default usersSlice.reducer