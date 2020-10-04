import React, { useState } from 'react';
import { Card, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

import * as WorkerActions from '../../store/worker/actions'
import { Worker } from '../../store/worker/types';
import { ApplicationState } from '../../store'

const NewWorker = () => {
  const dispatch = useDispatch();
  const workers = useSelector((store: ApplicationState) => store.workerStore.workers);

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  function handleNewWorker() {
    const worker: Worker = {
      id: Number(String(Math.random() * 1000).split('.')[0]),
      name,
      age,
    }
    dispatch(WorkerActions.registerNewWorker(worker));
  }

  return (
    <>

      <Card style={{ width: '38rem' }}>
        <Card.Body>
          <Form>
            <Form.Group controlId='newWorkerForm'>
              <Form.Label>Nome do Funcionário</Form.Label>
              <Form.Control type='text' placeholder='Informe o Nome Completo' value={name} onChange={e => setName(e.target.value)} />
              <Form.Label>Idade do Funcionário</Form.Label>
              <Form.Control type='number' placeholder='Informe a idade' value={age === 0 ? '' : age} onChange={e => setAge(Number(e.target.value))} />
              <Button variant='success' className='mt-3' onClick={handleNewWorker}>Cadastrar</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>

      <Card style={{ width: '15rem' }}>
        <strong>Funcionário - Idade</strong>
        <Card.Body>
          <ul>
            {
              workers.map(
                (worker, key) => (
                  <OverlayTrigger key={key} placement='right'
                    overlay={
                      <Tooltip id='right'>
                        Id do Funcionário {key + 1}: {worker.id}
                      </Tooltip>
                    }
                  >
                    <li key={key}>
                      <span className='text-center'>
                        <strong>{key + 1}: </strong>{worker.name} - {worker.age}
                      </span>
                    </li>
                  </OverlayTrigger>
                )
              )
            }
          </ul>
        </Card.Body>
      </Card>
      
    </>
  );
}

export default NewWorker;