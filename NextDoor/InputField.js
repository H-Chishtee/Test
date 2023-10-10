import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "./GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputField = ({
  iconLeft1,
  value1,
  iconRight1,
  value = true,
  optionalField = false,
  iconLeft = false,
  iconRight = false,
  label = true,
  showLabel,
  inputFieldPosition,
  inputFieldAlignItems,
  inputFieldJustifyContent,
  inputFieldBackgroundColor,
  inputFieldMarginTop,
  textInputJustifyContent,
  valueFlex,
  valueColor,
  valueWidth,
}) => {
  const inputFieldStyle = useMemo(() => {
    return {
      ...getStyleValue("position", inputFieldPosition),
      ...getStyleValue("alignItems", inputFieldAlignItems),
      ...getStyleValue("justifyContent", inputFieldJustifyContent),
      ...getStyleValue("backgroundColor", inputFieldBackgroundColor),
      ...getStyleValue("marginTop", inputFieldMarginTop),
    };
  }, [
    inputFieldPosition,
    inputFieldAlignItems,
    inputFieldJustifyContent,
    inputFieldBackgroundColor,
    inputFieldMarginTop,
  ]);

  const textInputStyle = useMemo(() => {
    return {
      ...getStyleValue("justifyContent", textInputJustifyContent),
    };
  }, [textInputJustifyContent]);

  const valueStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", valueFlex),
      ...getStyleValue("color", valueColor),
      ...getStyleValue("width", valueWidth),
    };
  }, [valueFlex, valueColor, valueWidth]);

  return (
    <View style={[styles.inputField, inputFieldStyle]}>
      {label && (
        <View style={styles.textInputFlexBox}>
          {showLabel && <Text style={styles.label}>Label</Text>}
          {optionalField && <Text style={styles.label1}>Optional</Text>}
        </View>
      )}
      <View style={[styles.textInput, styles.textInputFlexBox, textInputStyle]}>
        {iconLeft && (
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={iconLeft1}
          />
        )}
        {value && <Text style={[styles.value, valueStyle]}>{value1}</Text>}
        {iconRight && (
          <Image
            style={[styles.iconRight, styles.iconLayout]}
            resizeMode="cover"
            source={iconRight1}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 24,
    width: 24,
    display: "none",
  },
  label: {
    fontWeight: "600",
    fontFamily: FontFamily.bodyBoldBodyBoldExtraSmall,
    textAlign: "left",
    color: Color.neutrals800,
    lineHeight: 16,
    letterSpacing: -0.1,
    fontSize: FontSize.buttonsButtonSmall_size,
    flex: 1,
  },
  label1: {
    color: Color.wFBase600,
    textAlign: "right",
    marginLeft: 10,
    display: "none",
    fontFamily: FontFamily.wFBodyBodyMedium,
    lineHeight: 16,
    letterSpacing: -0.1,
    fontSize: FontSize.buttonsButtonSmall_size,
    flex: 1,
  },
  value: {
    fontSize: FontSize.wFBodyBodyMedium_size,
    letterSpacing: -0.2,
    lineHeight: 24,
    marginLeft: 4,
    fontFamily: FontFamily.wFBodyBodyMedium,
    textAlign: "left",
    color: Color.neutrals800,
    flex: 1,
  },
  iconRight: {
    marginLeft: 4,
  },
  textInput: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.neutralsWhite,
    borderStyle: "solid",
    borderColor: Color.neutrals400,
    borderWidth: 2,
    height: 46,
    alignItems: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_2xs,
    marginTop: 8,
  },
  inputField: {
    width: 320,
    justifyContent: "flex-end",
  },
});

export default InputField;
