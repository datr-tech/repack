import { CONSTS_FILE_EXTENSION_JSON } from '@app/config/consts';
import { IHelperHasJSONExtension } from '@app/interfaces/core/services/fs/helpers';
import { getExtension } from './getExtension';
import { isPathTruthy } from './isPathTruthy';

export const hasJSONExtension: IHelperHasJSONExtension = ({ path }) => {
  let isValid = false;

  if (!isPathTruthy({ path })) {
    throw new Error('path is empty');
  }

  const extension = getExtension({ pathStr: path });
  isValid = extension === CONSTS_FILE_EXTENSION_JSON;

  return isValid;
};
