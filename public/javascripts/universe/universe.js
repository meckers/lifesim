Universe = Class.extend({

    world: null,
    time: null,

    init: function() {
        this.world = new World();
        this.time = new Time();
        this.start();
    },

    start: function() {
        this.time.start();
        this.world.addOrganism(new Entities.Organisms.Human({
            name: {
                first: 'Adam',
                last: 'Jehovasson'
            },
            birthDate: this.time.getDate(),
            position:  this.world.getRandomPosition(),
            sex: 'M'
        }));
        this.world.addOrganism(new Entities.Organisms.Human({
            name: {
                first: 'Eva',
                last: 'Jehovasson'
            },
            birthDate: this.time.getDate(),
            position:  this.world.getRandomPosition(),
            sex: 'F'
        }));
    }


});