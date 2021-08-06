import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import moment from 'moment'

const styles = StyleSheet.create({
    safesare:{
        flex:1
    },
    container:{
        width:'95%',
        height: 350,
        marginTop:10,
        marginBottom:20,
        backgroundColor:'#e5e5ff',
        borderRadius:10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset:{
            width:0,height:2
        },
        shadowRadius:4,
        elevation:5
        
    },
    image:{
        width:'100%',
        aspectRatio: 16/9,
        borderRadius:10
    },
    title:{
        fontSize:19,
        fontWeight:'bold',
        color:'black'
    },
    bottomcontainer:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})
const Card = ({imgURL,Title,Source,Time}) => {
    return (
        <View style={styles.container}>
            <Image
                source={{uri:imgURL}}
                style={styles.image}
            />
            <Text style={styles.title}>{Title}</Text>
            <View style={styles.bottomcontainer}>
                <Text>{Source}</Text>
                <Text>{moment(Time).fromNow()}</Text>
            </View>
        </View>
    )
}

export default Card

