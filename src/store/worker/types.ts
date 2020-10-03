export enum WorkerTypes {
  ADD_WORKER = '@worker/ADD_WORKER',
  REMOVE_WORKER = '@worker/REMOVE_WORKER',
  LOAD_WORKERS = '@worker/LOAD_WORKERS',
}

export interface WorkerState {
  readonly workers: Worker[],
  readonly requested:boolean,
}

export interface Worker {
  id: number,
  name: string,
  age: number,
}