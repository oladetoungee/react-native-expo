import { icons } from '@/constants';
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TextInputProps, TouchableOpacity } from 'react-native';

interface FormFieldProps extends TextInputProps {
    label: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, secureTextEntry, ...textInputProps }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View className='mb-4 mt-2 border-gray-200 bg-black-500 text-white'>

<Text className='text-rose-300 text-sm'>{label}</Text>
            <View className='flex-row items-center rounded-lg bg-rose-100  shadow border-2 w-full'>
                <TextInput
                    className='p-4 rounded-lg border-2 focus:border-rose-300 w-full '
                    secureTextEntry={secureTextEntry && !isPasswordVisible}
                    placeholderTextColor="#aaa"
                    {...textInputProps}
                />
                {secureTextEntry && (
                    <TouchableOpacity onPress={togglePasswordVisibility}>
                        <Image className='w-4 h-4 ' source={!isPasswordVisible ? icons.eye : icons.eyeHide}/>
                    </TouchableOpacity>
                )}
            </View>
     
        </View>
    );
}

export default FormField;
