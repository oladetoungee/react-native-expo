
import { View, Text, ScrollView, Image, Button, Alert } from 'react-native';
import { images } from '@/constants';
import CustomButton from './CustomButton';
import { router } from 'expo-router'

interface EmptyStateProps {
    title: string;
    subtitle: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle }) => {
    return (
        <View className='justify-center items-center px-4'>
            <Image source={images.empty} className='w-[270px] h-[215px]' resizeMode='contain' />
            <Text className='text-sm font-pmedium'>{title}</Text>
            <Text className='text-xl text-center text-gray-500 font-psemibold'>{subtitle}</Text>
            <CustomButton
             title='Add a new item' 
             onPress={() => router.push('/create')}
             containerStyles='w-full my-5' />
        </View>
    );
}

export default EmptyState;