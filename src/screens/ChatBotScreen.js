import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    TouchableOpacity
} from "react-native";
import Response from "../components/chatbot/response";
import Message from "../components/chatbot/message";

export default function App() {
    const [inputText, setInputText] = useState("");
    const [listData, setListData] = useState([]);
    const SearchInput = () => {
        setListData(prevList => [...prevList, inputText]);
        setInputText("");
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            {/* Header */}
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require("../assets/img/logo.png")}
                />
                <Text style={styles.title}>Atlas AI</Text>
            </View>

            {/* Content */}
            <FlatList
                style={{ paddingHorizontal: 16, marginBottom: 80 }}
                data={listData}
                renderItem={({ item }) => (
                    <View>
                        <Message message={item} />
                        <Response prompt={item} />
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />

            {/* Search-Bar */}
            <View style={styles.searchBar}>
                <TextInput
                    placeholder="Ask to Gemini AI"
                    style={styles.input}
                    value={inputText}
                    onChangeText={text => setInputText(text)}
                    selectionColor={"#323232"}
                ></TextInput>
                <TouchableOpacity onPress={SearchInput}>
                    <Image
                        source={require("../assets/icons/right-arrow.png")}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 16,
        paddingTop: 12,
        backgroundColor: "#fff"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        marginTop: 32,
        gap: 8
    },
    icon: {
        width: 32,
        height: 32
    },
    searchBar: {
        backgroundColor: "#ffffff",
        width: "100%",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 32,
        paddingVertical: 16,
        gap: 8
    },
    input: {
        backgroundColor: "#fff",
        width: "100%",
        fontSize: 14,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 16,
        borderWidth: 0.1
    },
    title: {
        fontSize: 24,
        fontWeight: "700"
    },
    logo: {
        width:32,height:32
    }
});
