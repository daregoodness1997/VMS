import { Avatar, AvatarGroup } from '@chakra-ui/react';
interface Props {
  members: [];
}

const Avatars: React.FC<Props> = ({ members }) => {
  return (
    <AvatarGroup size='sm'>
      {members.map(member => {
        return (
          <Avatar
            name='Ryan Florence'
            src={member}
            _hover={{ zIndex: '3', cursor: 'pointer' }}
          />
        );
      })}
    </AvatarGroup>
  );
};

export default Avatars;
