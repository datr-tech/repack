import { CONSTS_FILE_EXTENSION_JSON } from '@app/config/consts';
import { IFuncIsJSON } from '@app/interfaces/core/services/fs';
import { getExtension } from './getExtension';
import { isPath } from './isPath';

export const isJSON: IFuncIsJSON = ({ path }) => {
  let isValid = false;

  if (!isPath({ path })) {
    throw new Error('path is empty');
  }

  const extension = getExtension({ pathStr: path });
  isValid = extension === CONSTS_FILE_EXTENSION_JSON;

  return isValid;
};
