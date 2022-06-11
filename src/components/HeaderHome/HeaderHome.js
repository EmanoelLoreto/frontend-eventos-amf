import React, { useEffect, useState } from 'react'

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
  const [transparentHeader, setTransparentHeader] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setTransparentHeader(window.pageYOffset < 100)
      )
    }
  }, [])

  return (
    <Header transparentHeader={ transparentHeader }>
      <LogoAndNome>
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
            <Link href="/" selected>Eventos</Link>
          </Li>
          <Li>
            <Link href="/">Quem somos</Link>
          </Li>
          <Li>
            <Link href="/">Contato</Link>
          </Li>
          <Li>
            <LinkInscricao transparentHeader={ transparentHeader } href="/">Criar evento</LinkInscricao>
          </Li>
        </Ul>
      </NavMenus>
    </Header>
  )
}

export default HeaderContainer
