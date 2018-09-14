import IndexDispatcher from './../dispatcher/Index';

const MemberAction = {
    find() {
        fetch('/api/members.json').then((res) => {
            return res.json();
        }).then((members) => {
            IndexDispatcher.dispatch({
                type: 'FIND_MEMBERS',
                payload: {
                    members: members
                }
            });
        });
    },
    insert(member) {
        fetch('/api/members.json', {
            method: 'POST',
            body: JSON.stringify({
                ...member
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            return res.json();
        }).then((member) => {
            IndexDispatcher.dispatch({
                type: 'INSERT_MEMBERS',
                payload: {
                    members: member
                }
            });
        });
    }
};

export default MemberAction;