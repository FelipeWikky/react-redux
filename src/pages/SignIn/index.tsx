import React, { useState, useEffect } from 'react'
import { Card, FormControl, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ApplicationState } from '../../store'
import * as AuthActions from '../../store/auth/actions'
import { Auth } from '../../store/auth/types';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector((store:ApplicationState) => store.authStore.auth);
  const signing = useSelector((store: ApplicationState) => store.authStore.signing);
  const errorSignIn = useSelector((store: ApplicationState) => store.authStore.error);

  const history = useHistory();

  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');

  useEffect(() => {
    console.log('request');
    if (auth.email)
      setEmail(auth.email);
    if (auth.password)
      setPasswd(auth.password);
  }, [auth]);

  function redirectToHomePage() {
    history.push('/');
  }

  function handleSignIn() {
    const auth: Auth = {
      email,
      password: passwd,
    }
    dispatch(AuthActions.requestSignIn(auth, redirectToHomePage));
  }

  if (signing)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  else
  return (
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
        {
          errorSignIn ?
            <Card.Body>
              <strong style={{ color: 'red' }}>Houve algum erro na tentativa ao Login</strong>
            </Card.Body>
            :
            null
        }
      </Card>
  );
}

export default SignIn;