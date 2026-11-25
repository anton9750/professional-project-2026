import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { useMediaQuery } from '../hooks/useMediaQuery'

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(247, 246, 242, 0.92);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
`
const enterPage = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
    filter: blur(3px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
`
const PageTransition = styled.main`
  animation: ${enterPage} 420ms cubic-bezier(0.2, 0.7, 0.2, 1) both;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`
const Bar = styled.div`
  max-width: 1240px;
  height: 82px;
  margin: auto;
  padding: 0 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 800px) {
    padding: 0 22px;
    height: 72px;
  }
`
const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 11px;
  font-family: Manrope, sans-serif;
  font-weight: 800;
  font-size: 17px;
  letter-spacing: -0.7px;
  span {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    background: ${({ theme }) => theme.colors.green};
    color: white;
    border-radius: 11px;
    font-size: 19px;
  }
`
const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 34px;
  a:not(:last-child) {
    font-size: 14px;
    color: #65746d;
    transition: color 0.2s;
    &:hover,
    &.active {
      color: ${({ theme }) => theme.colors.green};
    }
  }
  @media (max-width: 800px) {
    display: ${(p) => (p.$open ? 'flex' : 'none')};
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.paper};
    padding: 22px;
    align-items: stretch;
    gap: 0;
    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
    a {
      padding: 13px 2px !important;
    }
  }
`
const ButtonLink = styled(Link)`
  background: ${({ theme }) => theme.colors.green};
  color: white !important;
  border-radius: 999px;
  padding: 13px 19px;
  font-size: 13px !important;
  font-weight: 700;
  transition:
    transform 0.2s,
    background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.greenHover};
    transform: translateY(-1px);
  }
  @media (max-width: 800px) {
    text-align: center;
    margin-top: 10px;
  }
`
const MenuButton = styled.button`
  display: none;
  border: 0;
  background: transparent;
  font-size: 24px;
  padding: 8px;
  @media (max-width: 800px) {
    display: block;
  }
`
const FooterWrap = styled.footer`
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.paper};
  padding: 65px 32px 24px;
`
const FooterGrid = styled.div`
  max-width: 1180px;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 60px;
  padding-bottom: 56px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    gap: 35px;
  }
  @media (max-width: 460px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`
const FootTitle = styled.h3`
  font-family: Manrope, sans-serif;
  font-size: 21px;
  letter-spacing: -0.7px;
  margin: 0 0 15px;
`
const FootCopy = styled.p`
  font-size: 14px;
  line-height: 1.75;
  color: #b8c1b9;
  max-width: 330px;
  margin: 0;
`
const FootLinks = styled.div`
  display: grid;
  gap: 12px;
  font-size: 14px;
  color: #cbd2ca;
  a:hover {
    color: ${({ theme }) => theme.colors.lime};
  }
`
const FootBottom = styled.div`
  max-width: 1180px;
  margin: auto;
  padding-top: 20px;
  border-top: 1px solid #49554d;
  display: flex;
  justify-content: space-between;
  color: #aab3aa;
  font-size: 12px;
  @media (max-width: 560px) {
    gap: 14px;
    flex-direction: column;
  }
`

export function SiteLayout() {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 800px)')
  const location = useLocation()
  const close = () => setOpen(false)
  return (
    <>
      <Header>
        <Bar>
          <Brand to="/" onClick={close}>
            <span>j.</span> jensens hjemmesider
          </Brand>
          {(!isMobile || open) && (
            <Nav $open={open} aria-label="Hovedmenu">
              <NavLink to="/ydelser" onClick={close}>
                Det får du
              </NavLink>
              <NavLink to="/om-os" onClick={close}>
                Sådan gør vi
              </NavLink>
              <NavLink to="/kontakt" onClick={close}>
                Kontakt
              </NavLink>
              <ButtonLink to="/kontakt" onClick={close}>
                Få et gratis udkast <span>↗</span>
              </ButtonLink>
            </Nav>
          )}
          <MenuButton
            aria-label={open ? 'Luk menu' : 'Åbn menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '×' : '☰'}
          </MenuButton>
        </Bar>
      </Header>
      <PageTransition key={location.pathname}>
        <Outlet />
      </PageTransition>
      <FooterWrap>
        <FooterGrid>
          <div>
            <Brand to="/" style={{ color: 'white', marginBottom: 18 }}>
              <span>j.</span> jensens hjemmesider
            </Brand>
            <FootCopy>
              Gode hjemmesider til mennesker med noget på hjerte. Personligt design, ærlig
              rådgivning og en tryg proces fra start til slut.
            </FootCopy>
          </div>
          <div>
            <FootTitle>Udforsk</FootTitle>
            <FootLinks>
              <Link to="/ydelser">Det får du</Link>
              <Link to="/om-os">Sådan gør vi</Link>
              <Link to="/kontakt">Kontakt</Link>
            </FootLinks>
          </div>
          <div>
            <FootTitle>Skal vi snakke?</FootTitle>
            <FootLinks>
              <a href="mailto:antonjensenv2@hotmail.com">antonjensenv2@hotmail.com</a>
              <Link to="/kontakt">Få et gratis udkast ↗</Link>
              <span>Vi svarer inden for 1 hverdag</span>
            </FootLinks>
          </div>
        </FooterGrid>
        <FootBottom>
          <span>© {new Date().getFullYear()} Jensens Hjemmesider</span>
          <span>Skabt med omtanke i Danmark 🇩🇰</span>
        </FootBottom>
      </FooterWrap>
    </>
  )
}
