import React from "react";
import { View, Text } from 'react-native';
import ProfilePicture from "../../../ProfilePicture";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./styles";

const Header = ({imageUri,name}) => {
    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <ProfilePicture uri={imageUri} size={40} />
                <Text   Text style={styles.name}>{name}</Text>
            </View>
            <View style={styles.right}>
                <Icon name="dots-vertical" size={25} />
            </View>            
        </View>
    );
}

export default Header