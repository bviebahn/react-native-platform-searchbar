import * as React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import SearchBar from 'react-native-platform-searchbar';

export default function App() {
  const [value, setValue] = React.useState('');
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');
  const [value3, setValue3] = React.useState('');
  const ref = React.useRef();
  return (
    <View style={styles.container}>
      <View style={styles.lightContainer}>
        <SearchBar
          value={value}
          onChangeText={(v) => {
            setValue(v);
          }}
          placeholder="Search"
          theme="light"
          platform="ios"
          style={styles.searchBar}>
          <ActivityIndicator style={{marginRight: 10}} />
        </SearchBar>
        <SearchBar
          ref={ref}
          value={value2}
          onChangeText={(v) => {
            setValue2(v);
          }}
          placeholder="Search"
          platform="android"
          theme="light"
          style={styles.searchBar}>
          <ActivityIndicator style={{marginRight: 10}} color="#777" />
        </SearchBar>
      </View>
      <View style={styles.darkContainer}>
        <SearchBar
          value={value1}
          onChangeText={(v) => {
            setValue1(v);
          }}
          placeholder="Search"
          theme="dark"
          platform="ios"
          style={styles.searchBar}
        />
        <SearchBar
          value={value3}
          onChangeText={(v) => {
            setValue3(v);
          }}
          placeholder="Search"
          platform="android"
          theme="dark"
          style={styles.searchBar}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  searchBar: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  lightContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // backgroundColor: '#EEE',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#080808',
  },
});
