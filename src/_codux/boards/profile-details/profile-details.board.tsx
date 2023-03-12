import { createBoard } from '@wixc3/react-board';
import { ProfileDetails } from '../../../components/profile-details/profile-details';

export default createBoard({
    name: 'ProfileDetails',
    Board: () => <ProfileDetails />
});
