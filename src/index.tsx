import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  type ViewStyle,
  Image,
  Pressable,
  RefreshControl,
} from 'react-native';
interface MxGridListProps {
  data: any[];
  renderItem: ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }) => React.ReactNode;
  numColumns?: number;
  contentContainerStyle?: ViewStyle;
  style?: ViewStyle;
  renderExernalStyle?: ViewStyle;
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  onRefresh?: () => void;
  refreshLoaderColor?: string;
}

interface MxInstagramLikeGridProps {
  data: any[];
  ImageKey: string;
  contentContainerStyle?: ViewStyle;
  style?: ViewStyle;
  showsVerticalScrollIndicator?: boolean;
  showsHorizontalScrollIndicator?: boolean;
  onRefresh?: () => void;
  refreshLoaderColor?: string;
}

export function MxGridList(props: MxGridListProps) {
  const {
    data,
    renderItem,
    contentContainerStyle,
    style,
    renderExernalStyle,
    showsVerticalScrollIndicator,
    showsHorizontalScrollIndicator,
    numColumns = 3,
    onRefresh,
    refreshLoaderColor,
    ...rest
  } = props;

  const [refreshing] = useState(false);
  const formatData = (dataList: any, numColumns: number) => {
    const totalRows = Math.floor(dataList?.length / numColumns);
    let totalLastRow = dataList?.length - totalRows * numColumns;
    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataList.push({ key: 'blank', empty: true });
      totalLastRow++;
    }
    return dataList;
  };

  return (
    <FlatList
      renderItem={({ item, index }) => {
        if (item.empty) {
          return (
            <View
              style={[
                styles.mainConatiner,
                renderExernalStyle,
                styles.mainContainerInvisible,
              ]}
            />
          );
        }
        return (
          <Pressable
            style={[styles.mainConatiner, renderExernalStyle]}
            {...rest}
          >
            {renderItem({ item, index })}
          </Pressable>
        );
      }}
      data={formatData(data, numColumns)}
      numColumns={numColumns}
      contentContainerStyle={contentContainerStyle}
      style={style}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      keyExtractor={(item) => item.id}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={refreshLoaderColor}
        />
      }
      {...rest}
    />
  );
}

export function MxInstaGrid(props: MxInstagramLikeGridProps) {
  const {
    data,
    ImageKey,
    contentContainerStyle,
    style,
    showsVerticalScrollIndicator,
    showsHorizontalScrollIndicator,
    onRefresh,
    refreshLoaderColor,
    ...rest
  } = props;

  const [refreshing] = useState(false);
  const renderItem = ({ item, index }: any) => {
    const isLongImage = index % 5 === 0;
    const setIndex = Math.floor(index / 5);
    const isEvenSet = setIndex % 2 === 0;

    if (isLongImage) {
      return (
        <View key={item.id} style={styles.row}>
          {isEvenSet ? (
            <>
              <Image
                source={{ uri: item[ImageKey] }}
                style={styles.longImage}
              />
              <View style={{ flex: 1 }}>
                <Image
                  source={{ uri: data[index + 1]?.[ImageKey] }}
                  style={styles.smallImage}
                />
                <Image
                  source={{ uri: data[index + 2]?.[ImageKey] }}
                  style={styles.smallImage}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Image
                  source={{ uri: data[index + 3]?.[ImageKey] }}
                  style={styles.smallImage}
                />
                <Image
                  source={{ uri: data[index + 4]?.[ImageKey] }}
                  style={styles.smallImage}
                />
              </View>
            </>
          ) : (
            <>
              <View style={{ flex: 1 }}>
                <Image
                  source={{ uri: data[index + 1]?.[ImageKey] }}
                  style={styles.smallImage}
                />
                <Image
                  source={{ uri: data[index + 2]?.[ImageKey] }}
                  style={styles.smallImage}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Image
                  source={{ uri: data[index + 3]?.[ImageKey] }}
                  style={styles.smallImage}
                />
                <Image
                  source={{ uri: data[index + 4]?.[ImageKey] }}
                  style={styles.smallImage}
                />
              </View>
              <Image
                source={{ uri: item[ImageKey] }}
                style={styles.longImage}
              />
            </>
          )}
        </View>
      );
    }

    return null;
  };

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={style}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={refreshLoaderColor}
          />
        }
        {...rest}
      />
    </>
  );
}

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
  },
  mainContainerInvisible: {
    backgroundColor: 'trasparent',
    borderWidth: 0,
    zIndex: 0,
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  longImage: {
    resizeMode: 'stretch',
    flex: 0.985,
    height: 250,
    margin: 1,
  },
  smallImage: {
    flex: 1,
    margin: 1,
  },
});
