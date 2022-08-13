import { UPDATE_WORKDATA } from './actionTypes'
import { WorkDataActionTypes, WorkDataType, WorkDataState } from './types'

const initWorkDataArray: WorkDataState = {
  workDataArray: [
    {
      name: '',
      description: '',
      link: '',
      imgSrc: '',
    },
  ],
}

export default (
  state = initWorkDataArray,
  action: WorkDataActionTypes = { dataArray: [] }
) => {
  switch (action.type) {
    case UPDATE_WORKDATA:
      let data: WorkDataType[] = state.workDataArray
      if (action.dataArray) {
        data = action.dataArray
      }
      // console.log('data', data)
      return { ...state, workDataArray: [...state.workDataArray, ...data] }
    default:
      return state
  }
}
