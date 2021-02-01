import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import articles2 from '../constants/articles2';
import { Card } from '../components';


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
                    source={{ uri: Images.SpecialPic }}
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
                     Special Events
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

We service not only residence, but we can free your outdoor event from Mosquitos and other uninvited insects. Please contact us before your next big event, such as: weddings, barbecues, pool parties, birthdays, graduation, church gatherings, outdoor yoga and crossfit events, etc. We can service most outdoor events. 
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
        {/* <ScrollView showsVerticalScrollIndicator={false} 
                    contentContainerStyle={{ flex: 1, width, height, zIndex: 9000, backgroundColor: 'red' }}>
        <Block flex style={styles.profileCard}>
          <Block middle style={styles.avatarContainer}>
            <Image
              source={{ uri: Images.ProfilePicture }}
              style={styles.avatar}
            />
          </Block>
          <Block style={styles.info}>
            <Block
              middle
              row
              space="evenly"
              style={{ marginTop: 20, paddingBottom: 24 }}
            >
              <Button small style={{ backgroundColor: argonTheme.COLORS.INFO }}>
                CONNECT
              </Button>
              <Button
                small
                style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
              >
                MESSAGE
              </Button>
            </Block>

            <Block row space="between">
              <Block middle>
                <Text
                  bold
                  size={12}
                  color="#525F7F"
                  style={{ marginBottom: 4 }}
                >
                  2K
                </Text>
                <Text size={12}>Orders</Text>
              </Block>
              <Block middle>
                <Text bold size={12} style={{ marginBottom: 4 }}>
                  10
                </Text>
                <Text size={12}>Photos</Text>
              </Block>
              <Block middle>
                <Text bold size={12} style={{ marginBottom: 4 }}>
                  89
                </Text>
                <Text size={12}>Comments</Text>
              </Block>
            </Block>
          </Block>
          <Block flex>
              <Block middle style={styles.nameInfo}>
                <Text bold size={28} color="#32325D">
                  Jessica Jones, 27
                </Text>
                <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                  San Francisco, USA
                </Text>
              </Block>
              <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                <Block style={styles.divider} />
              </Block>
              <Block middle>
                <Text size={16} color="#525F7F" style={{ textAlign: "center" }}>
                  An artist of considerable range, Jessica name taken by
                  Melbourne …
                </Text>
                <Button
                  color="transparent"
                  textStyle={{
                    color: "#233DD2",
                    fontWeight: "500",
                    fontSize: 16
                  }}
                >
                  Show more
                </Button>
              </Block>
              <Block
                row
                style={{ paddingVertical: 14, alignItems: "baseline" }}
              >
                <Text bold size={16} color="#525F7F">
                  Album
                </Text>
              </Block>
              <Block
                row
                style={{ paddingBottom: 20, justifyContent: "flex-end" }}
              >
                <Button
                  small
                  color="transparent"
                  textStyle={{ color: "#5E72E4", fontSize: 12 }}
                >
                  View all
                </Button>
              </Block>
              <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                <Block row space="between" style={{ flexWrap: "wrap" }}>
                  {Images.Viewed.map((img, imgIndex) => (
                    <Image
                      source={{ uri: img }}
                      key={`viewed-${img}`}
                      resizeMode="cover"
                      style={styles.thumb}
                    />
                  ))}
                </Block>
              </Block>
          </Block>
        </Block>
                  </ScrollView>*/}
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
  articles2: {
    width: width - theme.SIZES.BASE * 3,
    paddingVertical: theme.SIZES.BASE,
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
    marginTop: 100,
    borderRadius: 6,

    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -85
  },
  avatar: {
    width: 338,
    height: 220,
    marginTop: 80,
    borderRadius: 6,
    
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
    marginVertical: 9,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
    marginLeft: 29,
    marginRight: 29,
    marginTop: 80
  }
});

export default About;
