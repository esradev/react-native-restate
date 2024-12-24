import { Text, View } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text className=" text-rose-600 font-rubik text-3xl">Home</Text>
      <Link href="/explore">Explore</Link>
      <Link href="/sign-in">Sing in</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/properties/1">Property 1</Link>
    </View>
  );
}
