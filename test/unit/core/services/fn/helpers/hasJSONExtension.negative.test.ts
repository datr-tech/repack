import { hasJSONExtension } from '@app/core/services/fs/helpers';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('hasJSONExtension', () => {
        describe('negative: should return false', () => {
          test("when 'path' represents a valid .md file", () => {
            // Arrange
            const expected = false;
            const path = global.JEST_APP_MOCKS_MARKDOWN_VALID_PATH;

            // Act
            const found = hasJSONExtension({ path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' represents a valid .mjs file", () => {
            // Arrange
            const expected = false;
            const path = global.JEST_APP_MOCKS_MJS_VALID_PATH;

            // Act
            const found = hasJSONExtension({ path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' represents a valid .ts file", () => {
            // Arrange
            const expected = false;
            const path = global.JEST_APP_MOCKS_TS_VALID_PATH;

            // Act
            const found = hasJSONExtension({ path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' is a valid, non-empty string", () => {
            // Arrange
            const expected = false;
            const path = 'abc';

            // Act
            const found = hasJSONExtension({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
        describe('negative: should throw an error', () => {
          test("when 'path' is an empty string", () => {
            // Arrange
            const expected = 'path is empty';
            const path = '';

            // Act
            const handler = () => {
              hasJSONExtension({ path });
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
              hasJSONExtension({ path });
            };

            // Assert
            expect(handler).toThrow(expected);
          });
        });
      });
    });
  });
});
