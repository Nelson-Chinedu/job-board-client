import { FunctionComponent } from "react";
import { Result } from "antd";
import { CloseCircleOutlined } from '@ant-design/icons';

const Failure: FunctionComponent<{}> = () => {
  return (
    <div className="my-28">
      <Result
        status="error"
        icon={<CloseCircleOutlined />}
        title="Payment Failed"
        subTitle="An error occured, Please try again."
        extra={[
          <a
            href="/post-job"
            className="c-btn-retry px-6 py-2 mt-4 text-white rounded hover:text-white"
          >
            Post a Job
          </a>
        ]}
      />
    </div>
  )
};

export default Failure;
