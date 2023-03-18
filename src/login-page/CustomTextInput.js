import {Text, TextInput, View} from 'react-native';
import React from 'react';

export default function CustomTextInput(props) {
  const header = props.header;
  const isPassword = props.isPassword;
  const style = props.style;

  return (
    <View style={style}>
      <Text>{header}</Text>
      <TextInput
        onChangeText={props.onChangeHandler}
        secureTextEntry={isPassword}
        style={{
          width: 300,
          height: 40,
          borderWidth: 1,
          padding: 10,
        }}></TextInput>
    </View>
  );
}
