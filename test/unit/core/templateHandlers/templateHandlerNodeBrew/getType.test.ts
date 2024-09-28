import { DestinationPackageTypeEnum } from '@app/config/enums';
import { templateHandlerNodeBrew } from '@app/core/templateHandlers';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerNodeBrew', () => {
      describe('getType', () => {
        test('should return the expected destination and source types', () => {
          // Arrange
          const destinationTypeExpected = DestinationPackageTypeEnum.BREW;
          const testDir = process.env.REPACK_TEST_DIR as string;
          const packageDirPath = `${testDir}/mocks/files/valid`;
          const templatePath = `${testDir}/mocks/templates/node.brew.handlebars`;
          const packageJSONWrapperObj = packageJSONWrapper({
            packageDirPath,
          });

          // Act
          const source = sourceNode({ packageJSONWrapperObj });
          const templateHandler = templateHandlerNodeBrew({
            source,
            templatePath,
          });
          const { destinationType, sourceType } = templateHandler.getType();

          // Assert
          expect(destinationType).toEqual(destinationTypeExpected);
          expect(sourceType).toEqual(source.getType());
        });
      });
    });
  });
});
