import Handlebars, { TemplateDelegate } from 'handlebars';
import { SourcePackageTypeEnum } from '@app/config/enums';
import { fileService } from '@app/core/services/fs';
import { ITemplateHandler } from '@app/interfaces/core/templateHandlers';

/**
 * A base templateHandler function.
 *
 * @example
 *  ```
 *  // 1. Define the package and the template paths
 *  const packageDirPath = '/path/to/package/root';
 *  const templatePath = '/path/to/handlebars/template';
 *
 *  // 2. Define a function representing the source package
 *  const packageJSONWrapperObj = packageJSONWrapper({ packageDirPath });
 *  const source = sourceNode({ packageJSONWrapperObj });
 *
 *  // 3. Define the destination type
 *  const destinationType = DestinationPackageTypeEnum.BREW;
 *
 *  // 4. Define the template handler
 *  const templateHandler = templateHandlerBase({ destinationType, source, templatePath });
 *
 *  // 5. Load the template
 *  templateHandler.load();
 *
 *  // 6. Compile the template
 *  templateHandler.compile();
 *
 *  // 7. Populate the template with source data
 *  const templateWithSourceData = templateHandler.generate();
 * ```
 */
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
