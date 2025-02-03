
import { executeAjaxCall } from 'executeAjaxCall';

export const postData = async (options) => {
  executeAjaxCall('POST', options);
}