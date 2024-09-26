import { Command } from 'commander';
import { repackHandler } from '@repack/cli/handlers';
import { dirArgument } from '@repack/cli/arguments';
import { fromOption, toOption } from '@repack/cli/options';
import {
  CONSTS_COMMAND_REPACK_DESCRIPTION,
  CONSTS_COMMAND_REPACK_NAME,
} from '@repack/config/consts';

export const repackCommand = new Command(CONSTS_COMMAND_REPACK_NAME);

repackCommand
  .description(CONSTS_COMMAND_REPACK_DESCRIPTION)
  .addArgument(dirArgument)
  .addOption(fromOption.makeOptionMandatory(true))
  .addOption(toOption.makeOptionMandatory(true))
  .action((path, options) => repackHandler({ path, options }));
