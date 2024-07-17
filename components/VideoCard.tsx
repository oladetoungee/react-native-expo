import React from 'react';
import { View, Text, Image } from 'react-native';

interface VideoCardProps {
    video: {
        $id: string;
        title: string;
        thumbnail: string;
        prompt: string;
        video: string;
        $createdAt: string;
        $updatedAt: string;
        creator: {
            $id: string;
            name: string;
            avatar: string;
        };
    };
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
    console.log('VideoCardProps', video);

    return (
        <View className='flex-col items-center px-4 mb-14 text-white'>
            <View className='flex-row gap-3 items-start'>
                <View className='justify-center items-center flex-row flex-1'>
                    <View className='w-50 h-50 rounded-lg border border-rose-300 justify-center items-center p-0.5'>
                        <Image source={{ uri: video.thumbnail }} className='w-50 h-25 rounded-lg' />
                        <Text className='text-white'>{video.title} </Text>
                    </View>
                </View>
            </View>
            <Text className='mt-2 text-lg font-bold text-center'>{video.title}</Text>
            <View className='flex-row items-center mt-2'>

            </View>  
        </View>
    );
}

export default VideoCard;
