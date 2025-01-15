import React from 'react';
import {StyleSheet, View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home/Home';
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import WishListScreen from '../Screens/WishList/WishListScreen';
import CartScreen from '../Screens/Cart/CartScreen';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from 'react-native-vector-icons/Fontisto';

const Tab = AnimatedTabBarNavigator();

const AppNavigator = () => {

  // use nested navigation for use different navigation methods.
  
  return (
   
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "#000000",
    }}
    appearance={{
      floating: true, // Ensure this is set to true
      topPadding: 10, // Reduced from default 20 to 10
      bottomPadding: 10,// Reduced from default 20 to 10
      horizontalPadding: 10, // Reduce side padding if needed
      tabBarBackground: "white",
      shadow: true,
      
    }}
    
    >
      <Tab.Screen 
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                name="home"
                size={size ? size : 24}
                color={focused ? color : "#222222"}
                focused={focused}
                // color={color}
            />
        )
      }} />
      <Tab.Screen 
      name="wishlist"
      component={WishListScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                name="heart"
                size={size ? size : 24}
                color={focused ? color : "#222222"}
                focused={focused}
                // color={color}
            />
        )
      }} 
       />
      <Tab.Screen 
      name="cart"
      component={CartScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                name="shopping-basket"
                size={size ? size : 24}
                color={focused ? color : "#222222"}
                focused={focused}
                // color={color}
            />
        )
      }} 
       />
      <Tab.Screen 
      name="profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                name="male"
                size={size ? size : 24}
                color={focused ? color : "#222222"}
                focused={focused}
                // color={color}
            />
        )
      }} 
       />
    </Tab.Navigator>

  );
};

export default AppNavigator;

const styles = StyleSheet.create({

});
