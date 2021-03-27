import React, { FunctionComponent } from "react";
import { Skeleton } from "antd";

type sizeType = "default" | "small" | "large";

type Props = {
  size: sizeType;
  width: number;
  height: number;
  active: boolean;
};

const Loading: FunctionComponent<Props> = ({ size, width, height, active }) => {
  return (
    <div className="mb-4 mt-4 overflow-hidden">
      <Skeleton.Input style={{ width, height }} active={active} size={size} />
    </div>
  );
};

export default Loading;
