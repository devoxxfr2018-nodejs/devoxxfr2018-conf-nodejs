import React from "react";
import { Heading, Notes, Slide, Image, Text, Layout, Fill } from "spectacle";

export default (
  <Slide bgColor="black">
      <Image src="assets/fluo_app/auto_diagnosis_summary.png" display="inline-block" padding="20px" width="33%" height="33%" />
      <Image src="assets/fluo_app/auto_diagnosis_detail.png" display="inline-block" padding="20px" width="33%" height="33%" />
      <Image src="assets/fluo_app/auto_contracts_comparison.png" display="inline-block" padding="20px" width="33%" height="33%" />
      <Heading size={4} textColor="rose" bold>
        Bilan Auto
      </Heading>
  </Slide>
);
