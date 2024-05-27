import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import "@/global.css"
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';
import { Redirect, router} from 'expo-router'

export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-black h-full'>
      <ScrollView  className='bg-black' contentContainerStyle={{ height: '100%' }}>
        <View className='w-full justify-center items-center min-h-[85vh] px-4 py-0'>
          <Image
            source={images.logo}
            className='w-[60%]'
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className='w-[90%] h-[300px]'
            resizeMode='contain'
          />
          <View className='relative '>
            <Text className='text-white text-3xl font-bold'>
              Welcome to React Native with
              <Text className='text-rose-500'>  Expo</Text>
            </Text>
            <Image
              source={images.path}
              className='w-[138px] h-[15px] absolute -bottom-2 '
              resizeMode='contain'
            />
          </View>
          <View className='mt-4'>
            <Text className='text-white px-4 py-2 rounded-md'>
              Get Started with Expo Router and Tailwind CSS
            </Text>
            <CustomButton title='Get Started' onPress={() => router.push('/sign-in')} />
        </View>
        </View>
        <StatusBar backgroundColor='#161622' style='dark' />
      </ScrollView>
    </SafeAreaView>
  );
}
