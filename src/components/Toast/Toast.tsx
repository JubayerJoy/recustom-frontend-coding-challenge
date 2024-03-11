import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import "./Toast.css";
import { ToastType, ToastProps } from "./types";

const Toast: React.FC<ToastProps> = ({
  type,
  message,
  description,
  cta = false,
  mobile = false,
}) => {
  const [startImage, setStartImage] = useState<StaticImageData | null>(null);

  useEffect(() => {
    const loadStartImage = async () => {
      let imagePath: StaticImageData;

      if (type === ToastType.DANGER) {
        imagePath = description
          ? (await import("./assets/danger_cta.png")).default
          : (await import("./assets/danger.png")).default;
      } else if (type === ToastType.SUCCESS) {
        imagePath = description
          ? (await import("./assets/success_cta.png")).default
          : (await import("./assets/success.png")).default;
      } else {
        imagePath = (await import("./assets/avatar.png")).default;
      }

      setStartImage(imagePath);
    };

    loadStartImage();
  }, [type, description]);

  return (
    <div
      className={`toast ${type}`}
      style={{ width: mobile ? "675px" : "fit-content" }}
    >
      <div className="message-wrapper">
        {startImage && (
          <Image
            src={startImage}
            alt="start-image"
            className="start-image"
            width={32}
            height={32}
          />
        )}
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
              {type === ToastType.AVATAR ? "Button Text" : "Take action"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Toast;
