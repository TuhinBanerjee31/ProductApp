/* eslint-disable prettier/prettier */
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';


type ProductDetailsProps = NativeStackScreenProps<RootStackParamList,'ProductDetails'>

const ProductDetails = ({navigation, route}: ProductDetailsProps) => {

  const {product} = route.params;
  return (
    <View style={styles.container}>
      {/* <Text>ProductDetails</Text> */}
      <View style={styles.topContainer} />
      <View style={styles.bottomContainer}>

        <View style={styles.headerContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.variant}>{product.variant}</Text>
        </View>

        {/* <View style={styles.featureContainer}>
        {arr.map(item => (
          <View style={styles.featureButton}>
            <Text style={styles.feature}>{item}</Text>
          </View>
        ))}
        </View> */}

        <View style={styles.priceContainer}>
        <View style={styles.prices}>
        <Text style={styles.priceMRP}>₹{product.originalPrice}</Text>
          <Text style={styles.priceOG}>₹{product.discountPrice}</Text>
        </View>
        <Text style={styles.pricePercentageOff}>{product.offerPercentage}% OFF</Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>

        <View style={styles.boxContainer}>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingTitle}>Rating</Text>
            <Text style={styles.ratingText}>{product.rating}</Text>
          </View>

          <View style={styles.ratingContainer}>
            <Text style={styles.ratingTitle}>Reviews</Text>
            <Text style={styles.ratingText}>{product.ratingCount}</Text>
          </View>

          <View style={styles.ratingContainer}>
            <Text style={styles.ratingTitle}>Launched</Text>
            <Text style={styles.ratingText}>{product.launchDate}</Text>
          </View>
        </View>

        <View style={styles.buttons}>
        <Pressable style={styles.buyButton}>
        <Text style={styles.buyText}>Buy Now</Text>
        </Pressable>

        <Pressable style={styles.backButton} onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.backText}>Back To Home</Text>
        </Pressable>
        </View>
      </View>
      <Image
      source={{uri: product.imageSrc}}
      style={styles.img}
      />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    width: '100%',
    height: '20%',
    position: 'relative',
    backgroundColor: '#F4C88B',
  },
  bottomContainer: {
    width: '100%',
    height: '80%',
    backgroundColor: '#FFFFFF',
    position: 'relative',
    alignItems: 'center',
    // justifyContent: 'space-around',
    rowGap: 18,
  },
  img: {
    width: 150,
    height: 200,
    position: 'absolute',
    top: '7%',
    left: '5%',
  },
  headerContainer: {
    alignItems: 'center',
    top: '2%',
    position: 'absolute',
    right: '7%',
  },
  title : {
    color: '#7C7C7C',
    fontSize: 22,
    fontFamily: 'Georama-Medium',
  },
  variant: {
    color: '#CBCBCB',
    fontSize: 16,
    fontFamily: 'Georama-Medium',
  },
  // featureContainer: {
  //   position: 'absolute',
  //   top: '20%',
  //   left: '3%',
  // },
  // featureButton: {
  //   borderWidth: 1,
  //   position: 'absolute',
  // },
  // feature: {
  //   color: '#7C7C7C',
  // },
  priceContainer: {
    alignItems: 'flex-start',
    position: 'absolute',
    top: '10%',
    right: '13%',
  },
  prices: {
    flexDirection: 'row',
    columnGap: 3,
  },
  priceMRP: {
    color: '#7C7C7C',
    fontSize: 17,
    fontFamily: 'Georama-Medium',
    textDecorationLine: 'line-through',
  },
  priceOG: {
    color: '#7C7C7C',
    fontSize: 17,
    fontFamily: 'Georama-Medium',
  },
  pricePercentageOff: {
    color: '#CBCBCB',
    fontSize: 17,
    fontFamily: 'Georama-Medium',
  },
  descriptionContainer: {
    position: 'absolute',
    top: '20%',
    width: '90%',
  },
  descriptionTitle: {
    color: '#7C7C7C',
    fontSize: 18,
    fontFamily: 'Georama-Medium',
  },
  description: {
    color: '#7C7C7C',
    fontSize: 12,
    fontFamily: 'Georama-Medium',
  },
  boxContainer: {
    width: 380,
    height: 210,
    borderWidth: 2,
    borderColor: '#CBCBCB',
    borderBottomWidth: 0,
    // marginTop: '50%',
    position: 'absolute',
    top: '47%',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingVertical: 15,
    borderBottomWidth: 3,
    width: 320,
    borderColor: '#CBCBCB',
    opacity: 0.6,
  },
  ratingTitle: {
    color: '#7C7C7C',
    fontSize: 18,
    fontFamily: 'Georama-Medium',
  },
  ratingText: {
    color: '#7C7C7C',
    fontSize: 18,
    fontFamily: 'Georama-Medium',
  },
  buttons: {
    flexDirection: 'row',
    columnGap: 10,
    position: 'absolute',
    top: '80%',
  },
  buyButton: {
    height: 50,
    width: 150,
    borderColor: '#F4C88B',
    borderWidth: 2,
    borderRadius: 40,
    justifyContent: 'center',
    marginTop: 38,
  },
  buyText: {
    color: '#F4C88B',
    fontSize: 20,
    fontFamily: 'Georama-Medium',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  backButton: {
    height: 50,
    width: 190,
    backgroundColor: '#F4C88B',
    borderRadius: 40,
    justifyContent: 'center',
    marginTop: 38,
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Georama-Medium',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
