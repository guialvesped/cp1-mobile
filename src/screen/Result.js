import { StyleSheet, Text, View } from 'react-native';

export default function Result({ route }) {
    const produto = route.params.produto
    const { name, value, discountValue } = produto
    const calculatedDiscount = value * (discountValue / 100)
    const finalValue = value + calculatedDiscount
    return (
        <View style={styles.container}>

            <View style={styles.form}>
                <Text style={styles.label}>
                    Resultado
                </Text>
                <Text style={styles.label}>
                    Nome: {name}
                </Text>
                <Text style={styles.label}>
                    Valor original: {value}
                </Text>
                <Text style={styles.label}>
                    Percentual de aumento: {discountValue}%
                </Text>
                <Text style={styles.label}>
                    Valor de aumento: R$ {calculatedDiscount}
                </Text>
                <Text style={styles.label}>
                    Valor final: {finalValue}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    form: {
        gap: 18,
        borderWidth: 3,
        borderColor: "#000",
        padding: 20,
        borderRadius: 10
    }
});