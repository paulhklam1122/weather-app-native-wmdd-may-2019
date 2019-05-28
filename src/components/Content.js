import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

const Content = (props) => (
  <View style={styles.content}>
    <View>
      <Text style={styles.temp}>{Math.round(props.temp)}&#8451;</Text>
    </View>
    <View>
      <Text style={styles.cityName}>{props.city}</Text>
    </View>
    <View>
      <Text style={styles.countryName}>{props.countryCode}</Text>
    </View>
  </View>
)

export default Content

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent'
  },
  temp: {
    fontSize: 50,
    color: 'black',
    paddingLeft: 20,
    paddingTop: 50
  },
  countryName: {
    color: 'black',
    fontSize: 25,
    paddingLeft: 20
  },
  cityName: {
    fontSize: 35,
    paddingLeft: 20,
    paddingTop: 40,
    paddingBottom: 25
  }
})
