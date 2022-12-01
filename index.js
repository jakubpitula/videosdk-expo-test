import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { register } from "@videosdk.live/react-native-sdk";

register();

AppRegistry.registerComponent(appName, () => App);
// Changing appName to 'main' helps to get it up and running, but then the unhandled promise error is
// thrown and the MeetingProvider is still not working.
