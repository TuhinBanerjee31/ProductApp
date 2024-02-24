/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React, { PropsWithChildren } from 'react';

type ProductProps = PropsWithChildren<{
  product: Product
}>

const ProductCard = ({product}: ProductProps) => {
  return (
    <View elevation={5} style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.variant}>{product.variant}</Text>
      <Image
      source={{uri: product.imageSrc}}
      style={styles.img}
      />
      <View style={styles.priceContainer}>
        <Text style={styles.priceOG}>₹ {product.discountPrice}</Text>
        <Text style={styles.pricePercentageOff}>({product.offerPercentage}% OFF)</Text>
      </View>
      <Text style={styles.mrp}>M.R.P.: {product.originalPrice}</Text>
      <View style={styles.fadeLine} />
      <View style={styles.cardButton}>
        <Text style={styles.buttonText}>More Deatils</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
    container:{
        width: 370,
        height: 500,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        borderRadius: 20,
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 2,
            width: 1,
        },
        alignItems: 'center',
        paddingVertical: 20,
        marginHorizontal: 30,
    },
    title : {
        color: '#7C7C7C',
        fontSize: 22,
        fontFamily: 'Georama-Medium',
    },
    variant: {
        color: '#CBCBCB',
        fontSize: 17,
        fontFamily: 'Georama-Medium',
    },
    img: {
      width: 115,
      height: 150,
      marginVertical: 30,
    },
    priceContainer: {
      flexDirection: 'row',
      columnGap: 5,
    },
    priceOG: {
      color: '#7C7C7C',
      fontSize: 20,
      fontFamily: 'Georama-Medium',
    },
    pricePercentageOff: {
      color: '#CBCBCB',
      fontSize: 15,
      fontFamily: 'Georama-Medium',
      alignSelf: 'center',
    },
    mrp: {
      color: '#7C7C7C',
      fontSize: 12,
      fontFamily: 'Georama-Medium',
      textDecorationLine: 'line-through',
    },
    fadeLine: {
      width: 250,
      height: 2.5,
      backgroundColor: '#CBCBCB',
      borderRadius: 50,
      marginTop: 35,
      opacity: 0.4,
    },
    cardButton: {
      height: 50,
      width: 190,
      borderColor: '#F4C88B',
      borderWidth: 2,
      borderRadius: 40,
      justifyContent: 'center',
      marginTop: 38,
    },
    buttonText: {
      color: '#F4C88B',
      fontSize: 20,
      fontFamily: 'Georama-Medium',
      alignSelf: 'center',
      textTransform: 'uppercase',
    },
});
