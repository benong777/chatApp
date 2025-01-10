import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import { blurhash } from '../utils/common'
import { useAuth } from '../context/authContext'

const ios = Platform.OS == 'ios';

export default function HomeHeader() {
  const { top } = useSafeAreaInsets();
  const { user } = useAuth();

  return (
    <View
      style={{
        paddingTop: ios ? top : top+10,
        backgroundColor: '#3B94CB',
        paddingHorizontal: 16,
        paddingBottom: 16,
        borderRadius: 20
      }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Chats</Text>
        <Image
          style={{ height: 32, aspectRatio: 1, borderRadius: 100 }}
          // source="https://picsum.photos/seed/696/3000/2000"
          source={user?.profileUrl}
          placeholder={{ blurhash }}
          transition={500}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})