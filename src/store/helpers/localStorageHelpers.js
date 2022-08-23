const getStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return  JSON.parse(serializedState)
  } catch (error) {
    return undefined
  }
}

const setStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (error) {
    console.log(error)
  }
}

export { getStateFromLocalStorage, setStateToLocalStorage}