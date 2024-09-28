import { readFileSync } from 'node:fs';
import { fileServiceJSON } from '@app/core/services/fs';
import { IFileServiceOutput } from '@app/interfaces/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('fileServiceJSON', () => {
        describe('positive: should return the expected object', () => {
          test("when 'path' represents a valid .json file", () => {
            // Arrange
            const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_PATH;
            const contentsExpected = JSON.parse(
              readFileSync(path, {
                encoding: 'utf8',
              }),
            );

            // Act
            const foundService = fileServiceJSON({
              path,
            }) as IFileServiceOutput;
            const foundServicePath = foundService.getPath();
            const contentsFound = foundService.read() as object;
            const isValid = foundService.validate();

            // Assert
            expect(foundServicePath).toEqual(path);
            expect(contentsFound).toEqual(contentsExpected);
            expect(isValid).toBe(true);
          });
        });
      });
    });
  });
});
