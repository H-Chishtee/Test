import * as React from "react";
import { useState, useEffect } from "react";
import { Linking } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useNavigation } from "@react-navigation/native";
import * as Google from "expo-auth-session/providers/google";
import * as Facebook from "expo-auth-session/providers/facebook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AccessToken, LoginManager } from "react-native-fbsdk";
import UserContainer from "../UserContainer";
import SizeMediumStyleLight from "../SizeMeduiumStyleLight";
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
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";
WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isInputFocused, setInputFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [user, setUser] = useState("null");
  const [request, response, propmtAsync] = Facebook.useAuthRequest({
    clientId: 712332427578768,
  });
  useEffect(() => {
    if (response && response.type === "success" && response.authentication) {
      (async () => {
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id, name, picture.type(large)`
        );
        const userInfo = await userInfoResponse.json();
        setUser(userInfo);
      })();
    }
  }, [response]);

  const handlePressAsync = async () => {
    const result = await propmtAsync();
    if (result.type !== "success") {
      alert("something went wrong");
      return;
    }
  };

  // const handleLogin = async () => {
  //   try {
  //     const response = await fetch("http://192.168.10.2:3000/LoginScreen", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });
  //     console.log("Response Status", response.status);
  //     if (response.ok) {
  //       console.log("Login Successful");
  //       navigation.navigate("Home");
  //     } else {
  //       console.error(
  //         "Login failed. Server returned an error: ",
  //         response.status
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error duing login: ", error);
  //   }
  // };

  const handleCreateAccount = () => {
    navigation.navigate("Signup");
    navigation.navigate("Home");
  };
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
  return (
    <ImageBackground
      style={styles.loginScreenIcon}
      resizeMode="cover"
      source={require("C:/Users/Hp/OneDrive/Documents/Project-repo/Project/NextDoor/assets/loginScreen.jpg")} // Update the path to your image
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
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.inputField}
            placeholder="Password"
            placeholderTextColor={Color.colorBlack}
            secureTextEntry={hidePassword}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            onChangeText={(text) => setPassword(text)}
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
          <TouchableOpacity
            style={styles.buttonFlexBox}
            onPress={handleCreateAccount}
          >
            <Text style={styles.label6}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonFlexBox}
            onPress={handlePressAsync}
          >
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
