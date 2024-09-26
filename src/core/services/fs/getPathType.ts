import { PathTypeEnum } from '@app/config/enums';
import { IFuncGetPathType } from '@app/interfaces/core/services/fs';
import { isDir } from './isDir';
import { isFile } from './isFile';
import { isJSON } from './isJSON';
import { isPath } from './isPath';

export const getPathType: IFuncGetPathType = ({ path }) => {
  let pathType: PathTypeEnum;

  if (!isPath({ path })) {
    return PathTypeEnum.NF;
  }

  if (isFile({ path })) {
    pathType = isJSON({ path }) ? PathTypeEnum.JSON : PathTypeEnum.FILE;
  } else if (isDir({ path })) {
    pathType = PathTypeEnum.DIR;
  } else {
    pathType = PathTypeEnum.UNK;
  }

  return pathType;
};
