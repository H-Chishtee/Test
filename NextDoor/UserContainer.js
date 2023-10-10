import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import InputField from "./InputField";
import SizeMediumStyleLight from "./SizeMeduiumStyleLight";

const UserContainer = () => {
  return (
    <View style={[styles.username, styles.loginFlexBox]}>
      <InputField
        //iconLeft1={require("../assets/icon-left11.png")}
        value1="Username"
        //iconRight1={require("../assets/icon-left11.png")}
        value
        optionalField={false}
        iconLeft={false}
        iconRight={false}
        label={false}
        showLabel={false}
        inputFieldPosition="unset"
        inputFieldAlignItems="center"
        inputFieldJustifyContent="center"
        inputFieldBackgroundColor="#d2e8e5"
        inputFieldMarginTop="unset"
        textInputJustifyContent="center"
        valueColor="#a7a7a7"
        valueWidth={296}
      />
      <InputField
        //iconLeft1={require("../assets/icon-left11.png")}
        value1="Password"
        //iconRight1={require("../assets/icon-left11.png")}
        value
        optionalField={false}
        iconLeft={false}
        iconRight={false}
        label={false}
        showLabel={false}
        inputFieldPosition="unset"
        inputFieldAlignItems="flex-start"
        inputFieldJustifyContent="flex-end"
        inputFieldBackgroundColor="unset"
        inputFieldMarginTop={16}
        textInputJustifyContent="center"
        valueFlex={1}
        valueColor="#a7a7a7"
        valueWidth="unset"
      />
      <View style={[styles.login, styles.loginFlexBox]}>
        <SizeMediumStyleLight
          //iconLeftWrapper={require("../assets/icon-left-wrapper21.png")}
          labelContent="Signup"
          //iconRightWrapper={require("../assets/icon-right-wrapper1.png")}
          iconRight={false}
          label
          iconLeft={false}
          sizeMediumStyleLightPosition="unset"
          sizeMediumStyleLightBackgroundColor="#fff"
          sizeMediumStyleLightWidth="unset"
          sizeMediumStyleLightMarginTop="unset"
          sizeMediumStyleLightPaddingHorizontal="unset"
          sizeMediumStyleLightPaddingVertical="unset"
          sizeMediumStyleLightJustifyContent="flex-end"
          sizeMediumStyleLightMarginLeft="unset"
          iconLeftWrapperWidth={14}
          iconLeftWrapperHeight={16}
          labelColor="#000"
          labelFontSize={14}
          labelLetterSpacing={-0.1}
          iconRightWrapperWidth={14}
          iconRightWrapperHeight={16}
        />
        <SizeMediumStyleLight
          //iconLeftWrapper={require("../assets/icon-left-wrapper21.png")}
          labelContent="Forgot Password?"
          //iconRightWrapper={require("../assets/icon-right-wrapper1.png")}
          iconRight={false}
          label
          iconLeft={false}
          sizeMediumStyleLightPosition="unset"
          sizeMediumStyleLightBackgroundColor="#fff"
          sizeMediumStyleLightWidth="unset"
          sizeMediumStyleLightMarginTop="unset"
          sizeMediumStyleLightPaddingHorizontal="unset"
          sizeMediumStyleLightPaddingVertical="unset"
          sizeMediumStyleLightJustifyContent="flex-end"
          sizeMediumStyleLightMarginLeft={16}
          iconLeftWrapperWidth={14}
          iconLeftWrapperHeight={16}
          labelColor="#000"
          labelFontSize={14}
          labelLetterSpacing={-0.1}
          iconRightWrapperWidth={14}
          iconRightWrapperHeight={16}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  login: {
    flexDirection: "row",
    marginTop: 16,
  },
  username: {
    alignSelf: "stretch",
    height: 237,
    marginTop: 43,
  },
});

export default UserContainer;
