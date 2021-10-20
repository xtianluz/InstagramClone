import React from "react";
import {FlatList} from 'react-native';
import Story from "../Story";
import styles from "./styles";

const data = [
    {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/7/76/PapuaNewGuineanandson.jpg',
        name: 'Lukas',
    },
    {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Memmingen_-_Wallenstein_2016_-_Bev%C3%B6lkerung_2.jpg',
        name: 'Vadim',
    },
    {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Fallas2017_Ofrena_15.jpg',
        name: 'Alexa',
    },
    {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Do%C3%B1a_juanita.jpg',
        name: 'Juanita',
    },
    {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/7/76/PapuaNewGuineanandson.jpg',
        name: 'Lukasas',
    },
    {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Memmingen_-_Wallenstein_2016_-_Bev%C3%B6lkerung_2.jpg',
        name: 'Vadimas',
    },
    {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Fallas2017_Ofrena_15.jpg',
        name: 'Alexas',
    },
    {
        imageUri: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Do%C3%B1a_juanita.jpg',
        name: 'Juanitas',
    },
]
const Stories = () => {
    return(
        <FlatList
            style={styles.container} 
            data={data}
            keyExtractor={({name}) => name}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name}/>}
        />
    );
}

export default Stories