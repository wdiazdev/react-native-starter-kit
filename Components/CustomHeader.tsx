import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'

const CustomHeader = () => {
  const { safeArea, container } = styles
  return (
    <SafeAreaView style={safeArea}>
      <View style={container}>
        <Text>Custom</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.background },
  container: { height: 60, backgroundColor: Colors.background }
})

export default CustomHeader
