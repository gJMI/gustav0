import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['key'],
    key: null,
    i18n: Ember.inject.service(),
    actions: {
        setLanguage: function(lang) {
            Ember.Logger.debug('Selection language ' + lang);
            this.set('i18n.locale', lang);
        }
    }
});