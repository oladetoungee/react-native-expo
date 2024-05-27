import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import  FormField  from '@/components/FormField';

const SignIn = () => {
    return (
        <SafeAreaView className='bg-black h-full'>
            <ScrollView className='bg-black h-[100vhß]'>
                <View className='w-full justify-center min-h-[85vh] px-6 my-6'>
                    <Image
                        source={images.logo}
                        className='w-[115px] h-[35px]'
                        resizeMode='contain'
                    />
                    <Text className='text--2xl text-white text-semibold mt-10 font-psemibold'>Sign In to Expo</Text>
                    <FormField/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
export default SignIn;