import { dirService } from '@app/core/services/fs';
import { IDirServiceOutput } from '@app/interfaces/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('dirService', () => {
        describe('negative: should return validate() = false', () => {
          test("when 'path' represents a valid .json file", () => {
            // Arrange
            const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_PATH;

            // Act
            const foundService = dirService({ path }) as IDirServiceOutput;
            const foundServicePath = foundService.getPath();
            const isValid = foundService.validate();

            // Assert
            expect(foundServicePath).toEqual(path);
            expect(isValid).toBe(false);
          });
          test("when 'path' represents a valid .ts file", () => {
            // Arrange
            const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_PATH;

            // Act
            const foundService = dirService({ path }) as IDirServiceOutput;
            const foundServicePath = foundService.getPath();
            const isValid = foundService.validate();

            // Assert
            expect(foundServicePath).toEqual(path);
            expect(isValid).toBe(false);
          });
        });
        describe('negative: should throw an error', () => {
          test("when 'path' is an empty string", () => {
            // Arrange
            const expected = 'path is empty';
            const path = '';

            // Act
            const foundService = dirService({ path }) as IDirServiceOutput;
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
            const foundService = dirService({ path }) as IDirServiceOutput;
            const handler = () => {
              foundService.validate();
            };

            // Assert
            expect(handler).toThrow(expected);
          });
          test("when 'path' is invalid", () => {
            // Arrange
            const expected = 'path is invalid';
            const path = 'abc';

            // Act
            const foundService = dirService({ path }) as IDirServiceOutput;
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
