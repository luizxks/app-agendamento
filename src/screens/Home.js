import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import TarefaItem from '../components/TarefaItem';
import { getData } from '../storage/async-storage';
import { useEffect, useState } from 'react';

export default function Home(){

    const [ tasks, setTasks ] = useState(null)

    // Executa ao carregar a pagina
    useEffect(() => {
       const data = getData();
       setTasks(data);
    }, []);

    console.log(tasks)

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>
                    ABRIL / 2025
                </Text>
                <View style={styles.icone}></View>
            </View>
            <ScrollView style={styles.body}>
                <TarefaItem
                    nome="Tarefa 1"
                    status="a cumprir"
                    data="20/04/2021"
                    categoria="Reunião"
                />
                 <TarefaItem
                    nome="Tarefa 2"
                    status="concluido"
                    data="20/04/2024"
                    categoria="Estudo"
                />
                <TarefaItem
                    nome="Tarefa 1"
                    status="a cumprir"
                    data="20/04/2021"
                    categoria="Reunião"
                />
                 <TarefaItem
                    nome="Tarefa 2"
                    status="concluido"
                    data="20/04/2024"
                    categoria="Estudo"
                />
                <TarefaItem
                    nome="Tarefa 1"
                    status="a cumprir"
                    data="20/04/2021"
                    categoria="Reunião"
                />
                 <TarefaItem
                    nome="Tarefa 2"
                    status="concluido"
                    data="20/04/2024"
                    categoria="Estudo"
                />
                <TarefaItem
                    nome="Tarefa 1"
                    status="a cumprir"
                    data="20/04/2021"
                    categoria="Reunião"
                />
                 <TarefaItem
                    nome="Tarefa 2"
                    status="concluido"
                    data="20/04/2024"
                    categoria="Estudo"
                />
                <TarefaItem
                    nome="Tarefa 1"
                    status="a cumprir"
                    data="20/04/2021"
                    categoria="Reunião"
                />
                 <TarefaItem
                    nome="Tarefa 2"
                    status="concluido"
                    data="20/04/2024"
                    categoria="Estudo"
                />
                <TarefaItem
                    nome="Tarefa 1"
                    status="a cumprir"
                    data="20/04/2021"
                    categoria="Reunião"
                />
                 <TarefaItem
                    nome="Tarefa 2"
                    status="concluido"
                    data="20/04/2024"
                    categoria="Estudo"
                />

            </ScrollView>

            <TouchableOpacity 
                style= {styles.botaoAdicionar}
                onPress={() => {
                    alert("weoo")

                }}
            >
                <Text style= {styles.texttoBotaoAdicionar}> + </Text>
            </TouchableOpacity>
        </View>
    );
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
        justifyContent: "center",
        alignItems: 'center'
    },
    titulo: {
        color: 'white',
        fontSize: 18, 
        fontWeight: 'bold',
        textAlign: 'center'

    },
    icone: {
        backgroundColor: 'gray',
        width: 30,
        height: 30,
        borderRadius: 20,
        position: 'absolute',
        right: 15    
    },
    body: {
        flex: 1
    },
    botaoAdicionar: {
        backgroundColor: 'green',
        width: 30,
        height: 30,
        borderRadius: 20,
        position: 'absolute',
        right: 15, 
        bottom: 15
    },
    texttoBotaoAdicionar: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        bottom: 2
    }

});