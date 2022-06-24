import React, { useState, useEffect, useContext } from 'react'
// eslint-disable-next-line import/no-cycle
import { AuthContext } from '../../screens/LoginScreen/LoginScreen'
import {
  Container,
  SectionLogin,
  SubContainer,
  ContainerFormLogin,
  InputLogin,
  inputUser,
  inputSenha,
  ButtonLogin,
  ButtonVoltar,
} from './LoginContainer.styles'
import imgFundo from '../../assets/img-fundo-login.jpeg'
import imgLogoAmf from '../../assets/logo-branca-com-escrita.png'
import { useNavigate } from 'react-router-dom'

const LoginContainer = () => {
  const [isMobile, setIsMobile] = useState(false)

  const navigate = useNavigate()
  const voltar = () => {
    navigate('/')
  }

  const { login } = useContext(AuthContext)

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    login(user, password)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 600)
    }

    window.scrollTo(0, 0)
  }, [])
  return (
    <Container>
      {isMobile ? (
        <h1>Sem suporte para celulares</h1>
      ) : (
        <SectionLogin style={ { backgroundImage: `url( ${ imgFundo } )` } }>
          <SubContainer>
            <img
              id="img-logo-escrita"
              src={ imgLogoAmf }
              alt="Icon"
            />
            <ContainerFormLogin onSubmit={ handleSubmit }>
              <InputLogin
                type="text"
                name="textName"
                id="textName"
                placeholder="Usuário"
                required
                value={ user }
                onChange={ (e) => setUser(e.target.value) }
                style={ inputUser }
              />
              <InputLogin
                type="password"
                name="textSenha"
                id="textSenha"
                placeholder="Senha"
                required
                value={ password }
                onChange={ (e) => setPassword(e.target.value) }
                style={ inputSenha }
              />
              <ButtonVoltar onClick={ voltar }>Voltar</ButtonVoltar>
              <ButtonLogin type="submit">Acessar</ButtonLogin>
            </ContainerFormLogin>
          </SubContainer>
        </SectionLogin>
      )}
    </Container>
  )
}

export default LoginContainer
