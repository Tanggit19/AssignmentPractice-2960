import React from 'react';
import {Component} from 'react';
import { View, TextInput, Text, Image, SafeAreaView,TouchableOpacity,Alert,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default class music extends Component{
  
  render(){
    
    const TextInputExample = () => {
        const [number, onChangeNumber] = React.useState('');

        return (
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Enter email"
              keyboardType="numeric"
            />
          </SafeAreaView>
        );
    };
    

    return(
      <LinearGradient colors={['#c8b8cf', '#800aab']} style={{ flex:1 }}>

        <View>
          <Text style={styles.text}>Borcelle</Text>
          <Image
              style={styles.tinyLogo}
              source={require('./logo.png')}
          />
        </View>
  
        <TextInputExample />

        <View>
          <TouchableOpacity style={styles.Button} onPress={() => window.alert('Thank you! Check your email.')}>
              <Text style={styles.buttonText}>Request</Text>
           </TouchableOpacity>
        </View>
        
      </LinearGradient>
    );
  }
}

const styles = {
  text: {
    fontSize: 34,
    marginTop: 10,
    color:'purple',
    fontWeight:'500',
    textAlign:'center',
  },
  Button:{
    marginHorizontal: 70,
    backgroundColor: 'purple',
    padding: 5,
    borderRadius:5,
    width:200,
  },
  buttonText:{
    color:'white',
    textAlign:'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginBottom:10,
    borderRadius:50,
    marginLeft:110,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
};
