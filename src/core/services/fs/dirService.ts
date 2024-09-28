import { IDirService } from '@app/interfaces/core/services/fs';
import { isDir } from '@app/core/services/fs/helpers';

export const dirService: IDirService = ({ path }) => {
  const getPath = () => path;
  const validate = () => isDir({ path });

  return { getPath, validate };
};
