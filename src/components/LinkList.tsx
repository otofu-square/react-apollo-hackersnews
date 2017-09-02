import * as React from "react";
import { QueryProps } from "react-apollo";

import { IResponse } from "../containers/LinkList";
import { ILink } from "../models/Link";
import Link from "./Link";

interface IProps {
  allLinksQuery: {
    allLinks: ILink[];
  } & QueryProps;
}

const LinkList = ({ allLinksQuery }: IProps) => {
  if (allLinksQuery && allLinksQuery.loading) {
    return <div>Loading</div>;
  }
  if (allLinksQuery && allLinksQuery.error) {
    return <div>Error</div>;
  }
  const linksToRender = allLinksQuery.allLinks;

  return (
    <div>
      {linksToRender.map((link: any) => <Link key={link.id} link={link} />)}
    </div>
  );
};

export default LinkList;
