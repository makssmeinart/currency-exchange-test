import { ChangeEvent, Dispatch } from "react";

export const changeIfNumber = (
  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  dispatch: Dispatch<any>,
  onChangeCallback: (value: number) => any
) => {
  const currentPressedValue = e.currentTarget.value;

  //  @ts-ignore
  if (!isNaN(currentPressedValue)) {
    dispatch(onChangeCallback(Number(currentPressedValue)));
  }
};
