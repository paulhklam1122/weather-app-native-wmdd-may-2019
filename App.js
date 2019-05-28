import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

import Form from './src/components/Form'
import Content from './src/components/Content'
import Footer from './src/components/Footer'

const API_KEY = 'c8c4865b1ee49f77a87780ffabb644b3'

const images = {
  Clear: 'http://ayay.co.uk/mobiles/weather/strange/northern-lights.jpg',
  Clouds: 'https://i.pinimg.com/736x/54/59/d7/5459d741279e8d72661990f52774473f--cell-phone-wallpapers-gif-photos.jpg'
}

export default class App extends React.Component {
  state = {
    temp: '',
    windSpeed: '',
    pressure: '',
    minTemp: '',
    city: '',
    countryCode: ''
  }

  fetchData = (city) => {
    this.fetchCityData(this.state.city)
  }

  fetchCityData = async (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    const api_call = await fetch(url)

    const data = await api_call.json()

    console.log(data)

    this.setState({
      temp: data.main.temp,
      windSpeed: data.wind.speed,
      minTemp: data.main.temp_min,
      pressure: data.main.pressure,
      countryCode: data.sys.country,
      weather: data.weather[0].main
    })
  }

  render() {
    const { city, countryCode, temp, minTemp, windSpeed, pressure, weather } = this.state
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: images[weather]}}
        />
        <Form
          onSubmit={this.fetchData}
          onChangeText={text => this.setState({ city: text })}
        />
        <Content
          temp={temp}
          city={city}
          countryCode={countryCode}
        />
        <Footer
          pressure={pressure}
          windSpeed={windSpeed}
          minTemp={minTemp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
})
