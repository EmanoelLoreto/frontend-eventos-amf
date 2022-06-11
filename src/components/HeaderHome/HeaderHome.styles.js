/* eslint-disable global-require */
import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  // padding: ${ ({ transparentHeader }) => (transparentHeader ? '20px' : '5px') };
  height: ${ ({ transparentHeader }) => (transparentHeader ? '120px' : '80px') };
  background: ${
  ({ transparentHeader }) => (transparentHeader ? 'rgb(15 15 15 / 0%);' : 'linear-gradient(rgb(4, 142, 236), rgb(2, 163, 245), rgb(0, 186, 255));')
};
  position: fixed;
  width: -webkit-fill-available;
  z-index: 2;
  top: 0;
  transition: all 0.5s ease-in-out 0s;
`

export const LogoAndNome = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 1.3rem;
    font-weight: bold;
    color: #fff;
    margin-left: 20px;
  }
`

export const NavMenus = styled.nav`
  z-index: 3;
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
`

export const Li = styled.li`
  text-decoration: none;
  outline: none;
  display: inline-block;
  margin: 0px 15px;
`

export const Link = styled.a`
  font-family: "Raleway", sans-serif;
  text-decoration: none;
  outline: none;
  padding: 8px;
  font-weight: 600;
  font-size: 1rem;
  color: ${ ({ selected }) => (selected ? '#fff' : 'rgba(202, 206, 221, 0.8)') };
  border-bottom: ${ ({ selected }) => (selected ? '3px solid #F3558B' : '') };
  transition: all 0.3s ease-in-out 0s;

  :hover {
    color: #fff;
  }
`

export const LinkInscricao = styled.a`
  color: #fff;
  background: ${ ({ transparentHeader }) => (transparentHeader ? '#F3558B' : 'transparent') };;
  padding: 7px 22px;
  border-radius: 50px;
  border: 3px solid #F3558B;
  transition: all ease-in-out 0.3s;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  outline: none;
  z-index: 2;

  :hover {
    background: ${ ({ transparentHeader }) => (transparentHeader ? 'transparent' : '#F3558B') };
  }
`
