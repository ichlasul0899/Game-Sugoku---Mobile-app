import React from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'

const MovieCard = ({movie}) => {
  return (
    <View>
      <Text style={styles.card}>{movie.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#bbb",
    padding: 5,
    marginVertical: 3
  } 
})

export default MovieCard