import React, { useState, useEffect, useCallback } from 'react'
import map from 'lodash/map'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import HeaderHome from '../../components/HeaderHome'

import {
  Container,
  SectionHeader,
  SectionEventos,
  ImgOndaDivisor,
  CardsEventos,
  Card,
  CardImage,
  CardText,
  SpanDate,
  CardStats,
  Stat,
  StatValue,
  StatType,
  StatBorder,
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
} from './HomeContainer.styles'
import videoHome from '../../assets/videoHome.mp4'
import ondaDivisor from '../../assets/onda.svg'
import logoBrancaComEscrita from '../../assets/logo-branca-com-escrita.png'
import imgDefaultEvento from '../../assets/img-default-evento.jpg'

const HomeContainer = () => {
  const [eventos, setEventos] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  const apiUrl = process.env.REACT_APP_API_URL

  const navigate = useNavigate()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 600)
    }

    axios
      .get(`${ apiUrl }/events/get`)
      .then((response) => {
        setEventos(response.data)
      })
  }, [])

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
            <video width="100%" height="100%" autoPlay muted loop>
              <source src={ videoHome } type="video/mp4" />
            </video>
            <HeaderHome />
          </SectionHeader>

          <SectionEventos>
            <ImgOndaDivisor
              id="onda-divisor"
              src={ ondaDivisor }
              width="100%"
              alt="Icon"
            />
            <h1>Eventos</h1>

            <CardsEventos>
              {map(eventos, (evento, index) => (
                <Card key={ index } onClick={ () => navigate(`/evento/${ evento._id }`, { state: { evento } }) }>
                  {imagemEvento(evento)}
                  <CardText>
                    <SpanDate>10 dias atrás</SpanDate>
                    <h2>{evento.nameEvent}</h2>
                    <p>{evento.place}</p>
                    <p>{evento.time.split(' ')[0]}</p>
                    <p>{evento.time.split(' ')[1]}</p>
                  </CardText>
                  <CardStats>
                    <Stat>
                      <StatValue>4<sup>m</sup></StatValue>
                      <StatType>leitura</StatType>
                    </Stat>
                    <StatBorder>
                      <StatValue>5123</StatValue>
                      <StatType>visualizações</StatType>
                    </StatBorder>
                    <Stat>
                      <StatValue>32</StatValue>
                      <StatType>comentários</StatType>
                    </Stat>
                  </CardStats>
                </Card>
              ))}
            </CardsEventos>
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
                  O <TextPink>EventosAMF</TextPink> foi fundado em 2022 por alunos da cadeira
                  Interface Homem-Maquina e desde então é usado pela instituição.
                  Com objetivo de divulgar eventos promovidos pela faculdade e assim
                  tendo a possibilidade de alcançar e informar mais pessoas.
                </TextAboutFooter>
                <TextAboutFooter>
                  Desde sua primeira edição o <TextPink>EventosAMF</TextPink> conta com o apoio da Antonio
                  Meneghetti Faculdade que disponibiliza recursos para isso acontecer.
                  Para saber mais sobre a faculdade, acesse{' '}
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
