import { action } from 'typesafe-actions'
import { Worker, WorkerTypes } from './types'

export const registerNewWorker = (worker:Worker) => action(WorkerTypes.ADD_WORKER, {worker});

export const removeWorker = (worker:Worker) => action(WorkerTypes.REMOVE_WORKER, {worker});

export const loadWorkers = () => action(WorkerTypes.LOAD_WORKERS);