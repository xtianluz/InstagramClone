import React from "react";
import { FlatList } from "react-native";
import Stories from "../../../Stories";
import Post from "../../index";

const data = [{
    user:{
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/7/76/PapuaNewGuineanandson.jpg',
      name: 'Lukas'
    },
    imageUri: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Muelle_de_Sopot%2C_Polonia%2C_2013-05-22%2C_DD_20.jpg',
    caption: 'Beautiful View Instagram',
    likesCount: 234,
    postedAt: '6 minutes ago'
  },
  {
    user:{
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/7/76/PapuaNewGuineanandson.jpg',
      name: 'Lukas'
    },
    imageUri: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Muelle_de_Sopot%2C_Polonia%2C_2013-05-22%2C_DD_20.jpg',
    caption: 'Beautiful View Instagram',
    likesCount: 234,
    postedAt: '6 minutes ago'
  },
  {
    user:{
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/7/76/PapuaNewGuineanandson.jpg',
      name: 'Lukas'
    },
    imageUri: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Muelle_de_Sopot%2C_Polonia%2C_2013-05-22%2C_DD_20.jpg',
    caption: 'Beautiful View Instagram',
    likesCount: 234,
    postedAt: '6 minutes ago'
  },
  {
    user:{
      imageUri: 'https://upload.wikimedia.org/wikipedia/commons/7/76/PapuaNewGuineanandson.jpg',
      name: 'Lukas'
    },
    imageUri: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Muelle_de_Sopot%2C_Polonia%2C_2013-05-22%2C_DD_20.jpg',
    caption: 'Beautiful View Instagram',
    likesCount: 234,
    postedAt: '6 minutes ago'
  }
]

const Feed = () => {
    return(
    
    <FlatList
            data={data}
            renderItem={({item}) => <Post post={item} />}
            ListHeaderComponent={Stories}
        />
    
    );   

}

export default Feed