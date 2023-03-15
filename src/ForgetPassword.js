// import React, { Component } from "react";
import { Text, View } from "react-native";
import React, { Component, Fragment } from "react";
import { Text, SafeAreaView, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import ErrorMessage from "../components/ErrorMessage";
import { withFirebaseHOC } from "../config/Firebase";

class ForgotPassword extends Component {
  const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email')
})
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Forgot Password?</Text>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={(values, actions) => {
            this.handlePasswordReset(values, actions)
          }}
          validationSchema={validationSchema}>
          {({
            handleChange,
            values,
            handleSubmit,
            errors,
            isValid,
            touched,
            handleBlur,
            isSubmitting
          }) => (
            <Fragment>
              <FormInput
                name='email'
                value={values.email}
                onChangeText={handleChange('email')}
                placeholder='Enter email'
                autoCapitalize='none'
                iconName='ios-mail'
                iconColor='#2C384A'
                onBlur={handleBlur('email')}
              />
              <ErrorMessage errorValue={touched.email && errors.email} />
              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType='outline'
                  onPress={handleSubmit}
                  title='Send Email'
                  buttonColor='#039BE5'
                  disabled={!isValid || isSubmitting}
                />
              </View>
              <ErrorMessage errorValue={errors.general} />
            </Fragment>
          )}
        </Formik>
      
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Forgot Password Screen</Text>
      </View>
      </SafeAreaView>
    );
  }
}

export default ForgotPassword;
