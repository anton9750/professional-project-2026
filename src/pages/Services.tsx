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
import { Card, Grid, PageHero } from './PageStyles'

export function Services() {
  return (
    <>
      <PageHero>
        <Container>
          <Eyebrow>Det får du</Eyebrow>
          <h1>En hjemmeside, der gør det nemt at vælge dig.</h1>
          <p>
            Godt design er mere end pæne farver. Det handler om at hjælpe de rigtige mennesker med
            at forstå, hvorfor de skal vælge netop dig.
          </p>
          <PrimaryLink to="/kontakt">Lad os tage en snak ↗</PrimaryLink>
        </Container>
      </PageHero>
      <Section>
        <Container>
          <Eyebrow>Alt det vigtige, samlet ét sted</Eyebrow>
          <H2>Dit digitale hjem — bygget til din hverdag.</H2>
          <Body>
            Vi tager hånd om hele processen, så du kan bruge din tid på det, du er bedst til.
          </Body>
          <Reveal>
            <Grid style={{ marginTop: 38 }}>
              {[
                {
                  i: '✳',
                  t: 'Et unikt design',
                  p: 'Ingen færdig skabelon. Vi designer en hjemmeside, der afspejler din virksomhed og føles helt rigtig.',
                },
                {
                  i: '⌕',
                  t: 'Let at finde på Google',
                  p: 'Et solidt teknisk fundament og de rigtige SEO-greb gør det nemmere for dine kunder at finde dig.',
                },
                {
                  i: '▣',
                  t: 'Virker på alle skærme',
                  p: 'Fra stor computerskærm til lille mobil — din hjemmeside ser godt ud og er nem at bruge overalt.',
                },
                {
                  i: '↗',
                  t: 'Bygget til at skabe kontakt',
                  p: 'Tydelige budskaber og gennemtænkte kontaktmuligheder hjælper besøgende med at tage næste skridt.',
                },
                {
                  i: '⚙',
                  t: 'Nem at holde opdateret',
                  p: 'Du får en løsning, du selv kan redigere. Vi viser dig, hvordan det hele fungerer.',
                },
                {
                  i: '♡',
                  t: 'Hjælp, når du har brug for det',
                  p: 'Du står ikke alene efter lanceringen. Vi er her også, når hjemmesiden er gået live.',
                },
              ].map((x) => (
                <Card key={x.t}>
                  <div className="icon">{x.i}</div>
                  <h3>{x.t}</h3>
                  <p>{x.p}</p>
                </Card>
              ))}
            </Grid>
          </Reveal>
        </Container>
      </Section>
      <CtaBand>
        <CtaInner>
          <div>
            <h2>Første skridt koster dig ingenting.</h2>
            <p>Få en idé til din nye hjemmeside — helt gratis og uforpligtende.</p>
          </div>
          <PrimaryLink to="/kontakt">Få et gratis udkast ↗</PrimaryLink>
        </CtaInner>
      </CtaBand>
    </>
  )
}
