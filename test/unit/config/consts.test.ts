import {
  CONSTS_PROGRAMME_NAME,
  CONSTS_PROGRAMME_DESCRIPTION,
  CONSTS_COMMAND_REPACK_NAME,
  CONSTS_COMMAND_REPACK_DESCRIPTION,
  CONSTS_UTILS_EMPTY_STRING,
  CONSTS_UTILS_FILE_EXTENSION_JSON,
  CONSTS_UTILS_PERIOD_STRING,
} from '@app/config/consts';

describe('config', () => {
  describe('consts', () => {
    test('CONSTS_PROGRAMME_NAME', () => {
      expect(CONSTS_PROGRAMME_NAME).toBe('repack');
    });
    test('CONSTS_PROGRAMME_DESCRIPTION', () => {
      expect(CONSTS_PROGRAMME_DESCRIPTION).toBe(
        'Repackage CLI language packages',
      );
    });
    test('CONSTS_COMMAND_REPACK_NAME', () => {
      expect(CONSTS_COMMAND_REPACK_NAME).toBe('repack');
    });
    test('CONSTS_COMMAND_REPACK_DESCRIPTION', () => {
      expect(CONSTS_COMMAND_REPACK_DESCRIPTION).toBe(
        "Repackage 'from' 'to' packages",
      );
    });
    test('CONSTS_UTILS_EMPTY_STRING', () => {
      expect(CONSTS_UTILS_EMPTY_STRING).toBe('');
    });
    test('CONSTS_UTILS_FILE_EXTENSION_JSON', () => {
      expect(CONSTS_UTILS_FILE_EXTENSION_JSON).toBe('.json');
    });
    test('CONSTS_UTILS_PERIOD_STRING', () => {
      expect(CONSTS_UTILS_PERIOD_STRING).toBe('.');
    });
  });
});
