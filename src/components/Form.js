import React from 'react'

import { TextInput, View, StyleSheet } from 'react-native'

const Form = (props) => (
  <View style={styles.header}>
    <TextInput
      style={styles.textInput}
      onEndEditing={props.onSubmit}
      onChangeText={props.onChangeText}
    />
  </View>
)

export default Form

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  textInput: {
    width: 300,
    height: 40,
    borderColor: 'grey',
    borderWidth: 2,
    padding: 5
  }
})
