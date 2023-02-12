import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { vs } from "react-native-size-matters/extend";

const CustomButton = (props) => {
    return (
        <Button {...props} contentStyle={[props.buttonStyle, styles.contentStyle]} mode="contained">
            {props.text}
        </Button>
    );
}

const styles = StyleSheet.create({
    contentStyle: {
        height: vs(40)
    }
})

export default CustomButton;