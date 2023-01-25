import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ChatSettingsScreen = (props) => {
  let style = getStyle()

  return (
    <View style={style.container}>
      <Text>Chat settings screen1</Text>
    </View>
  )
}

function getStyle() {
  const insets = useSafeAreaInsets()
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: insets.top,
    },
  })
  return styles
}

export default ChatSettingsScreen
