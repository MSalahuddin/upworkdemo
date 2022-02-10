// @flow
import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

// import {gql, useMutation} from '@apollo/client';

import styles from './styles';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

const {width} = Dimensions.get('window');

const Login = props => {
  const [email, setEmail] = useState('t@t.com');
  const [password, setPassword] = useState('test729018');
  const [loader, setLoader] = useState(false);

  const LOGIN_MUTUATION = gql`
    mutation Login($email: String!, $password: String!) {
      tokenAuth(input: {email: $email, password: $password}) {
        token
      }
    }
  `;
  const [tokenAuth, {data, loading, error}] = useMutation(LOGIN_MUTUATION);

  if (data?.tokenAuth?.token) {
    props.navigation.navigate('Profile');
  } else {
    error?.graphQLErrors?.map(({message}, i) => Alert.alert('Error', message));
  }

  const onChangeInput = (value, setMethod) => {
    setMethod(value);
  };

  const handleLogin = () => {
    tokenAuth({variables: {email: email, password: password}});
  };

  const renderTextInput = (placeHolder, secureText, value, onChangeMethod) => {
    return (
      <View style={styles.textInputStyle}>
        <TextInput
          secureTextEntry={secureText}
          placeholder={placeHolder}
          value={value}
          onChangeText={val => onChangeInput(val, onChangeMethod)}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.textHeading}>Login</Text>
        {renderTextInput('Email', false, email, setEmail)}
        {renderTextInput('Password', true, password, setPassword)}
        {!loading ? (
          <TouchableOpacity style={styles.btnContainer} onPress={handleLogin}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        ) : (
          <Text>Loading</Text>
        )}
      </View>
    </View>
  );
};

export default Login;
