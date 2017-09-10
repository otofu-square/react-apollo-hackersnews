import * as React from "react";
import { withRouter } from "react-router";
import { Link, RouteComponentProps } from "react-router-dom";

const Header: React.StatelessComponent<RouteComponentProps<{}>> = ({
  history,
}) => {
  const userId = localStorage.getItem("graphcool-user-id");
  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1">Hacker News</div>
        <Link to="/" className="ml1 no-underline black">
          new
        </Link>
        {userId && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link to="/create" className="ml1 no-underline black">
              submit
            </Link>
          </div>
        )}
        <div className="flex flex-fixed">
          {userId ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem("graphcool-user-id");
                localStorage.removeItem("graphcool-auth-token");
                history.push("/new/1");
              }}
            >
              logout
            </div>
          ) : (
            <Link to="/login" className="ml1 no-underline black">
              login
            </Link>
          )}
        </div>
        <div className="ml1">|</div>
        <Link to="/create" className="ml1 no-underline black">
          submit
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Header);
