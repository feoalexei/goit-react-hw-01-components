import PropTypes from 'prop-types';
import {
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
} from './Profile.styled';

export default function Profile(props) {
  const { username, tag, location, avatar, stats } = props.data;
  return (
    <StyledProfile>
      <Description>
        <Image src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tags>@{tag}</Tags>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Value>{stats.followers}</Value>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Value>{stats.views}</Value>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Value>{stats.likes}</Value>
        </StatsItem>
      </StatsList>
    </StyledProfile>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
