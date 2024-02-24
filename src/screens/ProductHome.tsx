/* eslint-disable prettier/prettier */
import {FlatList, Pressable, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import ProductCard from '../components/ProductCard';
import { PRODUCTS_LIST } from '../data/constants';

type ProductHomeProps = NativeStackScreenProps<RootStackParamList, 'ProductHome'>

const ProductHome = ({navigation}: ProductHomeProps) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F4C88B" />
      <FlatList
      horizontal
      data={PRODUCTS_LIST}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Pressable style={styles.cardContainer} onPress={() => {
          navigation.push('ProductDetails',{product: item});
          }}>
          <ProductCard product={item} />
        </Pressable>
      )}/>
    </View>
  );
};

export default ProductHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4C88B',
  },
  cardContainer: {
    justifyContent: 'center',
  },
});
