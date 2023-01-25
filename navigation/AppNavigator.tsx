import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import MainNavigator from './MainNavigator'

function AppNavigator() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator
