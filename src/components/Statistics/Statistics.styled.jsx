import styled from 'styled-components';

const StyledStatistics = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
  margin-bottom: ${p => p.theme.space[6]}px;
`;

const Title = styled.h2`
  margin: ${p => p.theme.space[5]}px;
`;

const StatList = styled.ul`
  list-style: none;
  display: flex;
  text-align: center;
  border-radius: ${p => p.theme.radii.normal};
  color: #fff;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: ${p => p.theme.space[4]}px;
  width: 100%;
`;

const Percent = styled.span`
  margin-top: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.l}px;
`;

export { StyledStatistics, Title, StatList, StatItem, Percent };
