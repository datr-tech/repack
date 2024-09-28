import { DestinationPackageTypeEnum } from '@app/config/enums';
import { templateHandlerBase } from '@app/core/templateHandlers';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerBase', () => {
      describe('generate', () => {
        describe('negative: should return an empty string', () => {
          test('when the template was not been compiled', () => {
            // Arrange
            const destinationType = DestinationPackageTypeEnum.BREW;
            const nameExpected = '';
            const testDir = process.env.REPACK_TEST_DIR as string;
            const packageDirPath = `${testDir}/mocks/files/valid`;
            const templatePath = `${testDir}/mocks/templates/node.brew.handlebars`;
            const packageJSONWrapperObj = packageJSONWrapper({
              packageDirPath,
            });

            // Act
            const source = sourceNode({ packageJSONWrapperObj });
            const templateHandler = templateHandlerBase({
              destinationType,
              source,
              templatePath,
            });
            templateHandler.load();
            const nameFound = templateHandler.generate();

            // Assert
            expect(nameFound).toEqual(nameExpected);
          });
          test('when the template was not been loaded', () => {
            // Arrange
            const destinationType = DestinationPackageTypeEnum.BREW;
            const nameExpected = '';
            const testDir = process.env.REPACK_TEST_DIR as string;
            const packageDirPath = `${testDir}/mocks/files/valid`;
            const templatePath = `${testDir}/mocks/templates/node.brew.handlebars`;
            const packageJSONWrapperObj = packageJSONWrapper({
              packageDirPath,
            });

            // Act
            const source = sourceNode({ packageJSONWrapperObj });
            const templateHandler = templateHandlerBase({
              destinationType,
              source,
              templatePath,
            });
            const nameFound = templateHandler.generate();

            // Assert
            expect(nameFound).toEqual(nameExpected);
          });
        });
      });
    });
  });
});
