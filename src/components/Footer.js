import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

import moment from 'moment'

const Footer = (props) => (
  <View style={styles.footer}>
    <View style={styles.timeContainer}>
      <Text style={styles.timeText}>{moment().format('LLLL')}</Text>
    </View>
    <View style={styles.footerContainer}>
      <View style={{ flex: 1 }}>
        <Text style={styles.textLabel}>
          Pressure
        </Text>
        <Text>
          {props.pressure}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.textLabel}>
          Wind Speed
        </Text>
        <Text>
          {props.windSpeed}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.textLabel}>
          Min Temp
        </Text>
        <Text>
          {props.minTemp}
        </Text>
      </View>
    </View>
  </View>
)

export default Footer

const styles = StyleSheet.create({
  footer: {
    flex: 3,
    width: '100%'
  },
  textLabel: {
    backgroundColor: 'transparent'
  },
  timeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  timeText: {
    fontSize: 15,
    color: 'red',
    paddingBottom: 20,
    backgroundColor: 'transparent'
  },
  footerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    flex: 3,
    paddingTop: 20
  }
})
