import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from '../../components/NavBar'

import { ApplicationState } from '../../store'
import * as WorkerActions from '../../store/worker/actions';
import { Worker } from '../../store/worker/types';


const Workers: React.FC = () => {
  const workers = useSelector((store: ApplicationState) => store.workerStore.workers);
  const dispatch = useDispatch();

  function handleRemoveWorker(id:number){
    const worker:Worker = {
      id,
      name: workers.find(w => w.id === id)!.name,
      age: workers.find(w => w.id === id)!.age
    }
    dispatch(WorkerActions.removeWorker(worker) );
    window.alert('Funcionário Removido');
  }
  return (
    <>
      <NavBar />
      
      {
        workers.map(
          (worker, key) => (
            <div>
              <small>{worker.id}</small>
              <br/>
              <strong>{worker.name} - {worker.age}</strong>
              &nbsp;&nbsp;&nbsp; <span onClick={() => handleRemoveWorker(worker.id)}>Excluir</span>
            </div>
          )
        )
      }
    </>
  );
}

export default Workers;