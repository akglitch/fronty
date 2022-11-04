

import { Popover, Button, Text, Grid, Container } from "@nextui-org/react";
import Sate from "./Sate";

export default function Skills() {
  const placements = [
    "HTML",
    "REACT",
    "CSS",
    "FAST API",
    "NODE",
    "EXPRESS",
    "PYTHON",
    "JAVA",
    "GIT",
    "GITHUB",
    "JAVASCRIPT",
  ];

  return (
    <Container lg>
      <Text

h1
size={30}
css={{
  textGradient: "45deg, $blue600 -20%, $pink600 50%", paddingLeft: "$10", paddingTop: "$15", paddingBottom: "$15"
}}
weight="bold"
>
Skills
</Text>
<Container lg>
        <Grid.Container>
          <Grid xs={12} sm={6} md={6} lg={6}>
          <Grid.Container gap={2} justify="center" alignContent="center">
      {placements.map((placement) => (
        <Grid key={placement}>
          <Popover placement={placement}>
            <Popover.Trigger>
              <Button auto bordered color="secondary">{placement}</Button>
            </Popover.Trigger>
            <Popover.Content>
              <Text css={{ p: "$10" }}>
                This is the content of the popover.
              </Text>
            </Popover.Content>
          </Popover>
        </Grid>
      ))}
    </Grid.Container>
          </Grid>




          <Grid xs={12} sm={6} md={6} lg={6}>
          <Sate />
          </Grid>



        
        </Grid.Container>
      </Container>


    </Container>

  );
}