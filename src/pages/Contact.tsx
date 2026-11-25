import { useState, type FormEvent } from 'react'
import { Body, Container, Eyebrow, H2, PrimaryLink, Section } from '../components/Sections'
import { Reveal } from '../components/Reveal'
import { ContactGrid, Form, Info, PageHero } from './PageStyles'

export function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = encodeURIComponent(
      `Gratis udkast til ${data.get('company') || 'min hjemmeside'}`,
    )
    const body = encodeURIComponent(
      `Hej Jensens Hjemmesider!\n\nMit navn: ${data.get('name')}\nVirksomhed: ${data.get('company')}\nE-mail: ${data.get('email')}\n\nLidt om min idé:\n${data.get('message')}`,
    )
    window.location.href = `mailto:antonjensenv2@hotmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }
  return (
    <>
      <PageHero>
        <Container>
          <Eyebrow>Kontakt</Eyebrow>
          <h1>Fortæl os, hvad du drømmer om.</h1>
          <p>
            Et par linjer er nok til at komme i gang. Vi vender tilbage med en god idé og et par
            spørgsmål.
          </p>
        </Container>
      </PageHero>
      <Section>
        <ContactGrid>
          <div>
            <Eyebrow>Helt uforpligtende</Eyebrow>
            <H2>Dit gratis udkast starter her.</H2>
            <Body>
              Udfyld formularen, så vender vi tilbage inden for én hverdag. Vi tager gerne en snak,
              før vi tegner noget som helst.
            </Body>
            <Info>
              <div className="row">
                <div className="dot">✉</div>
                <div>
                  <b>Skriv til os</b>
                  <small>antonjensenv2@hotmail.com</small>
                </div>
              </div>
              <div className="row">
                <div className="dot">◷</div>
                <div>
                  <b>Vi svarer hurtigt</b>
                  <small>Som regel inden for 1 hverdag</small>
                </div>
              </div>
              <div className="row">
                <div className="dot">♡</div>
                <div>
                  <b>Gratis og uforpligtende</b>
                  <small>Du bestemmer altid selv næste skridt</small>
                </div>
              </div>
            </Info>
          </div>
          <Reveal>
            <Form onSubmit={submit}>
              <label>
                Dit navn
                <input required name="name" placeholder="Hvad skal vi kalde dig?" />
              </label>
              <label>
                Virksomhed
                <input name="company" placeholder="Virksomhedens navn" />
              </label>
              <label className="wide">
                Din e-mail
                <input required type="email" name="email" placeholder="dig@virksomhed.dk" />
              </label>
              <label className="wide">
                Hvad går du og drømmer om?
                <textarea
                  required
                  name="message"
                  placeholder="Fortæl os lidt om din virksomhed og dine ønsker..."
                />
              </label>
              <PrimaryLink as="button" to="/kontakt" type="submit">
                {sent ? 'Tak — din mail er klar' : 'Send og få et gratis udkast'} <span>↗</span>
              </PrimaryLink>
              {sent && (
                <p className="wide" style={{ color: '#567461', fontSize: 13, margin: 0 }}>
                  Din mail-app er åbnet med beskeden klar til afsendelse.
                </p>
              )}
            </Form>
          </Reveal>
        </ContactGrid>
      </Section>
    </>
  )
}
