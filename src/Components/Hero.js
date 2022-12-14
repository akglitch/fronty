import { Text, Container, Grid } from "@nextui-org/react"
import Svg from "./Svg"


function Hero() {
  return (
    <div className="background">
      <Container lg>
        <Grid.Container>
          <Grid xs={12} sm={6} md={6} lg={6}>
          <Svg />
          </Grid>




          <Grid xs={12} sm={6} md={6} lg={6}>
          <Text className="herotext" h1 size={35} weight={20} css={{ color: "black",paddingTop:"$36", textGradient: "45deg, $blue600 -20%, $pink600 50%" }} >I'm a frontend developer <br></br> with a passion for crafting elegant,  <br></br>user-friendly interfaces that are both functional and beautiful.</Text>
         
          </Grid>



        
        </Grid.Container>
      </Container>
    </div>
  )
}

export default Hero