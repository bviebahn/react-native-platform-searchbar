import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from 'react-native-searchbar';

export default function App() {
  const [value, setValue] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.searchBarWrapper}>
        <SearchBar
          value={value}
          onChangeText={(v) => {
            setValue(v);
          }}
          placeholder="Search"
          theme="light"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#050505',
  },
  searchBarWrapper: {
    margin: 30,
  },
});
