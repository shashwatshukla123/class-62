import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

export default class App extends React.Component{
  constructor(){
    super()
   this.state={
     weather:''
   }
      }
      getWeather=async()=>{
        var url="https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139"
        return fetch(url)
        .then(response=>response.json())
        .then(responsejson=>{
          this.setState({
            weather:responsejson
          })
        })
        .catch(error=>{
          console.error(error)
        })

        
      }
      componentDidMount=()=>{
        this.getWeather()
      }
  render(){
if(this.state.weather==''){
  return(
    <View style={styles.container}>
    <Text>loading...</Text>
    </View>
  )
}
    else{
      return(
            <View style={styles.container}>
            <View style={styles.subContainer}>
            <Text style={styles.title}> Weather forecast</Text>
            <Image style={styles.cloudImage}
            source={require('./cloud.png')}/>
            <View styles={styles.textContainer}>
            <Text styles={{fontSize:18}}>{this.state.weather.main.temp}&deg;C</Text>
            <Text styles={{fontSize:20,margin:10}}>humidity:{this.state.weather.main.humidity}</Text>
            <Text styles={{fontSize:20}}>{this.state.weather.weather[0].description}</Text>
            </View>
            </View>
            </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  subContainer:{
    flex:1,
    borderWidth:1,
    alignItems:'center'
  },
  title:{
    marginTop:50,
    fontSize:30,
    fontWight:550
  },
  cloudImage:{
    width:200,
    height:200,
    marginTop:30
  },
  textContainer:{
    flex:1,
    alignItems:'center',
    fexDirection:'row',
    marginTop:50

  }
})
