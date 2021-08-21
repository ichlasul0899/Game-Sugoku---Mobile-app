import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  TextInput
} from 'react-native';

const Home = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [level, setLevel] = useState('')
  
  function onPressStart() {
    if (username.length === 0) {
      return alert("Type Your Name Please!")
    } else if (level.length === 0) {
      return alert("Select Your Level Please!")
    } else {
      navigation.navigate('Game', {
        username,
        level
      })
      setUsername('')
      setLevel('')
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.judul}>Welcome To <Text style={[styles.judul, { color: 'steelblue' }]}>SUGOKU</Text></Text>
      <View style={styles.grup}>
        <Text style={styles.judulGrup}>
          Username
        </Text>
        <TextInput
          style={{ height: 60, borderColor: 'gray', borderWidth: 2, paddingHorizontal:5, paddingVertical:5, width: 300, justifyContent:"center", textAlign:"center"}}
          onChangeText={text => setUsername(text)}
          value={username}
          placeholder='Type Your Name Please!!!'
        />
      </View>
      <View style={styles.grup}>
        <Text style={styles.judulGrup}>
          Level : <Text style={{color:"skyblue" , textTransform: 'uppercase'}}>{level}</Text>
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{marginHorizontal: 10}}>
            <Button
              title="Easy"
              onPress={text => setLevel("easy")}
              
            />
          </View>
          <View style={{marginHorizontal: 10}}><Button
            title="Medium"
            onPress={text => setLevel("medium")}
            
          /></View>
          <View style={{marginHorizontal: 10}}><Button
            title="Hard"
            onPress={text => setLevel("hard")}
            
          /></View>
        </View>
      </View>
      <View style={{ marginTop:30}}>
        <Button
          title="Start Game"
          onPress={() => onPressStart()}
          color="steelblue"
        />
      </View>


    </View>
  )
}
const styles = StyleSheet.create({
  judul: {
    fontSize: 30,
    fontWeight: "bold",
    color: 'black',
    padding: 10,
    marginBottom:40
  },
  grup: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  judulGrup: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  }
})

export default Home