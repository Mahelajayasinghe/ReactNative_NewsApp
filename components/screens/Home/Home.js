import React, {useEffect} from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import Card from '../../ArticleCard/Card.js'
import { getArticles } from '../../State/news/news.actions.js'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
        alignItems:'center',
        marginTop:30
    },
    safesare:{
        flex:1,
    }
})
const Home = ({articles,getNewsArticles}) => {
    useEffect(() => {
        getNewsArticles();
    }, [getNewsArticles]);

    const renderItem = ({item})=> (
        <Card
                imgURL={item.urlToImage}
                Title= {item.title}
                Source= {item.source.name}
                Time={item.publishedAt}
        />
    );

    const keyExtractor = (item,index) => index.toString();

    return (
        <SafeAreaView style={styles.safesare}>
            <View style={styles.container}>
                <FlatList 
                    data={articles} 
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}
const mapStateToProps = ({news})=>({articles:news.articles});
export default connect(mapStateToProps, {getNewsArticles: getArticles})(Home);
