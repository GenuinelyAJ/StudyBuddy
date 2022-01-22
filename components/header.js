import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Education Priorities</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        paddingTop: 16,
        backgroundColor: '#507aad'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    }
});