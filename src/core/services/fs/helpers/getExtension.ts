import path from 'path';
import { IHelperGetExtension } from '@app/interfaces/core/services/fs/helpers';
import { isPathTruthy } from './isPathTruthy';

export const getExtension: IHelperGetExtension = ({ pathStr }) => {
  if (!isPathTruthy({ path: pathStr })) {
    throw new Error('path is empty');
  }

  return path.extname(pathStr);
};
