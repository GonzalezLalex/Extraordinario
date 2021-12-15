import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon} from "react-native-elements";
import Cuenta from "../screens/account/Cuenta";
import Busqueda from "../screens/Busqueda";
import MasVendidos from "../screens/MasVendidos";
import Productos from "../screens/Productos";
import Sucursales from "../screens/Sucursales";



const Tab= createBottomTabNavigator();


export default function Navegacion(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Cuenta"
                tabBarStyle={
                {
                    tabBarInactiveTintColor:"#9C9C9C",
                    tabBarActiveTintColor:"#8E1600",
                    }
                }
                screenOptions={({route})=> ({
                    tabBarIcon:({color})=> opciones(route,color),
                })}
            >
            <Tab.Screen name="Cuenta" component={Cuenta}/>
            <Tab.Screen name="Busqueda" component={Busqueda}/>
            <Tab.Screen name="MasVendidos" component={MasVendidos}/>
            <Tab.Screen name="Productos" component={Productos}/>
            <Tab.Screen name="Sucursales" component={Sucursales}/>
            </Tab.Navigator>
            </NavigationContainer>
    )
}

function opciones(ruta, color){
    let iconName;
    switch(ruta.name){
        case"Cuenta":
        iconName="person";
        break;
        case"Busqueda":
        iconName="search";
        break;
        case"Masvendido":
        iconName="favorite-box";
        break;
        case"Productos":
        iconName="motorcycle"
        break;
        case"Sucursales":
        iconName="shop";
        break;

    }
    return(
        <Icon type="material-comunity" name={iconName} size={22} color={color}/>
    )
}