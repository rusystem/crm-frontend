import "styled-components";

import { ApplicationColors } from "@shared/lib";

declare module "styled-components" {
  export interface DefaultTheme extends ApplicationColors {}
}
