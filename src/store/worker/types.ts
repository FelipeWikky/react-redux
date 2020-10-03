export enum WorkerTypes {
  ADD_WORKER = '@worker/ADD_WORKER',
  REMOVE_WORKER = '@worker/REMOVE_WORKER',
}

export interface WorkerState {
  readonly workers: Worker[]
}

export interface Worker {
  id: number,
  name: string,
  age: number,
}