import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Icon, Button } from 'react-native-elements';

const HomeComponent = () => {
    return (
        <>
        <View>
            <Icon
                name='comments-dollar'
                type='font-awesome-5'
                size={100}
                />
        </View>
        <View style={styles.mainheader}>
            <Text h1>
                The B-Word
            </Text>
            <Text>
                Financial Peace We All Need
            </Text>
        </View>
        <View>
            <Text style={styles.secondarydescription}>
                Let's control your spending, track your expenses, and save more money.
            </Text>
        </View>
        <View style={{alignItems: 'center'}}>
        <Button
            title='Start Budgeting'
            containerStyle={{width: '50%'}}
            raised
        />
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    mainheader: {
        margin: 24,
        alignItems: 'center'
    },
    secondarydescription: {
        margin: 24,
        alignItems: 'center',
        textAlign: 'center'
    }
})

export default HomeComponent;