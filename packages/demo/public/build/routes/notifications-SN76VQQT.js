import {
  Form,
  useLoaderData,
  useSubmit,
  useTransition
} from "/build/_shared/chunk-E2FCH2UM.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-AYLS35XO.js";

// browser-route-module:/Users/igorsrdoc/Documents/Code/Next/nx-demo-remix/packages/demo/app/routes/notifications.tsx?browser
init_react();

// app/routes/notifications.tsx
init_react();
function Notifications() {
  const { notifications } = useLoaderData();
  const submit = useSubmit();
  const transition = useTransition();
  function handleChange(event) {
    submit(event.currentTarget, { replace: true });
  }
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Title, null, "Notifications"), /* @__PURE__ */ React.createElement(SearchForm, {
    method: "post",
    action: "/notifications",
    onChange: handleChange
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "type",
    placeholder: "Type to filter events"
  })), transition.submission && /* @__PURE__ */ React.createElement("div", null, "Searching..."), notifications.map((notification) => /* @__PURE__ */ React.createElement("div", {
    key: notification.id
  }, JSON.stringify(notification))));
}
var Container = ({ children, ...rest }) => /* @__PURE__ */ React.createElement("div", {
  className: "notifications--container",
  ...rest
}, children);
var Title = ({ children, ...rest }) => /* @__PURE__ */ React.createElement("h2", {
  className: "notifications--title",
  ...rest
}, children);
var SearchForm = ({ children, ...rest }) => /* @__PURE__ */ React.createElement(Form, {
  className: "notifications--search-form",
  ...rest
}, children);
export {
  Notifications as default
};
//# sourceMappingURL=/build/routes/notifications-SN76VQQT.js.map
