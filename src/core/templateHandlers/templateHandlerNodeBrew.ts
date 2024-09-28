import path from 'path';
import { CONSTS_PATH_TEMPLATES_DIR } from '@app/config/consts';
import { DestinationPackageTypeEnum } from '@app/config/enums';
import { ITemplateHandler } from '@app/interfaces/core/templateHandlers';
import { templateHandlerBase } from './templateHandlerBase';

const templatePathDefault = path.resolve(
  CONSTS_PATH_TEMPLATES_DIR,
  'node.brew.handlebars',
);

export const templateHandlerNodeBrew: ITemplateHandler = ({
  source,
  templatePath = templatePathDefault,
}) => {
  const destinationType = DestinationPackageTypeEnum.BREW;
  const templateHandler = templateHandlerBase({
    destinationType,
    source,
    templatePath,
  });

  const compile = () => templateHandler.compile();
  const generate = () => templateHandler.generate();
  const getType = () => templateHandler.getType();
  const load = () => templateHandler.load();

  return { compile, generate, getType, load };
};
