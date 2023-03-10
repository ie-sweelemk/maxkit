import { compose } from "redux";
import { withAuth } from "./with-auth";
import { withRouter } from "./with-router";
import { withStore } from "./with-store";
import { withTheme } from "./with-theme";
import { withToast } from "./with-toast";

export const withProviders = (Component: any) =>
  compose(withRouter, withStore, withTheme, withAuth, withToast)(Component);
