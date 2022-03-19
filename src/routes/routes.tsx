import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, Ionicons, MaterialIcons  } from '@expo/vector-icons';

import Exercise from '../screens/Exercise';
import MainScreen from '../screens/Main';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: FontAwesome5,
    name: 'folder-minus',
  },
  Chat: {
    lib: Ionicons,
    name: 'ios-chatbox-ellipses',
  },
  Book: {
    lib: MaterialIcons,
    name: 'book',
  },
};

export default function Routes(){
  return(
    <Tab.Navigator
      initialRouteName='Home'
    >
    <Tab.Screen
      name='Home'
      component={MainScreen}
      options = {{
        title: ''
      }}
    />
    <Tab.Screen
      name='Chat'
      component={MainScreen}
      options = {{
        title: ''
      }}
    />
    <Tab.Screen
      name='Book'
      component={Exercise}
      options = {{
        title: ''
      }}
    />
    </Tab.Navigator>
  )
}