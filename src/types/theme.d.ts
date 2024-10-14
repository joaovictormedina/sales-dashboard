export interface Theme {
  appBackground: string
  appColor: string
  appDefaultStroke: string
  appLogo: string
  appSkeletonFrom: string
  appSkeletonTo: string
  buttons: {
    alert: string
    alertColor: string
    alertHover: string
    disable: string
    disavledColor: string
    primary: string
    primaryColor: string
    primaryHover: string
  }
  card: {
    alert: string
    background: string
    border: string
    sucess: string
    warning: string
  }
  textInput: {
    active: string
    activeColor: string
    borderColor: string
    disable: string
    disableBorderColor: string
    disableColor: string
    placeholderColor: string
  }
  typographies: {
    error: string
    subtitle: string
    sucess: string
  }
}
