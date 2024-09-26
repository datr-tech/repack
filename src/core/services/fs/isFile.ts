import * as fs from 'fs';
import { IFuncIsFile } from '@repack/interfaces/core/services/fs';
import { isPath } from './isPath';

export const isFile: IFuncIsFile = ({ path }) => {
  if (!isPath({ path })) {
    throw new Error('path is empty');
  }

  try {
    return fs.lstatSync(path).isFile();
  } catch {
    throw new Error('path is invalid');
  }
};
