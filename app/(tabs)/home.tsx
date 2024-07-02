import { View, Text, FlatList, RefreshControl, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import images from '@/constants/images';
import SearchInput from '@/components/SearchInput';
import Trending from '@/components/Trending';
import EmptyState from '@/components/EmptyState';
import { getAllPosts } from '@/lib/appwrite';
import useAppWrite from '@/lib/useAppWrite';

type Post = {
    $id: string;
    title: string;
    thumbnail: string;
    prompt: string;
    video: string;
    $createdAt: string;
    $updatedAt: string;
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
        console.log('Posts:', data); // Log posts to check if data is correct
    }, [data]);

    const renderItem = ({ item }: { item: Post }) => (
        <TouchableOpacity style={styles.card} onPress={() => console.log('Navigate to post', item.video)}>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.prompt}>{item.prompt}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        // <View style={styles.container}>
        //     <FlatList
        //         data={data?.documents || []}
        //         renderItem={renderItem}
        //         keyExtractor={(item) => item.$id}
        //         refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        //         ListEmptyComponent={data && data.documents.length === 0 ? <EmptyState title='No posts available' subtitle='Please check back later.' /> : null}
        //     />
        // </View>

        <View className='bg-black h-full text-white'>
        <FlatList
          data={data?.documents || []}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
                <Text className='text-3xl text-white'>{item.title}</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    card: {
        flexDirection: 'row',
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
    },
    thumbnail: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    textContainer: {
        flex: 1,
        padding: 8,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    prompt: {
        fontSize: 14,
        color: '#666',
    },
});

export default Home;