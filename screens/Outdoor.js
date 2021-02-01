import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform
} from "react-native";
import { Block, Text, theme, Input } from "galio-framework";
import { Icon, Product, Button } from '../components/';
import products from '../constants/products';
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import articles from '../constants/articles';
import { Card } from '../components';
import articles2 from '../constants/articles2';

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class About extends React.Component {
  render() {
    return (
      <Block flex style={styles.about}>
        <Block flex>
          <ImageBackground
            source={Image.AboutBackground}
            style={styles.aboutContainer}
            imageStyle={styles.aboutBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.articles}
              style={styles.aboutPic}
            > 
              
              <Block flex style={styles.aboutCard}>
                <Block middle style={styles.avatarContainer}>
                  <Image
                    source={{ uri: Images.AboutPicture }}
                    style={styles.avatar}
                  />
                </Block>
                <Block style={styles.info}>
                  <Block
                    middle
                    row
                    space="evenly"
                    style={{ marginTop: -50, paddingBottom: 24 }}
                  >
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={25} color="#32325D">
                      3 Week Treatment
                    </Text>
                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                    (Commercial and Residential Control)
                    </Text>
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block middle>
                    <Text
                      size={21}
                      color="#525F7F"
                      style={{ textAlign: "center" }}
                    >
If you're anything like my family, we spend a lot of time outdoors. If Mosquitos and other insects drive you insane you have came to the right company. We have an Outdoor Control Program that is second to none and is a 3 week treatment starting at $45. This is our most popular solution. For a little more, we offer a natural solution.
                    </Text>
                  </Block>
                  <Block
                    row
                    space="between"
                  >
                    
                    <Text bold size={24} color="#525F7F" style={{marginTop: 40, marginLeft: 125}}>
                      Pricing
    
                    </Text>
             </Block>
             <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
      
   
                </Block>
  
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
     
      </Block>
    );
  }    
  


  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles2}>
        <Block flex row>
        <Card item={articles2[0]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles2[1]} />
            </Block>
          <Block flex row>
            <Card item={articles2[2]} style={{ marginRight: theme.SIZES.BASE }} />
            <Card item={articles2[3]} />
          </Block>
        
      </ScrollView>
    )
  }
  
}

const styles = StyleSheet.create({
      home: {
    width: width,    
  },
  about: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  aboutContainer: {
    width: width,
    height: height,
    padding: 0,
   position: "absolute",
    marginTop: 0
  },
  aboutPic: {
    width: width,
    height: height,
    marginTop: 0
  },
  aboutBackground: {
    width: width,
    height: height / 2
  },
  aboutCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  articles2: {
    width: width - theme.SIZES.BASE *3,
    paddingVertical: theme.SIZES.BASE,
    
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 338,
    height: 220,
    marginTop: 75,
    borderRadius: 4,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});

export default About;
