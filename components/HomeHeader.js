import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ios = Platform.OS == 'ios';

export default function HomeHeader() {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: ios ? top : top+10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'lightblue',
        paddingHorizontal: 16,
        paddingBottom: 16,
        borderRadius: 20
      }}>
      <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Chats</Text>
    </View>
  )
}

const styles = StyleSheet.create({})