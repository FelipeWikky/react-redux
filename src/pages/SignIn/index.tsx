import React, {useState, useEffect} from 'react'
import { Card, FormControl, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

import NavBar from '../../components/NavBar'

import {ApplicationState} from '../../store'
import * as AuthActions from '../../store/auth/actions'
import { Auth } from '../../store/auth/types';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const signing = useSelector((store:ApplicationState) => store.authStore.signing);
  const errorSignIn = useSelector((store:ApplicationState) => store.authStore.error);

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');

  function handleSignIn() {
    const auth:Auth = {
      email,
      password: passwd,
    }
    dispatch( AuthActions.requestSignIn(auth) );
  }

  return (
    <>
    <NavBar/>

    <Card className='mt-4' style={{ width: '40rem' }}>
      <Card.Body>
        <Card.Title>
          Autenticação
        </Card.Title>
        <FormControl className='mt-4' type='text' placeholder='Informe seu E-mail' value={email} onChange={e => setEmail(e.target.value)} />
        <FormControl className='mt-1' type='text' placeholder='Informe sua Senha' value={passwd} onChange={e => setPasswd(e.target.value)} />
        <Button className='mt-4' variant='success' onClick={handleSignIn} >
          Fazer Login
        </Button>
      </Card.Body>
    </Card>

    </>
  );
}

export default SignIn;