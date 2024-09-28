import { DestinationPackageTypeEnum } from '@app/config/enums';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';
import { templateHandlerBase } from '@app/core/templateHandlers';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerBase', () => {
      describe('load', () => {
        describe('negative: should return false', () => {
          test("when 'templatePath' did not represent a template but was a valid file object", () => {
            // Arrange
            const destinationType = DestinationPackageTypeEnum.BREW;
            const hasLoadedExpected = false;
            const packageDirPath = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
            const templatePath = global.JEST_APP_MOCKS_DIR;
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
        describe('negative: should throw an error', () => {
          test("when 'templatePath' did not represent a valid file object", () => {
            // Arrange
            const destinationType = DestinationPackageTypeEnum.BREW;
            const errorExpected = 'path does not exist';
            const packageDirPath = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
            const templatePath = 'abc';
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
            const handler = () => {
              templateHandler.load();
            };

            // Assert
            expect(handler).toThrow(errorExpected);
          });
        });
      });
    });
  });
});
