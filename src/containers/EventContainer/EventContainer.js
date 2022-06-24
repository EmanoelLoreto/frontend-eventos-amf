import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import HeaderHome from '../../components/HeaderHome/HeaderHome'

import {
  Container,
  SectionHeader,
  SectionEventos,
  ImgOndaDivisor,
  ContainerEvento,
  Card,
  CardImage,
  CardAboutEvent,
  CardDescriptionEvent,
  SpanWithIcon,
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
} from './EventContainer.styles'
import ondaDivisor from '../../assets/onda.svg'
import logoBrancaComEscrita from '../../assets/logo-branca-com-escrita.png'
import fundoAmf from '../../assets/fundo-amf.png'
import imgDefaultEvento from '../../assets/img-default-evento.jpg'
import { useLocation, useNavigate } from 'react-router-dom'

const HomeContainer = () => {
  const [isMobile, setIsMobile] = useState(false)
  const apiUrl = process.env.REACT_APP_API_URL

  const navigate = useNavigate()
  const { state: params } = useLocation()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 600)
    }

    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!params.evento) {
      navigate('/')
    }
  }, [params])

  const imagemEvento = useCallback(
    (evento) => {
      let cardImage = <CardImage img={ imgDefaultEvento } />

      axios
        .get(`${ apiUrl }${ evento.arrImage[0] }`)
        .then(() => {
          cardImage = <CardImage img={ `https://${ evento.arrImage[0] }` } />
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

          <SectionEventos>
            <ImgOndaDivisor
              id="onda-divisor"
              src={ ondaDivisor }
              width="100%"
              alt="Icon"
            />
            <h1>{params.evento.nameEvent}</h1>

            <ContainerEvento>
              <Card>
                {imagemEvento(params.evento)}
              </Card>
              <CardAboutEvent>
                <SpanWithIcon icon="\f007">
                  Paslestrante: {params.evento.speaker}
                </SpanWithIcon>
                <SpanWithIcon icon="\f073">
                  Data evento: {params.evento.time.split(' ')[0]}
                </SpanWithIcon>
                <SpanWithIcon icon="\f124">
                  Local: {params.evento.place }
                </SpanWithIcon>
                <SpanWithIcon icon="\f017">
                  Horário: {params.evento.time.split(' ')[1]}
                </SpanWithIcon>
              </CardAboutEvent>
              <CardDescriptionEvent>
                <h2>{params.evento.nameEvent}</h2>
                <p>
                  {params.evento.description}
                </p>
              </CardDescriptionEvent>
            </ContainerEvento>
          </SectionEventos>

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
