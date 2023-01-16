import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Friend({ avatar, name, isOnline }) {
  return (
    <StyledFriend>
      <Status isOnline={isOnline}>{isOnline}</Status>
      <Image src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </StyledFriend>
  );
}

const StyledFriend = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
  width: 300px;
  background-color: ${p => p.theme.colors.background};
  border-radius: 3px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.25);
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
`;

const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: #bbb;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${props => (props.isOnline ? '#00cd00' : '#cd0000')};
`;

const Image = styled.img`
  border-radius: ${p => p.theme.radii.normal};
`;

const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.l}px;
  border-radius: ${p => p.theme.radii.normal};
`;

Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
