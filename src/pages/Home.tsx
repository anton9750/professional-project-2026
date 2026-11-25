import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import {
  Container,
  Eyebrow,
  Section,
  SectionHead,
  H2,
  Body,
  PrimaryLink,
  GhostLink,
  TextLink,
  CtaBand,
  CtaInner,
} from '../components/Sections'

const Hero = styled.section`
  padding: 70px 0 78px;
  overflow: hidden;
  @media (max-width: 700px) {
    padding: 44px 0 60px;
  }
`
const HeroGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 38px;
  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 42px;
  }
`
const HeroCopy = styled.div`
  h1 {
    font:
      800 clamp(52px, 7.1vw, 88px)/0.99 Manrope,
      sans-serif;
    letter-spacing: -5.8px;
    margin: 22px 0 21px;
    max-width: 650px;
    @media (max-width: 600px) {
      font-size: 52px;
      letter-spacing: -3px;
    }
  }
  h1 em {
    color: ${({ theme }) => theme.colors.green};
    font-style: normal;
  }
  p {
    font-size: 17px;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.muted};
    max-width: 490px;
    margin: 0 0 27px;
  }
`
const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`
const Note = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 26px;
  color: #778078;
  font-size: 12px;
  .faces {
    display: flex;
    padding-left: 5px;
  }
  .face {
    width: 27px;
    height: 27px;
    margin-left: -5px;
    border: 2px solid ${({ theme }) => theme.colors.paper};
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: #ddc8b6;
    font-size: 12px;
  }
  .face:nth-child(2) {
    background: #dce4d7;
  }
  .face:nth-child(3) {
    background: #d8e1de;
  }
`
const Preview = styled.div`
  height: 480px;
  position: relative;
  border-radius: 25px;
  background: #e9ede6;
  overflow: hidden;
  @media (max-width: 820px) {
    height: 440px;
  }
  @media (max-width: 520px) {
    height: 355px;
  }
`
const Scene = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(40, 58, 52, 0.04), rgba(40, 58, 52, 0.43)),
    url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85')
      center/cover;
  transform: scale(1.01);
`
const SiteCard = styled.div`
  position: absolute;
  left: 8%;
  right: 8%;
  top: 10%;
  height: 70%;
  background: #fffefa;
  border-radius: 14px;
  box-shadow: 0 24px 70px #283a3428;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .mini-nav {
    height: 39px;
    display: flex;
    align-items: center;
    padding: 0 17px;
    justify-content: space-between;
    font-size: 8px;
    font-weight: 700;
    color: #435248;
  }
  .mini-logo {
    font: 800 12px Manrope;
  }
  .mini-nav span:last-child {
    background: #567461;
    color: white;
    border-radius: 20px;
    padding: 7px 10px;
  }
  .mini-body {
    flex: 1;
    background:
      linear-gradient(90deg, #f3f0e8 0 50%, transparent 50%),
      url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=80')
        65% 50% / cover;
    position: relative;
  }
  .mini-type {
    position: absolute;
    left: 8%;
    top: 21%;
    width: 40%;
  }
  .mini-type small {
    font-size: 7px;
    letter-spacing: 1px;
    color: #708271;
  }
  .mini-type b {
    display: block;
    font: 800 clamp(15px, 2vw, 26px)/1.06 Manrope;
    letter-spacing: -1px;
    margin: 7px 0;
    color: #27372b;
  }
  .mini-type i {
    display: block;
    width: 54px;
    background: #567461;
    color: white;
    border-radius: 20px;
    padding: 6px;
    text-align: center;
    font-style: normal;
    font-size: 6px;
  }
`
const Float = styled.div`
  position: absolute;
  background: white;
  border-radius: 14px;
  padding: 12px 15px;
  box-shadow: 0 15px 45px #283a3418;
  bottom: 8%;
  left: 3%;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  font-weight: 700;
  .icon {
    width: 30px;
    height: 30px;
    background: #edf4e7;
    border-radius: 10px;
    display: grid;
    place-items: center;
    color: #567461;
    font-size: 15px;
  }
  small {
    display: block;
    color: #899087;
    font-weight: 500;
    margin-top: 2px;
  }
`
const Float2 = styled.div`
  position: absolute;
  right: 5%;
  top: 15%;
  background: #eee3d9;
  color: #78675a;
  padding: 11px 14px;
  border-radius: 12px;
  font-size: 10px;
  font-weight: 700;
  transform: rotate(4deg);
`
const Stats = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  margin-top: 46px;
  padding-top: 21px;
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  color: #758078;
  font-size: 12px;
  span {
    display: flex;
    align-items: center;
    gap: 7px;
  }
  b {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.ink};
  }
