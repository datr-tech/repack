import { DestinationPackageTypeEnum } from '@app/config/enums';
import { templateHandlerBase } from '@app/core/templateHandlers';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerBase', () => {
      describe('load', () => {
        describe('negative: should return false', () => {
          test("when 'templatePath' did not represent a template but was a valid file object", () => {
            // Arrange
            const destinationType = DestinationPackageTypeEnum.BREW;
            const hasLoadedExpected = false;
            const testDir = process.env.REPACK_TEST_DIR as string;
            const packageDirPath = `${testDir}/mocks/files/valid`;
            const templatePath = `${testDir}/mocks/`;
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
            const errorExpected = 'path is invalid';
            const testDir = process.env.REPACK_TEST_DIR as string;
            const packageDirPath = `${testDir}/mocks/files/valid`;
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
