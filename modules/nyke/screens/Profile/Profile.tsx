
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
} from "react-native";
// import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../../../common/theme/color";

export const Profile = () => {
    // const navigation = useNavigation();

    // const handleLogout = () => {
    //     navigation.reset({
    //         index: 0,
    //         routes: [{ name: "Proboard" }],
    //     });
    // };

    return (
        <FlatList
            data={[1]}
            keyExtractor={() => `1`}
            renderItem={() => {
                return (
                    <>
                        <ProfileSection />
                        <ProfileMenu />
                        <ItemSeparator />
                        <OtherProfileContent />
                        <ItemSeparator />
                        <FollowingSection />
                    </>
                );
            }}
            contentContainerStyle={styles.container}
        />
    );
};

const ProfileSection = () => {
    return (
        <View style={styles.profileSection}>
            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri: "https://i.pravatar.cc/150?img=5",
                    }}
                    style={styles.imageAvatar}
                />
            </View>
            <Text style={styles.profileName}>Jane Doe</Text>
            <Text style={styles.profileAddress}>12 St, Singapore</Text>

            <TouchableOpacity style={styles.profileEdit}>
                <Text style={styles.profileEditText}>Edit Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const ProfileMenu = () => {
    const mockMenu = [
        {
            name: "Orders",
            iconName: "archive-outline",
        },
        {
            name: "Pass",
            iconName: "card-account-details-outline",
        },
        {
            name: "Events",
            iconName: "calendar-blank",
        },
        {
            name: "Settings",
            iconName: "cog-outline",
        },
    ];
    return (
        <FlatList
            horizontal={false}
            numColumns={4}
            contentContainerStyle={styles.profileMenuContainer}
            data={mockMenu}
            renderItem={({ item }) => {
                return (
                    <>
                        <View style={[styles.profileMenuItem]} key={item.name}>
                            <MaterialCommunityIcons
                                name={item.iconName}
                                size={24}
                                color={colors.blackSecondary}
                            />
                            <Text style={styles.profileMenuText}>{item.name}</Text>
                        </View>
                        <ItemSeparator style={styles.menuSeparator} />
                    </>
                )
            }}
        />
    );
};

const OtherProfileContent = () => {
    const mockedData = [
        {
            title: "Inbox",
            subTitle: "View messages",
        },
        {
            title: "Your Nike Member Rewards",
            subTitle: "2 available",
        },
    ];

    return (
        <FlatList
            data={mockedData}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.listItemContainer}>
                    <View>
                        <Text style={styles.listTitle}>{item.title}</Text>
                        <Text style={styles.listSubTitle}>{item.subTitle}</Text>
                    </View>
                    <View>
                        <MaterialCommunityIcons name="chevron-right" size={24} />
                    </View>
                </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => (
                <ItemSeparator style={styles.listSeparator} />
            )}
            keyExtractor={({ title }) => title}
            contentContainerStyle={styles.listContainer}
        />
    );
};

const FollowingSection = () => {
    const mockItems = [
        "https://source.unsplash.com/random/?nike",
        "https://source.unsplash.com/random/?jordan,shoes",
        "https://source.unsplash.com/random/?nike,shoes",
    ];
    return (
        <View style={styles.followingContainer}>
            <View style={styles.followingTitleContainer}>
                <Text style={styles.followingTitle}>Following</Text>
                <TouchableOpacity>
                    <Text>Edit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.followingImgContainer}>
                {mockItems.map((item) => (
                    <Image source={{ uri: item }} key={item} style={styles.followingImg} />
                ))}
            </View>
        </View>
    );
};

const ItemSeparator = ({ style = {} }) => (
    <View style={[styles.itemSeparator, style]} />
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
    },
    imageContainer: {
        marginBottom: 20,
    },
    imageAvatar: {
        height: 100,
        width: 100,
        borderRadius: 70,
    },
    profileSection: {
        height: 360,
        justifyContent: "center",
        alignItems: "center",
    },
    profileName: {
        fontSize: 16,
        fontWeight: "700",
        textTransform: "uppercase",
    },
    profileAddress: {
        fontSize: 14,
        marginTop: 4,
        opacity: 0.6,
    },
    profileEdit: {
        width: "50%",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginTop: 40,
        borderColor: "rgba(0,0,0,.3)",
    },
    profileEditText: {
        textTransform: "uppercase",
        fontWeight: "500",
        fontSize: 12,
    },
    profileMenuContainer: {
        alignItems: "stretch",
        flex: 1,
    },
    profileMenuItem: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    profileMenuText: {
        marginTop: 4,
        fontSize: 12,
        opacity: 0.8,
    },
    itemSeparator: {
        height: 10,
        backgroundColor: colors.blackSecondary,
        opacity: 0.2,
        marginVertical: 10,
        width: "100%",
    },
    listItemContainer: {
        height: 80,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 24,
    },
    listSeparator: {
        height: 2,
        backgroundColor: colors.blackSecondary,
        opacity: 0.2,
        width: "90%",
        alignSelf: "center",
    },
    listTitle: {
        fontSize: 16,
        fontWeight: "600",
    },
    listSubTitle: {
        opacity: 0.6,
    },
    listContainer: {
        height: 160,
        flex: 1,
    },
    followingContainer: {
        marginBottom: 24
    },
    followingImgContainer: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    followingImg: {
        height: 140,
        flex: .3,
        marginRight: 4
    },
    followingTitleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 20
    },
    followingTitle: {
        fontSize: 14,
        fontWeight: "600"
    },
    menuSeparator: {
        width: 1,
        height: "72%",
        backgroundColor: colors.blackSecondary
    }
});
