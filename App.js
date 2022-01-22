import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, Modal, TextInput, Image, FlatList, Alert, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import AddQuotes from './components/quotes';
import SplashScreen from 'react-native-splash-screen'

function start({navigation})
{
    SplashScreen.hide();

    const [modalOpen, setModalOpen] = useState(false);

return(
    <View style={styles.startContainer}>
            <TouchableOpacity style={styles.mainContainerButton}
            onPress={() => setModalOpen(true)}
            >
                <View style={styles.info}>
                    <Image source={require('./images/info.png')} />
                </View>
            </TouchableOpacity>
            <Modal
            visible = {modalOpen}>
                            <View style={{backgroundColor:"#000000aa",flex: 1}}>
                                <View style={{backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 10, flex: 1}}>
                                    <Text style={{fontSize: 30}}> Welcome to StudyBuddy!</Text>
                                    <Text style={{fontSize: 20}}> </Text>
                                    <Text style={{fontSize: 20}}> There are 3 main features for this application.</Text>
                                    <Text style={{fontSize: 20}}> </Text>
                                    <Text style={{fontSize: 20}}> 1 - Taking notes down.</Text>
                                    <Text style={{fontSize: 20}}> 2 - Listing priorites.</Text>
                                    <Text style={{fontSize: 20}}> 3 - Looking at motivational quotes</Text>
                                    <Text style={{fontSize: 20}}> </Text>
                                    <Text style={{fontSize: 20}}> Press the button to get started!</Text>
                                    <Text style={{fontSize: 20}}> </Text>
                                    <Button title="Close" onPress={() => setModalOpen(false)} />
                                </View>
                            </View>
            </Modal>
        <Image source={require('./images/sb.png')} style={{height: 200, width: 200, margin: 40}}/>

        <Text style={styles.head}>Welcome to StudyBuddy</Text>

        <TouchableOpacity
        style={styles.startButton}
        onPress={()=>navigation.navigate('Home')}>
            <Text style={{color: '#fff'}}>Get Started</Text>
        </TouchableOpacity>

    </View>
);
}
function home({navigation})
{
return(
    <View style={styles.container}>

        <Text style={styles.headMain}>Welcome to StudyBuddy, Learning Student</Text>

        <Image source={require('./images/notes.png')} style={{height: 100, width: 100}}/>
        <TouchableOpacity
        style={styles.mainButton}
        onPress={()=>navigation.navigate('Study Notes')}>
            <Text style={{color: '#fff'}}>Study Notes</Text>
        </TouchableOpacity>

        <Image source={require('./images/prio.png')} style={{height: 100, width: 100}}/>
        <TouchableOpacity
        style={styles.mainButton}
        onPress={()=>navigation.navigate('Priorities List')}>
            <Text style={{color: '#fff'}}>Priorities List</Text>
        </TouchableOpacity>

        <Image source={require('./images/quotes.png')} style={{height: 100, width: 100}}/>
        <TouchableOpacity
        style={styles.mainButton}
        onPress={()=>navigation.navigate('Motivational Quotes')}>
            <Text style={{color: '#fff'}}>Motivational Quotes</Text>
        </TouchableOpacity>
    </View>
);
}
function study({navigation})
{
return(
        <View>
            <TextInput
            style={styles.input}
                placeholder = 'Type study notes...'
            />
        </View>
);
}
function prio({navigation})
{
const [todos, setTodos] = useState([
    {text: 'Sample Priority - Do Homework', key: '1'},
])

const pressHandler = (key) => {
    setTodos((prevTodos) => {
        return prevTodos.filter(todo => todo.key != key);
    })
}

const submitHandler = (text) => {

    if(text.length > 3) {
        setTodos((prevTodos) => {
            return [
            {text: text, key: Math.random().toString() },
                ...prevTodos
            ];
        });
    }
    else {
    Alert.alert('Oh No!', 'Priorities must be over 3 characters long.', [
        {text: "Got it!", onPress:() => console.log('alert closed')}
    ]);
    }
}

const [modalOpen, setModalOpen] = useState(false);

return (
        <View style={styles.containerTodo}>
            <Header />
            <TouchableOpacity style={styles.containerButton}
            onPress={() => setModalOpen(true)}
            >
                <View style={styles.info}>
                    <Image source={require('./images/info.png')} />
                </View>
            </TouchableOpacity>
            <Modal
            visible = {modalOpen}>
                            <View style={{backgroundColor:"#000000aa",flex: 1}}>
                                <View style={{backgroundColor: "#ffffff", margin: 50, padding: 40, borderRadius: 10, flex: 1}}>
                                    <Text style={{fontSize: 30}}> Instructions:</Text>
                                    <Text style={{fontSize: 20}}> </Text>
                                    <Text style={{fontSize: 20}}> 1 - Add a Priority to the text box.</Text>
                                    <Text style={{fontSize: 20}}> </Text>
                                    <Text style={{fontSize: 20}}> 2 - Press Add Priority.</Text>
                                    <Text style={{fontSize: 20}}> </Text>
                                    <Text style={{fontSize: 20}}> 3 - Priority will be listed down</Text>
                                    <Text style={{fontSize: 20}}> </Text>
                                    <Text style={{fontSize: 20}}> To remove, press the priority.</Text>
                                    <Text style={{fontSize: 20}}> </Text>
                                    <Text style={{fontSize: 20}}> Note: There is a minimum count of 3 chars in a priority</Text>
                                    <Text style={{fontSize: 20}}> </Text>
                                    <Button title="Close" onPress={() => setModalOpen(false)} />
                                </View>
                            </View>
            </Modal>
            <View style={styles.content}>
            <AddTodo submitHandler={submitHandler}/>
                <View style={styles.list}>
                <FlatList
                    data = {todos}
                    renderItem={({ item }) => (
                        <TodoItem item = {item} pressHandler={pressHandler} />
                    )}
                />
                </View>
            </View>
        </View>
);
}

