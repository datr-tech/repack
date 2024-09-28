import * as fs from 'fs';
import { IHelperIsFile } from '@app/interfaces/core/services/fs/helpers';
import { doesFileObjectExist } from './doesFileObjectExist';
import { isPathTruthy } from './isPathTruthy';

export const isFile: IHelperIsFile = ({ path }) => {
  if (!isPathTruthy({ path })) {
    throw new Error('path is empty');
  }

  if (!doesFileObjectExist({ path })) {
    throw new Error('path does not exist');
  }

  try {
    return fs.lstatSync(path).isFile();
  } catch {
    throw new Error('path is invalid');
  }
};
