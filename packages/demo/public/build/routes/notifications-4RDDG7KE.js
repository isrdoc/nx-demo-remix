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
  return /* @__PURE__ */ React.createElement("div", {
    className: classes["notifications--container"]
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "notifications--title"
  }, "Notifications"), /* @__PURE__ */ React.createElement(Form, {
    className: "notifications--search-form",
    method: "post",
    action: "/notifications",
    onChange: handleChange
  }, /* @__PURE__ */ React.createElement("input", {
    className: "notifications--search-input",
    type: "text",
    name: "type",
    placeholder: "Type to filter events"
  })), transition.submission && /* @__PURE__ */ React.createElement("div", null, "Searching..."), notifications.map((notification) => /* @__PURE__ */ React.createElement("div", {
    key: notification.id
  }, JSON.stringify(notification))));
}
var classes = {
  "notifications--container": "notifications--container",
  "notifications--title": "notifications--title",
  "notifications--search-form": "notifications--search-form",
  "notifications--search-input": "notifications--search-input"
};
export {
  Notifications as default
};
//# sourceMappingURL=/build/routes/notifications-4RDDG7KE.js.map
