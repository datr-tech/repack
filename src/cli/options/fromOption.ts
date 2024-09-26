import { Option } from 'commander';

export const fromOption = new Option(
  '-f, --from <fromType>',
  "the type of the 'from' package",
).choices(['npm']);
