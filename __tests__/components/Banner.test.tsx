import React from 'react';
import { render, screen } from '@testing-library/react-native';
import type { ReactTestInstance } from 'react-test-renderer';

import { Banner } from '../../src/components';

describe('Banner component', () => {
  describe('Banner component - Default', () => {
    beforeEach(() => {
      render(
        <Banner
          testID="banner"
          accessible={true}
          accessibilityLabel="banner"
          content="Banner Default"
        />
      );
    });

    it('Banner component rendered successfully', () => {
      const content: ReactTestInstance = screen?.getByText('Banner Default');
      expect(content).toBeTruthy();
    });

    it('Banner component props', () => {
      const banner: ReactTestInstance = screen?.getByTestId('banner.text');
      expect(banner?.props?.children).toBe('Banner Default');
    });
  });

  describe('Banner component - Info', () => {
    beforeEach(() => {
      render(
        <Banner
          testID="banner"
          accessible={true}
          accessibilityLabel="banner"
          variant="info"
          content="Banner Info"
        />
      );
    });

    it('Banner component rendered successfully', () => {
      const content: ReactTestInstance = screen?.getByText('Banner Info');
      expect(content).toBeTruthy();

      const bannerIcon: ReactTestInstance = screen?.getByTestId('banner.icon');
      expect(bannerIcon).toBeTruthy();
    });

    it('Banner component props', () => {
      const banner: ReactTestInstance = screen?.getByTestId('banner.text');
      expect(banner?.props?.children).toBe('Banner Info');
    });
  });
});
