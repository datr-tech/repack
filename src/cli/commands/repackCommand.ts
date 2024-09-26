import { Command } from 'commander';
import { repackHandler } from '@app/cli/handlers';
import { dirArgument } from '@app/cli/arguments';
import { fromOption, toOption } from '@app/cli/options';
import {
  CONSTS_COMMAND_REPACK_DESCRIPTION,
  CONSTS_COMMAND_REPACK_NAME,
} from '@app/config/consts';

export const repackCommand = new Command(CONSTS_COMMAND_REPACK_NAME);

repackCommand
  .description(CONSTS_COMMAND_REPACK_DESCRIPTION)
  .addArgument(dirArgument)
  .addOption(fromOption.makeOptionMandatory(true))
  .addOption(toOption.makeOptionMandatory(true))
  .action((path, options) => repackHandler({ path, options }));
