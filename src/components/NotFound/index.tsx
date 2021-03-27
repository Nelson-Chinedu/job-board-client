import { FunctionComponent } from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";

import Button from "../Shared/Button";

const NotFound: FunctionComponent<{}> = () => {
  return (
    <div className="mt-32 text-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/" className="text-white hover:text-white">
            <Button type="button" className="c-next-step">
              Back Home
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default NotFound;
