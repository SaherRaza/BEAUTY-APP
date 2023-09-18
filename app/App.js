import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import OnboardingScreen from './screens/OnboardingScreen';
import {Provider} from "react-redux"
import store from './context/store';
import ProductScreen from './screens/ProductScreen';
import BottomTab from './components/BottomTab';
import CartScreen from './screens/CartScreen';
// import 'react-native-url-polyfill/auto';
const Stack = createNativeStackNavigator();

const MyComponent = ({setActiveScreen}) => {
  const navigation = useNavigation();

  useEffect(()=>{
    const unSubscribe = navigation.addListener("state", () =>{
      const currentScreen =navigation.getCurrentRoute().name
      setActiveScreen(currentScreen);
      console.log("Active Screen:", currentScreen);
    })
    return unSubscribe;
  },[navigation])
}


const App = () => {
  const [activeScreen, setActiveScreen] = useState("");
  return (
    <NavigationContainer>
    <MyComponent setActiveScreen={setActiveScreen} />
    <Provider store={store}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
      </Stack.Navigator>
    </Provider>
    {
      activeScreen !== "Onboarding" && (
    <BottomTab activeScreen={activeScreen} />
      )
    }
    </NavigationContainer>
  )
}

export default App