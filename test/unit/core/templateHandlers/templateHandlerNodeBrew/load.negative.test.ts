import { CONSTS_PATH_APP_ROOT } from '@app/config/consts';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';
import { templateHandlerNodeBrew } from '@app/core/templateHandlers';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerNodeBrew', () => {
      describe('load', () => {
        describe('negative: should throw an error', () => {
          test('when templatePath does not represent a valid file object', () => {
            // Arrange
            const errorExpected = 'path does not exist';
            const packageDirPath = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
            const templatePath = '/invalid_path';
            const packageJSONWrapperObj = packageJSONWrapper({
              packageDirPath,
            });

            // Act
            const source = sourceNode({ packageJSONWrapperObj });
            const templateHandler = templateHandlerNodeBrew({
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
        describe('negative: should return false', () => {
          test('when templatePath represents a dir', () => {
            // Arrange
            const hasLoadedExpected = false;
            const packageDirPath = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
            const templatePath = CONSTS_PATH_APP_ROOT;
            const packageJSONWrapperObj = packageJSONWrapper({
              packageDirPath,
            });

            // Act
            const source = sourceNode({ packageJSONWrapperObj });
            const templateHandler = templateHandlerNodeBrew({
              source,
              templatePath,
            });
            const hasLoaded = templateHandler.load();

            // Assert
            expect(hasLoaded).toBe(hasLoadedExpected);
          });
        });
      });
    });
  });
});
