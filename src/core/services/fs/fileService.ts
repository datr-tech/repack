import { readFileSync } from 'node:fs';
import { IFileService } from '@app/interfaces/core/services/fs';
import {
  createFile,
  isFile,
  writeContents,
} from '@app/core/services/fs/helpers';

export const fileService: IFileService = ({ path }) => {
  const create = () => createFile({ path });
  const getPath = () => path;
  const read = () => readFileSync(path, { encoding: 'utf8' });
  const validate = () => isFile({ path });
  const write = ({ contents }) => writeContents({ contents, path });

  return { create, getPath, read, validate, write };
};
