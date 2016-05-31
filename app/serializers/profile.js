import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeQueryRecordResponse(store, type, payload) {
    return {
      data: {
        id: payload.customerId,
        type: type.modelName,
        attributes: {
          firstname: payload.firstname,
          lastname: payload.lastname,
          degree: payload.degree,
          salutation: payload.salutation
        }
      }
    };
  }
});