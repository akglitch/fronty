import { Text, Button,  Container, Grid } from "@nextui-org/react"
import Svg from "./Svg"


function Hero() {
  return (
    <div className="background">
      <Container >
        <Grid.Container>
          <Grid xs={12} sm={6} md={6} lg={6}>
            <Text className="herotext" h1 size={35} weight={20} css={{ color: "black",paddingTop:"$52" }} >I'm a frontend developer <br></br> with a passion for crafting elegant,  <br></br>user-friendly interfaces that are both functional and beautiful.</Text>
          </Grid>




          <Grid xs={12} sm={6} md={6} lg={6}>
            <Svg />
          </Grid>



          <Button bordered color={"red"} >
            let's proceed
          </Button>
        </Grid.Container>
      </Container>
    </div>
  )
}

export default Hero