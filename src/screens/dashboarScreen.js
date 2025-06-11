import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { fetchPosts } from '../services/api';
import Loader from '../components/Loader';

export default function DashboardScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts().then(data => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <FlatList
      data={posts}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', { item })}>
          <Text style={{ padding: 20 }}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

