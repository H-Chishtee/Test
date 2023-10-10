import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "./GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SizeMediumStyleLight = ({
  iconLeftWrapper,
  labelContent = "Button",
  iconRightWrapper,
  iconRight = false,
  label = true,
  iconLeft = false,
  sizeMediumStyleLightPosition,
  sizeMediumStyleLightBackgroundColor,
  sizeMediumStyleLightWidth,
  sizeMediumStyleLightMarginTop,
  sizeMediumStyleLightPaddingHorizontal,
  sizeMediumStyleLightPaddingVertical,
  sizeMediumStyleLightJustifyContent,
  sizeMediumStyleLightMarginLeft,
  iconLeftWrapperWidth,
  iconLeftWrapperHeight,
  labelColor,
  labelFontSize,
  labelLetterSpacing,
  iconRightWrapperWidth,
  iconRightWrapperHeight,
}) => {
  const sizeMediumStyleLightStyle = useMemo(() => {
    return {
      ...getStyleValue("position", sizeMediumStyleLightPosition),
      ...getStyleValue("backgroundColor", sizeMediumStyleLightBackgroundColor),
      ...getStyleValue("width", sizeMediumStyleLightWidth),
      ...getStyleValue("marginTop", sizeMediumStyleLightMarginTop),
      ...getStyleValue(
        "paddingHorizontal",
        sizeMediumStyleLightPaddingHorizontal
      ),
      ...getStyleValue("paddingVertical", sizeMediumStyleLightPaddingVertical),
      ...getStyleValue("justifyContent", sizeMediumStyleLightJustifyContent),
      ...getStyleValue("marginLeft", sizeMediumStyleLightMarginLeft),
    };
  }, [
    sizeMediumStyleLightPosition,
    sizeMediumStyleLightBackgroundColor,
    sizeMediumStyleLightWidth,
    sizeMediumStyleLightMarginTop,
    sizeMediumStyleLightPaddingHorizontal,
    sizeMediumStyleLightPaddingVertical,
    sizeMediumStyleLightJustifyContent,
    sizeMediumStyleLightMarginLeft,
  ]);

  const iconLeftWrapperStyle = useMemo(() => {
    return {
      ...getStyleValue("width", iconLeftWrapperWidth),
      ...getStyleValue("height", iconLeftWrapperHeight),
    };
  }, [iconLeftWrapperWidth, iconLeftWrapperHeight]);

  const labelStyle = useMemo(() => {
    return {
      ...getStyleValue("color", labelColor),
      ...getStyleValue("fontSize", labelFontSize),
      ...getStyleValue("letterSpacing", labelLetterSpacing),
    };
  }, [labelColor, labelFontSize, labelLetterSpacing]);

  const iconRightWrapperStyle = useMemo(() => {
    return {
      ...getStyleValue("width", iconRightWrapperWidth),
      ...getStyleValue("height", iconRightWrapperHeight),
    };
  }, [iconRightWrapperWidth, iconRightWrapperHeight]);

  return (
    <View style={[styles.sizemediumStylelight, sizeMediumStyleLightStyle]}>
      {iconLeft && (
        <Image
          style={[styles.iconWrapperLayout, iconLeftWrapperStyle]}
          resizeMode="cover"
          source={iconLeftWrapper}
        />
      )}
      {label && <Text style={[styles.label, labelStyle]}>{labelContent}</Text>}
      {iconRight && (
        <Image
          style={[
            styles.iconRightWrapper,
            styles.iconWrapperLayout,
            iconRightWrapperStyle,
          ]}
          resizeMode="cover"
          source={iconRightWrapper}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  iconWrapperLayout: {
    display: "none",
    height: 20,
    width: 12,
  },
  label: {
    fontSize: FontSize.wFBodyBodyMedium_size,
    letterSpacing: -0.2,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.buttonsButtonSmall,
    color: Color.neutrals800,
    textAlign: "left",
    marginLeft: 8,
  },
  iconRightWrapper: {
    marginLeft: 8,
  },
  sizemediumStylelight: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.neutrals200,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_xs,
  },
});

export default SizeMediumStyleLight;
