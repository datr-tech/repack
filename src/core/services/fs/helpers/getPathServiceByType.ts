import { PathTypeEnum } from '@app/config/enums';
import {
  IHelperGetPathServiceByType,
  IHelperGetPathServiceByTypeOutput,
} from '@app/interfaces/core/services/fs/helpers';
import { dirService } from '../dirService';
import { fileService } from '../fileService';
import { fileServiceJSON } from '../fileServiceJSON';

export const getPathServiceByType: IHelperGetPathServiceByType = ({
  path,
  pathType,
}) => {
  let pathServiceByType: IHelperGetPathServiceByTypeOutput;

  switch (pathType) {
    case PathTypeEnum.JSON:
      pathServiceByType = fileServiceJSON({ path });
      break;

    case PathTypeEnum.FILE:
      pathServiceByType = fileService({ path });
      break;

    case PathTypeEnum.DIR:
      pathServiceByType = dirService({ path });
      break;

    default:
      throw new Error('unknown pathType');
  }

  return pathServiceByType;
};
