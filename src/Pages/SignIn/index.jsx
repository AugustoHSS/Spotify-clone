import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, FormsContainer, Form, Input, StyledLink, Button, CheckBox,
} from './style';
import api from '../../services/api';

export default function signIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  function submit(e) {
    e.preventDefault();
    const promise = api.login({
      email,
      password,
    });
    promise.then(() => navigate('/home'));
    promise.catch((error) => alert(error));
  }

  return (
    <Container>
      <FormsContainer>
        <h1>Login</h1>
        <Form onSubmit={(e) => submit(e)}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <CheckBox
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            Lembrar-me
          </div>
          <Button type="submit">Login</Button>
        </Form>

      </FormsContainer>
      <p>
        Não tem uma conta?
        {' '}
        <StyledLink to="/signup">Cadastre-se</StyledLink>
      </p>
    </Container>
  );
}