function quote({navigation})
{
    const [quote, setQuote] = useState([
        {text: 'There are no secrets to success. It is the result of preparation, hard work, and learning from failure. \n\n- General Colin Powell, former US Secretary of State', key: '1'},
        {text: 'In order to succeed, your desire for success should be greater than your fear of failure. \n\n - Bill Cosby, stand-up comedian', key: '2'},
        {text: 'However difficult life may seem, there is always something you can do and succeed at. \n\n - Stephen Hawking', key: '3'},
        {text: 'Striving for success without hard work is like trying to harvest where you haven’t planted. \n\n - Robert Collier, self-help author', key: '4'},
        {text: 'Success isn’t overnight. It’s when every day you get a little better than the day before. It all adds up. \n\n - Dwayne Johnson, actor and former pro-wrestler', key: '5'},
        {text: 'The secret of success is to do the common things uncommonly well. \n\n - John D. Rockefeller, widely considered the richest man in modern history', key: '6'},
        {text: 'Success doesn’t come to you, you go to it. \n\n - Marva Collins, American educator', key: '7'},
        {text: 'Recipe for success: Study while others are sleeping; work while others are loafing; prepare while others are playing; and dream while others are wishing. \n\n - William A. Ward, motivational writer', key: '8'},
        {text: 'Success is the progressive realization of a worthy goal. \n\n - Earn Nightingale, author', key: '9'},
    ]);

return(
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.quoteList}>
                <FlatList
                    data={quote}
                    renderItem = {({ item }) => (
                        <AddQuotes item = {item} />
                    )}
                />
            </View>
        </View>
    </View>
);
}

const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
    <Stack.Navigator initialRouteName="Start">
    <Stack.Screen name="Start" component={start} />
    <Stack.Screen name="Home" component={home} />
    <Stack.Screen name="Study Notes" component={study} />
    <Stack.Screen name="Priorities List" component={prio} />
    <Stack.Screen name="Motivational Quotes" component={quote} />
</Stack.Navigator>
</NavigationContainer>
);
}

export default App;

const styles = StyleSheet.create({
    startContainer: {
        flex: 1,
        backgroundColor: "#bfcbde",
        alignItems: "center"
    },
    container: {
        flex: 1,
        backgroundColor: "#bfcbde",
        alignItems: "center"
    },
    startButton: {
        height: 42,
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        backgroundColor: "#507aad",
        margin: 50,
    },
    mainButton: {
        height: 42,
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        backgroundColor: "#507aad",
        margin: 5,
    },
    head: {
        color:'#01183d',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    headMain: {
        color:'#01183d',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 30,
    },
    containerTodo: {
        flex: 1,
        backgroundColor: '#bfcbde'
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
    },
    quoteList: {
        marginTop: 5,
    },
    containerButton: {
        paddingLeft: 350,
        bottom: 45
    },
    mainContainerButton: {
        paddingLeft: 350,
        marginBottom: 5
    }
})