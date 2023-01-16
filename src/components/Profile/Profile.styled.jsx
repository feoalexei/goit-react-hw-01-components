import styled from 'styled-components';

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 300px;
  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.25);
  margin-bottom: ${p => p.theme.space[6]}px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${p => p.theme.space[5]}px;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  border-radius: ${p => p.theme.radii.round};
  width: 100px;
`;

const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[4]}px;
`;

const Tags = styled.p`
  color: ${p => p.theme.colors.textGrey};
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

const Location = styled.p`
  color: ${p => p.theme.colors.textGrey};
  margin: ${p => p.theme.space[0]}px;
`;

const StatsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  list-style: none;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.muted};
  padding: 0;
  margin: 0;
`;

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${p => p.theme.colors.backgroundGrey};
  padding: 24px;

  &:not(:last-child) {
    border-right: 1px solid ${p => p.theme.colors.backgroundGrey};
  }
`;

const Label = styled.span`
  color: ${p => p.theme.colors.textGrey};
  font-size: ${p => p.theme.fontSizes.s}px;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

const Value = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export {
  StyledProfile,
  Description,
  Image,
  Name,
  Tags,
  Location,
  StatsList,
  StatsItem,
  Label,
  Value,
};
