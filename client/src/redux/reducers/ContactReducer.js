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
        default: 
        return state 
    }
}

export default contactReducer
