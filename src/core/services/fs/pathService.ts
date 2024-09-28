import { IPathService } from '@app/interfaces/core/services/fs';
import {
  getPathServiceByType,
  getPathType,
} from '@app/core/services/fs/helpers';

export const pathService: IPathService = ({ path }) => {
  return {
    getPathType: () => getPathType({ path }),
    getPathServiceByType: ({ pathType }) =>
      getPathServiceByType({ path, pathType }),
  };
};
