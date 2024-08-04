import React, { useState, type ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StyleSheet, View } from 'react-native';
import { isEmpty } from '@rnpack/utils';

import {
  AutocompleteDropdown,
  responsive,
  useAppTheme,
} from 'react-native-design';
import type {
  AutocompleteDropdownProps,
  MakeStyles,
} from 'react-native-design';

const dataSet: Pick<AutocompleteDropdownProps, 'dataSet'>['dataSet'] = [
  { id: '1', title: 'Cupcake' },
  { id: '2', title: 'Donut' },
  { id: '3', title: 'Eclair' },
  { id: '4', title: 'Froyo' },
  { id: '5', title: 'Gingerbread' },
  { id: '6', title: 'Honeycomb' },
  { id: '7', title: 'Ice Cream Sandwich' },
  { id: '8', title: 'Jelly Bean' },
  { id: '9', title: 'KitKat' },
  { id: '10', title: 'Lollipop' },
  { id: '11', title: 'Marshmallow' },
  { id: '12', title: 'Nougat' },
  { id: '13', title: 'Oreo' },
  { id: '14', title: 'Pie' },
];

const onOpenSuggestionsList = (_: any) => {};

const meta = {
  component: AutocompleteDropdown,
  decorators: [
    (Story) => {
      const { colors } = useAppTheme();

      const styles = makeStyles({ colors });

      return (
        <View style={styles?.container}>
          <Story />
        </View>
      );
    },
  ],
  args: {
    containerStyle: {
      width: '100%',
    },
  },
  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof AutocompleteDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: StoryObj<ComponentProps<typeof AutocompleteDropdown>> = {
  args: {
    label: 'Android Versions',
    placeholder: 'Enter android version',
    emptyResultText: 'Android version not found',
    onOpenSuggestionsList,
  },
  render: (args) => {
    const [searchText, setSearchText] = useState<string>('');

    const filter = dataSet.filter((item) =>
      item.title?.toLocaleLowerCase()?.includes(searchText?.toLocaleLowerCase())
    );

    function onChangeText(text: string) {
      setSearchText(text);
    }

    return (
      <AutocompleteDropdown
        {...args}
        dataSet={isEmpty(searchText) ? dataSet : filter}
        onChangeText={onChangeText}
      />
    );
  },
};

function makeStyles({ colors }: MakeStyles) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: responsive.size(10),
      backgroundColor: colors?.surface,
    },
  });
  return styles;
}
