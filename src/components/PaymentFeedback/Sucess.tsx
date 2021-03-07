import { FunctionComponent } from "react";
import { Result } from "antd";
import { SmileOutlined } from '@ant-design/icons';

const Success: FunctionComponent<{}> = () => {
  return (
    <div className="my-28">
      <Result
        icon={<SmileOutlined />}
        title="Great, Payment made successfully and job post will be added"
      />
    </div>
  )
};

export default Success;
