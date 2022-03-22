import { NativeModules, Platform } from 'react-native';

const RCTToast = Platform.select({
  ios: NativeModules.LRDRCTSimpleToast,
  android: require('react-native').ToastAndroid,
});

export default {
  // Toast duration constants
  SHORT: RCTToast.SHORT,
  LONG: RCTToast.LONG,

  // Toast gravity constants
  TOP: RCTToast.TOP,
  BOTTOM: RCTToast.BOTTOM,
  CENTER: RCTToast.CENTER,

  show(message, duration, textColor, backgroundColor, viewControllerBlacklist) {
    RCTToast.show(
      message,
      duration === undefined ? RCTToast.SHORT : duration,
      textColor === undefined ? 0xffffff : textColor,
      backgroundColor === undefined ? 0x50A54A : backgroundColor,
      viewControllerBlacklist
    );
  },

  showWithGravity(message, duration, gravity, viewControllerBlacklist) {
    RCTToast.showWithGravity(
      message,
      duration === undefined ? RCTToast.SHORT : duration,
      textColor === undefined ? 0xffffff : textColor,
      backgroundColor === undefined ? 0x50A54A : backgroundColor,
      gravity,
      viewControllerBlacklist
    );
  },
};
