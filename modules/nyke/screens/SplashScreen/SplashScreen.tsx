import { useNavigation } from "@react-navigation/native"
import { colors } from "common/theme/color"
import { useEffect } from "react"
import { StyleSheet, View, Image } from "react-native"

export const SplashScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        let timeout: NodeJS.Timeout

        timeout = setTimeout(() => {
            navigation.navigate("NykeApp")
        }, 1000)

        return () => {
            clearTimeout(timeout)
        }

    }, [])

    return (
        <View style={styles.container}>
            <Image source={require("assets/nike-icon.gif")} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 180,
        width: 180
    }
})