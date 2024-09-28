import * as fs from 'fs';
import { IHelperIsDir } from '@app/interfaces/core/services/fs/helpers';
import { doesFileObjectExist } from './doesFileObjectExist';
import { isPathTruthy } from './isPathTruthy';

export const isDir: IHelperIsDir = ({ path }) => {
  if (!isPathTruthy({ path })) {
    throw new Error('path is empty');
  }

  if (!doesFileObjectExist({ path })) {
    throw new Error('path does not exist');
  }

  try {
    return fs.lstatSync(path).isDirectory();
  } catch {
    throw new Error('path is invalid');
  }
};
