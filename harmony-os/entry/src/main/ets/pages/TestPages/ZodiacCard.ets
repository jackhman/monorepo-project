@Entry
@Component
struct ZodiacCard {
  build() {
    Column() {
      Badge({
        count: 2,
        position: BadgePosition.RightTop,
        style: {
          badgeSize: 20,
        }
      }) {
        Image('/assets/images/ZodiacCard/bg_00.png')
          .width(100)
          .height(200)
      }
    }
  }
}