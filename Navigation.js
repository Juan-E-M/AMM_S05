import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./Screens/HomeScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import StackScreen from "./Screens/StackScreen";

import { MaterialIcons } from '@expo/vector-icons'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeStackNavigator = createNativeStackNavigator();

function MyStack () {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen 
                name="Bienvenido"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Acerca de"
                component={StackScreen}
            />
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs () {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={MyStack} 
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    headerShown: false
                }}                
            />
            <Tab.Screen 
                name="Idiomas" 
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Idiomas',
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons name="emoji-flags" size={size} color={color}/>
                    ),
                    tabBarBadge: 3,
                }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation () {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}
