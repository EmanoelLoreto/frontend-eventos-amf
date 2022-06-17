import React, { useState, useEffect } from 'react'
import map from 'lodash/map'
import { useNavigate } from 'react-router-dom'

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
import logoEvento from '../../assets/logo-evento.jpg'
import vestibular from '../../assets/vestibular.jpg'

const HomeContainer = () => {
  const [eventos, setEventos] = useState([])
  const [isMobile, setIsMobile] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 600)
    }
  }, [])

  useEffect(() => {
    setEventos([
      {
        id: 1,
        nome: 'Viagem para ONU',
        local: 'Haia - Holanda',
        horario: '19:00',
        data: '11/06/2022',
        quantosDias: '20',
        imagemEvento: logoEvento,
      },
      {
        id: 1,
        nome: 'Viagem para ONU',
        local: 'Haia - Holanda',
        horario: '19:00',
        data: '11/06/2022',
        quantosDias: '20',
        imagemEvento: logoEvento,
      },
      {
        id: 1,
        nome: 'Vestibular 2022',
        local: 'Antônio Meneghetti Faculdade',
        horario: '19:00',
        data: '20/07/2022',
        quantosDias: '10',
        imagemEvento: vestibular,
      },
      {
        id: 1,
        nome: 'Viagem para ONU',
        local: 'Haia - Holanda',
        horario: '19:00',
        data: '11/06/2022',
        quantosDias: '20',
        imagemEvento: logoEvento,
      },
      {
        id: 1,
        nome: 'Vestibular 2022',
        local: 'Antônio Meneghetti Faculdade',
        horario: '19:00',
        data: '20/07/2022',
        quantosDias: '10',
        imagemEvento: vestibular,
      },
      {
        id: 1,
        nome: 'Vestibular 2022',
        local: 'Antônio Meneghetti Faculdade',
        horario: '19:00',
        data: '20/07/2022',
        quantosDias: '10',
        imagemEvento: vestibular,
      },
    ])
  }, [])

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
                <Card key={ index } onClick={ () => navigate(`/evento/${ evento.id }`) }>
                  <CardImage img={ evento.imagemEvento } />
                  <CardText>
                    <SpanDate>{evento.quantosDias} dias atrás</SpanDate>
                    <h2>{evento.nome}</h2>
                    <p>{evento.local}</p>
                    <p>{evento.horario}</p>
                    <p>{evento.data}</p>
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
