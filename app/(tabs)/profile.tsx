import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={{ uri: 'https://example.com/profile-pic.jpg' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Gbemisola</Text>
      <Text style={styles.bio}>
        Software Developer at MPC. Loves Jesus, Family, Friends,Teaching, Coding and Yoruba Men.
      </Text>
      <Link href="/" style={styles.link}>
        Go to Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: 'blue',
    marginTop: 10,
  },
});
