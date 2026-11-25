import styled from 'styled-components'
import { Container } from '../components/Sections'

export const PageHero = styled.section`
  padding: 92px 0 76px;
  background: ${({ theme }) => theme.colors.soft};
  @media (max-width: 650px) {
    padding: 65px 0 55px;
  }
  h1 {
    font:
      800 clamp(48px, 7vw, 82px)/1.02 Manrope,
      sans-serif;
    letter-spacing: -4.7px;
    max-width: 850px;
    margin: 20px 0 18px;
    @media (max-width: 600px) {
      font-size: 49px;
      letter-spacing: -2.7px;
    }
  }
  p {
    max-width: 610px;
    font-size: 17px;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.muted};
    margin: 0 0 26px;
  }
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  @media (max-width: 750px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
export const Card = styled.article`
  padding: 25px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 2px rgba(40, 58, 52, 0.03);
  transition:
    transform 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease;
  &:hover {
    transform: translateY(-4px);
    border-color: #dce3d8;
    box-shadow: 0 14px 28px rgba(40, 58, 52, 0.08);
  }
  .icon {
    width: 44px;
    height: 44px;
    border-radius: 14px;
    background: #e8ede6;
    color: #567461;
    display: grid;
    place-items: center;
    font-size: 19px;
  }
  h3 {
    font: 700 18px Manrope;
    margin: 20px 0 8px;
  }
  p {
    font-size: 14px;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.muted};
    margin: 0;
  }
`
export const Split = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 55px;
  align-items: center;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`
export const ImagePanel = styled.div`
  min-height: 390px;
  border-radius: 20px;
  background:
    linear-gradient(0deg, #283a345c, #283a3405),
    url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85')
      center/cover;
  display: flex;
  align-items: flex-end;
  padding: 25px;
  color: white;
  font: 700 17px Manrope;
  @media (max-width: 750px) {
    min-height: 280px;
  }
`
export const List = styled.ul`
  padding: 0;
  margin: 22px 0 0;
  list-style: none;
  display: grid;
  gap: 14px;
  color: #64736b;
  font-size: 14px;
  li {
    display: flex;
    gap: 10px;
    align-items: flex-start;
  }
  b {
    color: #567461;
  }
`
export const ContactGrid = styled(Container)`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 65px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`
export const Form = styled.form`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 18px;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    padding: 21px;
  }
  label {
    display: grid;
    gap: 7px;
    font-size: 12px;
    font-weight: 700;
    color: #47564e;
  }
  label.wide {
    grid-column: 1/-1;
  }
  input,
  textarea,
  select {
    font:
      400 14px 'DM Sans',
      sans-serif;
    padding: 13px;
    border: 1px solid #e1e4dc;
    border-radius: 9px;
    background: #fffefa;
    color: #283a34;
    outline: none;
  }
  input:focus,
  textarea:focus,
  select:focus {
    border-color: #567461;
    box-shadow: 0 0 0 3px #56746118;
  }
  input,
  textarea,
  select {
    transition:
      border-color 180ms ease,
      box-shadow 180ms ease;
  }
  textarea {
    min-height: 125px;
    resize: vertical;
  }
  button {
    grid-column: 1/-1;
    border: 0;
    cursor: pointer;
    justify-content: center;
    margin-top: 3px;
  }
`
export const Info = styled.div`
  display: grid;
  gap: 18px;
  margin-top: 34px;
  .row {
    display: flex;
    gap: 13px;
    align-items: center;
  }
  .dot {
    width: 40px;
    height: 40px;
    border-radius: 13px;
    background: #e8ede6;
    display: grid;
    place-items: center;
    color: #567461;
  }
  .row small {
    display: block;
    color: #78857e;
    margin-top: 3px;
    font-size: 12px;
  }
`
export const Process = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  @media (max-width: 750px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  article {
    padding: 22px 0;
    border-top: 1px solid #e1e4dc;
    transition: border-color 180ms ease;
    &:hover {
      border-color: #a2b39c;
    }
  }
  .n {
    color: #82947d;
    font-weight: 700;
    font-size: 12px;
  }
  h3 {
    font: 700 18px Manrope;
    margin: 12px 0 8px;
  }
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.muted};
    line-height: 1.7;
    margin: 0;
  }
`
