import { Option } from 'commander';

export const toOption = new Option(
  '-t, --to <toType>',
  "the type of the 'to' package",
).choices(['brew']);
