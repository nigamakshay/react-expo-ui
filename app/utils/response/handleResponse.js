
import { showErrorMessage } from 'showErrorMessage';

export function handleResponse(result, options) {
  if (result.status == 200) {
    options.successCallback && options.successCallback(result);
  } else {
    showErrorMessage(result);
    options.failureCallback && options.failureCallback(result);
  }
}