import {
  Form,
  useLoaderData,
  useSubmit
} from "/build/_shared/chunk-Z3FJBZ5V.js";
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
  function handleChange(event) {
    submit(event.currentTarget, { replace: true });
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Notifications"), /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    action: "/notifications",
    onChange: handleChange
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "type",
    placeholder: "Type to filter events"
  })), notifications.map((notification) => /* @__PURE__ */ React.createElement("div", {
    key: notification.id
  }, JSON.stringify(notification))));
}
export {
  Notifications as default
};
//# sourceMappingURL=/build/routes/notifications-2HAOTLTO.js.map
