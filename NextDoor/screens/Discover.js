import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

const Discover = () => {
  return (
    <View style={styles.discover}>
      <Image
        style={[styles.unsplash6msmkwzjwkcIcon, styles.contentPosition]}
        contentFit="cover"
        //source={require("../assets/unsplash6msmkwzjwkc.png")}
      />
      <View style={[styles.content, styles.contentPosition]}>
        <View style={styles.container}>
          <Image
            style={[styles.iconUserPlus, styles.iconLayout]}
            contentFit="cover"
            //source={require("../assets/iconuserplus.png")}
          />
          <View style={styles.inputField}>
            <View style={styles.labelStack}>
              <Text style={[styles.label, styles.labelFlexBox]}>Label</Text>
              <Text style={[styles.label1, styles.labelLayout]}>Optional</Text>
            </View>
            <View style={styles.textInput}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                //source={require("../assets/icon-left2.png")}
              />
              <Text style={[styles.value, styles.labelFlexBox]}>
                <Text style={styles.search}>{`Search `}</Text>
                <Text style={styles.labelTypo1}>Nextdoor</Text>
              </Text>
              <Image
                style={[styles.iconRight, styles.iconLayout]}
                contentFit="cover"
                //source={require("../assets/icon-left2.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.divider}>
          <View style={styles.divider1} />
        </View>
      </View>
      <View style={styles.tags}>
        <View style={[styles.tag, styles.tagSpaceBlock]}>
          <Image
            style={styles.iconCompass}
            contentFit="cover"
            //source={require("../assets/iconcompass.png")}
          />
          <Text style={[styles.content1, styles.contentTypo]}>Latest</Text>
        </View>
        <View style={[styles.tag1, styles.tagSpaceBlock]}>
          <Image
            style={styles.iconCompass}
            contentFit="cover"
            //source={require("../assets/iconbriefcase.png")}
          />
          <Text style={[styles.content2, styles.contentTypo]}>Businessess</Text>
        </View>
        <View style={[styles.tag1, styles.tagSpaceBlock]}>
          <Image
            style={styles.iconCompass}
            contentFit="cover"
            //source={require("../assets/iconcalendar.png")}
          />
          <Text style={[styles.content2, styles.contentTypo]}>Events</Text>
        </View>
        <View style={[styles.tag1, styles.tagSpaceBlock]}>
          <Image
            style={styles.iconCompass}
            contentFit="cover"
            //source={require("../assets/icontag.png")}
          />
          <Text style={[styles.content2, styles.contentTypo]}>For Sale</Text>
        </View>
      </View>
      <View style={[styles.toolbar, styles.contentPosition]}>
        <View style={styles.divider2} />
        <View style={styles.toolbarItems}>
          <View style={styles.toolbarItem}>
            <Image
              style={[styles.iconHome, styles.iconLayout]}
              contentFit="cover"
              //source={require("../assets/iconhome.png")}
            />
            <Text style={[styles.label2, styles.labelTypo]}>Home</Text>
          </View>
          <View style={styles.toolbarItemSpaceBlock}>
            <Image
              style={[styles.iconHome, styles.iconLayout]}
              contentFit="cover"
              //source={require("../assets/iconcompass1.png")}
            />
            <Text style={[styles.label2, styles.labelTypo]}>Discover</Text>
          </View>
          <View style={[styles.toolbarItem2, styles.toolbarItemSpaceBlock]}>
            <Image
              style={[styles.iconHome, styles.iconLayout]}
              contentFit="cover"
              //source={require("../assets/iconpluscircle.png")}
            />
            <Text style={[styles.label2, styles.labelTypo]}>Post</Text>
          </View>
          <View style={[styles.toolbarItem2, styles.toolbarItemSpaceBlock]}>
            <Image
              style={[styles.iconHome, styles.iconLayout]}
              contentFit="cover"
              //source={require("../assets/iconbell.png")}
            />
            <Text style={[styles.label5, styles.labelTypo]}>Notifications</Text>
          </View>
          <View style={[styles.toolbarItem2, styles.toolbarItemSpaceBlock]}>
            <Image
              style={[styles.iconHome, styles.iconLayout]}
              contentFit="cover"
              //source={require("../assets/iconmenu.png")}
            />
            <Text style={[styles.label2, styles.labelTypo]}>More</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentPosition: {
    left: 0,
    width: 390,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  labelFlexBox: {
    textAlign: "left",
    color: Color.neutrals800,
    flex: 1,
  },
  labelLayout: {
    lineHeight: 16,
    letterSpacing: -0.1,
    fontSize: FontSize.bodyBoldBodyBoldSmall_size,
    display: "none",
  },
  tagSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    borderRadius: Border.br_81xl,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  contentTypo: {
    lineHeight: 21,
    marginLeft: 6,
    textAlign: "left",
    fontFamily: FontFamily.bodyBoldBodyBoldExtraLarge,
    fontWeight: "600",
    letterSpacing: -0.1,
    fontSize: FontSize.bodyBoldBodyBoldSmall_size,
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
  toolbarItemSpaceBlock: {
    marginLeft: 8,
    height: 64,
    flex: 1,
    backgroundColor: Color.neutralsWhite,
  },
  unsplash6msmkwzjwkcIcon: {
    top: 111,
    height: 680,
    width: 390,
  },
  iconUserPlus: {
    overflow: "hidden",
  },
  label: {
    fontFamily: FontFamily.bodyBoldBodyBoldExtraLarge,
    fontWeight: "600",
    lineHeight: 16,
    letterSpacing: -0.1,
    fontSize: FontSize.bodyBoldBodyBoldSmall_size,
    display: "none",
  },
  label1: {
    color: Color.wFBase600,
    textAlign: "right",
    marginLeft: 10,
    fontFamily: FontFamily.wFBodyBodyMedium,
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
  labelTypo1: {
    fontFamily: FontFamily.bodyBoldBodyBoldExtraLarge,
    fontWeight: "600",
  },
  value: {
    fontSize: FontSize.wFBodyBodyMedium_size,
    letterSpacing: -0.2,
    lineHeight: 24,
    marginLeft: 4,
  },
  iconRight: {
    display: "none",
    marginLeft: 4,
  },
  textInput: {
    borderStyle: "solid",
    borderColor: Color.neutrals400,
    borderWidth: 2,
    height: 46,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_2xs,
    marginTop: 8,
    alignSelf: "stretch",
    borderRadius: Border.br_7xs,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.neutralsWhite,
  },
  inputField: {
    width: 351,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_3xs,
    marginLeft: 4,
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
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.neutrals400,
    position: "absolute",
    width: "100%",
  },
  divider: {
    height: 1,
    marginTop: 24,
    width: 390,
  },
  content: {
    top: 38,
    height: 73,
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    alignItems: "center",
    width: 390,
  },
  iconCompass: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  content1: {
    marginLeft: 6,
    color: Color.neutrals800,
    lineHeight: 21,
  },
  tag: {
    backgroundColor: Color.neutralsWhite,
  },
  content2: {
    color: Color.neutralsWhite,
    marginLeft: 6,
  },
  tag1: {
    backgroundColor: Color.neutrals800,
    marginLeft: 6,
  },
  tags: {
    top: 130,
    left: 4,
    flexDirection: "row",
    position: "absolute",
  },
  divider2: {
    backgroundColor: Color.neutrals900,
    height: 2,
    alignSelf: "stretch",
  },
  iconHome: {
    marginLeft: -12.2,
    top: 11,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  label2: {
    bottom: 9,
    fontSize: FontSize.bodyBoldBodyBoldExtraSmall_size,
    lineHeight: 12,
  },
  toolbarItem: {
    opacity: 0.5,
    height: 64,
    flex: 1,
    backgroundColor: Color.neutralsWhite,
  },
  toolbarItem2: {
    opacity: 0.5,
  },
  label5: {
    bottom: 10,
    fontSize: FontSize.size_2xs,
    lineHeight: 11,
  },
  toolbarItems: {
    marginTop: 2,
    paddingHorizontal: Padding.p_5xs,
    alignSelf: "stretch",
    flexDirection: "row",
    paddingVertical: 0,
  },
  toolbar: {
    top: 769,
    height: 106,
    width: 390,
    overflow: "hidden",
    backgroundColor: Color.neutralsWhite,
  },
  discover: {
    height: 875,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.neutralsWhite,
  },
});

export default Discover;
