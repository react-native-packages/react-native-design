import { themes } from './../src/themes';

describe('Theme', () => {
  it('Both light and dark colors have same keys', () => {
    expect(Object.keys(themes?.light)).toMatchObject(Object.keys(themes?.dark));
  });
});
