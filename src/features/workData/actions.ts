import { UPDATE_WORKDATA } from './actionTypes'
import { WorkDataType } from './types'
export const updateWorkData = (array: WorkDataType[]) => ({
  type: UPDATE_WORKDATA,
  dataArray: array,
})
