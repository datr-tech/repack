import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules'],
    alias: {
      '@repack': path.resolve(__dirname, 'src/'),
      '@repacktest': path.resolve(__dirname, 'test/'),
    },
  },
  target: 'node',
  output: {
    filename: 'repack.cjs',
    path: path.resolve(__dirname, 'dist'),
  },
};
