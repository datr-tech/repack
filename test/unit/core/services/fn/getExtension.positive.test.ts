import { getExtension } from '@app/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('getExtension', () => {
        describe('positive: should return the expected extension', () => {
          test("when 'path' represents a valid .json file", () => {
            // Arrange
            const expected = '.json';
            const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_PATH;

            // Act
            const found = getExtension({ pathStr: path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' represents a valid .md file", () => {
            // Arrange
            const expected = '.md';
            const path = global.JEST_APP_MOCKS_MARKDOWN_VALID_PATH;

            // Act
            const found = getExtension({ pathStr: path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' represents a valid .mjs file", () => {
            // Arrange
            const expected = '.mjs';
            const path = global.JEST_APP_MOCKS_MJS_VALID_PATH;

            // Act
            const found = getExtension({ pathStr: path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' represents a valid .ts file", () => {
            // Arrange
            const expected = '.ts';
            const path = global.JEST_APP_MOCKS_TS_VALID_PATH;

            // Act
            const found = getExtension({ pathStr: path });

            // Assert
            expect(found).toBe(expected);
          });
        });
      });
    });
  });
});
