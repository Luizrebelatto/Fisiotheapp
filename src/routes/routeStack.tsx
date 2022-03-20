import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from '../screens/Main';
import ExerciseScreen from '../screens/Exercise';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Exercise"
        component={ExerciseScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}