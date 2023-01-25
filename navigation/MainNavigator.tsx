import ChatSettingsScreen from '../screens/ChatSettingsScreen'
import SettingsScreen from '../screens/SettingsScreen'
import { Feather } from '@expo/vector-icons'
import ChatListScreen from '../screens/ChatListScreen'
import ChatScreen from '../screens/ChatScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

function MainNavigator() {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()

  const TabNavigator = () => {
    return (
      <Tab.Navigator screenOptions={{ headerTitle: '' }}>
        <Tab.Screen
          name="ChatList"
          component={ChatListScreen}
          options={{
            tabBarLabel: 'Chats',
            tabBarIcon: ({ color, size }) => (
              <Feather name="message-circle" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: () => (
              <Feather name="settings" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatSettings"
        component={ChatSettingsScreen}
        options={{ headerTitle: 'Settings', headerBackTitle: 'Back' }}
      />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  )
}
export default MainNavigator
