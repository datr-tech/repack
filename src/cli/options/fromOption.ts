import { Option } from 'commander';
import { SourcePackageTypeEnum } from '@app/config/enums';

export const fromOption = new Option(
  '-f, --from <fromType>',
  "the type of the 'from' package",
).choices([SourcePackageTypeEnum.NODE]);
