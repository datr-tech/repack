import {
  DestinationPackageTypeEnum,
  SourcePackageTypeEnum,
} from '@app/config/enums';

export type IFuncGetTypeOutput =
  | DestinationPackageTypeEnum
  | SourcePackageTypeEnum;
