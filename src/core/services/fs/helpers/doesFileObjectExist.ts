import { existsSync } from 'node:fs';
import { IHelperDoesFileObjectExist } from '@app/interfaces/core/services/fs/helpers';

export const doesFileObjectExist: IHelperDoesFileObjectExist = ({ path }) =>
  existsSync(path);
