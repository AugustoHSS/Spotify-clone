import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, FormsContainer, Form, Input, StyledLink, Button,
} from './style';
import api from '../../services/api';

export default function signUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  function submit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('As senhas não são iguais. Tente novamente.');
      return;
    }
    if (password === '' || email === '') {
      alert('Todos os campos precisam ser preenchidos');
      return;
    }
    const promise = api.createUser({
      email,
      password,
    });
    promise.then(() => navigate('/'));
    promise.catch((error) => alert(error));
  }
  return (
    <Container>
      <FormsContainer>
        <h1>Cadastro</h1>
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
          <Input
            type="password"
            placeholder="Confirme a Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>

      </FormsContainer>
      <p>
        Já possui uma conta?
        {' '}
        <StyledLink to="/">Entre</StyledLink>
      </p>
    </Container>
  );
}
