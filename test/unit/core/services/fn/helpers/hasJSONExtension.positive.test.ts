import { hasJSONExtension } from '@app/core/services/fs/helpers';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('hasJSONExtension', () => {
        describe("positive: should return 'true'", () => {
          test("when 'path' represents a valid file", () => {
            // Arrange
            const expected = true;
            const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_PATH;

            // Act
            const found = hasJSONExtension({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
      });
    });
  });
});
