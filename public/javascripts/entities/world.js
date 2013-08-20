World = Class.extend({

    map: null,
    population: [],

    init: function() {
        var me = this;
        this.map = new Map('#world');
        this.element = $("#world");

        this.element.on('tick', function() {
            me.onTick();
        });
    },

    onTick: function() {
        //this.updatePositions();
        this.element.trigger('worldupdate', this);
    },

    getRandomPosition: function() {
        var row = Math.floor(Math.random()*10);
        var col = Math.floor(Math.random()*10);
        return {
            row: row,
            col: col
        };
    },

    addOrganism: function(organism) {
        this.population.push(organism);
    },

    updatePositions: function() {
        this.map.clearType();
        for (var i=0; i<this.population.length; i++) {
            this.map.placeObject(this.population[i]);
        }
    }

})