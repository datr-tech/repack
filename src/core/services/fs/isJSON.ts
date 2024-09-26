import { IFuncIsJSON } from '@repack/interfaces/core/services/fs';
import { getExtension } from './getExtension';
import { isPath } from './isPath';

export const isJSON: IFuncIsJSON = ({ path }) => {
  let isValid = false;

  if (!isPath({ path })) {
    throw new Error('path is empty');
  }

  const extension = getExtension({ pathStr: path });
  isValid = extension === '.json';

  return isValid;
};
