import { fileService } from '@app/core/services/fs';
import { IFileServiceOutput } from '@app/interfaces/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('fileService', () => {
        describe('positive: should return the expected object', () => {
          test("when 'path' represents a valid .md file", () => {
            // Arrange
            const path = global.JEST_APP_MOCKS_MARKDOWN_VALID_PATH;
            const contentsExpected = global.jestReadFileSync(path);

            // Act
            const foundService = fileService({ path }) as IFileServiceOutput;
            const foundServicePath = foundService.getPath();
            const contentsFound = foundService.read() as string;
            const isValid = foundService.validate();

            // Assert
            expect(foundServicePath).toEqual(path);
            expect(contentsFound).toEqual(contentsExpected);
            expect(isValid).toBe(true);
          });
          test("when 'path' represents a valid .mjs file", () => {
            // Arrange
            const path = global.JEST_APP_MOCKS_MJS_VALID_PATH;
            const contentsExpected = global.jestReadFileSync(path);

            // Act
            const foundService = fileService({ path }) as IFileServiceOutput;
            const foundServicePath = foundService.getPath();
            const contentsFound = foundService.read() as string;
            const isValid = foundService.validate();

            // Assert
            expect(foundServicePath).toEqual(path);
            expect(contentsFound).toEqual(contentsExpected);
            expect(isValid).toBe(true);
          });
          test("when 'path' represents a valid .ts file", () => {
            // Arrange
            const path = global.JEST_APP_MOCKS_TS_VALID_PATH;
            const contentsExpected = global.jestReadFileSync(path);

            // Act
            const foundService = fileService({ path }) as IFileServiceOutput;
            const foundServicePath = foundService.getPath();
            const contentsFound = foundService.read() as string;
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
