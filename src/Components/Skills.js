

import { Popover, Button, Text, Grid } from "@nextui-org/react";

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
    <Grid.Container gap={2} justify="center" alignContent="center">
      {placements.map((placement) => (
        <Grid key={placement}>
          <Popover placement={placement}>
            <Popover.Trigger>
              <Button auto bordered color="gradient">{placement}</Button>
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
  );
}