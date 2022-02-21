export const state = () => {
   const storage = process.server ? '' : localStorage.getItem('my_list');
   return (storage) ? { myList: storage } : { myList: [] };
}

export const mutations = {
    addItemToList(state, item) {
        return local_storage.setItem('my_list', state.myList.push(item));
    },

    removeItemFromList(state, item) {
        return local_storage.setItem('my_list', state.myList.slice(current_data.indexOf(item), 1));
    },
}