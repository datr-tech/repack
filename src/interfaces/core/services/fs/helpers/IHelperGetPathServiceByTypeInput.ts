import { PathTypeEnum } from '@app/config/enums';

export interface IHelperGetPathServiceByTypeInput {
  path: string;
  pathType: PathTypeEnum;
}
