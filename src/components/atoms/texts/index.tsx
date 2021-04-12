import React, { ReactNode, SyntheticEvent } from 'react';
import {
  Text as Tex,
  StyleProp,
  TextStyle,
  LayoutChangeEvent,
  GestureResponderEvent,
  StyleSheet
} from 'react-native';

export type TextProps = {
  children?: ReactNode | null;
  style?: StyleProp<TextStyle> | null;
  key?: string | number;
  onLayout?: (event: LayoutChangeEvent) => void;
  numberOfLines?: number;
  onTextLayout?: (event: SyntheticEvent) => void;
  onPress?: (event: GestureResponderEvent) => void;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
};

const styles = StyleSheet.create({
  text: {
    color: '#666666'
  }
});

const Text = ({
  children,
  style,
  key,
  onLayout,
  numberOfLines,
  onTextLayout,
  onPress,
  ellipsizeMode
}: TextProps) => {
  return (
    <Tex
      key={key}
      style={[styles.text, style]}
      {...{ onLayout, numberOfLines, onTextLayout, onPress, ellipsizeMode }}>
      {children}
    </Tex>
  );
};

export default Text;
