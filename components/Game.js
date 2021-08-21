import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert,
  TextInput
} from 'react-native';
import { getData, validateBoard, solveBoard } from '../store/action/index';
import { useSelector, useDispatch } from 'react-redux';

const Satuan = ({ value, row, col }) => {
  function onChangeText() {
    console.log(indexLuar, indexDalam)
  }

  if (value === 0) {
    return (
      <View style={{flexWrap:'wrap', width: 24, height: 24, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#333' }} >
        <TextInput
          style={{ fontSize: 26, width: 24, textAlign: 'center', maxLength:1}}
          onChangeText={text => onChangeText}
          defaultValue={''}
          
        />
      </View>
    )
  }
  return (
    <View style={{ width: 24, height: 24, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#333' }} >
      <Text style={{
        fontSize: 26,
        color: 'black'
      }}>{value}</Text>
    </View>
  )


  // if (value === 0) {
  //   return (
  //     <View style={{ width: 24, height: 24, justifyContent: 'center', alignItems: 'center', borderWidth:1, borderColor:'#333' }} >
  //       <TextInput
  //         maxLength='1'
  //         style={{
  //           fontSize: 26,
  //           color: 'black'}}
  //         onChangeText={text => onChangeText}
  //         value={value}

  //       />
  //     </View>
  //   )
  // } else {
  //   return (
  //     <View style={{ width: 24, height: 24, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#333' }} >
  //       <Text style={{
  //         fontSize: 26,
  //         color: 'black'
  //       }}>{value}</Text>
  //     </View>
  //   )
  // }
}

const Kotak = ({ data, index }) => {

  return (
    <View style={{ flexDirection: "row", width:75, flexWrap: "wrap" ,  margin: 5}}>
      
      {data.map((elemen, i) => {
        return <Satuan value={elemen} indexLuar={index} indexDalam={i} />
      })}
    </View>
  )
}

const Loading = () => {
  return (
    <View>
      <View style={{ backgroundColor: 'black', justifyContent: "center", alignItems: 'center', padding: 30 }}>
        <ActivityIndicator size="large" color="red" />
        <Text style={{ fontSize: 32, color: 'red' }}>LOADING</Text>
      </View>

    </View>
  )
}



const Game = ({route, navigation}) => {
  const dispatch = useDispatch()
  const { username, level} = route.params
  const boardReference = useSelector(state => state.boardReference)
  const [boardEditable, setBoardEditable] = useState([])
  const statusValidate = useSelector(state => state.statusValidate)
  const solved = useSelector(state => state.solved)

  useEffect(() => {
    dispatch(getData(level))
  }, [])

  useEffect(() => {
    setBoardEditable(boardReference)
  }, [boardReference])

  useEffect(() => {
    setBoardEditable(solved)
  }, [solved])

  function editBoard(text, indexRow, indexColumn) {
    var number = Number(text)
    if (text.length > 1) {
      alert('Not Succes Edit')
    } else if (!number) {
      alert('Not Succes Edit')
    } else {
      const updateBoard = JSON.parse(JSON.stringify(boardEditable))
      updateBoard[indexRow][indexColumn] = Number(text)
      setBoardEditable(updateBoard)
    }
  }


  function validate() {
    if (statusValidate == 'solved') {
      alert('Yeay you solved sudoku!')
    } else {
      dispatch(validateBoard(boardEditable))
    }
  }

  function giveUp() {
    alert('Anda menyerah!')
    dispatch(solveBoard(boardReference))
  }

  function onSubmit() {
    if (statusValidate == 'solved') {
      dispatch({
        type: 'SET_STATUS',
        payload: {
          statusValidate: 'unsolved'
        }
      })
      navigation.navigate('Finish', {
        username,
        level
      })
    } else {
      alert('Ada kolom yang masih kosong!')
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      
      <View style={styles.myheader}>
        <Text style={styles.myjudul}>Hello {username} !</Text>
      </View>

      <View style={styles.mymain} >
        <View style={styles.myrow}>
          {boardEditable.map((dataRow, indexRow) => {
            return (
              <View style={styles.myrow2} key={indexRow}>
                {dataRow.map((dataColumn, indexColumn) => {
                  return (
                    <View style={ styles.mycolumn} key={indexColumn} >
                      <TextInput
                        editable={boardReference[indexRow][indexColumn] > 0 ? false : true}
                        style={{ fontSize: 22}}
                        onChangeText={text => editBoard(text, indexRow, indexColumn)}
                        value={dataColumn > 0 ? String(dataColumn) : ''}
                      />
                    </View>
                  )
                })}
              </View>
            )})
          }
        </View>
      </View>

      <View style={styles.myfooter} >
        <View style={{ flexDirection: "row" }}>
          <View style={{ margin: 20, width: 120 }}>
            <Button
              title="Validate"
              onPress={() => validate()}
            />
          </View>
          <View style={{ margin: 20, width: 120 }}>
            <Text>
              Status : {statusValidate}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ margin: 20, width: 120 }}>
            <Button
              title="Give Up"
              onPress={() => giveUp()}
            />
          </View>
          <View style={{ margin: 20, width: 120 }}>
            <Button
              title="Submit"
              onPress={() => onSubmit()}
            />
          </View>
        </View>
      </View >
    
    </View>
  )
}
const styles = StyleSheet.create({
  judul: {
    fontSize: 16,
    fontWeight: "bold"
  },
  myjudul: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 20
  },
  myheader: {
    flex: 1, backgroundColor: 'skyblue', justifyContent: "center", alignItems: 'center'
  },
  mymain: {
    flex: 3, flexDirection: 'row', flexWrap: "wrap", backgroundColor: 'skyblue', justifyContent: "center", alignItems: 'center', zIndex: 100, paddingTop: 30
  },
  myfooter: {
    flex: 2, flexDirection: "column", backgroundColor: 'skyblue', justifyContent: "center", alignItems: 'center', padding: 20
  },
  myrow: {
    flexDirection: "row", flexWrap: "wrap", padding: 0, borderWidth: 1, width: 320, justifyContent: "center", borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb"
  },
  myrow2: {
    flexDirection: "row", width: 90, flexWrap: "wrap", margin: 5
  },
  mycolumn: {
    width: 29, height: 24, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#333'
  }
})

export default Game