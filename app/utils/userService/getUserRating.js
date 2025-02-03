import { getData } from 'getData';
import { USER_RATINGS_URL } from '@env';

export function getUserRating(options) {
  
  var url = USER_RATINGS_URL;
  if (options.userId) {
    url = USER_RATINGS_URL + '?id=' + options.userId;
  }
  
  var requestParams = {};
  requestParams.url = USER_RATINGS_URL;
  requestParams.bearerToken = options.bearerToken;
  requestParams.successCallback = options.successCallback;    
  getData(requestParams);
}