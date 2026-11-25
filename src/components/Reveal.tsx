import type { PropsWithChildren } from 'react'
import styled from 'styled-components'
import { useInView } from '../hooks/useInView'

const RevealFrame = styled.div<{ $visible: boolean; $delay: number }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : 18)}px);
  transition:
    opacity 600ms ease,
    transform 600ms cubic-bezier(0.2, 0.7, 0.2, 1);
  transition-delay: ${({ $visible, $delay }) => ($visible ? $delay : 0)}ms;
  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`

type RevealProps = PropsWithChildren<{
  delay?: number
  className?: string
}>

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <RevealFrame ref={ref} $visible={isInView} $delay={delay} className={className}>
      {children}
    </RevealFrame>
  )
}
