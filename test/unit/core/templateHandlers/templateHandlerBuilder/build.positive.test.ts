import { DestinationPackageTypeEnum } from '@app/config/enums';
import { templateHandlerBuilder } from '@app/core/templateHandlers';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerBuilder', () => {
      describe('build', () => {
        test('positive: should return the expected templateHandler', () => {
          // Arrange
          const destinationTypeExpected = DestinationPackageTypeEnum.BREW;
          const testDir = process.env.REPACK_TEST_DIR as string;
          const packageDirPath = `${testDir}/mocks/files/valid`;
          const packageJSONWrapperObj = packageJSONWrapper({
            packageDirPath,
          });

          // Act
          const source = sourceNode({ packageJSONWrapperObj });
          const templateHandler = templateHandlerBuilder({
            destinationType: destinationTypeExpected,
            source,
          }).build();
          const { destinationType, sourceType } = templateHandler.getType();

          // Assert
          expect(destinationType).toEqual(destinationTypeExpected);
          expect(sourceType).toEqual(source.getType());
        });
      });
    });
  });
});
