import { CONSTS_PATH_APP_ROOT } from '@app/config/consts';
import { templateHandlerNodeBrew } from '@app/core/templateHandlers';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerNodeBrew', () => {
      describe('load', () => {
        describe('negative: should throw an error', () => {
          test('when templatePath does not represent a valid file object', () => {
            // Arrange
            const errorExpected = 'path is invalid';
            const testDir = process.env.REPACK_TEST_DIR as string;
            const packageDirPath = `${testDir}/mocks/files/valid`;
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
            const testDir = process.env.REPACK_TEST_DIR as string;
            const packageDirPath = `${testDir}/mocks/files/valid`;
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
