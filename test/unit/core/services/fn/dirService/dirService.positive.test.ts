import { dirService } from '../../../../../../src/core/services/fs';
import { IDirServiceOutput } from '../../../../../../src/interfaces/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('dirService', () => {
        describe('positive: should return the expected object', () => {
          test("when 'path' represents a valid dir", () => {
            // Arrange
            const path = global.JEST_APP_MOCKS_DIR;

            // Act
            const foundService = dirService({ path }) as IDirServiceOutput;
            const foundServicePath = foundService.getPath();
            const isValid = foundService.validate();

            // Assert
            expect(foundServicePath).toEqual(path);
            expect(isValid).toBe(true);
          });
        });
      });
    });
  });
});
