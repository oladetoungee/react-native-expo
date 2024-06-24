import { icons } from '@/constants';
import React, { useState } from 'react';
import { View, Text, TextInput, Image, TextInputProps, TouchableOpacity } from 'react-native';

interface SearchInputProps extends TextInputProps {
    label: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ ...textInputProps }) => {

    return (
        <View className='flex-row items-center rounded-lg bg-primary  shadow border-2 w-full space-x-4 p-4'>
            <TextInput
                className='text-base mt-0.5 text-white flex-1 font-pregular'
                placeholder='Search for a Video Topic'
                {...textInputProps}
            />
            <TouchableOpacity >
                <Image className='w-4 h-4 ' source={icons.search}
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
    );
}

export default SearchInput;
