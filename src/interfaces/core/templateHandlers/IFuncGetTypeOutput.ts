import {
  DestinationPackageTypeEnum,
  SourcePackageTypeEnum,
} from '@app/config/enums';

export interface IFuncGetTypeOutput {
  destinationType: DestinationPackageTypeEnum;
  sourceType: SourcePackageTypeEnum;
}
