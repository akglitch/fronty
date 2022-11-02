import { Text, Button, Container } from "@nextui-org/react"


function Hero() {
    return (
        <div className="background">
           <Container>
                    {/* <p>FexxaAi<br></br> <h1>welcome to fexa ai we welcome you to the world of ml</h1></p> */}
                    <Text className="herotext" h1 size={35} weight={30} css={{color:"White"}} >I'm a frontend developer <br></br> with a passion for crafting elegant,  <br></br>user-friendly interfaces that are both functional and beautiful.</Text>

              

              
       
            <Button bordered color={"gradient"} >
               let's proceed
            </Button>
            </Container>
        </div>
    )
}

export default Hero