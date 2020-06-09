import React , { Component } from 'react';
import {Text ,StyleSheet} from 'react-native';
import { Card } from 'react-native-elements'


class Contact extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <Card
                title="Contact Information"
            >
                <Text style={styles.myText}>
                121, Clear Water Bay Road
                </Text>
                <Text style={styles.myText}>Clear Water Bay, Kowloon</Text>
                <Text style={styles.myText}>HONG KONG</Text>
                <Text style={styles.myText}>Tel: +852 1234 5678</Text>
                <Text style={styles.myText}>Fax: +852 8765 4321</Text>
                
                <Text style={styles.myText}>Email:confusion@food.net</Text>
                
                
                

            </Card>
        )
    }
}
const styles = StyleSheet.create({
    myText:{
        marginTop: 10
    }
})


export default Contact