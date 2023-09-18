import { View, Text, Image } from 'react-native'
import React, {useEffect} from 'react'
import Swiper from 'react-native-swiper'
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = ({navigation}) => {

  useEffect(() => {
    const checkOnboardingStatus = async () =>{
      const value = await AsyncStorage.getItem("@Onboarding_complete");
   //   console.log(value);
      if(value !== null && value === "true"){
        navigation.replace("Home");
      }
    }
    checkOnboardingStatus();
  }, [])
  

  const handleOnboardingComplete = async(e) =>{
   // console.log("Triggered :", e );
    if( e === 2){
      try{
        await AsyncStorage.setItem("@OnboardingComplete", "true");
        navigation.navigate("Home");
      } catch(error) {
        console.log("Error on storing onboarding status :", error);
      }
    }
  }
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Swiper onIndexChanged={handleOnboardingComplete}>
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
      </Swiper>
    </View>
  )
}

export const ScreenOne = () => {
    return(
        <View className="flex-1 items-center justify-center relative">
            <Image className="w-full h-full" 
            resizeMode="cover"
            source={require("../../app/assets/screen1.jpg")}
             />
             <View className="w-56 h-auto flex items-center justify-center p-2 absolute left-4 top-36" >
                <Image className="w-24 h-24" 
            resizeMode="contain"
            source={require("../../app/assets/brand.png")} />
            <Text className="text-xl font-semibold italic text-[#555]">Makeup & SkinCare</Text>
             </View>
        </View>
    )
}

export const ScreenTwo = () => {
    return(
        <View className="flex-1 items-center justify-center relative">
        <Image className="w-full h-full" 
        resizeMode="cover"
        source={require("../../app/assets/screen2.jpg")}
         />
         <View className="flex items-center justify-center absolute">
            <Text className="text-2xl tracking-wider italic text-[#555]">Find your beauty Products Here</Text>
            <Text className="text-xl tracking-wider italic text-[#777]">Skin Care We all need!</Text>
         </View>
    </View>
    )
}

export const ScreenThree = () => {
    return(
        <View className="flex-1 items-center justify-center relative">
        <Image className="w-full h-full" 
        resizeMode="cover"
        source={require("../../app/assets/screen3.jpg")}
         />
         <View className="w-56 h-auto flex items-center justify-center p-2 absolute left-0 top-36" >
            <Text className="text-2xl font-semibold italic text-[#555]">Let's Start</Text>
             </View>
    </View>
    )
}
export default OnboardingScreen