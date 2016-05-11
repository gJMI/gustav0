import ApplicationAdapter from './application';
import UrlTemplates from "ember-data-url-templates";

export default ApplicationAdapter.extend(UrlTemplates,{
  //queryUrlTemplate: '{+host}/{+namespace}/accounts/{account}/transactions',

 queryUrlTemplate: '{+host}/api/webapi/v2/gapi/my/transactions?pageSize=50&id={account}',

  urlSegments: {
    account(type, id, snapshot, query) {
      console.log(query);
      // we're extracting the endpoint from the query object...
      let ep = query.account;

      // ... and we delete it, so that the actual query does not contain
      // a useless "endpoint"
      delete query.account;

      return ep;
    },
  }
});

// /api/webapi/v2/gapi/my/transactions?pageSize=50&id=AA0639BF461DDB2B2DBCB6AEC715A7CFDEC07227
