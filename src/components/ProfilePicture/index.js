import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

const ProfilePicture = ({ uri, size = 70 }) => {
  return(
    <View style={styles.container, {width: size + 6, height: size + 6, borderRadius: (size + 6) / 2, borderWidth: 3, borderColor: '#36d9d3'}}>
        <Image style={styles.image, {width: size, height: size, borderRadius: size / 2, borderWidth: 2, borderColor: '#ffffff' }} 
        source={{uri: uri,}} />
    </View>
  );       
  
};

export default ProfilePicture;
