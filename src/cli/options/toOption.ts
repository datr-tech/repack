import { Option } from 'commander';
import { DestinationPackageTypeEnum } from '@app/config/enums';

export const toOption = new Option(
  '-t, --to <toType>',
  "the type of the 'to' package",
).choices([DestinationPackageTypeEnum.BREW]);
