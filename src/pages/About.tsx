import {
  Body,
  Container,
  CtaBand,
  CtaInner,
  Eyebrow,
  H2,
  PrimaryLink,
  Section,
} from '../components/Sections'
import { Reveal } from '../components/Reveal'
import { ImagePanel, List, PageHero, Process, Split } from './PageStyles'

export function About() {
  return (
    <>
      <PageHero>
        <Container>
          <Eyebrow>Sådan gør vi</Eyebrow>
          <h1>Et godt samarbejde begynder med en god snak.</h1>
          <p>
            Vi tror på, at de bedste hjemmesider bliver til, når mennesker arbejder tæt sammen.
            Derfor gør vi tingene enkelt, ærligt og i dit tempo.
          </p>
          <PrimaryLink to="/kontakt">Mød os til en snak ↗</PrimaryLink>
        </Container>
      </PageHero>
      <Section>
        <Container>
          <Reveal>
            <Split>
              <ImagePanel>Idéer bliver bedst, når vi tænker sammen.</ImagePanel>
              <div>
                <Eyebrow>Personligt fra start til slut</Eyebrow>
                <H2>Vi gør det nemt at komme godt i gang.</H2>
                <Body>
                  Det kan være svært at vide, hvad en ny hjemmeside kræver. Vi spørger ind, lytter
                  og hjælper dig med at finde frem til det, der giver mest mening for din
                  virksomhed.
                </Body>
                <List>
                  <li>
                    <b>✓</b> Du taler direkte med dem, der laver din hjemmeside
                  </li>
                  <li>
                    <b>✓</b> Du får ærlige svar og klare aftaler undervejs
                  </li>
                  <li>
                    <b>✓</b> Du ser et design, før du beslutter dig
                  </li>
                  <li>
                    <b>✓</b> Dit projekt bliver skabt til dig — ikke kopieret fra andre
                  </li>
                </List>
              </div>
            </Split>
          </Reveal>
        </Container>
      </Section>
      <Section $muted>
        <Container>
          <Eyebrow>Fire gode skridt</Eyebrow>
          <H2>Trygt fra første idé til færdig side.</H2>
          <Reveal>
            <Process style={{ marginTop: 34 }}>
              {[
                [
                  '01',
                  'Vi lytter',
                  'Vi starter med at forstå din forretning, dine kunder og dine mål.',
                ],
                ['02', 'Vi designer', 'Du får et første udkast med retning og personlighed.'],
                [
                  '03',
                  'Vi justerer',
                  'Sammen finpudser vi indhold og detaljer, indtil det sidder lige i skabet.',
                ],
                [
                  '04',
                  'Vi lancerer',
                  'Vi går live og sørger for, at du er godt klædt på til hverdagen.',
                ],
              ].map(([n, t, p]) => (
                <article key={n}>
                  <div className="n">{n}</div>
                  <h3>{t}</h3>
                  <p>{p}</p>
                </article>
              ))}
            </Process>
          </Reveal>
        </Container>
      </Section>
      <CtaBand>
        <CtaInner>
          <div>
            <h2>Skal vi tage den første snak?</h2>
            <p>Fortæl os om din idé — vi glæder os til at høre fra dig.</p>
          </div>
          <PrimaryLink to="/kontakt">Skriv til os ↗</PrimaryLink>
        </CtaInner>
      </CtaBand>
    </>
  )
}
