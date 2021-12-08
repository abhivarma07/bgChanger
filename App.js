import React,{useState} from 'react'
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native' 

const App = () => {

  const [RColor,setRColor] = useState("rgb(32,0,126)");

  const changeBG = () => {
    let color = "rgb("+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+")" ;

    setRColor(color) 

  }

  const reset = () => {
    let color = "rgb(0,0,0)"

    setRColor(color) 
  }

  return (
    <>
    <StatusBar backgroundColor={RColor} />
      <View style={[styles.container, {backgroundColor: RColor}]}>
      <TouchableOpacity onPress={changeBG}>
        <Text style={styles.text}>TAP ME</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={reset}>
        <Text style={[styles.text, {marginTop:10}]}>RESET</Text>
      </TouchableOpacity>
      </View>
    </>
  );
};



export default App ;

const styles = StyleSheet.create({
  container:{
    flex : 1 ,
    alignItems : 'center',
    justifyContent : 'center', 
  },

  text:{
    fontSize : 30 ,
    backgroundColor: "#BB2CD9",
    paddingVertical : 10 ,
    paddingHorizontal : 40 ,
    color : 'white' ,
    borderRadius: 15 ,
    textTransform: 'uppercase'
  }
})