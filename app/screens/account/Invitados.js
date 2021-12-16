import React from "react";
import {View,Text,Image, ScrollView,StyleSheet} from "react-native";
import {Button} from "react-native-elements";
import {useNavigation} from "@react-navigation/native"


export default function Invitados(){
    const navegacion=useNavigation();

    return(
        <ScrollView centerContent={true} style={styles.body}/>
            


    )}
const styles = StyleSheet.create({
    body:{
    marginLeft:30,
    marginRight:30,
   },
    imagen:{
    //altura
    height:320,
    //ancho
    width:"100%",
    //margen inferior
    marginBottom:30,
    //margen superior
    titulo:{
        fontWeight:"bold",
        fontSize:19,
        marginBottom:10,
        textAlign:"center",
       
       },
        parrafo:{
        textAlign:"justify",
        marginBottom:20,
       }
       }});