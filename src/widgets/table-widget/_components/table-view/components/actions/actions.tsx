import { CopyIcon, EditIcon } from "@shared/ui/icons";

import { Button, Container } from "./styles";

type ActionsProps = {
  onClickEdit: () => void;
  onClickCopy: () => void;
};

export const Actions = ({ onClickCopy, onClickEdit }: ActionsProps) => {
  return (
    <Container>
      <Button onClick={onClickCopy}>
        <img src={CopyIcon} alt={"copy"} />
      </Button>
      <Button onClick={onClickEdit}>
        <img src={EditIcon} alt={"edit"} />
      </Button>
    </Container>
  );
};
