import { DestinationPackageTypeEnum } from '@app/config/enums';
import { templateHandlerBuilder } from '@app/core/templateHandlers';
import { IDestination } from '@app/interfaces/core/packages/destination';

export const destinationBrew: IDestination = ({ source }) => {
  const generate = () => {
    const template = templateHandlerBuilder({
      destinationType: getType(),
      source,
    }).build();

    template.load();
    template.compile();
    template.generate();

    return true;
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
