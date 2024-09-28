import { isFile } from '@app/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('isFile', () => {
        describe("positive: should return 'true'", () => {
          test("when 'path' represents a valid file", () => {
            // Arrange
            const expected = true;
            const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_PATH;

            // Act
            const found = isFile({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
      });
    });
  });
});
