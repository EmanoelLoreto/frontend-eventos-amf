/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import map from 'lodash/map'
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
  inputHorario,
  inputLocal,
  inputPalestrante,
  inputImagem,
  inputDescricao,
  buttonSend,
  DivImageInput,
} from './EditEventContainer.styles'
import ondaDivisor from '../../assets/onda.svg'
import logoBrancaComEscrita from '../../assets/logo-branca-com-escrita.png'
import fundoAmf from '../../assets/fundo-amf.png'

const EditEventContainer = () => {
  const [isMobile, setIsMobile] = useState(false)

  const navigate = useNavigate()
  const handleCancelar = () => {
    navigate('/evento-admin')
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
            <h1>Editar evento Vestibular 2022</h1>

            <ContainerFormContact>
              <InputContact
                id="nome"
                type="text"
                placeholder="Titulo evento"
                required
                value="Vestibular 2022"
                style={ inputTitulo }
              />
              <InputContact
                id="data"
                type="text"
                placeholder="Data"
                value="20/07/2022"
                required
                style={ inputData }
              />
              <InputContact
                id="horario"
                type="time"
                placeholder="Horário"
                required
                value="19:00"
                style={ inputHorario }
              />
              <InputContact
                id="local"
                type="text"
                placeholder="Local"
                required
                value="Antônio Meneghetti Faculdade"
                style={ inputLocal }
              />
              <InputContact
                id="palestrante"
                type="text"
                placeholder="Palestrante"
                required
                value="Eloy"
                style={ inputPalestrante }
              />
              <DivImageInput style={ inputImagem }>
                <label for="imagem">Selecione uma imagem para substituir</label>
                <InputContact
                  id="imagem"
                  name="imagem"
                  type="file"
                  placeholder="Imagem"
                  required
                />
              </DivImageInput>
              <InputMessage
                id="descricao"
                type="textarea"
                placeholder="Descrição"
                value="A AMF é a melhor opção para realizar a sua formação! Com uma proposta única de formação, pautada pelo desenvolvimento integral do ser humano, a AMF oferece os cursos de graduação em Bacharelado em Ontopsicologia, Administração, Direito, Sistemas de Informação, Ciências Contábeis e Licenciatura em Pedagogia. O Vestibular AMF é agendado, com opções de data e horário para realização de provas de acordo com a sua preferência. As provas acontecem no prédio principal da AMF, conforme o Edital do Processo Seletivo, e são flexíveis, conforme a sua necessidade. Venha fazer o seu novo mundo em um local com grandes possibilidades de desenvolvimento acadêmico e profissional, estrutura completa, atendimento diferenciado e professores com expertise teórico-prática. Vem para a AMF! Acesse: https://www.vestibularamf2022.com/"
                required
                style={ inputDescricao }
              />
              <ButtonSendContact style={ buttonSend }>Editar evento</ButtonSendContact>
              <button id="btn-cancelar" type="button" onClick={ handleCancelar }>Cancelar</button>
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

export default EditEventContainer
