import { IPathService } from '@app/interfaces/core/services/fs';
import { getPathServiceByType } from './getPathServiceByType';
import { getPathType } from './getPathType';

export const pathService: IPathService = ({ path }) => {
  return {
    getPathType: () => getPathType({ path }),
    getPathServiceByType: ({ pathType }) =>
      getPathServiceByType({ path, pathType }),
  };
};
