import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native'

const Finish = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.judul, { margin: 20 }}>Finish</Text>
      
      <Button
        title="Go Back Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  judul: {
    fontSize: 16,
    fontWeight: "bold"
  }
})

export default Finish