import { DestinationPackageTypeEnum } from '@app/config/enums';
import { templateHandlerBase } from '@app/core/templateHandlers';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerBase', () => {
      describe('load', () => {
        describe('positive: should return true', () => {
          test('when the template has been loaded', () => {
            // Arrange
            const destinationType = DestinationPackageTypeEnum.BREW;
            const hasLoadedExpected = true;
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
            const hasLoadedFound = templateHandler.load();

            // Assert
            expect(hasLoadedFound).toEqual(hasLoadedExpected);
          });
        });
      });
    });
  });
});
