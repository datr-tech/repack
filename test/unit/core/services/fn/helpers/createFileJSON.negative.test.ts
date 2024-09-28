import { createFileJSON } from '@app/core/services/fs/helpers';

const pathBase = `${global.JEST_APP_MOCKS_DIR}/temp.${Date.now()}`;
const pathJSON = `${pathBase}.json`;
const pathTxt = `${pathBase}.txt`;

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('createFileJSON', () => {
        beforeAll(() => {
          global.jestTouchFileSync(pathJSON);
          global.jestTouchFileSync(pathTxt);
        });
        afterAll(() => {
          global.jestRemoveFileSync(pathJSON);
          global.jestRemoveFileSync(pathTxt);
        });
        describe('negative: should throw an error', () => {
          test("when 'path' has an invalid extension", () => {
            // Arrange
            const errorExpected = 'invalid extension';

            // Act
            const handler = () => {
              createFileJSON({ path: pathTxt });
            };

            // Assert
            expect(handler).toThrow(errorExpected);
          });
          test("when 'path' is an empty string", () => {
            // Arrange
            const errorExpected = 'path is empty';
            const path = '';

            // Act
            const handler = () => {
              createFileJSON({ path });
            };

            // Assert
            expect(handler).toThrow(errorExpected);
          });
        });
        describe('negative: should return false', () => {
          test("when 'path' is an existing .json file", () => {
            // Arrange
            const hasBeenCreatedExpected = false;

            // Act
            const hasBeenCreatedFound = createFileJSON({ path: pathJSON });

            // Assert
            expect(hasBeenCreatedFound).toEqual(hasBeenCreatedExpected);
          });
        });
      });
    });
  });
});
