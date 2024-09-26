import { IDirService } from '@repack/interfaces/core/services/fs';
import { isDir } from './isDir';

export const dirService: IDirService = ({ path }) => {
  const getPath = () => path;
  const validate = () => isDir({ path });

  return { getPath, validate };
};
