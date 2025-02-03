
import { executeAjaxCall } from 'executeAjaxCall';

export const getData = async (options) => {
  executeAjaxCall('GET', options);
}