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

export const LinkPink = styled.a`
  font-family: "Raleway", sans-serif;
  color: red;
  font-weight: 400;
  text-decoration: none;
  color: rgb(253 70 146);;
  font-size: 1rem;
  line-height: 24px;
  margin-bottom: 0;
  text-align: justify;
`
