import moment from "moment";
import { Button } from "../button";
import Icon from "../icons";
import {
  ActionFooterStyled,
  LastUpdated,
  Actions,
} from "./action-footer.styles";

type ActionFooterProps = {
  lastUpdated?: Date;
  cancelLabel?: string;
  okLabel?: string;
  handleCancel?: () => void;
  handleOk?: () => void;
};

const ActionFooter: React.FC<ActionFooterProps> = ({
  lastUpdated,
  cancelLabel = "Cancel",
  okLabel = "Submit",
  handleCancel,
  handleOk,
}) => {
  return (
    <ActionFooterStyled>
      <LastUpdated>
        {lastUpdated ? (
          <div className="updated">
            <span className="icon">
              <Icon name="check" />
            </span>
            Last saved: <span className="time">{moment(lastUpdated.toString()).format("MMM D, YYYY [at] hh:mm A")}</span>
          </div>
        ) : null}
      </LastUpdated>
      <Actions>
        {handleCancel ? (
          <Button onClick={handleCancel} label={cancelLabel} />
        ) : null}
        {handleOk ? (
          <Button
            onClick={handleOk}
            label={okLabel}
            variant="primary"
            type="button"
          />
        ) : null}
      </Actions>
    </ActionFooterStyled>
  );
};

export default ActionFooter;
