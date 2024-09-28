import { IFileService } from '@app/interfaces/core/services/fs';
import { fileService } from './fileService';
import { isJSON } from './isJSON';

export const fileServiceJSON: IFileService = ({ path }) => {
  const fileServiceLocal = fileService({ path });

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

  const validate = () => fileServiceLocal.validate() && isJSON({ path });

  const write = ({ contents }) =>
    fileServiceLocal.write({ contents: JSON.stringify(contents) });

  return { getPath, read, validate, write };
};
