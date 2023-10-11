import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'

const index = () => {
  const { container } = styles
  return (
    <SafeAreaView style={container}>
      <Text>test</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // top: 88,
    backgroundColor: Colors.background
    // paddingBottom: 50
  }
})

export default index
