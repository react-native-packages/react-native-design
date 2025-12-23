# react-native-design

react-native-design have lot of ui components with lot of predefined function and features

## Installation

```sh
yarn add react-native-design react-native-nitro-modules
```

## Required dependencies

```sh
yarn add @react-native-async-storage/async-storage moti react-native-autocomplete-dropdown react-native-gesture-handler react-native-svg react-native-vector-icons react-native-reanimated react-native-worklets @rnpack/utils buffer
```

## Usage

## Components

## Text

```js
import { Text } from 'react-native-design';

// ...

<Text
    testID="text"
    variant="text"
    numberOfLines={1}
    style={styles?.text}
>
    text
</Text>

// ...
```

## Props

| Prop name                 | Description                                   | type                                                  |
| ------------------------- | --------------------------------------------- | ----------------------------------------------------- |
| testID                    | Used for testing                              | string                                                |
| variant                   | Access different type of text                 | `title` \| `text` \| `label` \| `error` \| `button`   |
| numberOfLines             | Number of lines for text                      | number                                                |
| style                     | Text styles                                   | TextStyle                                             |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

The MIT License.

## Author

<table>
  <tr>
    <td >
      <img src="https://avatars.githubusercontent.com/u/41302126?v=4" width="64" height="64" alt="Abiraman K">
    </td>
    <td>
      <a href="https://abiramank.github.io" target="_blank">Abiraman K</a>
    </td>
  </tr>
</table>

## Thank you

### Sponsors

Thank you to all our sponsors! [Become a sponsor](https://opencollective.com/react-native-design#sponsor) and get your image on our README on GitHub.

<a href="https://opencollective.com/react-native-design#sponsors" target="_blank"><img src="https://opencollective.com/react-native-design/sponsors.svg?width=890" alt="react-native-design"></a>

---
