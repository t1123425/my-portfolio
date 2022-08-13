import { UPDATE_WORKDATA } from './actionTypes'

interface WorkData {
  name: string
  description: string
  link: string
  imgSrc: string
}

interface UpdateWorkData {
  type?: typeof UPDATE_WORKDATA
  dataArray?: WorkData[]
}
export interface WorkDataState {
  workDataArray: WorkData[]
}
export type WorkDataActionTypes = UpdateWorkData

export type WorkDataType = WorkData
