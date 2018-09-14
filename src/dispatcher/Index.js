import {Dispatcher} from 'flux';
import MemberStore from './../stores/Member';

let dispatcher = new Dispatcher();

dispatcher.register((action) => {
    switch (action.type) {
        case 'FIND_MEMBER':
            MemberStore.insert(action.member);
            MemberStore.emitChange();
            break;
        case 'INSERT_MEMBER':
        default:
    }
});

export default dispatcher;