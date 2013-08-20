var Entities = Entities || {};
Entities.Organisms = Entities.Organisms || {};

Entities.Organisms.Human = Class.extend({

    sex: null,
    name: null,
    dna: null,
    birthDate: null,
    position: {
        row: 0,
        col: 0
    },

    init: function(options) {

        var father = options.father;
        var mother = options.mother;
        this.sex = options.sex || this.randomizeSex();
        this.birthDate = options.birthDate;
        this.position = options.position;

        if(mother && father) {
            this.name = Names.createName(mother, father);
            this.dna = mother.dna.substr(0,5) + father.dna.substr(5,5);
        }
        else {
            this.name = options.name || "John Doe";
        }
    },

    getFullName: function() {
        return this.name.first + " " + this.name.last;
    },

    randomizeSex: function() {
        var rnd = Math.random();
        return rnd < 0.5 ? "M" : "F";
    },

    getDomElement: function() {
        var elem = $("<div></div>");
        elem.addClass('human');
        elem.addClass(this.sex == 'M' ? 'male' : 'female');
        elem.addClass('mapobject');
        elem.attr('title', this.getFullName());
        return elem;
    },

    setPosition: function(position) {
        this.position = position;
    }

});