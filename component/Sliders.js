import { StyleSheet, Text, View, FlatList, Animated } from 'react-native'
import React, {useState, useRef} from 'react'
import slidesData from '../SlidesData'
import SlidesItem from './SlidesItem'

const Sliders = () => {
    const [index, setIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current
    const slidesRef = useRef(null)

    const viewableItemsChanged = useRef(({viewableItems}) => {
        setIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

  return (
    <View style={styles.container}>
      <View style={styles.historyTextContainer}>
        <Text style={styles.historyText}>My History</Text>
      </View>
        <View style={{flex: 3}}>
            <FlatList data={slidesData}
            renderItem={({item}) => <SlidesItem item={item}/>}
            horizontal
            showsHorizontalScrollIndicator 
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],{
                useNativeDriver: false
            })}
            scrollEventThrottle={30}
            onViewableItemsChanged={viewableItemsChanged}
            viewableConfig={viewConfig}
            ref={slidesRef}
            />
      </View>
    </View>
  )
}

export default Sliders

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    historyText: {
      fontSize: 20,
      fontWeight: "bold",
    }
})