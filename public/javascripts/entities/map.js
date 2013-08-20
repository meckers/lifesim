Map = Class.extend({

    rows: [],
    size: 10,

    init: function(container) {
        this.container = container;
        this.populate();
        this.renderDOM($(this.container));
        this.listen();
    },

    listen: function() {
        var me = this;
        $(this.container).on('worldupdate', function(e, world) {
            //me.moveObjects(world.population);
            me.updateObjects(world.population);
        })
    },

    populate: function() {
        var index = 0;
        for (i=0; i<size; i++) {
            var row = [];
            for (var j=0; j<size; j++) {
                row.push(new Place(
                    {name: Cities[index++]}
                ));
            }
            this.rows.push(row);
        }
    },

    renderDOM: function(container) {
        for(r=0; r<10; r++) {
            var rowElem = $("<div></div>");
            rowElem.attr('name', r);
            for (c=0; c<10; c++) {
                var cell = $("<div></div>");
                cell.addClass("square");
                cell.attr('title', this.rows[r][c].name);
                cell.attr('name', c);
                rowElem.append(cell);
            }
            $(this.container).append(rowElem);
        }
    },

    placeObject: function(o) {
        console.log("placeObject", o);
        this.renderCellContent(o.getDomElement(), o.position);
    },

    renderCellContent: function(element, position) {
        console.log("renderCellContent", element, position);
        var cell = $(this.container).find('[name=' + position.row + ']').find('[name=' + position.col + ']');
        $(cell).append(element);
    },

    clearType: function(type) {
        $('.square').empty();
    },

    getPlace: function(row, col) {
        return this.rows[row, col];
    },

    updateObjects: function(population) {
        this.clearType();
        for (var i=0; i<population.length; i++) {
            population[i].setPosition(this.getNewRandomPosition(population[i].position));
            this.placeObject(population[i]);
        }
    },

    /*
    moveObjects: function(population) {
        for (var i=0; i<population.length; i++) {
            this.placeObject(population[i]);
        }
    },*/

    getNewRandomPosition: function(position) {
        var rnd = Math.random();
        if (rnd < 0.25) {
            position.col = (position.col - 1 >= 0) ? position.col-1 : this.size-1;
        }
        else if (rnd < 0.50) {
            position.row = (position.row - 1 >= 0) ? position.row-1 : this.size-1;
        }
        else if (rnd < 0.75) {
            position.row = (position.row + 1 >= this.size) ? position.row+1 : 0;
        }
        else if (rnd < 1) {
            position.col = (position.col + 1 >= this.size) ? position.col+1 : 0;
        }
        return position;
    }

});