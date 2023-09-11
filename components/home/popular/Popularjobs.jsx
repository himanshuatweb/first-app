import React, {useState} from 'react'
import { useRouter } from 'expo-router'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import { COLORS, SIZES } from '../../../constants'
import useFetch from '../../../hooks/useFetch'

import styles from './popularjobs.style'

const Popularjobs = () => {

  const {data, isLoading, error} = useFetch('search',{
    query:'React Developer India',
    num_pages:1,
  });

  return (
    <View style={styles.container} >
      <View style={styles.header} >
        <Text style={styles.headerTitle} >Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn} >
            Show All
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer} >
        {
          isLoading ?
          <ActivityIndicator size="large" color={COLORS.primary} /> : error ? (
            <Text>
              Something went wrong
            </Text>
          )
          :(
            <FlatList 
               data = {data}
               keyExtractor={item => item?.job_id}
               contentContainerStyle={{ columnGap:SIZES.medium }}
               horizontal
               renderItem={({item})=>(
                  <PopularJobCard  item={item} />
               )}
            />
          )
        }
      </View>
    </View>
  )
}

export default Popularjobs