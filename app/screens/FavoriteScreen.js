import {
    Image,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
  } from "react-native";
  import React, { useState, useEffect,  } from "react";
  import { useDispatch} from 'react-redux';
  import {
    AntDesign,
    Entypo,
    FontAwesome5,
    MaterialIcons,
  } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  import { useSelector } from "react-redux";
import { removeFromFavorites } from "../context/actions/favoriteActions";

  const FavoriteScreen = () => {
    const navigation = useNavigation();
  
    const cartItems = useSelector((state) => state.cartItems.cart);
    const favoritesItems = useSelector((state) => state.favoritesItems.favorites);
    
    //console.log("cart items:", cartItems);
  
  
  
    return (
      <SafeAreaView className="flex-1 w-full items-start justify-start bg-[#EBEAEF] space-y-4">
        {/* top section */}
        <View className="flex-row items-center justify-between w-full px-4 py-2">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name="chevron-left" size={32} color={"#555"} />
          </TouchableOpacity>
  
          <Text className="text-xl font-semibold text-[#555]">Favorites</Text>
  
          <View className="w-10 h-10 rounded-xl bg-white flex items-center justify-center relative">
            <FontAwesome5 name="shopping-bag" size={16} color="black" />
            <View className="absolute w-4 h-4 bg-black top-0 right-0 rounded-md flex items-center justify-center">
              <Text className="text-white">{cartItems?.length}</Text>
            </View>
          </View>
        </View>
  
        {favoritesItems.length === 0 || !favoritesItems ? (
          <View className="flex-1 items-center w-full justify-center p-4 bg-white">
            <Image
              source={require("../assets/EmptyCart.png")}
              className="w-64 h-64"
            />
          </View>
        ) : (
          <View
           className="w-full flex-1">
            <View  className="flex space-y-4">
              <FlatList 
                data={favoritesItems}
                keyExtractor={(item) => item.data._id}
                renderItem={({ item }) => (
                  <CartItemCard item={item.data}/>
                )}
              />
            </View>
            
  
          </View>
        )}
      </SafeAreaView>
    );
  };
  
  export default FavoriteScreen;
  
 
  export const CartItemCard = ({ item }) => {
    const dispatch = useDispatch();

    const removeItem = (_id) => {
      console.log('Swiped from right:------------- ', _id); 
      dispatch(removeFromFavorites(_id));
    };

    return (
     <View  className="flex-row px-6 w-full items-center my-1">
        {/* Image */}
        <View className="bg-white rounded-xl flex items-center justify-center p-2 w-16 h-16 relative">
          <Image
            source={{ uri: item?.mainImage?.asset?.url }}
            resizeMode="contain"
            className="w-12 h-12"
          />
        </View>
        {/* Item Name and Price*/}
        <View className="flex items-center space-y-2 ml-3 ">
          <View className="flex items-start justify-center">
            <Text className="text-lg font-semibold text-[#555]">
              {item?.title}
            </Text>
          </View>
        </View>
         <TouchableOpacity className="items-center justify-start ml-3"
         onPress={() => removeItem(item._id)}>
            <Text>Remove</Text>
         </TouchableOpacity> 
  
     </View>
    );
  };
  