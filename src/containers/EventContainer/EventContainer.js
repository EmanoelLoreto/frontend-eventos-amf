import React, { useState, useEffect } from 'react'
// import map from 'lodash/map'

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
  // CardText,
  // SpanDate,
  // CardStats,
  // Stat,
  // StatValue,
  // StatType,
  // StatBorder,
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
// import logoEvento from '../../assets/logo-evento.jpg'
import vestibular from '../../assets/vestibular.jpg'
import fundoAmf from '../../assets/fundo-amf.png'

const HomeContainer = () => {
  const [evento, setEvento] = useState({})
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 600)
    }
  }, [])

  useEffect(() => {
    setEvento({
      nome: 'Vestibular 2022',
      local: 'Antônio Meneghetti Faculdade',
      horario: '19:00',
      data: '20/07/2022',
      quantosDias: '10',
      imagemEvento: vestibular,
      palestrante: 'Eloy Teixeira',
    })
  }, [])

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
            <h1>{evento.nome}</h1>

            <ContainerEvento>
              <Card>
                <CardImage img={ evento.imagemEvento } />
              </Card>
              <CardAboutEvent>
                <SpanWithIcon icon="\f007">
                  Paslestrante: {evento.palestrante}
                </SpanWithIcon>
                <SpanWithIcon icon="\f073">
                  Data evento: {evento.data}
                </SpanWithIcon>
                <SpanWithIcon icon="\f124">
                  Local: {evento.local}
                </SpanWithIcon>
                <SpanWithIcon icon="\f017">
                  Horário: {evento.horario}
                </SpanWithIcon>
              </CardAboutEvent>
              <CardDescriptionEvent>
                <h2>{evento.nome}</h2>
                <p>
                  A AMF é a melhor opção para realizar a sua formação! Com uma
                  proposta única de formação, pautada pelo desenvolvimento
                  integral do ser humano, a AMF oferece os cursos de graduação
                  em Bacharelado em Ontopsicologia, Administração, Direito,
                  Sistemas de Informação, Ciências Contábeis e Licenciatura em
                  Pedagogia. O Vestibular AMF é agendado, com opções de data e
                  horário para realização de provas de acordo com a sua
                  preferência. As provas acontecem no prédio principal da AMF,
                  conforme o Edital do Processo Seletivo, e são flexíveis,
                  conforme a sua necessidade. Venha fazer o seu novo mundo em um
                  local com grandes possibilidades de desenvolvimento acadêmico
                  e profissional, estrutura completa, atendimento diferenciado e
                  professores com expertise teórico-prática. Vem para a AMF!
                  Acesse: <LinkPink href="https://www.vestibularamf2022.com/" target="_blank">https://www.vestibularamf2022.com/</LinkPink>
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
                  <LinkPink href="www.faculdadeam.edu.br" target="_blank">
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
