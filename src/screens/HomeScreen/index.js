import React from 'react';
import Stories from '../../components/Stories';
import Post from '../../components/Post';

const post = {
  user:{
    imageUri: 'https://upload.wikimedia.org/wikipedia/commons/7/76/PapuaNewGuineanandson.jpg',
    name: 'Lukas'
  },
  imageUri: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Muelle_de_Sopot%2C_Polonia%2C_2013-05-22%2C_DD_20.jpg',
  caption: 'Beautiful View Instagram',
  likesCount: 234,
  postedAt: '6 minutes ago'
}
const HomeScreen = () => {
  return (
    <>
    <Stories />   
    <Post post={post} />
    </>         
  );
};

export default HomeScreen;
