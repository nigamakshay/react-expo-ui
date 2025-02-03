
import { executeAjaxCall } from 'executeAjaxCall';

export const deleteData = async (options) => {
  executeAjaxCall('DELETE', options);
}