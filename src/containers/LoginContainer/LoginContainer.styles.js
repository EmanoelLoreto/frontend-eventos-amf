/* eslint-disable global-require */
import styled from 'styled-components'

export const Container = styled.div`
  overflow-x: hidden;
`

export const SubContainer = styled.div`
  text-align: center;
  height: 50vh;
`

export const SectionLogin = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  display: grid;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  h1 {
    line-height: 1.27273;
    font-weight: 700;
    color: #F3558B;
    font-size: 45px;
    margin: 0;
    transition: 0.5s ease;

    :hover {
      color: rgb(0, 186, 255);
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

  div {
    display: flex;
    flex-direction: column;
    margin: 100px;

    span {
      font-family: "Raleway", sans-serif;
      font-size: 1rem;
      line-height: 24px;
      font-size: 1.2rem;
      text-align: justify;
      margin: 10px 0px;
    }
  }

  #img-logo-escrita {
    margin: auto;
    display: block;
    max-width: 40%;
  }
`

export const ContainerFormLogin = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 60vw;
  margin: 10px 0 2vw;
`

export const InputLogin = styled.input`
  font-family: "Open Sans", sans-serif;
  flex: 1;
  margin: 10px;
  padding: 10px 14px;
  box-shadow: none;
  border-radius: px;
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

export const inputUser = {
  gridArea: '6 / 2 / 4 / 3',
}

export const inputSenha = {
  gridArea: '8 / 2 / 6 / 3',
}

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
export const ButtonLogin = styled.button`
    grid-area: 10 / 2 / 8 / 3;
    background: #0181D4;
    padding: 22px 42px;
    color: #fff;
    cursor: pointer;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    border: 1px solid transparent;
    font-size: 1rem;
    line-height: 0.1rem;
    border-radius: 18px;
    justify-self: right;
    margin-top: 5px;

  :hover {
    background: #54a3ff;
    box-shadow: 0 0 0 0.1rem rgb(0 123 255 / 25%);
  }
`

export const ButtonVoltar = styled.button`
    grid-area: 10 / 2 / 8 / 3;
    background: #727272;
    padding: 22px 42px;
    color: #fff;
    cursor: pointer;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    border: 1px solid transparent;
    font-size: 1rem;
    line-height: 0.1rem;
    border-radius: 18px;
    justify-self: left;
    margin-top: 5px;

  :hover {
    background: #54a3ff;
    box-shadow: 0 0 0 0.1rem rgb(0 123 255 / 25%);
  }
`
