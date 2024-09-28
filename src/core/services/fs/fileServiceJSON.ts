import { IFileService } from '@app/interfaces/core/services/fs';
import {
  createFileJSON,
  hasJSONExtension,
} from '@app/core/services/fs/helpers';
import { fileService } from './fileService';

export const fileServiceJSON: IFileService = ({ path }) => {
  const fileServiceLocal = fileService({ path });

  const create = () => createFileJSON({ path });

  const getPath = () => fileServiceLocal.getPath();

  const read = () => {
    try {
      const fileContents: string = fileServiceLocal.read() as string;
      return JSON.parse(fileContents);
    } catch (error) {
      const { message } = error;
      throw new Error(`parse error: ${message}`);
    }
  };

  const validate = () =>
    fileServiceLocal.validate() && hasJSONExtension({ path });

  const write = ({ contents }) => fileServiceLocal.write({ contents });

  return { create, getPath, read, validate, write };
};