`
const Portfolio = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 32px;
  align-items: center;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`
const WorkCard = styled(Link)<{ $tone: string }>`
  display: block;
  background: ${(p) => p.$tone};
  border-radius: 17px;
  overflow: hidden;
  border: 1px solid rgba(30, 45, 35, 0.06);
  box-shadow: 0 1px 2px rgba(40, 58, 52, 0.04);
  transition:
    transform 240ms ease,
    box-shadow 240ms ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 18px 34px rgba(40, 58, 52, 0.12);
  }
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.sage};
    outline-offset: 4px;
  }
  .visual {
    height: 270px;
    position: relative;
    overflow: hidden;
    padding: 22px 25px 0;
    @media (max-width: 640px) {
      height: 250px;
    }
  }
  .mock {
    height: 100%;
    background: white;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 10px 30px #0002;
    overflow: hidden;
  }
  .mockbar {
    height: 31px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    font-size: 7px;
    font-weight: 700;
  }
  .mockhero {
    height: calc(100% - 31px);
    position: relative;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    padding: 12px;
    transition: transform 450ms cubic-bezier(0.2, 0.7, 0.2, 1);
  }
  &:hover .mockhero {
    transform: scale(1.035);
  }
  .mockhero:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #283a34bd, transparent);
  }
  .mockhero b {
    position: relative;
    max-width: 170px;
    color: white;
    font: 800 21px/1.1 Manrope;
    letter-spacing: -0.8px;
  }
  .caption {
    padding: 17px 19px 19px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .caption strong {
    font: 700 16px Manrope;
  }
  .caption span {
    font-size: 11px;
    color: #7d877f;
  }
`
const works = [
  {
    name: 'Nordlys Boliger',
    type: 'Bolig & byggeri',
    tone: '#e8ece4',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80',
    headline: 'Et sted at lande. Et hjem at vokse i.',
    description:
      'En varm og indbydende hjemmeside, der hjælper boligdrømme med at føles som et rigtigt hjem.',
  },
  {
    name: 'Møllehaven',
    type: 'Have & livsstil',
    tone: '#eeece3',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80',
    headline: 'Ro i haven. Plads til det hele.',
    description:
      'Naturlige farver og tydelige billeder giver haveglæden plads og gør det let at finde inspiration.',
  },
  {
    name: 'Studio Form',
    type: 'Kreativ virksomhed',
    tone: '#ece5de',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    headline: 'Gode idéer fortjener god form.',
    description:
      'Et enkelt, redaktionelt udtryk gør det kreative arbejde til hovedpersonen på alle skærme.',
  },
  {
    name: 'Lille Lund',
    type: 'Café & mad',
    tone: '#e7ebe4',
    image:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80',
    headline: 'Smag på noget, der er lavet med hjertet.',
    description:
      'En hyggelig digital caféoplevelse med appetitlige billeder og hurtig adgang til menu og kontakt.',
  },
]
const WorkDetails = styled.div`
  padding: 10px 0;
  .work-type {
    color: #73816f;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  h3 {
    font:
      800 clamp(28px, 3.3vw, 42px)/1.1 Manrope,
      sans-serif;
    letter-spacing: -1.6px;
    margin: 14px 0 12px;
  }
  p {
    color: ${({ theme }) => theme.colors.muted};
    font-size: 15px;
    line-height: 1.75;
    margin: 0;
  }
`
const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  margin-top: 28px;
  .count {
    color: #778078;
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    margin: 0 5px;
  }
`
const ArrowButton = styled.button`
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border: 1px solid #e1e4dc;
  border-radius: 50%;
  background: transparent;
  color: ${({ theme }) => theme.colors.ink};
  font-size: 20px;
  cursor: pointer;
  transition:
    background 180ms ease,
    color 180ms ease,
    transform 180ms ease;
  &:hover {
    background: ${({ theme }) => theme.colors.green};
    border-color: ${({ theme }) => theme.colors.green};
    color: white;
    transform: translateY(-2px);
  }
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.sage};
    outline-offset: 3px;
  }
`
const slideIn = keyframes`
  from { opacity: 0.45; transform: translateX(12px); }
  to { opacity: 1; transform: translateX(0); }
