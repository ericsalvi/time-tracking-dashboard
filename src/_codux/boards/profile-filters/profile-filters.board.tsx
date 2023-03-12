import { createBoard } from '@wixc3/react-board';
import { ProfileFilters } from '../../../components/profile-filters/profile-filters';

export default createBoard({
    name: 'ProfileFilters',
    Board: () => <ProfileFilters />
});
