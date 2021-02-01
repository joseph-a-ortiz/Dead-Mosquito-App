import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform, Button
} from "react-native";

import { Block, Text, Card, theme } from "galio-framework";


import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";

import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class About extends React.Component {
    static navigationOptions = {
        title: 'Contact Us'
    }

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['ExampleEmail@gmail.com'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        })
    }

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
                    source={{ uri: Images.ContactPic }}
                    style={styles.avatar}
                  />
                </Block>
                <Block style={styles.info}>
                  <Block
                    middle
                    row
                    space="evenly"
                    style={{ marginTop: -50, paddingBottom: 0 }}
                  >
                  </Block>
                </Block>
               
       
                      <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                      
                          <Block flex style={{ marginTop: 30}} >
                            <Text style={{textAlign: "center"}} bold size={25} color="#32325D"> 
                            8394 NW 53rd St {"\n"} 
                            Seattle, WA 98001 {"\n"}
                            U.S.A {"\n"}
                            </Text>
                            <Text size={22} color="#32325D" style={{textAlign: "center", marginTop: 10 }}>
                            Phone: 1-206-555-1234 {"\n"}
                            Email: ExampleEmail@gmail.com
                            </Text>
                            <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                              <Block middle>
                         
                            </Block>
                            <Button
                            title="Send Email"
                    
                                color='blue'
                              
                           
                            onPress={() => this.sendMail()}
                        />
                            </Block>
                           </Block>
                                      
                </Animatable.View>
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
}

const styles = StyleSheet.create({

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
    marginTop: 12,
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
    height: 300,
    marginTop: 80,
    borderRadius: 4,
    
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35,
    
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
