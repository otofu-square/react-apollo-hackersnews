import * as React from "react";

import { ILink } from "../models/Link";
import Link from "./Link";

interface IProps {
  links: ILink[];
}

const LinkList = ({ links }: IProps) => (
  <div>
    {links.map(link => (
      <Link key={link.id} url={link.url} description={link.description} />
    ))}
  </div>
);

export default LinkList;
