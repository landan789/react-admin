
import { EventEmitter } from 'events';

let Member = Object.assign(
    {},
    EventEmitter.prototype,
    {
        data: [{
            'id': '001',
            'email': 'tom@gmail.com',
            'name': 'Tom',
            'note': 'in store'
        }, {
            'id': '002',
            'email': 'mary@gmail.com',
            'name': 'Mary',
            'note': 'in store'
        }],
        find(members) {
            if (members) {
                this.data = members;
            }
            return this.data;
        },
        insert: function (member) {
            this.data.push(member);
        },
        emitChange: function () {
            this.emit('change');
        },
        addChangeListener: function(callback) {
            this.on('change', callback);
        },
        removeChangeListener: function(callback) {
            this.removeListener('change', callback);
        }
    }
);

export default Member;