import { PathTypeEnum } from '@repack/config/enums';
import {
  IFuncGetPathServiceByType,
  IFuncGetPathServiceByTypeOutput,
} from '@repack/interfaces/core/services/fs';
import { dirService } from './dirService';
import { fileService } from './fileService';
import { fileServiceJSON } from './fileServiceJSON';

export const getPathServiceByType: IFuncGetPathServiceByType = ({
  path,
  pathType,
}) => {
  let pathServiceByType: IFuncGetPathServiceByTypeOutput;

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
