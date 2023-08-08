import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const HalfStarContainer = styled(Box)`
  svg {
    position: absolute;
  }

  svg:nth-child(1) {
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
    z-index: 1;
  }
`;