import React, { useState, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from "./styles";
import Icon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';


const Footer = ({likesCount: likesCountProp, caption, postedAt}) => {

    const [isLiked, setIslike] = useState(false)
    const [likesCount, setLikesCount] = useState(0)

    const onLikePressed = () => {
        setIslike(!isLiked)
        const amount = isLiked ? -1 : 1
        setLikesCount(likesCount + amount)
    }

    useEffect(() => {
        setLikesCount(likesCountProp)
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <View style={styles.leftIcons}>
                    <TouchableWithoutFeedback onPress={onLikePressed}>
                    
                    {isLiked ? <Icon name='heart' size={25} color={'#ed2f5f'}/> : <Icon name='heart-outline' size={25} />}
                    </TouchableWithoutFeedback>
                    
                    <FAIcon name='comment-o' size={23} />
                    <Icon name='paper-plane-outline' size={23} />
                </View>
                <FAIcon name='bookmark-o' size={23} />                
            </View>

            <Text style={styles.likes}>{likesCount} Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    );
}

export default Footer