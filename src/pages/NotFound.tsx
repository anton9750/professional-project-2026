import { Container, Eyebrow, PrimaryLink } from '../components/Sections'
import { PageHero } from './PageStyles'

export function NotFound() {
  return (
    <PageHero>
      <Container>
        <Eyebrow>Ups!</Eyebrow>
        <h1>Den side kunne vi ikke finde.</h1>
        <p>Men vi kan sagtens hjælpe dig videre herfra.</p>
        <PrimaryLink to="/">Tilbage til forsiden ↗</PrimaryLink>
      </Container>
    </PageHero>
  )
}
