import { Argument } from 'commander';
import { dirValidator } from '@repack/cli/validators';

export const dirArgument = new Argument(
  '<dir>',
  "the full path to the 'from' package dir",
).argParser(dirValidator);
