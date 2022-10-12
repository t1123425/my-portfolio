export const renderIconBg = (path: string) => {
  switch (path) {
    case '/work':
      return '#b3dec1'
      break
    case '/about':
      return '#7392b7'
      break
    case '/':
      return '#03045e'
      break
    default:
      return '#1637d1'
  }
}
