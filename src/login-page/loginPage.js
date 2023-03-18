import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from './CustomTextInput';

const user = {
  username: 'user',
  password: '123456',
};

const loginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticate] = useState(false);
  return (
    <View style={{...styles.container, flexDirection: 'column', padding: 30}}>
      {isAuthenticated ? (
        <Text
          style={{
            fontSize: 30,
            flex: 1,
            textAlignVertical: 'center',
          }}>
          Login success
        </Text>
      ) : (
        <>
          <Text style={{fontSize: 80, marginTop: 80}}>LOGIN</Text>
          <CustomTextInput
            style={{
              marginTop: 30,
            }}
            header={'Username'}
            isPassword={false}
            onChangeHandler={setUsername}
          />
          <CustomTextInput
            style={{
              marginTop: 30,
              marginBottom: 30,
            }}
            header={'Password'}
            isPassword={true}
            onChangeHandler={setPassword}
          />
          <View style={{width: 100}}>
            <Button
              title="Login"
              onPress={() => {
                if (username == user.username && password == user.password)
                  setIsAuthenticate(true);
              }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default loginPage;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
});
