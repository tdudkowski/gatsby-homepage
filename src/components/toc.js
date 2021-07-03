import { Link } from "gatsby";
import React from "react";
import loadable from "@loadable/component";
const Scrollspy = loadable(() => import("./automenu"));

const ToC = () => <Scrollspy />;

export default ToC;