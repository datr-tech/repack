import { readFileSync } from 'node:fs';
import { IFileService } from '@app/interfaces/core/services/fs';
import { isFile } from './isFile';

export const fileService: IFileService = ({ path }) => {
  const getPath = () => path;
  const read = () => readFileSync(path, { encoding: 'utf8' });
  const validate = () => isFile({ path });

  return { getPath, read, validate };
};
