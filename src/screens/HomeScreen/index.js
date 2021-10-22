import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feed from '../../components/Post/components/Feed';

const HomeScreen = () => {
  return (
    <SafeAreaView>   
    <Feed />
    </SafeAreaView>         
  );
};

export default HomeScreen;