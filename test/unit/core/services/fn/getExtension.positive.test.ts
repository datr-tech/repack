import { getExtension } from '@app/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('getExtension', () => {
        describe('positive: should return the expected extension', () => {
          test("when 'path' represents a valid .json file", () => {
            // Arrange
            const expected = '.json';
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/package.json`;

            // Act
            const found = getExtension({ pathStr: path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' represents a valid .md file", () => {
            // Arrange
            const expected = '.md';
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/README.md`;

            // Act
            const found = getExtension({ pathStr: path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' represents a valid .mjs file", () => {
            // Arrange
            const expected = '.mjs';
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/eslint.config.mjs`;

            // Act
            const found = getExtension({ pathStr: path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' represents a valid .ts file", () => {
            // Arrange
            const expected = '.ts';
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/jest.config.ts`;

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
