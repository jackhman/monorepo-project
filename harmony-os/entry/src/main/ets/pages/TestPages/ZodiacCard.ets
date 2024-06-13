@Entry
@Component
struct ZodiacCard {
  build(){
    Column(){
      Badge({
        count: 1,
        position: BadgePosition.RightTop,
        style: {
          badgeSize: 20,
        }
      }){

      }
    }
  }
}