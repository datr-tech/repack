import { isDir } from '@repack/core/services/fs';
import { InvalidArgumentError } from 'commander';

export const dirValidator = (dir: string) => {
  const isValid = isDir({ path: dir });

  if (!isValid) {
    throw new InvalidArgumentError('dir is not a valid directory');
  }

  return dir;
};
