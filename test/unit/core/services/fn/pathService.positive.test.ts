import { readFileSync } from 'node:fs';
import { PathTypeEnum } from '../../../../../src/config/enums';
import { pathService } from '../../../../../src/core/services/fs';
import {
  IDirServiceOutput,
  IFileServiceOutput,
} from '../../../../../src/interfaces/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('pathService', () => {
        describe("positive: should return the expected functions", () => {
          test("when 'path' represents a valid dir", () => {
            // Arrange
            const path = process.env.REPACK_ROOT_DIR as string;
            const expectedPathType = PathTypeEnum.DIR;
            const expectedIsValid = true;

            // Act
            const { getPathType, getPathServiceByType } = pathService({ path });
            const pathType = getPathType();
            const foundService = getPathServiceByType({ pathType }) as IDirServiceOutput;
            const foundIsValid = foundService.validate();

            // Assert
            expect(pathType).toBe(expectedPathType);
            expect(foundIsValid).toBe(expectedIsValid);
          });
          test("when 'path' represents a valid file", () => {
            // Arrange
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/README.md`;
            const expectedPathType = PathTypeEnum.FILE;
            const expectedIsValid = true;

            // Act
            const { getPathType, getPathServiceByType } = pathService({ path });
            const pathType = getPathType();
            const foundService = getPathServiceByType({ pathType }) as IFileServiceOutput;
            const foundIsValid = foundService.validate();

            // Assert
            expect(pathType).toBe(expectedPathType);
            expect(foundIsValid).toBe(expectedIsValid);
          });
          test("when 'path' represents a valid JSON file", () => {
            // Arrange
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/package.json`;
            const expectedPathType = PathTypeEnum.JSON;
            const expectedIsValid = true;
            const expectedContents = JSON.parse(
              readFileSync(path, {
                encoding: 'utf8',
              })
            );

            // Act
            const { getPathType, getPathServiceByType } = pathService({ path });
            const pathType = getPathType();
            const foundService = getPathServiceByType({ pathType }) as IFileServiceOutput;
            const foundIsValid = foundService.validate();
            const foundContents = foundService.read() as object;

            // Assert
            expect(pathType).toBe(expectedPathType);
            expect(foundContents).toEqual(expectedContents);
            expect(foundIsValid).toBe(expectedIsValid);
          });
        });
      });
    });
  });
});
