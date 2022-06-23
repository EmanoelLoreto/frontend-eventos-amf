import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import {
  Header,
  NavMenus,
  Ul,
  Li,
  Link,
  LinkInscricao,
  LogoAndNome,
} from './HeaderHome.styles'
import logoBrancaAmf from '../../assets/logo-branca-amf.png'
import logoBrancaComEscrita from '../../assets/logo-branca-com-escrita.png'

const HeaderContainer = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [transparentHeader, setTransparentHeader] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setTransparentHeader(window.pageYOffset < 100)
      )
    }
  }, [])

  return (
    <Header transparentheader={ transparentHeader }>
      <LogoAndNome onClick={ () => navigate('/') }>
        <img
          id="logo-branca-amf"
          src={ transparentHeader ? logoBrancaComEscrita : logoBrancaAmf }
          height="80px"
          alt="Icon"
          style={ { zIndex: 3 } }
        />
        <h1>EventosAMF</h1>
      </LogoAndNome>
      <NavMenus>
        <Ul>
          <Li>
            <Link to="/" selected={ location.pathname === '/' }>Eventos</Link>
          </Li>
          <Li>
            <Link to="/institucional" selected={ location.pathname === '/institucional' }>Quem somos</Link>
          </Li>
          <Li>
            <Link to="/contato" selected={ location.pathname === '/contato' }>Contato</Link>
          </Li>
          <Li>
            <LinkInscricao transparentheader={ transparentHeader } to="/criar-evento">Criar evento</LinkInscricao>
          </Li>
        </Ul>
      </NavMenus>
    </Header>
  )
}

export default HeaderContainer
