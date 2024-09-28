import { fileServiceJSON } from '@app/core/services/fs';
import { IFileServiceOutput } from '@app/interfaces/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('fileServiceJSON', () => {
        describe('read', () => {
          describe('negative: should throw an error', () => {
            test("when 'path' represents a non-JSON file", () => {
              // Arrange
              const expectedError = 'parse error';
              const path = global.JEST_APP_MOCKS_MARKDOWN_VALID_PATH;

              // Act
              const foundService = fileServiceJSON({
                path,
              }) as IFileServiceOutput;
              const foundServicePath = foundService.getPath();
              const isValid = foundService.validate();
              const handler = () => {
                foundService.read();
              };

              // Assert
              expect(foundServicePath).toEqual(path);
              expect(isValid).toBe(false);
              expect(handler).toThrow(expectedError);
            });
          });
        });
      });
    });
  });
});
