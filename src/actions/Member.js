import IndexDispatcher from './../dispatcher/Index';

const MemberAction = {
    find() {
        window.fetch('http://fea.jkpot.com:3002/api/member', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'text/plain'
            },
            cache: 'no-cache',
            mode: 'cors',
            credentials: 'include'
        }).then((res) => {
            return res.json();
        }).then((resJson) => {
            IndexDispatcher.dispatch({
                type: 'FIND_MEMBER',
                payload: {
                    members: resJson.data
                }
            });
        });
    },
    insert(member) {
        window.fetch('http://fea.jkpot.com:3002/api/member', {
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
            let members = [member];
            IndexDispatcher.dispatch({
                type: 'INSERT_MEMBER',
                payload: {
                    members: members
                }
            });
        });
    }
};

export default MemberAction;