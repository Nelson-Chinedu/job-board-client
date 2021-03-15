import { FunctionComponent } from "react";
import { Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const Success: FunctionComponent<{}> = () => {
  return (
    <div className="my-28 w-full mx-auto">
      <Result
        icon={<SmileOutlined />}
        title="Great, Payment made successfully and job post will be added"
        extra={[
          <a
            href="/"
            className="c-btn-retry px-6 py-2 mt-4 text-white rounded hover:text-white"
          >
            Back Home
          </a>,
        ]}
      />
    </div>
  );
};

export default Success;
