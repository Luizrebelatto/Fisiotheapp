import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons, Foundation   } from '@expo/vector-icons';

import StackRoutes from './routeStack';
import Exercise from '../screens/Exercise';
import MainScreen from '../screens/Main';

const Tab = createBottomTabNavigator();

export default function Routes(){
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5B3FFF',
        tabBarInactiveTintColor: '#474747'
      }}
    >
      <Tab.Screen
        name="MainStack"
        component={StackRoutes}
        options={{
          title: '',
          tabBarIcon: (({ size, color }) => 
            <FontAwesome5  name="folder-minus" size={size} color={color}/>
          )
        }}
      />
      <Tab.Screen
        name="Exercise"
        component={Exercise}
        options={{
          title: '',
          tabBarIcon: (({ size, color }) => 
            <Ionicons  name="chatbox-ellipses" size={size} color={color}/>
          )
        }}
      />
      <Tab.Screen
        name="config"
        component={MainScreen}
        options={{
          title: '',
          tabBarIcon: (({ size, color }) => 
          <Foundation  name="book-bookmark"size={size} color={color}/>
        )
        }}
      />
    </Tab.Navigator>
  )
}