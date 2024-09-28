import { fileService } from '@app/core/services/fs';
import { IFileServiceOutput } from '@app/interfaces/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('fileService', () => {
        describe('validate', () => {
          describe("negative: should return 'false'", () => {
            test("when 'path' represents an existing dir", () => {
              // Arrange
              const isValidExpected = false;
              const path = global.JEST_APP_MOCKS_DIR;

              // Act
              const foundService = fileService({ path }) as IFileServiceOutput;
              const isValidFound = foundService.validate();

              // Assert
              expect(isValidFound).toBe(isValidExpected);
            });
          });
          describe('negative: should throw an error', () => {
            test("when 'path' is an empty string", () => {
              // Arrange
              const expected = 'path is empty';
              const path = '';

              // Act
              const foundService = fileService({ path }) as IFileServiceOutput;
              const handler = () => {
                foundService.validate();
              };

              // Assert
              expect(handler).toThrow(expected);
            });
            test("when 'path' is a one char string", () => {
              // Arrange
              const expected = 'path is empty';
              const path = ' ';

              // Act
              const foundService = fileService({ path }) as IFileServiceOutput;
              const handler = () => {
                foundService.validate();
              };

              // Assert
              expect(handler).toThrow(expected);
            });
            test("when 'path' is a non-empty, invalid string", () => {
              // Arrange
              const expected = 'path does not exist';
              const path = 'abc';

              // Act
              const foundService = fileService({ path }) as IFileServiceOutput;
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
});
