import * as fs from 'fs';
import { IFuncIsDir } from '@app/interfaces/core/services/fs';
import { isPath } from './isPath';

export const isDir: IFuncIsDir = ({ path }) => {
  if (!isPath({ path })) {
    throw new Error('path is empty');
  }

  try {
    return fs.lstatSync(path).isDirectory();
  } catch {
    throw new Error('path is invalid');
  }
};
