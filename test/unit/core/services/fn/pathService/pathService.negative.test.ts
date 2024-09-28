import { PathTypeEnum } from '@app/config/enums';
import { pathService } from '@app/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('pathService', () => {
        describe("positive: should return a 'negative' pathType", () => {
          test("when 'path' is an empty string", () => {
            // Arrange
            const path = '';
            const expected = PathTypeEnum.NF;

            // Act
            const { getPathType } = pathService({ path });
            const pathType = getPathType();

            // Assert
            expect(pathType).toBe(expected);
          });
          test("when 'path' is a one char string", () => {
            // Arrange
            const path = ' ';
            const expected = PathTypeEnum.NF;

            // Act
            const { getPathType } = pathService({ path });
            const pathType = getPathType();

            // Assert
            expect(pathType).toBe(expected);
          });
        });
        describe('positive: should throw an error', () => {
          test("when 'path' is invalid", () => {
            // Arrange
            const path = 'abc';
            const expectedError = 'path does not exist';

            // Act
            const { getPathType } = pathService({ path });
            const handler = () => {
              getPathType();
            };

            // Assert
            expect(handler).toThrow(expectedError);
          });
        });
      });
    });
  });
});
