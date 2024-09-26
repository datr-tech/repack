import { isJSON } from '@app/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('isJSON', () => {
        describe('negative: should return false', () => {
          test("when 'path' represents a valid .md file", () => {
            // Arrange
            const expected = false;
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/README.md`;

            // Act
            const found = isJSON({ path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' represents a valid .mjs file", () => {
            // Arrange
            const expected = false;
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/eslint.config.mjs`;

            // Act
            const found = isJSON({ path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' represents a valid .ts file", () => {
            // Arrange
            const expected = false;
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/jest.config.ts`;

            // Act
            const found = isJSON({ path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' is a valid, non-empty string", () => {
            // Arrange
            const expected = false;
            const path = 'abc';

            // Act
            const found = isJSON({ path });

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
              isJSON({ path });
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
              isJSON({ path });
            };

            // Assert
            expect(handler).toThrow(expected);
          });
        });
      });
    });
  });
});
