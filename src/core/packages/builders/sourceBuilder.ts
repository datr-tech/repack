import { ISourceBuilder } from '@app/interfaces/core/packages/builders';
import { ISourceOutput } from '@app/interfaces/core/packages/source';
import { sourceBuilderNode } from './sourceBuilderNode';

export const sourceBuilder: ISourceBuilder = ({ path, sourceType }) => {
  const build = () => {
    const sourceNodeObj = sourceBuilderNode({ path }).build();
    const sources = [sourceNodeObj];
    const sourcesFiltered = sources.filter(
      (source) => source.getType() === sourceType,
    );

    if (sourcesFiltered.length !== 1) {
      throw new Error('invalid sources');
    }

    return sourcesFiltered[0] as ISourceOutput;
  };

  return { build };
};
