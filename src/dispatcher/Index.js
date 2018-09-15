import {Dispatcher} from 'flux';
import MemberStore from './../stores/Member';

let dispatcher = new Dispatcher();

dispatcher.register((action) => {
    let members;
    switch (action.type) {
        case 'FIND_MEMBER':
            members = action.payload.members;
            MemberStore.find(members);
            MemberStore.emitChange();
            break;
        case 'INSERT_MEMBER':
            members = action.payload.members;
            MemberStore.insert(members);
            MemberStore.emitChange();
            break;
        default:
    }
});

export default dispatcher;