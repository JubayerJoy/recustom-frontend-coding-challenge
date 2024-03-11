import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Toast, { ToastProps, ToastType } from "../components/Toast/Toast";

export default {
  title: "UI/Toast",
  component: Toast,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["success", "danger", "avatar"],
      },
    },
  },
} as Meta;

const Template: StoryFn<ToastProps> = (args) => <Toast {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: ToastType.SUCCESS,
  message: "The action that you have done was a success! Well done",
};

export const SuccessWithCTA = Template.bind({});
SuccessWithCTA.args = {
  type: ToastType.SUCCESS,
  message: "Success",
  description:
    "Well done, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content. Be sure to use margin utilities to keep things nice and tidy.",
  cta: true,
};

export const Danger = Template.bind({});
Danger.args = {
  type: ToastType.DANGER,
  message: "The file flowbite-figma-pro was permanently deleted.",
};

export const DangerWithCTA = Template.bind({});
DangerWithCTA.args = {
  type: ToastType.DANGER,
  message: "Attention",
  description:
    "Oh snap, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content. Be sure to use margin utilities to keep things nice and tidy.",
  cta: true,
};

export const Avatar = Template.bind({});
Avatar.args = {
  type: ToastType.AVATAR,
  message: "Bonnie Green",
  description: "Hi Neil, thanks for sharing your thoughts regarding Flowbite.",
  cta: true,
};
