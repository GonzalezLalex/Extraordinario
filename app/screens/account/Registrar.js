import React from "react";
import {View,Text, Image, StyleSheet} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
//Componente con la estructura del formulario de registro
import FormRegistro from "../../components/Account/FormRegistro";
export default function Registrar(){
    return(
        <KeyboardAwareScrollView>
        <Image
        source={require('../../../assets/img/user.png')}
        resizeMethod="auto"
        style={styles.imagen}
        />
        <View style={styles.formulario}>
        <FormRegistro/>
        </View>
        </KeyboardAwareScrollView>
        );
}
const styles = StyleSheet.create({
    imagen:{
    width:"100%"
   ,
    height:150,
    marginTop:20,
    },
    formulario: {
    marginTop:40,
    marginLeft:40,
    marginRight:40,
    },
   })