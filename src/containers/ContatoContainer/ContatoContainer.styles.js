/* eslint-disable global-require */
import styled from 'styled-components'

export const Container = styled.div`
  overflow-x: hidden;
`

export const SectionHeader = styled.section`
  img {
    width: 100%;
  }
`

export const ImgOndaDivisor = styled.img`
  margin-top: -8px;
  transition: all 0.3s ease-in-out 0s;
`

export const SectionQuemSomos = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    line-height: 1.27273;
    font-weight: 700;
    color: rgb(0, 186, 255);
    font-size: 45px;
    margin: 0;
    transition: 0.5s ease;
    
    :hover {
      color: #F3558B;
    }
  }

  h3 {
    line-height: 1.27273;
    font-weight: 700;
    color: #F3558B;
    margin: 0;
    transition: 0.5s ease;

    :hover {
      color: rgb(0, 186, 255);
    }
  }

    span {
      font-family: "Raleway", sans-serif;
      font-size: 1rem;
      line-height: 24px;
      font-size: 1.2rem;
      text-align: justify;
      margin: 10px 0px;
    }
`

export const DivContatos = styled.div`
  display: flex;
  flex-direction: row;
  margin: 80px 0px;

  hr {
    margin: 0px 5vw;
  }
`

export const HrVerde = styled.hr`
  width: 10vw;
  border: none;
  width: 10vw;
  border-bottom: 4px solid rgb(172, 26, 87);
`

export const SectionFooter = styled.section`
  background: #000;
  padding: 60px 120px 60px 120px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: -webkit-center;
  flex-direction: column;
`

export const ContainerFooterAboutAndContact = styled.div`
  display: flex;
`

export const ContainerFooterAbout = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextAboutFooter = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  line-height: 24px;
  font-size: 1.2rem;
  text-align: justify;
  color: #fff;
  margin-bottom: 0px;
`

export const TextPink = styled.span`
  font-family: "Raleway", sans-serif;
  font-size: 1rem;
  line-height: 24px;
  font-size: 1.2rem;
  text-align: justify;
  margin-bottom: 0px;
  color: rgb(253 70 146);;
`

export const ContainerFooterContact = styled(ContainerFooterAbout)`
  padding: 0px 70px;

  & > :nth-child(3) {
    margin-top: 20px;
  }
`

export const TitleFooterContact = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin: 0;
`

export const AndressContact = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #eee;
  font-size: 0.9rem;
  text-align: left;
  padding: 0;
  margin: 0 0 5px 0;
  white-space: nowrap;
`

export const IconsContacts = styled.div`
  display: flex;
  flex-direction: row;
`

export const IconAwesome = styled.a`
  font-size: 18px;
  background: #0f0f0f;
  color: #eee;
  margin-right: 4px;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin-top: 10px;
  margin-right: 15px;

  :hover {
    :before {
      color: #54a3ff;
    }  
  }

  :before {
    font-family: FontAwesome;
    content: "${ ({ icon }) => icon }";
    transform: scale(1, 1);
    color: #fff;
    background: #0f0f0f;
    margin-top: 5px;
    margin-left: -7px;
    position: absolute;
    transition: all 0.3s ease-in-out 0s;
  }
`

export const IconsContato = styled.a`
  font-size: 18px;
  color: #54a3ff;
  width: 36px;
  height: 36px;
  position: absolute;

  :hover {
    :before {
      color: rgb(253 70 146);
    }  
  }

  :before {
    font-family: FontAwesome;
    content: "${ ({ icon }) => icon }";
    transform: scale(1, 1);
    color: #54a3ff;
    margin-left: -25px;
    position: absolute;
    transition: all 0.3s ease-in-out 0s;
  }
`

export const LinkPink = styled.a`
  font-family: "Raleway", sans-serif;
  color: red;
  font-weight: 400;
  text-decoration: none;
  color: rgb(253 70 146);
  font-size: 1rem;
  line-height: 24px;
  margin-bottom: 0;
  text-align: justify;
`

export const ContainerFormContact = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 60vw;
  margin: 10px 0 2vw;
`

export const InputContact = styled.input`
  font-family: "Open Sans", sans-serif;
  flex: 1;
  margin: 10px;
  padding: 10px 14px;
  box-shadow: none;
  border-radius: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  :focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgb(0 123 255 / 25%);
  }
`

export const InputMessage = styled.textarea`
  font-family: "Open Sans", sans-serif;
  flex: 1;
  margin: 10px;
  padding: 10px 14px;
  box-shadow: none;
  border-radius: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  resize: none;
  width: auto;

  :focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.1rem rgb(0 123 255 / 25%);
  }
`

export const inputNome = {
  gridArea: '1 / 1 / 2 / 3',
}

export const inputAssunto = {
  gridArea: '2 / 1 / 3 / 3',
}

export const inputMensagem = {
  gridArea: '3 / 1 / 5 / 3',
}

export const ButtonSendContact = styled.button`
  grid-area: 5 / 1 / 6 / 3;
  background: #F3558B;
  padding: 10px 40px;
  color: #fff;
  cursor: pointer;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  border: 1px solid transparent;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 50px;
  justify-self: center;
  transition: background .15s ease-in-out, box-shadow .15s ease-in-out;
  height: 3.5vw;
  margin-top: 5px;

  :hover {
    background: #54a3ff;
    box-shadow: 0 0 0 0.1rem rgb(0 123 255 / 25%);
  }
`
