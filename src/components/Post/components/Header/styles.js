import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: "space-between",
        alignItems: 'center',
        
    },
    left:{
        flexDirection: 'row',
    },
    right:{
        marginRight: 10,
        
    },
    name:{
        marginLeft: 10,
        alignSelf: 'center',
        fontWeight: 'bold',
    }
})

export default styles