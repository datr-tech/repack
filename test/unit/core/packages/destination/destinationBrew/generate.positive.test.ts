import { existsSync } from 'node:fs';
import { CONSTS_PATH_OUT_PATH_TEMP } from '@app/config/consts';
import { SourcePackageTypeEnum } from '@app/config/enums';
import { sourceBuilder } from '@app/core/packages/builders';
import { destinationBrew } from '@app/core/packages/destination/brew';
import { ISourceOutput } from '@app/interfaces/core/packages/source';

const outPath = `${global.JEST_APP_MOCKS_DIR}/formula.${Date.now()}.rb`;
const outPathDefault = CONSTS_PATH_OUT_PATH_TEMP;

describe('core', () => {
  describe('packages', () => {
    describe('destination', () => {
      describe('destinationBrew', () => {
        describe('generate', () => {
          afterAll(() => {
            global.jestRemoveFileSync(outPath);
            global.jestRemoveFileSync(outPathDefault);
          });
          describe('positive: should generate the expected formula file', () => {
            test("to the specified 'outPath", () => {
              // Arrange
              const doesExistExpected = true;
              const hasBeenGeneratedExpected = true;
              const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
              const sourceType = SourcePackageTypeEnum.NODE;

              // Act: Source
              const source = sourceBuilder({
                path,
                sourceType,
              }).build() as ISourceOutput;

              // Act: Destination
              const destination = destinationBrew({ source });
              const hasBeenGeneratedFound = destination.generate({ outPath });
              const doesExistFound = existsSync(outPath);

              // Assert
              expect(hasBeenGeneratedFound).toEqual(hasBeenGeneratedExpected);
              expect(doesExistFound).toBe(doesExistExpected);
            });
            test("to the default 'outPath", () => {
              // Arrange
              const doesExistExpected = true;
              const hasBeenGeneratedExpected = true;
              const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_DIR;
              const sourceType = SourcePackageTypeEnum.NODE;

              // Act: Source
              const source = sourceBuilder({
                path,
                sourceType,
              }).build() as ISourceOutput;

              // Act: Destination
              const destination = destinationBrew({ source });
              const hasBeenGeneratedFound = destination.generate({});
              const doesExistFound = existsSync(outPathDefault);

              // Assert
              expect(hasBeenGeneratedFound).toEqual(hasBeenGeneratedExpected);
              expect(doesExistFound).toBe(doesExistExpected);
            });
          });
        });
      });
    });
  });
});
