export function getData(level) {
  return (dispatch) => {
    let url = `https://sugoku.herokuapp.com/board?difficulty=${level}`
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: 'SET_DATA',
          payload: {
            boardReference: data.board
          }
        })
      })
  }
}

export function solveBoard(boardReference) {
  const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')
  const encodeParams = (params) =>
    Object.keys(params)
      .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
      .join('&');
  return (dispatch) => {
    const data = { board: boardReference }
    let url = 'https://sugoku.herokuapp.com/solve'
    fetch(url, {
      method: 'POST',
      body: encodeParams(data),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: 'SET_SOLVED',
          payload: {
            solved: response.solution
          }
        })
        dispatch({
          type: 'SET_STATUS',
          payload: {
            statusValidate: response.status
          }
        })
      })
  }
}

export function validateBoard(data) {
  const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')
  const encodeParams = (params) =>
    Object.keys(params)
      .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
      .join('&');
  return (dispatch) => {
    let url = 'https://sugoku.herokuapp.com/validate'
    fetch(url, {
      method: 'POST',
      body: encodeParams(data),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: 'SET_STATUS',
          payload: {
            statusValidate: response.status
          }
        })
      })
  }
}