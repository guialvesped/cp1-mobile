import { View } from "react-native";

export default function Calculator({ name, value, discountValue }) {

    const calculatedDiscount = value * (discountValue / 100)
    const finalValue = value + calculatedDiscount
    return (
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
    )


}