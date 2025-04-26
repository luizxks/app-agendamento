import { View, Text, StyleSheet } from "react-native";

export default function NovaTarefa(){
    return (
        <View>
             <View style={styles.cabecalho}>
                <Text style={styles.titulo}>
                Nova Tarefa
            </Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cabecalho: {
        backgroundColor: 'azul',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'  
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 18
    },
})