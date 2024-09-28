import { closeSync, openSync } from 'node:fs';
import { IHelperCreateFile } from '@app/interfaces/core/services/fs/helpers';
import { doesFileObjectExist } from './doesFileObjectExist';
import { isPathTruthy } from './isPathTruthy';

export const createFile: IHelperCreateFile = ({ path }) => {
  let hasCreated = false;

  if (isPathTruthy({ path }) && !doesFileObjectExist({ path })) {
    const fileDescriptor = openSync(path, 'w');
    closeSync(fileDescriptor);
    hasCreated = true;
  }

  return hasCreated;
};
