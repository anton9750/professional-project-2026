import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 32px;
  @media (max-width: 600px) {
    padding: 0 21px;
  }
`
export const Eyebrow = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  color: ${({ theme }) => theme.colors.green};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  &:before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #a2b39c;
  }
`
export const Section = styled.section<{ $muted?: boolean }>`
  padding: 105px 0;
  background: ${({ $muted, theme }) => ($muted ? theme.colors.soft : 'transparent')};
  @media (max-width: 700px) {
    padding: 74px 0;
  }
`
export const SectionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 30px;
  margin-bottom: 43px;
  @media (max-width: 700px) {
    display: block;
    margin-bottom: 30px;
  }
`
export const H2 = styled.h2`
  font-family: Manrope, sans-serif;
  font-size: clamp(34px, 4vw, 53px);
  line-height: 1.08;
  letter-spacing: -2.3px;
  margin: 15px 0 0;
  max-width: 650px;
`
export const Body = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 16px;
  line-height: 1.75;
  margin: 15px 0 0;
  max-width: 540px;
`
export const TextLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: ${({ theme }) => theme.colors.green};
  font-weight: 700;
  font-size: 14px;
  white-space: nowrap;
  transition:
    gap 180ms ease,
    color 180ms ease;
  &:hover {
    gap: 14px;
    color: ${({ theme }) => theme.colors.greenHover};
  }
`
export const PrimaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 18px;
  background: ${({ theme }) => theme.colors.green};
  color: white;
  padding: 16px 21px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 14px;
  transition:
    transform 180ms ease,
    background 180ms ease,
    box-shadow 180ms ease;
  &:hover {
    transform: translateY(-2px);
    background: ${({ theme }) => theme.colors.greenHover};
    box-shadow: 0 8px 20px rgba(40, 58, 52, 0.14);
  }
  &:active {
    transform: translateY(0);
  }
`
export const GhostLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  border: 1px solid #e1e4dc;
  border-radius: 999px;
  padding: 15px 19px;
  font-size: 14px;
  font-weight: 600;
  transition:
    border-color 180ms ease,
    background 180ms ease,
    transform 180ms ease;
  &:hover {
    border-color: ${({ theme }) => theme.colors.green};
    background: ${({ theme }) => theme.colors.white};
    transform: translateY(-1px);
  }
`
export const Tag = styled.span`
  display: inline-flex;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(40, 58, 52, 0.09);
  border-radius: 99px;
  padding: 7px 11px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1px;
  color: #52665a;
`
export const CtaBand = styled.section`
  background: ${({ theme }) => theme.colors.lime};
  padding: 64px 32px;
  @media (max-width: 600px) {
    padding: 45px 21px;
  }
`
export const CtaInner = styled.div`
  max-width: 1116px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  @media (max-width: 700px) {
    display: block;
  }
  h2 {
    font-family: Manrope, sans-serif;
    font-size: clamp(30px, 4vw, 43px);
    line-height: 1.1;
    letter-spacing: -1.7px;
    max-width: 600px;
    margin: 0;
  }
  p {
    color: #64736b;
    font-size: 15px;
    margin: 13px 0 0;
  }
  a {
    background: ${({ theme }) => theme.colors.ink};
    margin-top: 8px;
    flex-shrink: 0;
    @media (max-width: 700px) {
      margin-top: 25px;
    }
  }
`
