import { readFileSync } from 'node:fs';
import { IFileService } from '@app/interfaces/core/services/fs';
import { isFile } from './isFile';
import { writeContents } from './writeContents';

export const fileService: IFileService = ({ path }) => {
  const getPath = () => path;
  const read = () => readFileSync(path, { encoding: 'utf8' });
  const validate = () => isFile({ path });
  const write = ({ contents }) => writeContents({ contents, path });

  return { getPath, read, validate, write };
};
