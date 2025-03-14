import { StyleSheet, Text, View } from 'react-native';

export default function Result({ route }) {
    const produto = route.params.produto
    const { name, value, discountValue } = produto
    const calculatedDiscount = value * (discountValue / 100)
    const finalValue = value + calculatedDiscount
    return (
        <View style={styles.container}>

            <View>
                <Text>
                    Nome: {name}
                </Text>
                <Text>
                    Valor original: {value}
                </Text>
                <Text>
                    Percentual de aumento: {discountValue}%
                </Text>
                <Text>
                    Valor de aumento: R$ {calculatedDiscount}
                </Text>
                <Text>
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
});