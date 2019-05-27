function Emmitter() {
    this.events = {};
}

Emmitter.prototype.on = (type, listener) => {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emmitter.prototype.emit = (type) => {
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;
