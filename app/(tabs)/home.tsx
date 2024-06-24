import { View, Text, FlatList, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import images from '@/constants/images';
import SearchInput from '@/components/SearchInput';
import Trending from '@/components/Trending';
import EmptyState from '@/components/EmptyState';
import { Alert } from 'react-native';
import { getAllPosts } from '@/lib/appwrite'


interface Item {
    id: number;
    // other properties as needed
}

const Home = ({ }) => {
    const [posts, setPosts] = useState([]); // [1, 2, 3
    const [loading, setLoading] = useState(false);
    useEffect(() => {
const fetchPosts = async () => {
    setLoading(true);
    try {
        const response = await getAllPosts() as any;
        setPosts(response);

    } catch (error: Error | any) {
     Alert.alert('Error', error.message)
    }
    finally {
        setLoading(false);

    }
}
fetchPosts();
    }
    , []);
console.log(posts);

    const dataArray: Item[] = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
      
            setRefreshing(false);

    }
    return (
         <View className='bg-black h-full text-white'>
         <FlatList
                data={dataArray}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Text className='text-3xl text-white'>{item.id}</Text>
                )}
                ListHeaderComponent={() => (
                    <View className='my-6 px-4 space-y-6'>
                        <View className='justify-between items-start flex-row mb-6'>
                            <View >
                            <Text className='text-lg font-pregular text-white'>Welcome to Expo</Text>
                                <Text className='text-xl font-psemibold text-white'>Get started with Expo and Tailwind CSS</Text>
                            </View>
                            <View>
                                <Image
                                    source={images.logoSmall}
                                    className='w-9 h-10'
                                    resizeMode='contain'
                                >
                                </Image>
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
}

export default Home;
