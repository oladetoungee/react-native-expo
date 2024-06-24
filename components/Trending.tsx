import React from 'react';
import { View, Text, FlatList } from 'react-native';

interface Post {
    id: number;
}

interface TrendingProps {
    posts: Post[];
}

const Trending: React.FC<TrendingProps> = ({ posts }) => {
    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Text className='text-white'>{item.id}</Text>
            )} 
            horizontal
        />
    );
}
export default Trending;
