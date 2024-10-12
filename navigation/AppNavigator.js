import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home/Home';
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import WishListScreen from '../Screens/WishList/WishListScreen';
import CartScreen from '../Screens/Cart/CartScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

  // use nested navigation for use different navigation methods.
  
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="wishlist" component={WishListScreen} />
      <Tab.Screen name="cart" component={CartScreen} />
      <Tab.Screen name="profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
