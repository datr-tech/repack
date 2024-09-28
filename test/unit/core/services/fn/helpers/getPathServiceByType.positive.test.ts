import { readFileSync } from 'node:fs';
import { PathTypeEnum } from '@app/config/enums';
import { getPathServiceByType } from '@app/core/services/fs/helpers';
import {
  IDirServiceOutput,
  IFileServiceOutput,
} from '@app/interfaces/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('getPathServiceByType', () => {
        describe('positive: should return the expected pathService', () => {
          test("when 'path' represents a valid file", () => {
            // Arrange
            const path = global.JEST_APP_MOCKS_MARKDOWN_VALID_PATH;
            const pathType = PathTypeEnum.FILE;
            const fileServiceContentsExpected = readFileSync(path, {
              encoding: 'utf8',
            });

            // Act
            const fileService = getPathServiceByType({
              path,
              pathType,
            }) as IFileServiceOutput;
            const fileServicePath = fileService.getPath();
            const fileServiceContentsFound = fileService.read() as string;
            const isValid = fileService.validate();

            // Assert
            expect(fileServicePath).toEqual(path);
            expect(fileServiceContentsFound).toEqual(
              fileServiceContentsExpected,
            );
            expect(isValid).toBe(true);
          });
          test("when 'path' represents a valid JSON file", () => {
            // Arrange
            const path = global.JEST_APP_MOCKS_PACKAGE_JSON_VALID_PATH;
            const pathType = PathTypeEnum.JSON;
            const fileServiceContentsExpected = JSON.parse(
              readFileSync(path, { encoding: 'utf8' }),
            );

            // Act
            const fileService = getPathServiceByType({
              path,
              pathType,
            }) as IFileServiceOutput;
            const fileServicePath = fileService.getPath();
            const fileServiceContentsFound = fileService.read() as object;
            const isValid = fileService.validate();

            // Assert
            expect(fileServicePath).toEqual(path);
            expect(fileServiceContentsFound).toEqual(
              fileServiceContentsExpected,
            );
            expect(isValid).toBe(true);
          });
          test("when 'path' represents a valid dir", () => {
            // Arrange
            const path = global.JEST_APP_MOCKS_DIR;
            const pathType = PathTypeEnum.DIR;

            // Act
            const fileService = getPathServiceByType({
              path,
              pathType,
            }) as IDirServiceOutput;
            const fileServicePath = fileService.getPath();
            const isValid = fileService.validate();

            // Assert
            expect(fileServicePath).toEqual(path);
            expect(isValid).toBe(true);
          });
        });
      });
    });
  });
});
