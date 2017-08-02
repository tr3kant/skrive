import { series } from 'gulp';
import { processStyles } from './styles';

const build = series(
  series(
    processStyles,
  )
);

export default build;
