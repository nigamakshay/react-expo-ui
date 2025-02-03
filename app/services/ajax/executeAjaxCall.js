import { handleResponse } from 'handleResponse';
import { showErrorMessage } from 'showErrorMessage';

export const executeAjaxCall = async (method, options) => {
  if(!options || !options.url) return;

  if(options &&
    (options.authRequired==null || options.authRequired==undefined || options.authRequired==true)
    &&
    !options.bearerToken) {    
    return;
  }

  try {
    const response = await fetch(options.url, {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'AUTHORIZATION': 'Bearer ' + options.bearerToken
      },
      body: JSON.stringify(options.data)
    });

    const result = await response.json();
    handleResponse(result, options);
  } catch (err) {    
    showErrorMessage();
  }  
}