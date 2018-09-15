import {Dispatcher} from 'flux';
import MemberStore from './../stores/Member';

let dispatcher = new Dispatcher();

dispatcher.register((action) => {
    switch (action.type) {
        case 'FIND_MEMBER':
            let members = action.payload.members;
            MemberStore.find(members);
            MemberStore.emitChange();
            break;
        case 'INSERT_MEMBER':
            MemberStore.insert(action.member);
            MemberStore.emitChange();
            break;
        default:
    }
});

export default dispatcher;