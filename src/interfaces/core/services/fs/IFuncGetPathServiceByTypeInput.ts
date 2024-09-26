import { PathTypeEnum } from '@app/config/enums';

export interface IFuncGetPathServiceByTypeInput {
  path: string;
  pathType: PathTypeEnum;
}
