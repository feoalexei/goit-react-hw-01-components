import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[6]}px;
  background-color: ${p => p.theme.colors.backgroundGrey};
  font-family: ${p => p.theme.fonts.body};
`;
