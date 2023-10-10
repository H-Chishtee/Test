import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Signup = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    city: "",
    mobile_number: "",
  });

  const handleSignup = async () => {
    try {
      const response = await fetch("http://192.168.10.5:3000/Signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        Alert.alert("Registration Successful");
        // You can navigate to another screen or perform other actions upon successful registration
      } else {
        Alert.alert(`Registration Failed: ${result}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      Alert.alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Text style={styles.heading}>Create Your Account</Text>
        <View style={styles.inputField}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor={Color.neutrals400}
            onChangeText={(text) => setFormData({ ...formData, fname: text })}
          />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor={Color.neutrals400}
            onChangeText={(text) => setFormData({ ...formData, lname: text })}
          />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.label}>UserName</Text>
          <TextInput
            style={styles.input}
            placeholder="username"
            placeholderTextColor={Color.neutrals400}
            onChangeText={(text) =>
              setFormData({ ...formData, username: text })
            }
          ></TextInput>
        </View>
        <View style={styles.inputField}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={Color.neutrals400}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
          />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={Color.neutrals400}
            onChangeText={(text) =>
              setFormData({ ...formData, password: text })
            }
          />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor={Color.neutrals400}
            onChangeText={(text) =>
              setFormData({ ...formData, confirm_password: text })
            }
          />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            placeholderTextColor={Color.neutrals400}
            onChangeText={(text) => setFormData({ ...formData, city: text })}
          ></TextInput>
        </View>
        <View style={styles.inputField}>
          <Text style={styles.label}>Mobile Number</Text>
          <View style={styles.mobileInput}>
            <TextInput
              style={styles.mobileNumber}
              placeholder="+92 **********"
              placeholderTextColor={Color.neutrals400}
              onChangeText={(text) =>
                setFormData({ ...formData, mobile_number: text })
              }
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => handleSignup()}
        >
          <Text style={styles.signupButtonText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    marginTop: 0,
    backgroundColor: Color.neutralsWhite,
  },
  heading: {
    fontSize: FontSize.headingsHeadingM_size,
    fontWeight: "700",
    marginBottom: 20,
    color: Color.neutrals800,
    fontFamily: FontFamily.wFButtonsButtonLarge,
  },
  inputField: {
    marginBottom: 20,
  },
  label: {
    fontSize: FontSize.buttonsButtonSmall_size,
    fontWeight: "600",
    color: Color.neutrals800,
    fontFamily: FontFamily.bodyBoldBodyBoldExtraLarge,
  },
  input: {
    height: 46,
    borderColor: Color.neutrals400,
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    paddingHorizontal: 20,
    fontSize: FontSize.wFBodyBodyMedium_size,
    fontFamily: FontFamily.wFBodyBodyMedium,
  },
  mobileInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  mobilePrefix: {
    flex: 1,
    height: 46,
    borderColor: Color.neutrals400,
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    paddingHorizontal: 20,
    fontSize: FontSize.wFBodyBodyMedium_size,
    fontFamily: FontFamily.wFBodyBodyMedium,
    marginRight: 10,
  },
  mobileNumber: {
    flex: 3,
    height: 46,
    borderColor: Color.neutrals400,
    borderWidth: 2,
    borderRadius: Border.br_7xs,
    paddingHorizontal: 20,
    fontSize: FontSize.wFBodyBodyMedium_size,
    fontFamily: FontFamily.wFBodyBodyMedium,
  },
  signupButton: {
    height: 46,
    backgroundColor: Color.neutrals800,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
  },
  signupButtonText: {
    color: Color.neutralsWhite,
    fontSize: FontSize.wFButtonsButtonLarge_size,
    fontWeight: "700",
    fontFamily: FontFamily.wFButtonsButtonLarge,
  },
});

export default Signup;
