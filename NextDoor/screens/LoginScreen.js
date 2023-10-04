import * as React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = async () => {
    const username = useState();
    const password = useState();
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const results = await response.json();
      if (results.success) {
        console.log("Login Successful");
      } else {
        console.log("Login failed: ", results.message);
      }
    } catch (error) {
      console.error("Error duing login: ", error);
    }
  };

  const handleCreateAccount = () => {
    navigation.navigate("Signup");
  };

  const [isInputFocused, setInputFocused] = React.useState(false);
  React.useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setInputFocused(false); // Keyboard is hidden, reset focus
      }
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);
  const [hidePassword, setHidePassword] = React.useState(true);
  return (
    <ImageBackground
      style={styles.loginScreenIcon}
      resizeMode="cover"
      source={require("C:/Users/Hp/OneDrive/Documents/Project/NextDoor/assets/loginScreen.jpg")} // Update the path to your image
    >
      <View style={styles.content}>
        <View style={styles.content1}>
          <View style={styles.copy}>
            {!isInputFocused && (
              <>
                <Text style={styles.content2}>Welcome</Text>
                <Text style={styles.content3}>
                  See Who Lives In Your Neighborhood
                </Text>
              </>
            )}
          </View>
        </View>
        <View style={styles.username}>
          <TextInput
            style={styles.inputField}
            placeholder="Username"
            placeholderTextColor={Color.colorBlack}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Password"
            placeholderTextColor={Color.colorBlack}
            secureTextEntry={hidePassword}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
          <TouchableOpacity
            style={styles.showPasswordButton}
            onPress={() => setHidePassword(!hidePassword)}
          >
            <Text style={styles.showPasswordButtonText}>
              {hidePassword ? "Show" : "Hide"} Password
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button1}
            onPress={handleCreateAccount}
          >
            <Text style={styles.label4}>create new account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.label4}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonFlexBox} onPress={handleLogin}>
            <Text style={styles.label6}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFlexBox}>
            <Text style={styles.label6}>Login with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFlexBox}>
            <Text style={styles.label6}>Login With Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  content1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 80,
  },
  content2: {
    fontSize: FontSize.headingsHeadingM_size,
    lineHeight: 42,
    color: Color.colorBlack,
    fontFamily: FontFamily.headingsHeadingM,
    fontWeight: "700",
  },
  content3: {
    fontSize: FontSize.bodyBoldBodyBoldExtraLarge_size,
    lineHeight: 35,
    color: Color.neutrals900,
    fontFamily: FontFamily.bodyBoldBodyBoldExtraLarge,
    fontWeight: "600",
    marginBottom: 16,
  },
  username: {
    width: "100%",
    alignItems: "center",
  },
  inputField: {
    width: "100%",
    height: 46,
    borderColor: Color.colorBlack,
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    paddingHorizontal: 20,
    marginBottom: 16,
    fontSize: FontSize.buttonsButtonMedium_size,
    fontFamily: FontFamily.wFBodyBodyMedium,
  },
  showPasswordButton: {
    position: "absolute",
    right: 10, // Adjust the position as needed
    top: 75, // Adjust the position as needed
  },
  showPasswordButtonText: {
    color: Color.colorBlack,
    fontSize: FontSize.buttonsButtonSmall_size,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16, // Spacing between rows
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  button1: {
    flex: 1,
    height: 46,
    backgroundColor: Color.neutralsWhite,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  buttonFlexBox: {
    width: "100%",
    height: 46,
    backgroundColor: Color.neutralsWhite,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonFlexBox1: {
    width: "100%",
    height: 46,
    backgroundColor: Color.neutralsWhite,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
  },
  label4: {
    fontSize: FontSize.buttonsButtonSmall_size,
    lineHeight: 24,
    fontWeight: "600",
  },
  label6: {
    fontSize: FontSize.buttonsButtonMedium_size,
    lineHeight: 24,
  },
  loginScreenIcon: {
    width: "100%",
    height: "100%",
  },
  passwordInputContainer: {
    position: "relative",
  },

  forgotPasswordButton: {
    position: "absolute",
    bottom: 0, // Position at the bottom
    right: 0, // Position at the right
  },
});

export default LoginScreen;
