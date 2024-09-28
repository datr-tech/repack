import { templateHandlerNodeBrew } from './templateHandlerNodeBrew';
import {
  ITemplateHandlerBuilder,
  ITemplateHandlerOutput,
} from '@app/interfaces/core/templateHandlers';

export const templateHandlerBuilder: ITemplateHandlerBuilder = ({
  destinationType,
  source,
}) => {
  const build = () => {
    const nodeBrew = templateHandlerNodeBrew({ destinationType, source });
    const templateHandlers = [nodeBrew];

    const filterHandler = (templateHandler: ITemplateHandlerOutput) => {
      const templateType = templateHandler.getType();
      return (
        templateType.destinationType === destinationType &&
        templateType.sourceType === source.getType()
      );
    };

    const templateHandlersFiltered = templateHandlers.filter(filterHandler);

    if (templateHandlersFiltered.length !== 1) {
      throw new Error('invalid templateHandlers');
    }

    return templateHandlersFiltered[0] as ITemplateHandlerOutput;
  };
  return { build };
};
