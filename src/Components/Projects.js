import { items } from "./Data";


    import { Container, Grid, Card, Col, Row, Button, Text } from "@nextui-org/react";
function  Projects() {
  return (
  <div>
    
  
    
    <Container >
    <Text
        h1
        size={30}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",paddingBottom:"$15",paddingTop:"$15"
        }}
        weight="bold"
      >
        Projects
      </Text>
    <div className="cards">
     <Grid.Container gap={2} justify="center">
    
 {items.map((item) => (
    <Grid xs={12} sm={4}>
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          New
        </Text>
       
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image

        src={item.img}
        width="100%"
        height="100%"
        objectFit='contain'
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={12}>
            Available soon.
          </Text>
          <Text color="#000" size={12}>
            Get notified.
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              
              >
                Notify Me
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  </Grid>
))}

</Grid.Container>
</div>
</Container>
  </div>
  
  )
}
      
export default Projects
  
    