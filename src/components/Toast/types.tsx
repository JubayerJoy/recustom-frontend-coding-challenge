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
