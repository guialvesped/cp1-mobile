import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import logo from "../../assets/logo.png";

export default function Form() {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [value, setValue] = useState("");
    const [discountValue, setDiscountValue] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = () => {
        if (name !== "" && value !== "" && discountValue !== "") {
            const produto = {
                name,
                value: parseFloat(value),
                discountValue: parseFloat(discountValue),
            };

            setName("");
            setValue("");
            setDiscountValue("");
            setError("");

            navigation.navigate("Result", { produto });
            return true;
        }
        setError("Preencha todos os campos");
        return false;
    };

    return (
        <>
            <View style={styles.container}>
                <View style={{ padding: 20 }}>
                    <Image source={logo} style={{ height: 100, width: 100 }} />
                </View>
                <View>
                    <Text>Produto</Text>
                    <TextInput
                        onChangeText={setName}
                        value={name}
                        placeholder="Digite o nome do produto"
                    />
                </View>
                <View>
                    <Text>Valor do produto</Text>
                    <TextInput
                        onChangeText={setValue}
                        value={value}
                        keyboardType="numeric"
                        placeholder="Digite o valor do produto"
                    />
                </View>
                <View>
                    <Text>Desconto</Text>
                    <TextInput
                        onChangeText={setDiscountValue}
                        value={discountValue}
                        keyboardType="numeric"
                        placeholder="Digite o valor de desconto"
                    />
                </View>
                <View>
                    <Text style={{ color: "red" }}>
                        {error}
                    </Text>
                </View>
                <TouchableOpacity onPress={handleSubmit} style={styles.textButton}>
                    <Text style={{ color: "#fff" }}>Calcular desconto</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    textButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        padding: 10,
    },
});
