const initialState = {
    favorites: [],
  };
  
  const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITES':
        return {
          ...state,
          favorites: [...state.favorites, action.item],
        };
      
      case 'REMOVE_FROM_FAVORITES':
        console.log('Reducer: Removing item with ID:', action.item);
        return {
          ...state,
          favorites: state.favorites.filter((item) => item.data._id !== action.item), 
        };
        case "EMPTY_FAVORITES":
            return{
                ...state,
                favorites:[]
            }
      default:
        return state;
    }
  };
  
  export default favoriteReducer;

