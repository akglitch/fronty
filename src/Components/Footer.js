import { Text,Grid,Link,Spacer, Container } from "@nextui-org/react"




export default function Footer () {
    return(
        <div>
          <Container lg>
        <Grid.Container>
          <Grid xs={12} sm={6} md={6} lg={6}>
          </Grid>




          <Grid xs={12} sm={6} md={6} lg={6}>
          <Link color="#000" href="#">
        Instagram
        
      </Link>
      <Spacer />
      <Link color="#000" href="#">
        Twitter
        
      </Link>
      <Spacer />
      <Link color="#000" href="#">
      Facebook
      
      </Link>
      <Spacer />

          </Grid>



        
        </Grid.Container>
      </Container>
        </div>
    )
}

