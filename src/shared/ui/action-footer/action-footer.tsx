import { Button } from "../button";
import {
  ActionFooterStyled,
  LastUpdated,
  Actions,
} from "./action-footer.styles";

type ActionFooterProps = {
  lastUpdated?: string;
  handleCancel?: () => void;
  handleOk?: () => void;
};

const ActionFooter: React.FC<ActionFooterProps> = ({
  lastUpdated,
  handleCancel,
  handleOk,
}) => {
  return (
    <ActionFooterStyled>
      <LastUpdated>
        {lastUpdated ? <span>{lastUpdated}</span> : null}
      </LastUpdated>
      <Actions>
        {handleCancel ? <Button onClick={handleCancel} label="Cancel" /> : null}
        {handleOk ? <Button onClick={handleOk} label="Submit" variant="primary" /> : null}
      </Actions>
    </ActionFooterStyled>
  );
};

export default ActionFooter;
