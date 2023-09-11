import React, {useState} from 'react'

import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import {useRouter} from 'expo-router'

import {icons,SIZES} from '../../../constants'

import styles from './welcome.style'

const jobTypes = ['Full-time', 'Part-time', 'Contractor','Internship'];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time');
  return (
    <View>
      <View style={styles.container} >
          <Text style={styles.userName} >Hello Username</Text>
          <Text style={styles.welcomeMessage} >Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer} >
        <View style={styles.searchWrapper}>
            <TextInput 
              style={styles.searchInput} 
              value=""
              onChange = {()=>console.log("change")}
              placeholder='What are you looking for?'
            />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}} >
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer} >
        <FlatList  
          keyExtractor={item => item}
          data={jobTypes}  
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
          renderItem={(job)=>(
            <TouchableOpacity
              style={styles.tab(activeJobType, job.item)}
              onPress={()=> {
                setActiveJobType(job.item);
                router.push(`/search/${job.item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType,job.item)} > {job.item} </Text>
            </TouchableOpacity>
          )}
        />
      </View>

    </View>
  )
}

export default Welcome