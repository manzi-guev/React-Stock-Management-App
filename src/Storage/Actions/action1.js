export const addingItem = (data) => {
    return {
        type: 'Add_Item',
        payload: data
    }
}
export const deletingItem = (id) => {
    return {
        type: 'Delete_Item',
        payload: id
    }
}