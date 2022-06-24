import React, {
  useContext, useState, useEffect, useCallback
} from 'react'
import map from 'lodash/map'
import { AuthContext } from '../../screens/LoginScreen/LoginScreen'
import HeaderHome from '../../components/HeaderHome'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import {
  Container,
  SectionHeader,
  SectionEventoAdmin,
  SectionTitleButton,
  ButtonSair,
  ButtonEditar,
  ButtonExcluir,
  ImgOndaDivisor,
  ContainerEventoAdmin,
  SectionFooter,
  ContainerFooterAboutAndContact,
  ContainerFooterAbout,
  TextAboutFooter,
  LinkPink,
  ContainerFooterContact,
  TitleFooterContact,
  AndressContact,
  IconsContacts,
  IconAwesome,
  HrVerde,
  TextPink,
} from './EventAdminContainer.styles'
import ondaDivisor from '../../assets/onda.svg'
import logoBrancaComEscrita from '../../assets/logo-branca-com-escrita.png'
import fundoAmf from '../../assets/fundo-amf.png'
import imgDefaultEvento from '../../assets/img-default-evento.jpg'

const HomeContainer = () => {
  const [eventos, setEventos] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  const apiUrl = process.env.REACT_APP_API_URL

  const navigate = useNavigate()
  const handleEdit = () => {
    navigate('/editar-evento')
  }

  const { logout } = useContext(AuthContext)
  const handleLogout = () => {
    logout()
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 600)
    }

    window.scrollTo(0, 0)

    axios
      .get(`${ apiUrl }/events/get`)
      .then((response) => {
        setEventos(response.data)
      })
  }, [])

  const imagemEvento = useCallback(
    (evento) => {
      let cardImage = <img src={ imgDefaultEvento } alt="img-evento" width="200px" height="100px" />

      axios
        .get(`${ apiUrl }${ evento.arrImage[0] }`)
        .then(() => {
          cardImage = <img src={ `https://${ evento.arrImage[0] }` } alt="img-evento" width="100px" height="100px" />
        })

      return cardImage
    },
    [imgDefaultEvento],
  )

  return (
    <Container>
      {isMobile ? (
        <h1>Sem suporte para celulares</h1>
      ) : (
        <>
          <SectionHeader>
            <img id="fundo-amf" src={ fundoAmf } alt="fundo amf" />
            <HeaderHome />
          </SectionHeader>

          <SectionEventoAdmin>
            <ImgOndaDivisor
              id="onda-divisor"
              src={ ondaDivisor }
              width="100%"
              alt="Icon"
            />
            <SectionTitleButton>
              <h1>Lista de Eventos Cadastrados</h1> <ButtonSair onClick={ handleLogout }>Sair</ButtonSair>
            </SectionTitleButton>

            <ContainerEventoAdmin>
              <table className="fixed_headers">
                <thead>
                  <tr>
                    <th>Titulo Evento</th>
                    <th>Imagem do Evento</th>
                    <th>Data</th>
                    <th>Horário</th>
                    <th>Local</th>
                    <th>Palestrante</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {map(eventos, evento => (
                    <tr>
                      <td>{ evento.nameEvent }</td>
                      <td>
                        {imagemEvento(evento)}
                      </td>
                      <td>{ evento.time.split(' ')[0] }</td>
                      <td>{ evento.time.split(' ')[1] }</td>
                      <td>{ evento.place }</td>
                      <td>{ evento.speaker }</td>
                      <td>
                        <ButtonEditar onClick={ handleEdit }>Editar</ButtonEditar>
                        <ButtonExcluir>Excluir</ButtonExcluir>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ContainerEventoAdmin>
          </SectionEventoAdmin>

          <SectionFooter>
            <ContainerFooterAboutAndContact>
              <ContainerFooterAbout>
                <img
                  id="logo-coderace"
                  src={ logoBrancaComEscrita }
                  width="190px"
                  height="80px"
                  alt="Icon"
                />
                <TextAboutFooter>
                  O <TextPink>EventosAMF</TextPink> foi fundado em 2022 por
                  alunos da cadeira Interface Homem-Maquina e desde então é
                  usado pela instituição. Com objetivo de divulgar eventos
                  promovidos pela faculdade e assim tendo a possibilidade de
                  alcançar e informar mais pessoas.
                </TextAboutFooter>
                <TextAboutFooter>
                  Desde sua primeira edição o <TextPink>EventosAMF</TextPink>{' '}
                  conta com o apoio da Antonio Meneghetti Faculdade que
                  disponibiliza recursos para isso acontecer. Para saber mais
                  sobre a faculdade, acesse{' '}
                  <LinkPink href="https://www.faculdadeam.edu.br" target="_blank">
                    www.faculdadeam.edu.br
                  </LinkPink>
                  .
                </TextAboutFooter>
              </ContainerFooterAbout>
              <ContainerFooterContact>
                <TitleFooterContact>Contato</TitleFooterContact>

                <HrVerde />

                <AndressContact>Estrada Recanto Maestro, nº 338</AndressContact>
                <AndressContact>Restinga Sêca-RS</AndressContact>
                <AndressContact>97200-000, Brasil</AndressContact>
                <AndressContact>(55) 3289-1141 | (55) 99998-0696</AndressContact>
                <AndressContact>
                  <b>Email:</b> amf@faculdadeam.edu.br
                </AndressContact>

                <IconsContacts>
                  <IconAwesome
                    icon="\f09a"
                    href="https://www.facebook.com/faculdadeam"
                    target="_blank"
                  />
                  <IconAwesome
                    icon="\f16d"
                    href="https://www.instagram.com/faculdadeam/"
                    target="_blank"
                  />
                  <IconAwesome
                    icon="\f0e0"
                    href="mailto:amf@faculdadeam.edu.br?subject=Duvida"
                    target="_blank"
                  />
                </IconsContacts>
              </ContainerFooterContact>
            </ContainerFooterAboutAndContact>
          </SectionFooter>
        </>
      )}
    </Container>
  )
}

export default HomeContainer
