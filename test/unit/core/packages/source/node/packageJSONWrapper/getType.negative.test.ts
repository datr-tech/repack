import { SourcePackageTypeEnum } from '@app/config/enums';
import { packageJSONWrapper } from '@app/core/packages/source/node';

describe('core', () => {
  describe('packages', () => {
    describe('source', () => {
      describe('node', () => {
        describe('packageJSONWrapper', () => {
          describe('getType', () => {
            describe('negative: should return the expected enum', () => {
              test('when a package.json (with a type property) has not been loaded', () => {
                // Arrange
                const packageDirPath =
                  global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
                const typeExpected = SourcePackageTypeEnum.NODE;

                // Act
                const packageJSONObj = packageJSONWrapper({ packageDirPath });
                const typeFound = packageJSONObj.getType();

                expect(typeFound).toEqual(typeExpected);
              });
              test('when a package.json (without a type property) has not been loaded', () => {
                // Arrange
                const packageDirPath =
                  global.JEST_APP_MOCKS_PACKAGE_JSON_INVALID_DIR;
                const typeExpected = SourcePackageTypeEnum.NODE;

                // Act
                const packageJSONObj = packageJSONWrapper({ packageDirPath });
                const typeFound = packageJSONObj.getType();

                expect(typeFound).toEqual(typeExpected);
              });
            });
          });
        });
      });
    });
  });
});
