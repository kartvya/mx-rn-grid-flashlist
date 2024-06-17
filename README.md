# mx-rn-grid-flashlist

mx-rn-grid-flashlist is a powerful and versatile React Native package designed to help developers display data in a structured and aesthetically pleasing grid format. Whether you're building a photo gallery, a product listing, or any application that requires grid-based layouts, mx-rn-grid-flashlist provides the tools you need to create a polished user experience effortlessly.

## Key Features

- Flexible Grid Layouts: Easily organize your data into a grid format, allowing for a clean and organized presentation. Customize the number of columns, spacing, and alignment to match your design requirements.

- Instagram Explore Screen: The latest feature mimics the popular Instagram explore screen layout, giving your users a familiar and engaging way to browse through content. This layout dynamically adjusts to create a visually appealing mosaic of items, perfect for showcasing photos, videos, and other media.

- Responsive Design: Ensure your grid adapts smoothly to different screen sizes and orientations, providing a consistent experience across all devices.

- Performance Optimized: Built with performance in mind, mx-rn-grid-flashlist leverages efficient rendering techniques to handle large datasets seamlessly, reducing lag and improving the overall user experience.

- Customizable: Tailor the grid to fit your specific needs with various customization options. Adjust spacing, padding, and margins, and apply your own styles to create a unique look and feel.

- Easy Integration: Designed to be developer-friendly, mx-rn-grid-flashlist integrates smoothly with existing React Native projects. Clear documentation and straightforward APIs make it easy to get started and implement advanced features.

## Installation

```sh
npm install mx-rn-grid-flashlist
```

## Usage

```js
import { MxGridList, MxInstaGrid } from 'mx-rn-grid-flashlist';

// ...

    <MxInstaGrid
        data={data}  // Your data array
        ImageKey={'image1'} // Your image url object key
        showsVerticalScrollIndicator={false}
    />

    <MxGridList
        numColumns={3} // Number of columns you want to display
        data={data} // Your data array
        renderItem={({ item }: any) => (
          <Image source={{ uri: item.image1 }} style={styles.imageStyle} />
        )}
        renderExernalStyle={styles.mainConatiner}  // Renderitem external view style
        showsVerticalScrollIndicator={false}
    />
```

#### Output

https://github.com/kartvya/mx-rn-grid-flashlist/assets/68657182/28e3e703-db46-42ae-924b-6144cd61fe1f

#### Properties

| Prop             | Description                                                                                                                 | Type     |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- | -------- |
| **`data`**       | Data to be rendered. renderItem will be called with each item in this array. Same signature a that of FlatList/SectionList. | Array    |
| **`renderItem`** | What icon to show, see Icon Explorer app or one of the links above.                                                         | Function |
| **`numColumns`** | Number of columns you want to display your grid.                                                                            | Number   |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
