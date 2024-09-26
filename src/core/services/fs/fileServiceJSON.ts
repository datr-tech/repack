import { IFileService } from '@app/interfaces/core/services/fs';
import { fileService } from './fileService';
import { isJSON } from './isJSON';

export const fileServiceJSON: IFileService = ({ path }) => {
  const fileServiceLocal = fileService({ path });

  const getPath = () => fileServiceLocal.getPath();
  const read = () => {
    try {
      const fileContents: string = fileServiceLocal.read() as string;
      const fileContentsJSON = JSON.parse(fileContents);

      return fileContentsJSON;
    } catch (error) {
      const { message } = error;
      throw new Error(`parse error: ${message}`);
    }
  };
  const validate = () => fileServiceLocal.validate() && isJSON({ path });

  return { getPath, read, validate };
};
