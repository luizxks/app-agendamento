import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from '@react-navigation/native';


export default function NovaTarefa(){

    con

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
                placeholder="value"
                multiline={true}
                numberOfLines={3}/>

                <TextInput
                    style={styles.textDate}
                    placeholder='dd/mm/yyyy'
                />

                <View style={styles.containerBotao}>
                    <TouchableOpacity style={styles.botao} onPress={() => }>
                        <Text style={styles.botaoTexto}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.botaoTexto}>Ok</Text>
                    </TouchableOpacity>

                </View>

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
    },
    textDate: {
        height: 60,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: 'indigo',
        margin: 40,
        marginVertical: 30,
        padding: 15,
        backgroundColor: 'white' 
    },
    containerBotao: {
        flexDirection: 'row',
        justifyContent: 'end'
    },
    botao: {
        padding: 15
    },
    botaoTexto: {
        color: 'indigo'
    }
})