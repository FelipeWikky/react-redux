import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {Card, FormControl, Button} from 'react-bootstrap'
import { useHistory } from 'react-router';

import {Auth} from '../../store/auth/types'
import * as AuthActions from '../../store/auth/actions'


const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');

  function redirectToLogin() {
    history.push('/login');
  }

  function handleSignUp() {
    const auth:Auth = {
      email,
      password:passwd
    }
    dispatch( AuthActions.requestSignUp(auth, redirectToLogin) );
  }
  return (
    <Card className='mt-4' style={{ width: '40rem' }}>
      <Card.Title>
        Faça seu Cadastro
      </Card.Title>
      <Card.Body>
        <FormControl className='mt-3' type='text' placeholder='Informe seu E-mail' value={email} onChange={e => setEmail(e.target.value)} />
        <FormControl className='mt-3' type='text' placeholder='Informe uma Senha' value={passwd} onChange={e => setPasswd(e.target.value)}/>

        <Button variant='outline-success' className='mt-4' onClick={handleSignUp}>
          Registrar
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SignUp;