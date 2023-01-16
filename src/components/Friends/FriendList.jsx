import PropTypes from 'prop-types';
import styled from 'styled-components';
import Friend from './FriendListItem';

export default function FriendsList({ data }) {
  return (
    <StyledFriends>
      {data.map(({ avatar, name, isOnline, id }) => (
        <Friend key={id} avatar={avatar} isOnline={isOnline} name={name} />
      ))}
    </StyledFriends>
  );
}

const StyledFriends = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: ${p => p.theme.space[6]}px;
`;

FriendsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