`
const ActiveWork = styled.div`
  animation: ${slideIn} 280ms ease both;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`
const Steps = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 30px;
  }
  @media (max-width: 440px) {
    grid-template-columns: 1fr;
  }
`
const Step = styled.div`
  padding: 23px 22px 0 0;
  .num {
    font-size: 12px;
    color: #87a07d;
    font-weight: 700;
  }
  .symbol {
    width: 42px;
    height: 42px;
    margin: 16px 0 15px;
    border-radius: 13px;
    background: #e8ede6;
    color: #567461;
    display: grid;
    place-items: center;
    font-size: 19px;
    transition:
      color 180ms ease,
      background 180ms ease,
      transform 180ms ease;
  }
  h3 {
    font: 700 17px Manrope;
    margin: 0 0 9px;
  }
  p {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.muted};
    line-height: 1.7;
    margin: 0;
  }
`
const FaqGrid = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 60px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`
const Questions = styled.div`
  details {
    border-bottom: 1px solid #e1e4dc;
    padding: 19px 0;
  }
  summary {
    list-style: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    font-weight: 700;
    font-size: 15px;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary:after {
    content: '+';
    color: #587461;
    font-size: 20px;
    font-weight: 400;
  }
  details[open] summary:after {
    content: '−';
  }
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.muted};
    line-height: 1.75;
    margin: 14px 22px 2px 0;
  }
