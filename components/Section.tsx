import { ForwardRefComponent, HTMLMotionProps, motion } from 'framer-motion'
import { chakra, ChakraComponent, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv: ChakraComponent<ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>, Record<string, unknown>> = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

interface SectionProps {
  children?: React.ReactNode
  delay?: number
}

const Section: React.FC<SectionProps> = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay, ease: 'easeIn' }}
    mb={6}
  >
    {children}
  </StyledDiv>
)

export default Section
