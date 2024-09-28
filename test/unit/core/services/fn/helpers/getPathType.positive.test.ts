import { PathTypeEnum } from '@app/config/enums';
import { getPathType } from '@app/core/services/fs/helpers';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('getPathType', () => {
        describe("positive: should return 'PathTypeEnum.DIR'", () => {
          test("when 'path' represents a valid dir", () => {
            // Arrange
            const expected = PathTypeEnum.DIR;
            const path = global.JEST_APP_MOCKS_DIR;

            // Act
            const found = getPathType({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
        describe("positive: should return 'PathTypeEnum.FILE'", () => {
          test("when 'path' represents a valid, non-JSON, .md file", () => {
            // Arrange
            const expected = PathTypeEnum.FILE;
            const path = global.JEST_APP_MOCKS_MARKDOWN_VALID_PATH;

            // Act
            const found = getPathType({ path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' represents a valid, non-JSON, .mjs file", () => {
            // Arrange
            const expected = PathTypeEnum.FILE;
            const path = global.JEST_APP_MOCKS_MJS_VALID_PATH;

            // Act
            const found = getPathType({ path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' represents a valid, non-JSON, .ts file", () => {
            // Arrange
            const expected = PathTypeEnum.FILE;
            const path = global.JEST_APP_MOCKS_TS_VALID_PATH;

            // Act
            const found = getPathType({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
        describe("positive: should return 'PathTypeEnum.JSON'", () => {
          test("when 'path' represents a valid JSON file", () => {
            // Arrange
            const expected = PathTypeEnum.JSON;
            const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_PATH;

            // Act
            const found = getPathType({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
      });
    });
  });
});
