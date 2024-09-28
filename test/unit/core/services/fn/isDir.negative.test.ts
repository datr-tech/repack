import { isDir } from '@app/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('isDir', () => {
        describe('negative: should throw an error', () => {
          test("when 'path' is an empty string", () => {
            // Arrange
            const expected = 'path is empty';
            const path = '';

            // Act
            const handler = () => {
              isDir({ path });
            };

            // Assert
            expect(handler).toThrow(expected);
          });
          test("when 'path' only contains a one char space", () => {
            // Arrange
            const expected = 'path is empty';
            const path = ' ';

            // Act
            const handler = () => {
              isDir({ path });
            };

            // Assert
            expect(handler).toThrow(expected);
          });
          test("when 'path' is an invalid string", () => {
            // Arrange
            const expected = 'path is invalid';
            const path = 'abc';

            // Act
            const handler = () => {
              isDir({ path });
            };

            // Assert
            expect(handler).toThrow(expected);
          });
        });
        describe('negative: should return false', () => {
          test("when 'path' represents a file", () => {
            // Arrange
            const expected = false;
            const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_PATH;

            // Act
            const found = isDir({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
      });
    });
  });
});
