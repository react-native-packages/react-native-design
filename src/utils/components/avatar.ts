import { responsive } from '@rnpack/utils';

import type { AvatarShape, AvatarSize } from '../../types';

function getAvatarSize(size: AvatarSize): number {
  const defaultSize = responsive?.size(45);

  switch (size) {
    case 'small':
      return responsive?.size(20);

    case 'medium':
      return defaultSize;

    case 'large':
      return responsive?.size(75);

    case 'x-large':
      return responsive?.size(90);

    case 'xx-large':
      return responsive?.size(120);

    case 'xxx-large':
      return responsive?.size(180);

    default:
      return defaultSize;
  }
}
function getAvatarBorderRadius(shape: AvatarShape, size: AvatarSize) {
  switch (shape) {
    case 'rect':
      return responsive?.size(10);

    case 'rect-sharp':
      return 0;

    case 'round':
      return responsive?.size(getAvatarSize(size) / 4);

    case 'circle':
      return responsive?.size(1000);
  }
}

export { getAvatarSize, getAvatarBorderRadius };
