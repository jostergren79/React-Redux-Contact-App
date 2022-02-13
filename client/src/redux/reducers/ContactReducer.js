const initialState = [

    {
        id: 0,
        name: 'Jason Ostergren',
        number: 123456789,
        email: 'jason.ostergren@gmail.com'
    },
    {
        id: 1,
        name: 'Tom Ostergren',
        number: 123456788,
        email: 'tom.ostergren@gmail.com'
        
    }


]

const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_CONTACT": 
        state = [...state, action.payload]
        return state
        case "UPDATE CONTACT":
        const updateState = state.map((contact) => contact.id === action.payload.id ? action.payload : contact 
        )
        return state = updateState
        default: 
        return state 
    }
}

export default contactReducer
