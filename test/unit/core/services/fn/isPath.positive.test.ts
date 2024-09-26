import { isPath } from '@app/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('isPath', () => {
        describe("positive: should return 'true'", () => {
          test("when 'path' is a non-empty string", () => {
            // Arrange
            const expected = true;
            const path = process.env.REPACK_ROOT_DIR as string;

            // Act
            const found = isPath({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
      });
    });
  });
});
