Time = Class.extend({

    tickDuration: 500,
    now: null,
    ticks: 0,
    lastTick: 10,

    init: function() {
        this.now = new Date(0);
    },

    start: function() {
        var me = this;
        this.interval = window.setInterval(function() {
            me.tick();
        }, this.tickDuration);
    },

    stop: function() {
        window.clearInterval(this.interval);
    },

    tick: function() {
        this.ticks++;
        var previousTime = this.now.getTime();
        this.now.setTime(previousTime + (24 * 60 * 60 * 1000));      // One tick = one day
        $("#world").trigger('tick', [this]);
        if (this.ticks >= this.lastTick && this.lastTick > 0) {
            this.stop();
        }
    },

    getDate: function() {
        return this.now;
    }

});