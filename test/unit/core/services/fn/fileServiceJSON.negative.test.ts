import { fileServiceJSON } from '@app/core/services/fs';
import { IFileServiceOutput } from '@app/interfaces/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('fileServiceJSON', () => {
        describe('negative: should return the expected object', () => {
          test("when 'path' represents a non-JSON file", () => {
            // Arrange
            const expectedError = 'parse error';
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/README.md`;

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
        describe('negative: validate() should throw an error', () => {
          test("when 'path' is an empty string", () => {
            // Arrange
            const expected = 'path is empty';
            const path = '';

            // Act
            const foundService = fileServiceJSON({
              path,
            }) as IFileServiceOutput;
            const handler = () => {
              foundService.validate();
            };

            // Assert
            expect(handler).toThrow(expected);
          });
          test("when 'path' is a one char empty string", () => {
            // Arrange
            const expected = 'path is empty';
            const path = ' ';

            // Act
            const foundService = fileServiceJSON({
              path,
            }) as IFileServiceOutput;
            const handler = () => {
              foundService.validate();
            };

            // Assert
            expect(handler).toThrow(expected);
          });
          test("when 'path' is a one char empty string", () => {
            // Arrange
            const expected = 'path is invalid';
            const path = 'abc';

            // Act
            const foundService = fileServiceJSON({
              path,
            }) as IFileServiceOutput;
            const handler = () => {
              foundService.validate();
            };

            // Assert
            expect(handler).toThrow(expected);
          });
        });
      });
    });
  });
});
