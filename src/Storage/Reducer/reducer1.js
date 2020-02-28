const initial = [];

const Items = (state = initial, action) => {
    switch (action.type) {
        case 'Add_Item':
            const date = new Date();
            const id = state.length + 1;
            const newItem = {
                id,
                date: date.toDateString(),
                ...action.payload
            }
            return [ ...state, newItem ];
    
            case 'Delete_Item':
                const newState = state.filter((item) => item.id !== action.payload);
                return newState;
                
        default:
            return state;
    }
}

export default Items;