// import { StatusBar } from 'expo-status-bar';
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, Image, Button, ActivityIndicator, TextInput, ScrollView, FlatList } from 'react-native';
// import MovieCard from './components/MovieCard';

export default function App() {
  // const [movies, setMovies] = useState([])
  // const [title, setTitle] = useState("Hello World")

  // useEffect(() => {
  //   fetchMovies()
  // })
  // const showAlert = () => {
  //   alert("Tarah")
  // }

  // const fetchMovies = () => {

  //   fetch('https://server-movies.pinokio.xyz/movies')
  //     .then(resp => resp.json())
  //     .then(data => {
  //       setMovies(data)
  //     })
  // }

  return (
    <View style={{ padding: 100 }}>
      {/* <Button title="Show Alert" onPress={showAlert} />
      <FlatList
        data={movies}
        renderItem={({ item }) => {
          return <MovieCard movie={item} />
        }}
        keyExtractor={(movie, idx) => `${idx}`}
      /> */}
      {/* <ScrollView>
        {
          movies.map(movie => {
            return <MovieCard movie={movie} />
          })
        }
      </ScrollView> */}


      {/* <Text> {title}</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          margin: 15
        }}
        onChangeText={(text) => setTitle(text)} /> */}
      {/* <Image
        style={{
          width: 80,
          height: 80
        }}
        source={{
          uri: "http://reactnative.dev/img/tiny_logo.png"
        }}
      /> */}
      {/* <Text style={[{ fontSize: 36 }, styles.redColor]}>Hallo Ichlas</Text> */}
      {/* <Button title="Fetch Movies" onPress={fetchMovies} /> */}
      {/* <ActivityIndicator size="large" color="red"/> */}
      {/* <Text>
        {JSON.stringify(movies, null, 2)}
      </Text> */}
      {/* <Text>
        {movies && movies.map(movie => {
          return <MovieCard movie={movie} />
        })}
      </Text> */}
      {/* {movies && movies.map(movie => {
        return <MovieCard movie={movie} />
      })} */}
      {/* <StatusBar style="auto" /> */}
    </View>

  );
}

// const styles = StyleSheet.create({
//   redColor: {
//     color: "red"
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
