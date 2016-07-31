import Ember from 'ember';

export default Ember.Component.extend({

    template: Ember.Handlebars.compile('<div id="svg-wrapper"></div>'),


    didInsertElement: function() {
        // Create and save the svg.js context for
        // later manipulations
        var draw = SVG('svg-wrapper');
        this.set('draw', draw);
    },

        svgRender: function() {
        // Manipulate your SVG dom tree here
        var draw = this.get('draw');
        draw.rect(50, 50).fill('#f09');
    }

});