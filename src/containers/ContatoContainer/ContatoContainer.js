import React, { useState, useEffect, useCallback } from 'react'

import HeaderHome from '../../components/HeaderHome/HeaderHome'

import {
  Container,
  SectionHeader,
  SectionQuemSomos,
  ImgOndaDivisor,
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
  DivContatos,
  ContainerFormContact,
  InputContact,
  inputNome,
  inputAssunto,
  inputMensagem,
  InputMessage,
  ButtonSendContact,
  IconsContato,
} from './ContatoContainer.styles'
import ondaDivisor from '../../assets/onda.svg'
import logoBrancaComEscrita from '../../assets/logo-branca-com-escrita.png'
import fundoAmf from '../../assets/fundo-amf.png'

const InstitucionalContainer = () => {
  const [isMobile, setIsMobile] = useState(false)

  const [form, setForm] = useState({
    nome: '',
    assunto: '',
    mensagem: '',
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 600)
    }

    window.scrollTo(0, 0)
  }, [])

  const sendMail = useCallback(
    (event) => {
      event.preventDefault()
      window.open(`
        mailto:amf@faculdadeam.edu.br?subject=${ form.assunto }&body=Olá, meu nome é ${ form.nome } e tenho a seguinte duvida, ${ form.mensagem }
      `)
    },
    [form],
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

          <SectionQuemSomos>
            <ImgOndaDivisor
              id="onda-divisor"
              src={ ondaDivisor }
              width="100%"
              alt="Icon"
            />
            <h1>Contato</h1>

            <DivContatos>
              <div>
                <h3>Horário de atendimento</h3>
                <p>Segunda à sexta-feira:</p>
                <p>Manhã: das 08:30 às 12:00h</p>
                <p>Tarde: das 13:30 às 21:30h</p>
                <p>Sábados: das 08:30 às 12:30h</p>
              </div>

              <hr />

              <div>
                <h3>Telefones</h3>
                <div>
                  <IconsContato
                    icon="\f095"
                    target="_blank"
                  />
                  <p>(55) 3289-1139</p>
                </div>
                <IconsContato
                  icon="\f095"
                  target="_blank"
                />
                <p>(55) 99998-0696</p>
              </div>

              <hr />

              <div>
                <h3>Sociais e Email</h3>
                <div>
                  <IconsContato
                    icon="\f232"
                    target="_blank"
                  />
                  <p>(55) 99998-0696</p>
                </div>
                <IconsContato
                  icon="\f16d"
                  target="_blank"
                />
                <p>faculdadeam</p>
                <IconsContato
                  icon="\f09a"
                  target="_blank"
                />
                <p>Faculdade Antonio Meneghetti</p>
                <IconsContato
                  icon="\f0e0"
                  target="_blank"
                />
                <p>amf@faculdadeam.edu.br</p>
              </div>

              <hr />

              <div>
                <h3>Endereço</h3>
                <p>Estrada Recanto Maestro, nº 338</p>
                <p>Restinga Sêca-RS</p>
                <p>97200-000, Brasil</p>
              </div>
            </DivContatos>

            <h2>Entre em contato conosco</h2>
            <ContainerFormContact onSubmit={ sendMail }>
              <InputContact
                id="nome"
                type="text"
                placeholder="Seu nome"
                required
                style={ inputNome }
                value={ form.nome }
                onChange={ (e) => setForm({ ...form, nome: e.target.value }) }
              />
              <InputContact
                id="assunto"
                type="text"
                placeholder="Assunto"
                required
                style={ inputAssunto }
                value={ form.assunto }
                onChange={ (e) => setForm({ ...form, assunto: e.target.value }) }
              />
              <InputMessage
                id="mensagem"
                type="textarea"
                placeholder="Mensagem"
                required
                style={ inputMensagem }
                value={ form.mensagem }
                onChange={ (e) => setForm({ ...form, mensagem: e.target.value }) }
              />
              <ButtonSendContact>Enviar mensagem</ButtonSendContact>
            </ContainerFormContact>
          </SectionQuemSomos>

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

export default InstitucionalContainer
