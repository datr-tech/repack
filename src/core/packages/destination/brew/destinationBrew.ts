import { DestinationPackageTypeEnum } from '@app/config/enums';
import { fileService } from '@app/core/services/fs';
import { templateHandlerBuilder } from '@app/core/templateHandlers';
import { IDestination } from '@app/interfaces/core/packages/destination';
import { CONSTS_PATH_OUT_PATH_TEMP } from '@app/config/consts';

export const destinationBrew: IDestination = ({ source }) => {
  const generate = () => {
    let hasBeenGenerated = false;

    try {
      // Compile and populate the template
      const template = templateHandlerBuilder({
        destinationType: getType(),
        source,
      }).build();

      template.load();
      template.compile();
      const contents = template.generate();

      // Write the contents to the temp out path
      const path = CONSTS_PATH_OUT_PATH_TEMP;
      const file = fileService({ path });
      file.create();
      hasBeenGenerated = file.write({ contents });
    } catch (error) {
      const { message } = error;
      throw new Error(message);
    }

    return hasBeenGenerated;
  };

  const getType = () => DestinationPackageTypeEnum.BREW;

  const required = () => [
    'description',
    'entryPoint',
    'man',
    'name',
    'version',
  ];

  const validate = ({ silent = true }) => {
    let isValid = false;

    const data = source.getData();
    const propsMissing = required().filter(
      (prop) => typeof data[prop] === 'undefined',
    );

    if (propsMissing.length > 0) {
      if (silent) {
        isValid = false;
      } else {
        throw new Error(`props missing: ${propsMissing.toString()}`);
      }
    } else {
      isValid = true;
    }

    return isValid;
  };

  return { generate, getType, required, validate };
};
