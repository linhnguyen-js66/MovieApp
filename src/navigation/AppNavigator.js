import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import LoginScreen from '../screen/login-screen';
import RegisterScreen from '../screen/register-screen';
import HomeScreen from '../screen/home-screen';
import ForgotScreen from '../screen/forgotpwd-screen'
import SearchScreen from '../screen/search-screen'
import ProfileScreen from '../screen/profile-screen'
import MovieDetails from '../screen/movie-details'
import TVScreen from '../screen/TV Detail'
import DownloadScreen from '../screen/download-screen'
import ActorScreen from '../screen/actor-screen'
import {NavigationContainer} from '@react-navigation/native';
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()


const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="film"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'film'} component={FilmStack} />
    </Stack.Navigator>
  );
};

//Film Project

const FilmStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="FAuth"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="FAuth" component={FAuthStack} />
      <Stack.Screen name="FHome" component={FHomeTab} />
    </Stack.Navigator>
  );
};

const FAuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: true,
        headerTitle: 'BACK',
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Register"
        component={RegisterScreen}></Stack.Screen>
      <Stack.Screen
        name="Forgot"
        component={ForgotScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

const FHomeTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="FHome"
      tabBarOptions={{
        inactiveBackgroundColor: 'rgb(33,33,33)',
        activeBackgroundColor: 'rgb(33,33,33)',
        tabStyle: {
          alignItems: 'center',
          justifyContent: 'center',
          top: -30,
          height: 90,
          paddingTop: 10,
          paddingBottom: 30,
        },
        activeTintColor: 'rgb(255,178,36)',
      }}>
      <Tab.Screen
        name="FHome"
        component={FHomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="home" type="ionicon" color={color} />
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name="FSearch"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({color}) => (
            <Icon name="search" type="ionicon" color={color} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="FDownload"
        component={DownloadScreen}
        options={{
          title: 'Download',
          tabBarIcon: ({color}) => (
            <Icon name="download" type="feather" color={color} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="FProfile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="person" type="ionicon" color={color} />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const FHomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'home'} component={HomeScreen} />
      <Stack.Screen name={'detail'} component={MovieDetails} />
      <Stack.Screen name={'TVShowsdetail'} component={TVScreen} />
      <Stack.Screen name={'castDetails'} component={ActorScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator = () => (
  <NavigationContainer>{AppStack()}</NavigationContainer>
);