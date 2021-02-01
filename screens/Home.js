import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Button } from 'react-native';
import { Block, theme } from 'galio-framework';
import { Card } from '../components';
import articles from '../constants/articles';

const { width } = Dimensions.get('screen');

class Home extends React.Component {
  renderContact = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
    
   
         <Card  item={articles[2]} full />
          <Card item={articles[1]} full   />
          <Card item={articles[0]} full   />
       
        </Block>
      </ScrollView>
  );
    }
  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderContact()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
    articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,

    
  },
  
});



export default Home;