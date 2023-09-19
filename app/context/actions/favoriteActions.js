// export const addToFavorites = (data) => ({
//     type: 'ADD_TO_FAVORITES',
//     item: data,
//   });
  
//   export const removeFromFavorites = (itemID) => {
//     console.log('Removing item with ID:', itemID);
//     return{
//       type: 'REMOVE_FROM_FAVORITES',
//       itemID: itemID,
//     }
//   };

  // Action types
const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

  export const addToFavorites = (data) => ({
    type: ADD_TO_FAVORITES,
    item: data,
  });
  
  export const removeFromFavorites = (_id) => ({
    type: REMOVE_FROM_FAVORITES,
    item: _id,
  });

export const emptyFavorites = () =>{
    return {
        type : "EMPTY_FAVORITES"
    };
}