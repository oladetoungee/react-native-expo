import React, { useState } from 'react';
import { View, Text, ScrollView, Image, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';
import {createUser}  from '@/lib/appwrite';

const SignUp: React.FC = () => {
    const [form, setForm] = useState({username: '', email: '', password: '' });

    const handleSignUp = () => {
      console.log('form:', form);
      createUser(form.email, form.password, form.username);
    };
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    return (
        <SafeAreaView className='bg-black h-full'>
            <ScrollView className='bg-black h-[100vh]'>
                <View className='w-full justify-center min-h-[85vh] px-6 my-6'>
                    <Image
                        source={images.logo}
                        className='w-[115px] h-[35px]'
                        resizeMode='contain'
                    />
                    <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Sign Up to Expo</Text>
                    <FormField
                        label="Username"
                        value={form.username}
                        onChangeText={(username) => setForm({ ...form, username })}
                        placeholder="Enter your username"
           
                    />
                    <FormField
                        label="Email"
                        value={form.email}
                        onChangeText={(email) => setForm({ ...form, email })}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                    />
                    <FormField
                        label="Password"
                        value={form.password}
                        onChangeText={(password) => setForm({ ...form, password })}
                        placeholder="Enter your password"
                        secureTextEntry 
                    /> 
                    <CustomButton title='Sign Up' onPress={handleSignUp} isLoading={isSubmitting}/>
                    <View className='flex-row justify-center mt-4'>
                        <Text className='text-white'>Have an account already?</Text>
                        <Link href='/sign-in' className='text-rose-300 ml-1'>Sign In</Link>
                        </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignUp;
