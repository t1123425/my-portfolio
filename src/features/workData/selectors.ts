import { WorkDataType } from './types'
export const getWorkDataArray = (state: any) => state.workData
export const getWorkData = (workName: string) => (state: any) =>
  state.workData.workDataArray.find((e: WorkDataType) => e.name === workName)
