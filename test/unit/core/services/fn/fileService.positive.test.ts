import { readFileSync } from 'node:fs';
import { fileService } from '../../../../../src/core/services/fs';
import { IFileServiceOutput } from '../../../../../src/interfaces/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('fileService', () => {
        describe('positive: should return the expected object', () => {
          test("when 'path' represents a valid .md file", () => {
            // Arrange
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/README.md`;
            const contentsExpected = readFileSync(path, {
              encoding: 'utf8',
            });

            // Act
            const foundService = fileService({ path }) as IFileServiceOutput;
            const foundServicePath = foundService.getPath();
            const contentsFound = foundService.read() as string;
            const isValid = foundService.validate();

            // Assert
            expect(foundServicePath).toEqual(path);
            expect(contentsFound).toEqual(contentsExpected);
            expect(isValid).toBe(true);
          });
          test("when 'path' represents a valid .mjs file", () => {
            // Arrange
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/eslint.config.mjs`;
            const contentsExpected = readFileSync(path, {
              encoding: 'utf8',
            });

            // Act
            const foundService = fileService({ path }) as IFileServiceOutput;
            const foundServicePath = foundService.getPath();
            const contentsFound = foundService.read() as string;
            const isValid = foundService.validate();

            // Assert
            expect(foundServicePath).toEqual(path);
            expect(contentsFound).toEqual(contentsExpected);
            expect(isValid).toBe(true);
          });
          test("when 'path' represents a valid .ts file", () => {
            // Arrange
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/jest.config.ts`;
            const contentsExpected = readFileSync(path, {
              encoding: 'utf8',
            });

            // Act
            const foundService = fileService({ path }) as IFileServiceOutput;
            const foundServicePath = foundService.getPath();
            const contentsFound = foundService.read() as string;
            const isValid = foundService.validate();

            // Assert
            expect(foundServicePath).toEqual(path);
            expect(contentsFound).toEqual(contentsExpected);
            expect(isValid).toBe(true);
          });
        });
      });
    });
  });
});