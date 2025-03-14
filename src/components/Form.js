import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Form() {
    const [name, setName] = useState()
    const [value, setValue] = useState()
    const [discountValue, setDiscountValue] = useState()

    const produto = {
        name,
        value,
        discountValue
    }

    return (
        <View>
            <Text>Produto</Text>
            <TextInput onChangeText={setName} value={name} placeholder="Digite o nome do produto" />
            <Text>Valor do produto</Text>
            <TextInput onChangeText={setValue} value={value} keyboardType="numeric" placeholder="Digite o valor do produto" />
            <Text>Desconto</Text>
            <TextInput onChangeText={setDiscountValue} value={discountValue} keyboardType="numeric" placeholder="Digite o valor de desconto" />

            <TouchableOpacity style={styles.textButton}>
                <Text style={{ color: '#fff' }}>
                    Calcular desconto
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    textButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        padding: 10,
    },
});