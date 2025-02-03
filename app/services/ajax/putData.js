import { executeAjaxCall } from 'executeAjaxCall';

export const putData = async (options) => {
  executeAjaxCall('PUT', options);
}
