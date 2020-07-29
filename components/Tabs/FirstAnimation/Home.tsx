import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import Animated, {
  useCode,
  block,
  onChange,
  set,
} from "react-native-reanimated";

const { View, Value } = Animated;
import { withTransition, timing } from "react-native-redash";

/* Icons */
import Shop from "../../../src/Icons/Shop";
import Book from "../../../src/Icons/Book";
import User from "../../../src/Icons/User";
import Search from "../../../src/Icons/Search";
import Coffee from "../../../src/Icons/Coffee";
import { SEGMENT, ICON_SIZE, PADDING, DURATION } from "../../../src/Constants";

/* Components */
import Tab from "./Tab";
import TextWrapper from "./TextWrapper";

const tabs = [
  { icon: <Shop />, text: "Shop" },
  { icon: <Book />, text: "Book" },
  { icon: <User />, text: "User" },
  { icon: <Search />, text: "Search" },
  { icon: <Coffee />, text: "Coffee" },
];

export default function Home() {
  const active = new Value<any>(0);
  const transition = withTransition(active, { duration: DURATION });
  const activeTransition = new Value<any>(0);

  useCode(
    () => [
      block([
        onChange(active, [
          set(activeTransition, 0),

          set(activeTransition, timing({ duration: DURATION })),
        ]),
      ]),
    ],
    [active]
  );

  return (
    <SafeAreaView style={{ ...styles.container }}>
      <View style={{ ...styles.tabs }}>
        {tabs.map(({ icon, text }, index) => (
          <View {...{ index }} style={{ ...styles.tab }}>
            <Tab
              {...{ index, text, transition, active }}
              onPress={() => {
                active.setValue(index);
              }}
            >
              {icon}
            </Tab>
            <TextWrapper {...{ activeTransition, text, active, index }} />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D336E",
    justifyContent: "flex-end",
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "cyan",
  },
  tab: {
    width: SEGMENT,
    height: ICON_SIZE + PADDING * 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
