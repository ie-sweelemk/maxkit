import React from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import {
  ModalStyled,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./confirm-modal.styled";
import { Button } from "../../button";
import Icons from "../../icons";

type ModalType = {
  isOpened: boolean;
  title?: string;
  text?: string;
  cancelLabel?: string;
  okLabel?: string;
  onClose: () => void;
  onCancel?: () => void;
  onOk?: () => void;
  customFooter?: () => JSX.Element;
};

const ConfirmModal: React.FC<ModalType> = ({
  isOpened,
  onClose,
  title,
  text,
  cancelLabel = "Cancel",
  onCancel,
  okLabel = "OK",
  onOk,
  customFooter,
}) => {
  return (
    <ModalOverlay isOpened={isOpened}>
      <ModalStyled>
        <ModalHeader>
          {title ? <div className="modal-title">{title}</div> : null}
          <div className="modal-close">
            <Button
              prefix={<Icons name="close" />}
              onClick={onClose}
              variant="text"
              onlyIcon
            />
          </div>
        </ModalHeader>
        <ModalBody>{text}</ModalBody>
        <ModalFooter>
          {customFooter ? (
            customFooter()
          ) : (
            <>
              {onCancel ? (
                <Button label={cancelLabel} onClick={onCancel} />
              ) : null}
              {onOk ? (
                <Button label={okLabel} onClick={onOk} variant="primary" />
              ) : null}
            </>
          )}
        </ModalFooter>
      </ModalStyled>
    </ModalOverlay>
  );
};

export default ConfirmModal;
