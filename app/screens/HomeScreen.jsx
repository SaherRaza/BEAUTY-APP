import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState , useEffect} from 'react'
import { SafeAreaView } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { fetchFeeds } from '../sanity';
import { useDispatch, useSelector } from 'react-redux';
import { SET_FEEDS } from './../context/actions/feedsActions';
import Feeds from '../components/Feeds';

const HomeScreen = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(null);

  const feeds = useSelector((state) => state.feeds);
  const dispatch = useDispatch();

  useEffect(()=>{
    setIsLoading(true);
    try{
      fetchFeeds().then(res =>{
//console.log(res);
        dispatch(SET_FEEDS(res))
        console.log("feeds from store: " , feeds?.feeds);
        setInterval(()=>{
          setIsLoading(false)
        },2000);
      });
    }catch(error){
      console.log(error);
      setIsLoading(false);
    }
  },[])

  const handleSearchTerm = (value) =>{
    setSearchTerm(value);
    setFilter(feeds?.feeds.filter((item)=> item.title.includes(value)));
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-start bg-[#EBEAEF]" >
      
      <View className="w-full flex-row justify-between px-4 py-2">
      <Entypo name="chevron-left" size={32} color="#555" />
      <Image
      className="w-12 h-12 rounded-xl"
      resizeMode='cover'
      source={require("../../app/assets/profileImage.jpg")}
       />
      </View>

      {/* search box*/}
      <View className="flex-row items-center justify-between px-4 py-2 w-full space-x-6">
      <View className="px-4 py-2 bg-white rounded-xl flex-1 flex-row items-center justify-center space-x-2">
      <MaterialIcons name="search" size={24} color="#7f7f7f" />
      <TextInput
      className="text-base font-semibold text=[#555] flex-1 py-1 -mt-1"
      placeholder='search here...'
      value={searchTerm}
      onChangeText={handleSearchTerm}
       />
      </View>
      <TouchableOpacity className="w-12 h-12 flex rounded-xl items-center justify-center bg-white">
      <FontAwesome name="filter" size={24} color="black" />
      </TouchableOpacity>
      </View>

      {/* Scrollable Container */}
      <ScrollView className="flex-1 w-full ">
        {isLoading ? 
        <View className="flex-1 h-80 items-center justify-center">
          <ActivityIndicator size={"large"} color={"teal"} />
        </View>
         : <>
          {/* <Feeds feeds={feeds?.feeds} /> */}
          <Feeds feeds={filter || filter?.length > 0 ? filter : feeds?.feeds } />
         </>}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen