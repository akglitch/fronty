import { Text, Button, Container, Grid, Image } from "@nextui-org/react"


function Hero() {
    return (
        <Container lg>
            <Grid.Container>
                <Grid sm={6} xs={12} md={6} lg={6} justify="center" css={{ paddingTop: "$14" }}>
                    {/* <p>FexxaAi<br></br> <h1>welcome to fexa ai we welcome you to the world of ml</h1></p> */}
                    <Text h1 size={60} weight={50} css={{ textGradient: "45deg, $red600 -20%, $yellow600 50%" }}  >welcome to dome let's make the web prettier for the whole world</Text>

                </Grid>

                <Grid sm={6} xs={12} md={6} lg={6} justify="center" css={{ paddingTop: "$18", fontFamily: "$sans" }}>
                    <Image className="img" src={"human.png"}></Image>

                </Grid>

                
                
            </Grid.Container>
            <Button bordered color={"primary"} auto>
               let's proceed
            </Button>
        </Container>
    )
}

export default Hero