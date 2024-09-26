import { PathTypeEnum } from '@app/config/enums';
import { getPathType } from '@app/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('getPathType', () => {
        describe("positive: should return 'PathTypeEnum.DIR'", () => {
          test("when 'path' represents a valid dir", () => {
            // Arrange
            const expected = PathTypeEnum.DIR;
            const path = process.env.REPACK_ROOT_DIR as string;

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
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/README.md`;

            // Act
            const found = getPathType({ path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' represents a valid, non-JSON, .mjs file", () => {
            // Arrange
            const expected = PathTypeEnum.FILE;
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/eslint.config.mjs`;

            // Act
            const found = getPathType({ path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' represents a valid, non-JSON, .ts file", () => {
            // Arrange
            const expected = PathTypeEnum.FILE;
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/jest.config.ts`;

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
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/package.json`;

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
