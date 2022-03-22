declare var SimpleToast: {
  // Toast duration constants
  SHORT: number;
  LONG: number;

  // Toast gravity constants
  TOP: string;
  BOTTOM: string;
  CENTER: string;

  show: (message: string, duration?: number, textColor?: string, backgroundColor?: string, viewControllerBlacklist?: Array<string>) => void;

  showWithGravity: (
    message: string,
    duration: number,
    gravity: string,
    textColor: string,
    backgroundColor: number,
    viewControllerBlacklist?: Array<string>
  ) => void;
};

export default SimpleToast;
