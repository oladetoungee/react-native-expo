import { View, Text, FlatList, RefreshControl, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import images from '@/constants/images';
import SearchInput from '@/components/SearchInput';
import Trending from '@/components/Trending';
import EmptyState from '@/components/EmptyState';
import { getAllPosts } from '@/lib/appwrite';
import useAppWrite from '@/lib/useAppWrite';
import VideoCard from '@/components/VideoCard';

type Post = {
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

type PostsData = {
    documents: Post[];
};

const Home = () => {
      const { data, reFetch } = useAppWrite(getAllPosts) as { data: PostsData | null, reFetch: () => void };
    const [refreshing, setRefreshing] = useState(false);


    const onRefresh = async () => {
        setRefreshing(true);
        await reFetch();
        setRefreshing(false);
    };

    useEffect(() => {
        reFetch();
    }, [data]);



    return (
       

        <View className='bg-black h-full text-white'>
        <FlatList
          data={data?.documents || []}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
            <VideoCard video={item} />
            )}
            ListHeaderComponent={() => (
                <View className='my-6 px-4 space-y-6'>
                    <View className='justify-between items-start flex-row mb-6'>
                        <View>
                            <Text className='text-lg font-pregular text-white'>Welcome to Expo</Text>
                            <Text className='text-xl font-psemibold text-white'>Get started with Expo and Tailwind CSS</Text>
                        </View>
                        <View>
                            <Image
                                source={images.logoSmall}
                                className='w-9 h-10'
                                resizeMode='contain'
                            />
                        </View>
                    </View>
                    <SearchInput
                        label='Search'
                    />
                    <View className='w-full flex-1 pt-5 pb-8'>
                        <Text className='text-lg font-pregular mb-3 text-white'>Latest Videos</Text>
                        <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
                    </View>
                </View>
            )}
            ListEmptyComponent={() => (
                <EmptyState
                    title='No Posts'
                    subtitle='No posts were found'
                />
            )}
            refreshControl={<RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />}
        />
    </View>
    );
};



export default Home;