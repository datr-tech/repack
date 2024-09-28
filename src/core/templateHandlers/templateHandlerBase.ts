import Handlebars, { TemplateDelegate } from 'handlebars';
import { SourcePackageTypeEnum } from '@app/config/enums';
import { fileService } from '@app/core/services/fs';
import { ITemplateHandler } from '@app/interfaces/core/templateHandlers';

export const templateHandlerBase: ITemplateHandler = ({
  destinationType,
  source,
  templatePath,
}) => {
  let hasBeenCompiled: boolean = false;
  let hasBeenLoaded: boolean = false;

  let template: TemplateDelegate;
  let templateFileContents: string = '';
  let templatePopulated: string = '';

  const compile = () => {
    if (hasBeenLoaded) {
      template = Handlebars.compile(templateFileContents);
      hasBeenCompiled = true;
    }

    return hasBeenCompiled;
  };

  const generate = () => {
    try {
      if (templatePopulated === '' && hasBeenLoaded) {
        const templateData = source.getData();
        templatePopulated = template(templateData);
      }
    } catch {
      return templatePopulated;
    }

    return templatePopulated;
  };

  const getType = () => ({
    destinationType,
    sourceType: source.getType() as SourcePackageTypeEnum,
  });

  const load = () => {
    hasBeenLoaded = false;

    const templateFile = fileService({ path: templatePath });
    const isValid = templateFile.validate();

    if (isValid) {
      templateFileContents = templateFile.read() as string;
      hasBeenLoaded = templateFileContents !== '';
    }

    return hasBeenLoaded;
  };

  return { compile, generate, getType, load };
};
