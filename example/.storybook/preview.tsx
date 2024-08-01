import type { Preview } from '@storybook/react';
import { DesignProvider } from 'react-native-design';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <DesignProvider>
        <Story />
      </DesignProvider>
    ),
  ],
};

export default preview;
