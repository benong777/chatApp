import { Octicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const signIn = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1, borderWidth: 1, borderColor: 'red' }}>
      <StatusBar style="dark" />
      <View style={{ flex: 1, justifyContent: 'center', }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: hp(4), fontWeight: 'bold' }}>Sign In</Text>
        </View>

        {/* Email/Password */}
        <View style={{ borderWidth: 1, borderColor: 'red', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 8, margin: 16, padding: 12 }}>
          <Octicons style={{ marginLeft: 4 }} name="mail" size='20' color='gray' />
          <TextInput 
            style={{ flex: 1, fontSize: 20, marginLeft: 12 }}
            placeholder='Email'
            placeholderTextColor={'gray'}
          />
        </View>
        <View style={{ borderWidth: 1, borderColor: 'red', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 8, marginHorizontal: 16, padding: 12 }}>
          <Octicons style={{ marginLeft: 4 }} name="lock" size='20' color='gray' />
          <TextInput 
            style={{ flex: 1, fontSize: 20, marginLeft: 12 }}
            placeholder='Password'
            placeholderTextColor={'gray'}
          />
        </View>
        <View style={{ alignItems: 'flex-end', marginRight: 16, marginTop: 8 }}>
          <Pressable onPress={() => console.log('Forgot password clicked')}>
            <Text style={{ }}>Forgot password?</Text>
          </Pressable>
        </View>

        {/* SignIn/SignUp */}
        <TouchableOpacity 
          onPress={() => console.log('Signing in...')}
          style={{ alignItems: 'center', backgroundColor: 'lightblue', margin: 16, padding: 12, borderRadius: 6 }}>
          <Text 
            style={{ fontSize: 16, fontWeight: 'bold' }}>Sign In</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 16, marginTop: 8 }}>
          <Text style={{ }}>Don't have an account? </Text>
          <Pressable onPress={() => router.push('signUp')}>
            <Text style={{ fontWeight: 'bold'}}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default signIn;

const styles = StyleSheet.create({});