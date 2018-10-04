import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, TextInput } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    // define state here
    state = {
        bal:1.00,
        newBal:0,
    }
    
    // write your usd conversion functions here
    toEuro = () => {
        this.setState({ 
            newBal: this.state.bal *.85,
        })
    }
    toPound = () => {
        this.setState({ 
            newBal: this.state.bal *.75,
        })
    }
    toRupee = () => {
        this.setState({ 
            newBal: this.state.bal *67.60,
        })
    }
    toAusDollar = () => {
        this.setState({ 
            newBal: this.state.bal *1.32,
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Currency Converter App
                </Text>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.toEuro}
                >
                    <Text style={styles.buttonText}>
                        USD to Euro
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.toPound}
                    
                >
                    <Text style={styles.buttonText}>
                        USD to Pound
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.toRupee}
                >
                    <Text style={styles.buttonText}>
                        USD to Rupee
                    </Text>
                </TouchableHighlight>
                
                <TouchableHighlight
                    style={styles.button}
                    onPress = {this.toAusDollar}
                >
                    <Text style={styles.buttonText}>
                        USD to Aussie
                    </Text>
                </TouchableHighlight>
                
                <Text style={styles.paragraph}>
                    Initial Balance: {this.state.bal}
                </Text>
                
                <Text style={styles.paragraph}>
                    My New Balance: {this.state.newBal}
                </Text>
                
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8aa9db',
    },
    button: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 40,
        width: 100,
        borderColor: 'black',
        borderWidth: 1,
    },
	buttonText: {
        color:'blue',
    }
});


