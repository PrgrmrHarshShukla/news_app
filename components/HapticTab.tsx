import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';

export function HapticTab(props: BottomTabBarButtonProps) {
  return (
    <PlatformPressable
      {...props}
      onPressIn={(ev) => {
        if (process.env.EXPO_OS === 'ios') {
          // Add a soft haptic feedback when pressing down on the tabs.
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPressIn?.(ev);
      }}
      android_ripple={{
        color: 'rgba(0,0,0,0.1)',
        radius: 40,
        borderless: false
      }}
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    />
  );
}
