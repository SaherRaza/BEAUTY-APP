import {combineReducers} from "redux";
import feedsReducer from "./feedsReducer";
import cartReducer from "./cartReducer";
import favoriteReducer from "./favoriteReducer";

const myReducer = combineReducers({
    feeds: feedsReducer,
    cartItems: cartReducer,
    favoritesItems: favoriteReducer,
});

export default myReducer;