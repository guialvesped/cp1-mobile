import { StyleSheet, View } from 'react-native';
import Calculator from '../components/Calculator';

export default function Result({ route }) {
    const produto = route.params.produto
    return (
        <View style={styles.container}>
            <Calculator produto={produto} />
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