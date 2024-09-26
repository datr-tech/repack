import path from 'path';
import { IFuncGetExtension } from '@app/interfaces/core/services/fs';
import { isPath } from './isPath';

export const getExtension: IFuncGetExtension = ({ pathStr }) => {
  if (!isPath({ path: pathStr })) {
    throw new Error('path is empty');
  }

  return path.extname(pathStr);
};