`

export function Home() {
  const [activeWorkIndex, setActiveWorkIndex] = useState(0)
  const activeWork = works[activeWorkIndex]

  return (
    <>
      <Hero>
        <HeroGrid>
          <HeroCopy>
            <Eyebrow>Dansk design, gjort enkelt</Eyebrow>
            <h1>
              Din hjemmeside.
              <br />
              <em>Dit næste kapitel.</em>
            </h1>
            <p>
              Vi designer hjemmesider, der føles som dig — og gør det nemt for dine kunder at vælge
              dig.
            </p>
            <Actions>
              <PrimaryLink to="/kontakt">
                Få et gratis udkast <span>↗</span>
              </PrimaryLink>
              <GhostLink to="/ydelser">
                Se hvad du får <span>↓</span>
              </GhostLink>
            </Actions>
            <Note>
              <div className="faces">
                <i className="face">M</i>
                <i className="face">S</i>
                <i className="face">J</i>
              </div>
              Personlig sparring hele vejen <b>·</b> Helt uforpligtende
            </Note>
            <Stats>
              <span>
                <b>100%</b> personligt design
              </span>
              <span>
                <b>0 kr.</b> for første udkast
              </span>
              <span>
                <b>🇩🇰</b> Dansk samarbejde
              </span>
            </Stats>
          </HeroCopy>
          <Preview>
            <Scene />
            <SiteCard>
              <div className="mini-nav">
                <span className="mini-logo">NORDLYS</span>
                <span>Forside　 Om os　 Kontakt</span>
                <span>Tag en snak ↗</span>
              </div>
              <div className="mini-body">
                <div className="mini-type">
                  <small>HJEM MED PLADS TIL LIVET</small>
                  <b>
                    Her begynder
                    <br />
                    noget godt.
                  </b>
                  <i>Se boliger ↗</i>
                </div>
              </div>
            </SiteCard>
            <Float>
              <div className="icon">✳</div>
              <div>
                Skabt til din virksomhed<small>Design med personlighed</small>
              </div>
            </Float>
            <Float2>✦ Klar til at gå live</Float2>
          </Preview>
        </HeroGrid>
      </Hero>
      <Section>
        <Container>
          <SectionHead>
            <div>
              <Eyebrow>Udvalgte idéer</Eyebrow>
              <H2>
                Hjemmesider med lidt mere <span style={{ color: '#567461' }}>sjæl.</span>
              </H2>
              <Body>
                Hver virksomhed er forskellig. Derfor starter vi altid med dig, dine kunder og den
                følelse, din hjemmeside skal efterlade.
              </Body>
            </div>
            <TextLink to="/ydelser">
              Se flere muligheder <span>↗</span>
            </TextLink>
          </SectionHead>
          <Reveal>
            <Portfolio>
              <WorkCard key={activeWork.name} to="/kontakt" $tone={activeWork.tone}>
                <div className="visual">
                  <div className="mock">
                    <div className="mockbar">
                      <b>{activeWork.name.toUpperCase()}</b>
                      <span>OM? YDELSER? KONTAKT? ?</span>
                    </div>
                    <div
                      className="mockhero"
                      style={{ backgroundImage: `url(${activeWork.image})` }}
                    >
                      <b>{activeWork.headline}</b>
                    </div>
                  </div>
                </div>
                <div className="caption">
                  <strong>{activeWork.name}</strong>
                  <span>{activeWork.type}??</span>
                </div>
              </WorkCard>
              <WorkDetails aria-live="polite">
                <ActiveWork key={activeWork.name}>
                  <span className="work-type">{activeWork.type}</span>
                  <h3>{activeWork.name}</h3>
                  <p>{activeWork.description}</p>
                  <CarouselControls>
                    <ArrowButton
                      type="button"
                      aria-label="Vis forrige hjemmeside"
                      onClick={() =>
                        setActiveWorkIndex((index) => (index - 1 + works.length) % works.length)
                      }
                    >
                      &larr;
                    </ArrowButton>
                    <span className="count">
                      {String(activeWorkIndex + 1).padStart(2, '0')} /{' '}
                      {String(works.length).padStart(2, '0')}
                    </span>
                    <ArrowButton
                      type="button"
                      aria-label="Vis n?ste hjemmeside"
                      onClick={() => setActiveWorkIndex((index) => (index + 1) % works.length)}
                    >
                      &rarr;
                    </ArrowButton>
                  </CarouselControls>
                </ActiveWork>
              </WorkDetails>
            </Portfolio>
          </Reveal>
        </Container>
      </Section>
      <Section $muted>
        <Container>
          <SectionHead>
            <div>
              <Eyebrow>En proces, der giver ro i maven</Eyebrow>
              <H2>Fra første idé til færdig hjemmeside.</H2>
              <Body>
                Du behøver ikke vide præcis, hvad du har brug for. Det finder vi ud af sammen.
              </Body>
            </div>
          </SectionHead>
          <Steps>
            {[
              {
                icon: '✳',
                title: 'Vi lærer dig at kende',
                text: 'En uformel snak om din virksomhed, dine drømme og hvem du gerne vil nå.',
              },
              {
                icon: '✎',
                title: 'Vi designer dit udkast',
                text: 'Du får et personligt design, der tager udgangspunkt i netop din virksomhed.',
              },
              {
                icon: '◉',
                title: 'Du ser det først',
                text: 'Vi finpudser sammen. Du skal være glad for retningen, før vi går videre.',
              },
              {
                icon: '↗',
                title: 'Vi går live',
                text: 'Vi lancerer din hjemmeside og hjælper dig godt videre efterfølgende.',
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <Step>
                  <div className="num">0{i + 1}</div>
                  <div className="symbol">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </Step>
              </Reveal>
            ))}
          </Steps>
        </Container>
      </Section>
      <Section>
        <Container>
          <Reveal>
            <FaqGrid>
              <div>
                <Eyebrow>Det spørger mange om</Eyebrow>
                <H2>Gode spørgsmål fortjener gode svar.</H2>
                <Body>
                  Du skal føle dig tryg, før vi går i gang. Her er svar på det, de fleste gerne vil
                  vide.
                </Body>
                <TextLink to="/kontakt" style={{ marginTop: 22 }}>
                  Spørg os om alt <span>↗</span>
                </TextLink>
              </div>
              <Questions>
                {[
                  [
                    'Hvad koster en hjemmeside?',
                    'Prisen afhænger af, hvad din virksomhed har brug for. Vi giver dig altid et klart tilbud, før du beslutter dig — og det første udkast er gratis og uforpligtende.',
                  ],
                  [
                    'Hvor lang tid tager det?',
                    'De fleste hjemmesider er klar inden for 3–5 uger. Vi aftaler en plan sammen, så du ved, hvad der sker hvornår.',
                  ],
                  [
                    'Hvad hvis jeg ikke kan lide udkastet?',
                    'Så siger du bare til. Udkastet er helt gratis og uforpligtende, og du forpligter dig ikke til noget ved at se det.',
                  ],
                  [
                    'Kan jeg selv rette på hjemmesiden bagefter?',
                    'Ja. Vi bygger løsninger, du nemt kan holde opdateret. Og hvis du hellere vil have hjælp, står vi selvfølgelig klar.',
                  ],
                ].map(([q, a], i) => (
                  <details key={q} open={i === 0}>
                    <summary>{q}</summary>
                    <p>{a}</p>
                  </details>
                ))}
              </Questions>
            </FaqGrid>
          </Reveal>
        </Container>
      </Section>
      <CtaBand>
        <CtaInner>
          <div>
            <h2>Skal vi finde ud af, hvad din hjemmeside kan blive til?</h2>
            <p>Fortæl os lidt om din virksomhed — så tegner vi en idé til dig.</p>
          </div>
          <PrimaryLink to="/kontakt">
            Få et gratis udkast <span>↗</span>
          </PrimaryLink>
        </CtaInner>
      </CtaBand>
    </>
  )
}
