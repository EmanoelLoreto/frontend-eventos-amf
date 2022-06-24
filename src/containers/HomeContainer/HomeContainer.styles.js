/* eslint-disable global-require */
import styled from 'styled-components'

export const Container = styled.div`
  overflow-x: hidden;
`

export const SectionHeader = styled.section``

export const SectionEventos = styled.section`
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
`

export const ImgOndaDivisor = styled.img`
  margin-top: -8px;
  transition: all 0.3s ease-in-out 0s;
`

export const CardsEventos = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15px 0px;
  margin: auto;
  width: 90vw;
  justify-content: space-evenly;
`

export const Card = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";

  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
  font-family: roboto;
  text-align: center;

  transition: 0.5s ease;
  cursor: pointer;
  margin: 30px;

  :hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
  }
`

export const CardImage = styled.div`
  grid-area: image;
  background: url(${ ({ img }) => img });
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  background-position-x: center;
`

export const CardText = styled.div`
  grid-area: text;
  margin: 25px;

  p {
    color: grey;
    font-size: 16px;
    font-weight: 300;
    margin: 5px;
  }

  h2 {
    margin: 0px 0px 5px 0px;
    font-size: 28px;
  }
`

export const SpanDate = styled.span`
  color: #F3558B;
  font-size:13px;
`

export const CardStats = styled.div`
  grid-area: stats; 
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: #F3558B;
`

export const Stat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: white;
  padding:10px;
`

export const StatValue = styled.div`
  font-size: 22px;
  font-weight: 500;

  sup {
    font-size:12px;
  }
`

export const StatType = styled.div`
  font-size: 11px;
  font-weight: 300;
  text-transform: uppercase;
`

export const StatBorder = styled(Stat)`
  border-left: 1px solid rgb(172, 26, 87);
  border-right: 1px solid rgb(172, 26, 87);
`

export const HrVerde = styled.hr`
  width: 10vw;
  border: none;
  width: 10vw;
  border-bottom: 4px solid rgb(172, 26, 87);
`

export const SectionContato = styled.section`
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
