import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function AddQuotes({item}) {

    return (
        <TouchableOpacity>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#020d1f',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }
})