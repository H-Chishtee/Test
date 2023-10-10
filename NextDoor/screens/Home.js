import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Discover from "./Discover";
import StackNavigator from "./StackNavigator";
const Stack = createBottomTabNavigator();

const Home = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={{ flex: 1 }}
      >
        <View style={styles.home}>
          <View style={styles.home}>
            <View style={styles.home1}>
              <View style={[styles.content, styles.contentPosition]}>
                <View style={styles.content1}>
                  <View style={styles.container}>
                    <Image
                      style={[styles.iconUserPlus, styles.iconLayout]}
                      resizeMode="cover"
                      // //={require("../assets/iconuserplus.png")}
                    />
                    <View style={styles.inputField}>
                      <View style={styles.labelStack}>
                        <Text style={[styles.label, styles.labelTypo2]}>
                          Label
                        </Text>
                        <Text style={styles.label1}>Optional</Text>
                      </View>
                      <View style={styles.textInput}>
                        <Image
                          style={styles.iconLayout}
                          resizeMode="cover"
                          // //={require("../assets/icon-left.png")}
                        />
                        <TextInput style={styles.value}>
                          <Text style={styles.search}>{`Search `}</Text>
                          <Text style={styles.labelTypo2}>Nextdoor</Text>
                        </TextInput>
                        <Image
                          style={[styles.iconRight, styles.iconLayout]}
                          resizeMode="cover"
                          // //={require("../assets/icon-left.png")}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.divider}>
                    <View style={[styles.divider1, styles.dividerPosition]} />
                  </View>
                </View>
                <View style={styles.location}>
                  <View style={styles.headingPlaceholder}>
                    <Text style={styles.content2Typo}>Your Location</Text>
                  </View>
                  <View style={styles.divider2}>
                    <View style={[styles.divider1, styles.dividerPosition]} />
                  </View>
                </View>
                <View style={styles.container1}>
                  <View style={styles.groupsLayout}>
                    <View style={styles.bodyCopyPlaceholder}>
                      <Text style={[styles.content3, styles.contentTypo]}>
                        Groups
                      </Text>
                    </View>
                    <View style={[styles.card, styles.buttonBorder]}>
                      <View style={styles.imageContent}>
                        <Image
                          style={[
                            styles.imagePlaceholderIcon,
                            styles.imageIconLayout,
                          ]}
                          resizeMode="cover"
                          // //={require("../assets/image-placeholder.png")}
                        />
                        <View style={[styles.iconButton, styles.buttonBorder]}>
                          <Image
                            style={[
                              styles.iconLeft1,
                              styles.iconWrapperLayout1,
                            ]}
                            resizeMode="cover"
                            //   //={require("../assets/icon-left1.png")}
                          />
                          <Text style={[styles.label2, styles.labelTypo1]}>
                            Button
                          </Text>
                          <Image
                            style={[
                              styles.iconRight1,
                              styles.iconWrapperLayout1,
                            ]}
                            resizeMode="cover"
                            //   //={require("../assets/icon-right.png")}
                          />
                        </View>
                      </View>
                      <View style={styles.contentStack}>
                        <View style={styles.content4}>
                          <Text style={[styles.cardTitle, styles.content2Typo]}>
                            Card title
                          </Text>
                          <Text style={[styles.subTitle, styles.subFlexBox]}>
                            44 groups in your local area
                          </Text>
                          <Text style={[styles.content5, styles.subFlexBox]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. At purus tellus arcu sit nibh consectetur.
                          </Text>
                        </View>
                        <View style={styles.buttons}>
                          <View style={[styles.button1, styles.buttonFlexBox]}>
                            <Image
                              style={styles.iconWrapperLayout}
                              resizeMode="cover"
                              // //={require("../assets/icon-left-wrapper.png")}
                            />
                            <Text style={[styles.label3, styles.labelTypo1]}>
                              Explore groups
                            </Text>
                            <Image
                              style={[
                                styles.iconRightWrapper,
                                styles.iconWrapperLayout,
                              ]}
                              resizeMode="cover"
                              // //={require("../assets/icon-left-wrapper.png")}
                            />
                          </View>
                          <View style={[styles.button2, styles.buttonFlexBox]}>
                            <Image
                              style={styles.iconWrapperLayout}
                              resizeMode="cover"
                              // //={require("../assets/icon-left-wrapper.png")}
                            />
                            <Text style={[styles.label4, styles.labelTypo1]}>
                              Button
                            </Text>
                            <Image
                              style={[
                                styles.iconRightWrapper,
                                styles.iconWrapperLayout,
                              ]}
                              resizeMode="cover"
                              // //={require("../assets/icon-left-wrapper.png")}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.events, styles.groupsLayout]}>
                    <View style={styles.bodyCopyPlaceholder}>
                      <Text style={[styles.content3, styles.contentTypo]}>
                        Community Events
                      </Text>
                    </View>
                    <View style={[styles.card, styles.buttonBorder]}>
                      <View style={styles.imageContent}>
                        <Image
                          style={[
                            styles.imagePlaceholderIcon,
                            styles.imageIconLayout,
                          ]}
                          resizeMode="cover"
                          // //={require("../assets/image-placeholder1.png")}
                        />
                        <View style={[styles.iconButton, styles.buttonBorder]}>
                          <Image
                            style={[
                              styles.iconLeft1,
                              styles.iconWrapperLayout1,
                            ]}
                            resizeMode="cover"
                            //   //={require("../assets/icon-left1.png")}
                          />
                          <Text style={[styles.label2, styles.labelTypo1]}>
                            Button
                          </Text>
                          <Image
                            style={[
                              styles.iconRight1,
                              styles.iconWrapperLayout1,
                            ]}
                            resizeMode="cover"
                            //={require("../assets/icon-right.png")}
                          />
                        </View>
                      </View>
                      <View style={styles.contentStack}>
                        <View style={styles.content4}>
                          <Text style={styles.content2Typo}>
                            Upcoming Events
                          </Text>
                          <Text style={[styles.subTitle1, styles.subFlexBox]}>
                            44 groups in your local area
                          </Text>
                          <Text style={[styles.content5, styles.subFlexBox]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. At purus tellus arcu sit nibh consectetur.
                          </Text>
                        </View>
                        <View style={styles.buttons}>
                          <View style={[styles.button1, styles.buttonFlexBox]}>
                            <Image
                              style={styles.iconWrapperLayout}
                              resizeMode="cover"
                              //={require("../assets/icon-left-wrapper.png")}
                            />
                            <Text style={[styles.label3, styles.labelTypo1]}>
                              Explore Events
                            </Text>
                            <Image
                              style={[
                                styles.iconRightWrapper,
                                styles.iconWrapperLayout,
                              ]}
                              resizeMode="cover"
                              //={require("../assets/icon-left-wrapper.png")}
                            />
                          </View>
                          <View style={[styles.button2, styles.buttonFlexBox]}>
                            <Image
                              style={styles.iconWrapperLayout}
                              resizeMode="cover"
                              //={require("../assets/icon-left-wrapper.png")}
                            />
                            <Text style={[styles.label4, styles.labelTypo1]}>
                              Button
                            </Text>
                            <Image
                              style={[
                                styles.iconRightWrapper,
                                styles.iconWrapperLayout,
                              ]}
                              resizeMode="cover"
                              //={require("../assets/icon-left-wrapper.png")}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.posts}>
                  <View style={styles.postLayout}>
                    <View style={styles.header}>
                      <Image
                        style={[styles.iconUserPlus, styles.iconLayout]}
                        resizeMode="cover"
                        //={require("../assets/iconuser.png")}
                      />
                      <View style={styles.bodyCopyPlaceholder2}>
                        <Text style={[styles.content3, styles.contentTypo]}>
                          Name of the person
                        </Text>
                      </View>
                    </View>
                    <View style={styles.bodyCopyPlaceholder3}>
                      <Text
                        style={[styles.content3, styles.contentTypo]}
                      >{`Feugiat ac suscipit nunc leo aliquam enim lorem feugiat. Suspendisse felis eget at vel pulvinar sit orci nisi. Sit ornare hendrerit porttitor ut purus non sed non pellentesque. `}</Text>
                    </View>
                    <Image
                      style={[styles.imageContentIcon, styles.imageIconLayout]}
                      resizeMode="cover"
                      //={require("../assets/image-content.png")}
                    />
                    <View style={styles.divider4}>
                      <View style={[styles.divider5, styles.dividerPosition]} />
                    </View>
                    <View style={styles.container1}>
                      <View style={styles.buttonFlexBox}>
                        <Image
                          style={styles.iconWrapperLayout1}
                          resizeMode="cover"
                          //={require("../assets/icon-left-wrapper1.png")}
                        />
                        <Text style={[styles.label4, styles.labelTypo1]}>
                          Like
                        </Text>
                        <Image
                          style={[
                            styles.iconRightWrapper4,
                            styles.iconWrapperLayout1,
                          ]}
                          resizeMode="cover"
                          //={require("../assets/icon-right-wrapper.png")}
                        />
                      </View>
                      <View style={[styles.button3, styles.buttonFlexBox]}>
                        <Image
                          style={styles.iconWrapperLayout1}
                          resizeMode="cover"
                          //={require("../assets/icon-left-wrapper2.png")}
                        />
                        <Text style={[styles.label4, styles.labelTypo1]}>
                          Reply
                        </Text>
                        <Image
                          style={[
                            styles.iconRightWrapper,
                            styles.iconWrapperLayout,
                          ]}
                          resizeMode="cover"
                          //={require("../assets/icon-right-wrapper.png")}
                        />
                      </View>
                      <View style={styles.comments}>
                        <View style={styles.buttonFlexBox}>
                          <Image
                            style={styles.iconWrapperLayout1}
                            resizeMode="cover"
                            //={require("../assets/icon-left-wrapper2.png")}
                          />
                          <Text style={[styles.label4, styles.labelTypo1]}>
                            3
                          </Text>
                          <Image
                            style={[
                              styles.iconRightWrapper,
                              styles.iconWrapperLayout,
                            ]}
                            resizeMode="cover"
                            //={require("../assets/icon-right-wrapper.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.post1, styles.postLayout]}>
                    <View style={styles.header}>
                      <Image
                        style={[styles.iconUserPlus, styles.iconLayout]}
                        resizeMode="cover"
                        //={require("../assets/iconuser.png")}
                      />
                      <View style={styles.bodyCopyPlaceholder2}>
                        <Text style={[styles.content3, styles.contentTypo]}>
                          Name of the person
                        </Text>
                      </View>
                    </View>
                    <View style={styles.bodyCopyPlaceholder3}>
                      <Text style={[styles.content3, styles.contentTypo]}>
                        Feugiat ac suscipit nunc leo aliquam enim lorem feugiat.
                        Suspendisse felis eget at vel pulvinar sit orci nisi.
                        Sit ornare hendrerit porttitor ut purus non sed non
                        pellentesque.
                      </Text>
                    </View>
                    <Image
                      style={[styles.imageContentIcon, styles.imageIconLayout]}
                      resizeMode="cover"
                      //={require("../assets/image-content1.png")}
                    />
                    <View style={styles.divider4}>
                      <View style={[styles.divider5, styles.dividerPosition]} />
                    </View>
                    <View style={styles.container1}>
                      <View style={styles.buttonFlexBox}>
                        <Image
                          style={styles.iconWrapperLayout1}
                          resizeMode="cover"
                          //={require("../assets/icon-left-wrapper1.png")}
                        />
                        <Text style={[styles.label4, styles.labelTypo1]}>
                          Like
                        </Text>
                        <Image
                          style={[
                            styles.iconRightWrapper4,
                            styles.iconWrapperLayout1,
                          ]}
                          resizeMode="cover"
                          //={require("../assets/icon-right-wrapper.png")}
                        />
                      </View>
                      <View style={[styles.button3, styles.buttonFlexBox]}>
                        <Image
                          style={styles.iconWrapperLayout1}
                          resizeMode="cover"
                          //={require("../assets/icon-left-wrapper2.png")}
                        />
                        <Text style={[styles.label4, styles.labelTypo1]}>
                          Reply
                        </Text>
                        <Image
                          style={[
                            styles.iconRightWrapper,
                            styles.iconWrapperLayout,
                          ]}
                          resizeMode="cover"
                          //={require("../assets/icon-right-wrapper.png")}
                        />
                      </View>
                      <View style={styles.comments}>
                        <View style={styles.buttonFlexBox}>
                          <Image
                            style={styles.iconWrapperLayout1}
                            resizeMode="cover"
                            //={require("../assets/icon-left-wrapper2.png")}
                          />
                          <Text style={[styles.label4, styles.labelTypo1]}>
                            3
                          </Text>
                          <Image
                            style={[
                              styles.iconRightWrapper,
                              styles.iconWrapperLayout,
                            ]}
                            resizeMode="cover"
                            //={require("../assets/icon-right-wrapper.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.post1, styles.postLayout]}>
                    <View style={styles.header}>
                      <Image
                        style={[styles.iconUserPlus, styles.iconLayout]}
                        resizeMode="cover"
                        //={require("../assets/iconuser.png")}
                      />
                      <View style={styles.bodyCopyPlaceholder2}>
                        <Text style={[styles.content3, styles.contentTypo]}>
                          Name of the person
                        </Text>
                      </View>
                    </View>
                    <View style={styles.bodyCopyPlaceholder3}>
                      <Text style={[styles.content3, styles.contentTypo]}>
                        Feugiat ac suscipit nunc leo aliquam enim lorem feugiat.
                        Suspendisse felis eget at vel pulvinar sit orci nisi.
                        Sit ornare hendrerit porttitor ut purus non sed non
                        pellentesque.
                      </Text>
                    </View>
                    <Image
                      style={[styles.imageContentIcon, styles.imageIconLayout]}
                      resizeMode="cover"
                      //={require("../assets/image-content1.png")}
                    />
                    <View style={styles.divider4}>
                      <View style={[styles.divider5, styles.dividerPosition]} />
                    </View>
                    <View style={styles.container1}>
                      <View style={styles.buttonFlexBox}>
                        <Image
                          style={styles.iconWrapperLayout1}
                          resizeMode="cover"
                          //={require("../assets/icon-left-wrapper1.png")}
                        />
                        <Text style={[styles.label4, styles.labelTypo1]}>
                          Like
                        </Text>
                        <Image
                          style={[
                            styles.iconRightWrapper4,
                            styles.iconWrapperLayout1,
                          ]}
                          resizeMode="cover"
                          //={require("../assets/icon-right-wrapper.png")}
                        />
                      </View>
                      <View style={[styles.button3, styles.buttonFlexBox]}>
                        <Image
                          style={styles.iconWrapperLayout1}
                          resizeMode="cover"
                          //={require("../assets/icon-left-wrapper2.png")}
                        />
                        <Text style={[styles.label4, styles.labelTypo1]}>
                          Reply
                        </Text>
                        <Image
                          style={[
                            styles.iconRightWrapper,
                            styles.iconWrapperLayout,
                          ]}
                          resizeMode="cover"
                          //={require("../assets/icon-right-wrapper.png")}
                        />
                      </View>
                      <View style={styles.comments}>
                        <View style={styles.buttonFlexBox}>
                          <Image
                            style={styles.iconWrapperLayout1}
                            resizeMode="cover"
                            //={require("../assets/icon-left-wrapper2.png")}
                          />
                          <Text style={[styles.label4, styles.labelTypo1]}>
                            3
                          </Text>
                          <Image
                            style={[
                              styles.iconRightWrapper,
                              styles.iconWrapperLayout,
                            ]}
                            resizeMode="cover"
                            //={require("../assets/icon-right-wrapper.png")}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.toolbar, styles.toolbarLayout]}>
        <View style={styles.divider8} />
        <View style={styles.toolbarItems}>
          <View style={styles.toolbarItemLayout}>
            <Image
              style={[styles.iconHome, styles.iconLayout]}
              resizeMode="cover"
              //={require("../assets/iconhome.png")}
            />
            <Text style={[styles.label14, styles.labelTypo]}>Home</Text>
          </View>
          <View style={[styles.toolbarItem1, styles.toolbarItemLayout1]}>
            <Image
              style={[styles.iconHome, styles.iconLayout]}
              resizeMode="cover"
              //={require("../assets/iconcompass.png")}
            />
            <Text style={[styles.label14, styles.labelTypo]}>Discover</Text>
          </View>
          <View style={[styles.toolbarItem2, styles.toolbarItemLayout]}>
            <Image
              style={[styles.iconHome, styles.iconLayout]}
              resizeMode="cover"
              //={require("../assets/iconpluscircle.png")}
            />
            <Text style={[styles.label14, styles.labelTypo]}>Post</Text>
          </View>
          <View style={[styles.toolbarItem2, styles.toolbarItemLayout]}>
            <Image
              style={[styles.iconHome, styles.iconLayout]}
              resizeMode="cover"
              //={require("../assets/iconbell.png")}
            />
            <Text style={[styles.label17, styles.labelTypo]}>
              Notifications
            </Text>
          </View>
          <View style={[styles.toolbarItem2, styles.toolbarItemLayout]}>
            <Image
              style={[styles.iconHome, styles.iconLayout]}
              resizeMode="cover"
              //={require("../assets/iconmenu.png")}
            />
            <Text style={[styles.label14, styles.labelTypo]}>More</Text>
          </View>
        </View>
      </View>
      <View style={[styles.toolbar1, styles.toolbarLayout]}>
        <View style={styles.divider8} />
        <View style={styles.toolbarItems}>
          <View style={styles.toolbarItemLayout1}>
            <Image
              style={[styles.iconHome, styles.iconLayout]}
              resizeMode="cover"
              //={require("../assets/iconhome.png")}
            />
            <Text style={[styles.label14, styles.labelTypo]}>Home</Text>
          </View>
          <View style={[styles.toolbarItem2, styles.toolbarItemLayout]}>
            <Image
              style={[styles.iconHome, styles.iconLayout]}
              resizeMode="cover"
              //={require("../assets/iconcompass.png")}
            />
            <Text style={[styles.label14, styles.labelTypo]}>Discover</Text>
          </View>
          <View style={[styles.toolbarItem2, styles.toolbarItemLayout]}>
            <Image
              style={[styles.iconHome, styles.iconLayout]}
              resizeMode="cover"
              //={require("../assets/iconpluscircle.png")}
            />
            <Text style={[styles.label14, styles.labelTypo]}>Post</Text>
          </View>
          <View style={[styles.toolbarItem2, styles.toolbarItemLayout]}>
            <Image
              style={[styles.iconHome, styles.iconLayout]}
              resizeMode="cover"
              //={require("../assets/iconbell.png")}
            />
            <Text style={[styles.label17, styles.labelTypo]}>
              Notifications
            </Text>
          </View>
          <View style={[styles.toolbarItem2, styles.toolbarItemLayout]}>
            <Image
              style={[styles.iconHome, styles.iconLayout]}
              resizeMode="cover"
              //={require("../assets/iconmenu.png")}
            />
            <Text style={[styles.label14, styles.labelTypo]}>More</Text>
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  contentPosition: {
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  labelTypo2: {
    fontFamily: FontFamily.bodyBoldBodyBoldExtraSmall,
    fontWeight: "600",
  },
  dividerPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  contentTypo: {
    lineHeight: 21,
    color: Color.wFBase600,
    fontFamily: FontFamily.wFBodyBodyMedium,
    letterSpacing: -0.1,
    fontSize: FontSize.buttonsButtonSmall_size,
  },
  buttonBorder: {
    borderColor: Color.neutrals800,
    borderWidth: 2,
    borderStyle: "solid",
  },
  imageIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconWrapperLayout1: {
    height: 16,
    width: 16,
  },
  labelTypo1: {
    lineHeight: 24,
    marginLeft: 8,
    fontFamily: FontFamily.buttonsButtonSmall,
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: -0.1,
    fontSize: FontSize.buttonsButtonSmall_size,
  },
  content2Typo: {
    fontFamily: FontFamily.buttonsButtonSmall,
    fontWeight: "700",
    lineHeight: 28,
    fontSize: FontSize.headingsHeadingXS_size,
    textAlign: "left",
    color: Color.neutrals800,
    alignSelf: "stretch",
  },
  subFlexBox: {
    marginTop: 4,
    textAlign: "left",
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  iconWrapperLayout: {
    width: 14,
    height: 16,
    display: "none",
  },
  groupsLayout: {
    height: 286,
    width: 220,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
  },
  postLayout: {
    width: 400,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    padding: Padding.p_3xs,
    height: 391,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    overflow: "hidden",
    backgroundColor: Color.neutralsWhite,
  },
  toolbarLayout: {
    height: 84,
    width: 425,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.neutralsWhite,
  },
  labelTypo: {
    width: 68,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.neutrals800,
    letterSpacing: -0.1,
    left: 0,
    position: "absolute",
  },
  toolbarItemLayout1: {
    height: 64,
    flex: 1,
    backgroundColor: Color.neutralsWhite,
  },
  toolbarItemLayout: {
    opacity: 0.5,
    height: 64,
    flex: 1,
    backgroundColor: Color.neutralsWhite,
  },
  iconUserPlus: {
    overflow: "hidden",
  },
  label: {
    textAlign: "left",
    color: Color.neutrals800,
    lineHeight: 16,
    letterSpacing: -0.1,
    fontSize: FontSize.buttonsButtonSmall_size,
    fontFamily: FontFamily.bodyBoldBodyBoldExtraSmall,
    fontWeight: "600",
    display: "none",
    flex: 1,
  },
  label1: {
    textAlign: "right",
    marginLeft: 10,
    color: Color.wFBase600,
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 16,
    letterSpacing: -0.1,
    fontSize: FontSize.buttonsButtonSmall_size,
    display: "none",
    flex: 1,
  },
  labelStack: {
    display: "none",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  search: {
    fontFamily: FontFamily.wFBodyBodyMedium,
  },
  value: {
    fontSize: FontSize.wFBodyBodyMedium_size,
    letterSpacing: -0.2,
    lineHeight: 24,
    textAlign: "left",
    color: Color.neutrals800,
    marginLeft: 4,
    flex: 1,
  },
  iconRight: {
    display: "none",
    marginLeft: 4,
  },
  textInput: {
    borderColor: Color.neutrals400,
    height: 46,
    paddingVertical: Padding.p_2xs,
    marginTop: 8,
    paddingHorizontal: Padding.p_xs,
    borderWidth: 2,
    borderStyle: "solid",
    alignSelf: "stretch",
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.neutralsWhite,
  },
  inputField: {
    width: 351,
    marginLeft: 4,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "flex-end",
    borderRadius: Border.br_7xs,
    paddingVertical: 0,
  },
  container: {
    width: 383,
    paddingHorizontal: Padding.p_9xs,
    flexDirection: "row",
    paddingVertical: 0,
    alignItems: "center",
  },
  divider1: {
    backgroundColor: Color.neutrals400,
  },
  divider: {
    marginTop: 24,
    height: 1,
    width: 450,
  },
  content1: {
    height: 73,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 390,
  },
  headingPlaceholder: {
    paddingLeft: Padding.p_3xs,
    alignSelf: "stretch",
  },
  divider2: {
    height: 4,
    marginTop: 10,
    alignSelf: "stretch",
  },
  location: {
    marginTop: 10,
    width: 425,
  },
  content3: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  bodyCopyPlaceholder: {
    width: 370,
  },
  imagePlaceholderIcon: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLeft1: {
    display: "none",
    overflow: "hidden",
  },
  label2: {
    marginLeft: 8,
    color: Color.neutrals800,
    display: "none",
  },
  iconRight1: {
    marginLeft: 8,
    overflow: "hidden",
  },
  iconButton: {
    top: 16,
    right: 14,
    padding: Padding.p_5xs,
    display: "none",
    borderRadius: Border.br_7xs,
    borderColor: Color.neutrals800,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  imageContent: {
    alignSelf: "stretch",
    flex: 1,
  },
  cardTitle: {
    display: "none",
  },
  subTitle: {
    color: Color.neutrals900,
    lineHeight: 18,
    marginTop: 4,
    fontSize: FontSize.bodyBoldBodyBoldExtraSmall_size,
    fontFamily: FontFamily.bodyBoldBodyBoldExtraSmall,
    fontWeight: "600",
  },
  content5: {
    lineHeight: 21,
    color: Color.wFBase600,
    fontFamily: FontFamily.wFBodyBodyMedium,
    letterSpacing: -0.1,
    fontSize: FontSize.buttonsButtonSmall_size,
    display: "none",
  },
  content4: {
    alignSelf: "stretch",
  },
  label3: {
    color: Color.neutralsWhite,
    marginLeft: 8,
  },
  iconRightWrapper: {
    marginLeft: 8,
  },
  button1: {
    backgroundColor: Color.neutrals800,
    flex: 1,
  },
  label4: {
    marginLeft: 8,
    color: Color.neutrals800,
  },
  button2: {
    marginLeft: 16,
    borderColor: Color.neutrals800,
    borderWidth: 2,
    borderStyle: "solid",
    display: "none",
  },
  buttons: {
    marginTop: 16,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  contentStack: {
    padding: Padding.p_base,
    alignSelf: "stretch",
  },
  card: {
    width: 210,
    height: 255,
    borderRadius: Border.br_5xs,
    borderColor: Color.neutrals800,
    marginTop: 10,
    overflow: "hidden",
    backgroundColor: Color.neutralsWhite,
  },
  subTitle1: {
    color: Color.neutrals900,
    lineHeight: 18,
    marginTop: 4,
    fontSize: FontSize.bodyBoldBodyBoldExtraSmall_size,
    fontFamily: FontFamily.bodyBoldBodyBoldExtraSmall,
    fontWeight: "600",
    display: "none",
  },
  events: {
    marginLeft: 10,
  },
  container1: {
    marginTop: 10,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  bodyCopyPlaceholder2: {
    width: 356,
    marginLeft: 10,
  },
  header: {
    flexDirection: "row",
  },
  bodyCopyPlaceholder3: {
    width: 356,
    marginTop: 10,
  },
  imageContentIcon: {
    marginTop: 10,
    alignSelf: "stretch",
    width: "100%",
    maxWidth: "100%",
    flex: 1,
  },
  divider5: {
    backgroundColor: Color.neutrals800,
  },
  divider4: {
    marginTop: 10,
    height: 1,
    alignSelf: "stretch",
  },
  iconRightWrapper4: {
    marginLeft: 8,
  },
  button3: {
    marginLeft: 10,
  },
  comments: {
    marginLeft: 10,
    alignSelf: "stretch",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  post1: {
    marginTop: 10,
  },
  posts: {
    padding: Padding.p_3xs,
    height: 391,
    marginTop: 10,
    alignSelf: "stretch",
  },
  content: {
    height: 1170,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_15xl,
  },
  divider8: {
    backgroundColor: Color.neutrals900,
    height: 2,
    alignSelf: "stretch",
  },
  iconHome: {
    marginLeft: -12.2,
    top: 11,
    left: "50%",
    position: "absolute",
    width: 24,
    overflow: "hidden",
  },
  label14: {
    bottom: 9,
    lineHeight: 12,
    fontSize: FontSize.bodyBoldBodyBoldExtraSmall_size,
    width: 68,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  toolbarItem1: {
    marginLeft: 8,
  },
  toolbarItem2: {
    marginLeft: 8,
  },
  label17: {
    bottom: 10,
    fontSize: FontSize.size_2xs,
    lineHeight: 11,
  },
  toolbarItems: {
    paddingHorizontal: Padding.p_5xs,
    marginTop: 2,
    alignSelf: "stretch",
    flexDirection: "row",
    paddingVertical: 0,
  },
  toolbar: {
    bottom: -98,
    left: 0,
  },
  home1: {
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
    height: 1250,
    backgroundColor: Color.neutralsWhite,
  },
  toolbar1: {
    bottom: 1,
    left: -1,
  },
  home: {
    overflow: "hidden",
    height: 1250,
    backgroundColor: Color.neutralsWhite,
    width: "100%",
    flex: 1,
  },
});

export default Home;
