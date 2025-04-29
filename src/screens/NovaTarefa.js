import { View, Text, StyleSheet, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function NovaTarefa(){
    return (
        <View>
             <View style={styles.cabecalho}>
                <Text style={styles.titulo}> Adicionar Texto </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.texto}>nome da tarefa: </Text>
                <TextInput style={styles.textInput}/>
                <Text style={styles.texto}>categoria da tarefa: </Text>
                
                
                <Picker style={styles.textInput}>
                    <Picker.Item label="Estudo" value="estudo"/>
                    <Picker.Item label="Trabalho" value="trabalho"/>
                    <Picker.Item label="Reunião" value="reuniao"/>
                    <Picker.Item label="Prova" value="prova"/>
                </Picker>

                <Text style={styles.texto}>Descriçãõ da Tarefa:</Text>
                <TextInput style={styles.textInput}
                placeholder="value"/>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cabecalho: {
        backgroundColor: 'blue',
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
    body: {
        padding: 15
        
    },
    texto: {
        marginBottom: 5
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        padding: 10,
        backgroundColor: 'white'
    }
})