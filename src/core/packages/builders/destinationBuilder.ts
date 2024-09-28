import { IDestinationBuilder } from '@app/interfaces/core/packages/builders';
import { IDestinationOutput } from '@app/interfaces/core/packages/destination';
import { destinationBrew } from '@app/core/packages/destination/brew/destinationBrew';

export const destinationBuilder: IDestinationBuilder = ({
  destinationType,
  source,
}) => {
  const build = () => {
    const destinationBrewObj = destinationBrew({ source });
    const destinations: IDestinationOutput[] = [destinationBrewObj];
    const destinationsFiltered: IDestinationOutput[] = destinations.filter(
      (destination) => destination.getType() === destinationType,
    );

    if (destinationsFiltered.length !== 1) {
      throw new Error('invalid sources');
    }

    return destinationsFiltered[0] as IDestinationOutput;
  };

  return { build };
};
