import { readFileSync } from 'node:fs';
import { fileServiceJSON } from '../../../../../src/core/services/fs';
import { IFileServiceOutput } from '../../../../../src/interfaces/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('fileServiceJSON', () => {
        describe('positive: should return the expected object', () => {
          test("when 'path' represents a valid .json file", () => {
            // Arrange
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/package.json`;
            const contentsExpected = JSON.parse(
              readFileSync(path, {
                encoding: 'utf8',
              })
            );

            // Act
            const foundService = fileServiceJSON({ path }) as IFileServiceOutput;
            const foundServicePath = foundService.getPath();
            const contentsFound = foundService.read() as object;
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