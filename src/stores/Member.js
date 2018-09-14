
import { EventEmitter } from 'events';

let Member = Object.assign(
    {},
    EventEmitter.prototype,
    {
        data: [],
        findAll: function () {
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