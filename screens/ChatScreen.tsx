import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import chatbg from '../assets/chat-bg.jpeg'

const ChatScreen = (props) => {
  let style = getStyle()
  return (
    <View style={style.container}>
      <ImageBackground
        source={chatbg}
        style={style.container}
      ></ImageBackground>

      <View style={style.inputContainer}>
        <Button title="Image" />
        <TextInput />
        <Button title="Camera" />
      </View>
    </View>
  )
}

function getStyle() {
  const insets = useSafeAreaInsets()
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    inputContainer: {
      flex: 0,
      flexDirection: 'row',
    },
  })
  return styles
}
export default ChatScreen
