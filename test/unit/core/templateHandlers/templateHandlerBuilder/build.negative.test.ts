import { DestinationPackageTypeEnum } from '@app/config/enums';
import { templateHandlerBuilder } from '@app/core/templateHandlers';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';

describe('core', () => {
  describe('templateHandlers', () => {
    describe('templateHandlerBuilder', () => {
      describe('build', () => {
        describe('negative: should throw an error', () => {
          test("when there are no matches for 'destinationType'", () => {
            // Arrange
            const destinationType = DestinationPackageTypeEnum.UNK;
            const errorExpected = 'invalid templateHandlers';
            const testDir = process.env.REPACK_TEST_DIR as string;
            const packageDirPath = `${testDir}/mocks/files/valid`;
            const packageJSONWrapperObj = packageJSONWrapper({
              packageDirPath,
            });

            // Act
            const source = sourceNode({ packageJSONWrapperObj });
            const handler = () => {
              templateHandlerBuilder({
                destinationType,
                source,
              }).build();
            };

            // Assert
            expect(handler).toThrow(errorExpected);
          });
        });
      });
    });
  });
});
