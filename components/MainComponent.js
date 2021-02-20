import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HomeComponent from './HomeComponent';
// import BudgetChoice from './BudgetChoiceComponent';

class Main extends Component {
    render() {
        return (
            <View>
                <HomeComponent />
                {/* <BudgetChoice /> */}
            </View>
        );
    }
}

export default Main;