Gui = Class.extend({

    init: function(universe) {
        this.universe = universe;
        var me = this;
        $('#world').on('tick', function(e, time) {
            me.update(e, time);
        })
    },

    update: function(e, time) {
        this.updateTime(time);
        //this.updatePositions(universe.world.population);
    },

    updateTime: function(time) {
        $("#ticks").html(time.ticks + " ticks");
        $("#date").html(time.getDate());
    }


});