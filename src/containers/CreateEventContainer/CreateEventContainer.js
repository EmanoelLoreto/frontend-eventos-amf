/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

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
  ContainerFormContact,
  InputContact,
  InputMessage,
  ButtonSendContact,
  inputTitulo,
  inputData,
  inputLocal,
  inputPalestrante,
  inputImagem,
  inputDescricao,
  buttonSend,
  DivImageInput,
} from './CreateEventContainer.styles'
import ondaDivisor from '../../assets/onda.svg'
import logoBrancaComEscrita from '../../assets/logo-branca-com-escrita.png'
import fundoAmf from '../../assets/fundo-amf.png'

const CreateEventContainer = () => {
  const [isMobile, setIsMobile] = useState(false)

  const [form, setForm] = useState({
    nameEvent: '',
    time: '',
    place: '',
    speaker: '',
    description: '',
  })

  const apiUrl = process.env.REACT_APP_API_URL

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 600)
    }

    window.scrollTo(0, 0)
  }, [])

  const createEvent = useCallback(
    (data) => {
      data.preventDefault()

      const formData = new FormData()
      formData.append('image', form.files)

      axios
        .post(`http://${ apiUrl }/events/create`, {
          ...form,
          nameEvent: form.nameEvent,
          place: form.place,
          time: form.time,
          description: form.description,
        }, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    [],
  )

  useEffect(() => {
    console.log(form)
  }, [form])

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
            <h1>Criar evento</h1>

            <ContainerFormContact onSubmit={ createEvent }>
              <InputContact
                id="nome"
                type="text"
                placeholder="Titulo evento"
                required
                style={ inputTitulo }
                value={ form.nameEvent }
                onChange={ (e) => setForm({ ...form, nameEvent: e.target.value }) }
              />
              <InputContact
                id="data"
                type="text"
                placeholder="Data e horário"
                required
                style={ inputData }
                value={ form.time }
                onChange={ (e) => setForm({ ...form, time: e.target.value }) }
              />
              <InputContact
                id="local"
                type="text"
                placeholder="Local"
                required
                style={ inputLocal }
                value={ form.place }
                onChange={ (e) => setForm({ ...form, place: e.target.value }) }
              />
              <InputContact
                id="palestrante"
                type="text"
                placeholder="Palestrante"
                required
                style={ inputPalestrante }
                value={ form.speaker }
                onChange={ (e) => setForm({ ...form, speaker: e.target.value }) }
              />
              <DivImageInput style={ inputImagem }>
                <label for="imagem">Selecione uma imagem</label>
                <InputContact
                  id="imagem"
                  name="imagem"
                  type="file"
                  placeholder="Imagem"
                  required
                  onChange={ (e) => setForm({ ...form, files: e.target.files[0] }) }
                />
              </DivImageInput>
              <InputMessage
                id="descricao"
                type="textarea"
                placeholder="Descrição"
                required
                style={ inputDescricao }
                value={ form.description }
                onChange={ (e) => setForm({ ...form, description: e.target.value }) }
              />
              <ButtonSendContact style={ buttonSend }>Criar evento</ButtonSendContact>
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

export default CreateEventContainer
