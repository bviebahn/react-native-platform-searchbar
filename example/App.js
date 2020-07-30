import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import SearchBar from 'react-native-searchbar';

export default function App() {
  const [value, setValue] = React.useState('');
  const ref = React.useRef();
  return (
    <View style={styles.container}>
      <SearchBar
        value={value}
        onChangeText={(v) => {
          setValue(v);
        }}
        placeholder="Search"
        theme="light"
        platform="ios"
        style={styles.searchBar}
      />
      <SearchBar
        value={value}
        onChangeText={(v) => {
          setValue(v);
        }}
        placeholder="Search"
        theme="dark"
        platform="ios"
        style={styles.searchBar}
      />
      <SearchBar
        ref={ref}
        value={value}
        onChangeText={(v) => {
          setValue(v);
        }}
        placeholder="Search"
        platform="android"
        theme="light"
        style={styles.searchBar}
      />
      <SearchBar
        value={value}
        onChangeText={(v) => {
          setValue(v);
        }}
        placeholder="Search"
        platform="android"
        theme="dark"
        style={styles.searchBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#050505',
    // backgroundColor: '#DDD',
  },
  searchBar: {
    margin: 30,
  },
});
