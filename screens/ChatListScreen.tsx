import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ChatListScreen = (props) => {
  let style = getStyle()
  return (
    <View style={style.container}>
      <Text>Chat list screen1</Text>
      <Button
        title="go to Chat screen"
        onPress={() => props.navigation.navigate('ChatScreen')}
      />
    </View>
  )
}

function getStyle() {
  const insets = useSafeAreaInsets()
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: insets.top,
    },
  })
  return styles
}
export default ChatListScreen
