import { PathTypeEnum } from '@app/config/enums';
import { IHelperGetPathType } from '@app/interfaces/core/services/fs/helpers';
import { isDir } from './isDir';
import { isFile } from './isFile';
import { hasJSONExtension } from './hasJSONExtension';
import { isPathTruthy } from './isPathTruthy';

export const getPathType: IHelperGetPathType = ({ path }) => {
  let pathType: PathTypeEnum;

  if (!isPathTruthy({ path })) {
    return PathTypeEnum.NF;
  }

  if (isFile({ path })) {
    pathType = hasJSONExtension({ path })
      ? PathTypeEnum.JSON
      : PathTypeEnum.FILE;
  } else if (isDir({ path })) {
    pathType = PathTypeEnum.DIR;
  } else {
    pathType = PathTypeEnum.UNK;
  }

  return pathType;
};
