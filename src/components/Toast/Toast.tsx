import React from "react";
import Image from "next/image";
import "./Toast.css";

export enum ToastType {
  SUCCESS = "success",
  DANGER = "danger",
  AVATAR = "avatar",
}

export interface ToastProps {
  type: ToastType;
  message: string;
  cta?: boolean;
  mobile?: boolean;
  description?: string;
}

const Toast: React.FC<ToastProps> = ({
  type,
  message,
  description,
  cta = false,
  mobile = false,
}) => {
  const startImage =
    type === ToastType.DANGER
      ? description
        ? require("./assets/danger_cta.png").default
        : require("./assets/danger.png").default
      : type === ToastType.SUCCESS
      ? description
        ? require("./assets/success_cta.png").default
        : require("./assets/success.png").default
      : require("./assets/avatar.png").default;

  return (
    <div
      className={`toast ${type}`}
      style={{ width: mobile ? "675px" : "fit-content" }}
    >
      <div className="message-wrapper">
        <Image src={startImage} alt="start-image" className="start-image" />
        <div
          className={`message message-${type}`}
          style={{ width: mobile ? "271px" : "auto" }}
        >
          {message}
        </div>
        <div className={`icon icon-${type}`} />
      </div>
      {description && (
        <div className={`wrapper-desc wrapper-desc-${type}`}>
          <div className="description">{description}</div>
          {cta && (
            <button className={`cta cta-${type}`} data-testid="cta-type">
              {type === "avatar" ? "Button Text" : "Take action"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Toast;
