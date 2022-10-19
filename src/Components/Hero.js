import { Container, Grid, Image} from "@nextui-org/react"


function Hero () {
    return (
       <Container  lg>
        <Grid.Container>
            <Grid sm={6}xs={12} md={6} lg={6} justify="center" css={{paddingTop:"$17"}}>
<h1>hello <br></br> welcome to fexa ai <br></br> we welcome you to the world of artificial intelligence <br></br> and many more</h1>
            </Grid>
            <Grid sm={6} xs={12} md={6} lg={6} justify="center" >
        <Image src={"space.jpg"}></Image>
            </Grid>
        </Grid.Container>
       </Container>
    )
}

export default Hero