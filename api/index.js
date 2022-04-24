var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name3 in all)
    __defProp(target, name3, { get: all[name3], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react2 = require("@remix-run/react");
var import_server = require("react-dom/server");

// app/styles/stitches.config.ts
var import_react = require("@stitches/react");

// app/styles/light-theme.json
var name = "light";
var typeStyles = { "display-1": { fontFamily: "Gilroy-ExtraBold", fontSize: "48px", lineHeight: "62px", letterSpacing: "0.1em" }, "display-2": { fontFamily: "Gilroy-ExtraBold", fontSize: "40px", lineHeight: "52px", letterSpacing: "0.1em" }, "h-1": { fontFamily: "Gilroy-Bold", fontSize: "33px", lineHeight: "44px", letterSpacing: "0.1em" }, "h-2": { fontFamily: "Gilroy-Bold", fontSize: "28px", lineHeight: "38px", letterSpacing: "0.1em" }, "h-3": { fontFamily: "Gilroy-Bold", fontSize: "23px", lineHeight: "32px", letterSpacing: "0.1em" }, "h-4": { fontFamily: "Gilroy-Bold", fontSize: "19px", lineHeight: "27px", letterSpacing: "0.1em" }, "h-5": { fontFamily: "Gilroy-Bold", fontSize: "16px", lineHeight: "23px", letterSpacing: "0.1em" }, body: { fontFamily: "Gilroy-Bold", fontSize: "16px", lineHeight: "23px", letterSpacing: "0.1em" }, small: { fontFamily: "Gilroy-SemiBold", fontSize: "13px", lineHeight: "20px", letterSpacing: "0.1em" }, "x-small": { fontFamily: "Gilroy-SemiBold", fontSize: "11px", lineHeight: "17px", letterSpacing: "0.1em" } };
var radii = { "radius-4": "4px", "radius-6": "6px", "radius-12": "12px", "radius-20": "20px" };
var shadows = { "drop-shadow-1": "0px 4px 8px 0px #00000014, 2px 2px 2px 0px #0000000a", "drop-shadow-2": "0px 8px 16px 0px #00000014, 4px 4px 4px 0px #0000000a", "drop-shadow-3": "0px 12px 20px 0px #00000014, 6px 6px 6px 0px #0000000a", "drop-shadow-4": "0px 16px 24px 0px #00000014, 8px 8px 8px 0px #0000000a", "drop-shadow-5": "0px 24px 28px 0px #00000014, 12px 12px 12px 0px #0000000a" };
var colors = { primary: "#044bff", "shadow-layer-1": "#00000014", "shadow-layer-2": "#0000000a", background: "#ffffff", neutral: "#eaeef0", "neutral-400": "#eef2f3", "neutral-300": "#f2f5f7", "neutral-600": "#b3c1c8", "neutral-700": "#7d94a0", "neutral-200": "#f6f8fa", "neutral-800": "#51646d", text: "#000505", "primary-400": "#1d5dff", "primary-300": "#366fff", "primary-200": "#4f81ff", "primary-600": "#033ccc", "primary-700": "#052e96", "primary-800": "#052062" };
var fonts = { bold: "Gilroy-Bold", "extra-bold": "Gilroy-ExtraBold", "semi-bold": "Gilroy-SemiBold" };
var durations = { instant: "0", "x-fast": "107", fast: "160", normal: "240", slow: "360", "x-slow": "540" };
var easeCurves = { "in-out-quint": { x1: 0.86, y1: 0, x2: 0.07, y2: 1 }, "out-quint": { x1: 0.23, y1: 1, x2: 0.32, y2: 1 }, "in-sine": { x1: 0.47, y1: 0, x2: 0.745, y2: 0.715 } };
var space = { none: "0px", "xxx-small": "6px", "xx-small": "9px", "x-small": "14px", small: "21px", regular: "32px", large: "48px", "x-large": "72px", "xx-large": "108px", "xxx-large": "162px" };
var light_theme_default = { name, typeStyles, radii, shadows, colors, fonts, durations, easeCurves, space };

// app/styles/dark-theme.json
var name2 = "dark";
var typeStyles2 = { "display-1": { fontFamily: "Gilroy-ExtraBold", fontSize: "48px", lineHeight: "62px", letterSpacing: "0.1em" }, "display-2": { fontFamily: "Gilroy-ExtraBold", fontSize: "40px", lineHeight: "52px", letterSpacing: "0.1em" }, "h-1": { fontFamily: "Gilroy-Bold", fontSize: "33px", lineHeight: "44px", letterSpacing: "0.1em" }, "h-2": { fontFamily: "Gilroy-Bold", fontSize: "28px", lineHeight: "38px", letterSpacing: "0.1em" }, "h-3": { fontFamily: "Gilroy-Bold", fontSize: "23px", lineHeight: "32px", letterSpacing: "0.1em" }, "h-4": { fontFamily: "Gilroy-Bold", fontSize: "19px", lineHeight: "27px", letterSpacing: "0.1em" }, "h-5": { fontFamily: "Gilroy-Bold", fontSize: "16px", lineHeight: "23px", letterSpacing: "0.1em" }, body: { fontFamily: "Gilroy-Bold", fontSize: "16px", lineHeight: "23px", letterSpacing: "0.1em" }, small: { fontFamily: "Gilroy-SemiBold", fontSize: "13px", lineHeight: "20px", letterSpacing: "0.1em" }, "x-small": { fontFamily: "Gilroy-SemiBold", fontSize: "11px", lineHeight: "17px", letterSpacing: "0.1em" } };
var radii2 = { "radius-4": "4px", "radius-6": "6px", "radius-12": "12px", "radius-20": "20px" };
var shadows2 = { "drop-shadow-1": "0px 4px 8px 0px #0000003d, 2px 2px 2px 0px #0000001f", "drop-shadow-2": "0px 8px 16px 0px #0000003d, 4px 4px 4px 0px #00000021", "drop-shadow-3": "0px 12px 20px 0px #0000003d, 6px 6px 6px 0px #0000001f", "drop-shadow-4": "0px 16px 24px 0px #0000003d, 8px 8px 8px 0px #0000001f", "drop-shadow-5": "0px 24px 28px 0px #0000003d, 12px 12px 12px 0px #0000001f" };
var colors2 = { primary: "#00023e", "shadow-layer-1": "#00000014", "shadow-layer-2": "#0000000a", background: "#002f2f", neutral: "#eaeef0", "neutral-400": "#eef2f3", "neutral-300": "#f2f5f7", "neutral-600": "#b3c1c8", "neutral-700": "#7d94a0", "neutral-200": "#f6f8fa", "neutral-800": "#51646d", text: "#fefefe", "primary-400": "#00036b", "primary-300": "#000598", "primary-200": "#0006c4", "primary-600": "#010231", "primary-700": "#010224", "primary-800": "#010218" };
var fonts2 = { bold: "Gilroy-Bold", "extra-bold": "Gilroy-ExtraBold", "semi-bold": "Gilroy-SemiBold" };
var durations2 = { instant: "0", "x-fast": "107", fast: "160", normal: "240", slow: "360", "x-slow": "540" };
var easeCurves2 = { "in-out-quint": { x1: 0.86, y1: 0, x2: 0.07, y2: 1 }, "out-quint": { x1: 0.23, y1: 1, x2: 0.32, y2: 1 }, "in-sine": { x1: 0.47, y1: 0, x2: 0.745, y2: 0.715 } };
var space2 = { none: "0px", "xxx-small": "6px", "xx-small": "9px", "x-small": "14px", small: "21px", regular: "32px", large: "48px", "x-large": "72px", "xx-large": "108px", "xxx-large": "162px" };
var dark_theme_default = { name: name2, typeStyles: typeStyles2, radii: radii2, shadows: shadows2, colors: colors2, fonts: fonts2, durations: durations2, easeCurves: easeCurves2, space: space2 };

// app/styles/stitches.config.ts
console.log("Light Theme for Stitches\n", light_theme_default);
console.log("Dark Theme for Stitches\n", dark_theme_default);
var stitches = (0, import_react.createStitches)({
  theme: {
    colors: {
      red: "#ff6d6d",
      steel: "#363645b0",
      black: "#000",
      white: "#fff",
      grey: "#666"
    },
    space: {
      "space-1": "20px"
    }
  },
  media: {
    tabletUp: "(min-width: 768px)",
    desktopUp: "(min-width: 1024px)",
    largeDesktopUp: "(min-width: 1680px)"
  }
});
var { styled, globalCss, getCssText } = stitches;

// app/entry.server.tsx
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react2.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  markup = markup.replace(/<style id="stitches">.*<\/style>/g, `<style id="stitches">${getCssText()}</style>`);
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:D:\Users\Andler\Development\git_local\remix\powerstack-remix\app\root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  loader: () => loader,
  meta: () => meta
});
var import_node2 = require("@remix-run/node");
var import_react4 = require("@remix-run/react");
var import_react5 = require("react");

// app/app-config.ts
var env = __toESM(require("env-var"));
var appconfig = {
  network: {
    chain: env.get("CHAIN").required().asString(),
    chain_id: env.get("CHAIN_ID").required().asString()
  },
  contracts: {},
  services: {
    graphql_api: env.get("GRAPHQL_API").required().asString()
  },
  analytics: {
    google: env.get("GOOGLE_ANALYTICS").asString() || "",
    sentry: env.get("SENTRY_DSN").asString() || ""
  },
  cloudinary: {
    cloudName: env.get("CLOUDINARY_CLOUD_NAME").required().asString(),
    apiKey: env.get("CLOUDINARY_API_KEY").required().asString(),
    apiSecret: env.get("CLOUDINARY_API_SECRET").required().asString()
  },
  features: {}
};

// app/auth.server.ts
var import_node = require("@remix-run/node");
var import_ethers = require("ethers");
var import_remix_auth = require("remix-auth");
var import_remix_auth_form = require("remix-auth-form");
var import_tweetnacl = __toESM(require("tweetnacl"));
var session_storage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: ["s3cret"],
    secure: false
  }
});
var auth = new import_remix_auth.Authenticator(session_storage);
var enc = new TextEncoder().encode;
var getFormData = (form) => {
  var _a, _b, _c;
  const address = (_a = form.get("address")) == null ? void 0 : _a.toString();
  const signature = (_b = form.get("signature")) == null ? void 0 : _b.toString();
  const message2 = (_c = form.get("message")) == null ? void 0 : _c.toString();
  if (!address || !signature || !message2)
    throw new import_remix_auth.AuthorizationError(`Invalid login request`);
  return {
    address,
    signature,
    message: message2
  };
};
auth.use(new import_remix_auth_form.FormStrategy(async ({ form }) => {
  const { address, signature, message: message2 } = getFormData(form);
  const addr = await import_ethers.ethers.utils.verifyMessage(message2, signature);
  if (addr !== address)
    throw new import_remix_auth.AuthorizationError(`Invalid signature`);
  const user = {
    address: address.toString(),
    network: "rinkeby"
  };
  return user;
}), "metamask");
auth.use(new import_remix_auth_form.FormStrategy(async ({ form }) => {
  const { address, signature, message: message2 } = getFormData(form);
  const resp2 = import_tweetnacl.default.sign.detached.verify(enc(message2), enc(signature), enc(address));
  console.log("auth response", resp2);
  const user = {
    address: address.toString(),
    network: "solana"
  };
  return user;
}), "phantom");

// app/store/index.ts
var import_vanilla = __toESM(require("zustand/vanilla"));
var import_zustand = __toESM(require("zustand"));
var import_auto_zustand_selectors_hook = require("auto-zustand-selectors-hook");
var import_simple_zustand_devtools = require("simple-zustand-devtools");

// app/library/utils.ts
var import_lodash = __toESM(require("lodash"));
var isBrowser = typeof window !== "undefined";
var userAgent = isBrowser ? import_lodash.default.get(window, "navigator.userAgent") : "";
var ethereum = isBrowser && import_lodash.default.get(window, "ethereum");
var isAndroid = /(Android)/i.test(userAgent);
var isIphone = /(iPhone|iPod)/i.test(userAgent);
var isIpad = /(iPad)/i.test(userAgent);
var isPhantom = isBrowser && import_lodash.default.has(window, "solana.isPhantom");
var solana = isBrowser && import_lodash.default.get(window, "solana");

// app/store/ui-state.ts
var defaultUserInterfaceState = {
  show_wallet: false,
  show_sidebar: false
};
var createUserInterfaceSlice = (set) => __spreadProps(__spreadValues({}, defaultUserInterfaceState), {
  setShowWallet: (value) => set({ show_wallet: value }),
  setShowSidebar: (value) => set({ show_sidebar: value })
});

// app/store/session-state/default-session-state.ts
var dummy_appconfig = {
  network: {
    chain: "",
    chain_id: ""
  },
  contracts: {},
  services: {
    graphql_api: ""
  },
  analytics: {
    google: "",
    sentry: ""
  },
  cloudinary: {
    cloud_name: "",
    api_key: "",
    api_secret: ""
  },
  features: {}
};
var defaultAppSessionState = {
  appconfig: dummy_appconfig,
  user: null,
  session_error: null
};

// app/store/session-state/index.ts
var createAppSessionSlice = (set) => __spreadProps(__spreadValues({}, defaultAppSessionState), {
  setUser: (user) => set({ user }),
  setSessionData: (session_data) => set(session_data)
});

// app/store/index.ts
var store = (0, import_vanilla.default)((set, get2) => __spreadValues(__spreadValues({}, createAppSessionSlice(set, get2)), createUserInterfaceSlice(set, get2)));
var useStoreBase = (0, import_zustand.default)(store);
if (isBrowser)
  (0, import_simple_zustand_devtools.mountStoreDevtool)("AppStore", useStoreBase);
var useStore = (0, import_auto_zustand_selectors_hook.createSelectorHooks)(useStoreBase);

// app/styles/client.context.ts
var import_react3 = require("react");
var ClientStyleContext = (0, import_react3.createContext)({
  reset: () => {
  },
  sheet: ""
});
var client_context_default = ClientStyleContext;

// route:D:\Users\Andler\Development\git_local\remix\powerstack-remix\app\root.tsx
var Container = styled("div", {
  backgroundColor: "#ff0000",
  padding: "1em"
});
var meta = () => ({
  charset: "utf-8",
  title: "Remix with Stitches",
  viewport: "width=device-width,initial-scale=1"
});
var Document = ({ children, title }) => {
  const clientStyleData = (0, import_react5.useContext)(client_context_default);
  (0, import_react5.useEffect)(() => {
    clientStyleData.reset();
  }, [clientStyleData]);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_react4.Meta, null), /* @__PURE__ */ React.createElement(import_react4.Links, null), /* @__PURE__ */ React.createElement("style", {
    id: "stitches",
    dangerouslySetInnerHTML: { __html: clientStyleData.sheet },
    suppressHydrationWarning: true
  })), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_react4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react4.Scripts, null), /* @__PURE__ */ React.createElement(import_react4.LiveReload, null)));
};
var loader = async ({ request }) => {
  const user = await auth.isAuthenticated(request);
  const session = await session_storage.getSession(request.headers.get("cookie"));
  const session_error = session.get(auth.sessionErrorKey) || null;
  const session_data = {
    user,
    appconfig,
    session_error
  };
  return (0, import_node2.json)(session_data);
};
function App() {
  const session_data = (0, import_react4.useLoaderData)();
  (0, import_react5.useEffect)(() => {
    useStore.getState().setSessionData(session_data);
  }, [session_data]);
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_react4.Outlet, null));
}
function CatchBoundary() {
  const caught = (0, import_react4.useCatch)();
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("p", null, "[CatchBoundary]: ", caught.status, " ", caught.statusText)));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement("p", null, "[ErrorBoundary]: There was an error: ", error.message)));
}

// route:D:\Users\Andler\Development\git_local\remix\powerstack-remix\app\routes\actions\login\$strategy.tsx
var strategy_exports = {};
__export(strategy_exports, {
  action: () => action
});
var action = async ({ request, params }) => {
  const url = new URL(request.url);
  const redirect_to = url.searchParams.get("redirect_to");
  return auth.authenticate(params.strategy, request, {
    successRedirect: redirect_to,
    failureRedirect: redirect_to
  });
};

// route:D:\Users\Andler\Development\git_local\remix\powerstack-remix\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react8 = require("@remix-run/react");

// app/components/WalletLogin.tsx
var import_react6 = require("@stitches/react");
var import_ethers2 = require("ethers");
var import_react7 = require("@remix-run/react");
var StyledWallet = (0, import_react6.styled)("div", {
  border: "1px dotted gray",
  minHeight: 100
});
var message = "Login to PowerStack Remix";
var useLoginSubmit = () => {
  const location = (0, import_react7.useLocation)();
  const fetcher = (0, import_react7.useFetcher)();
  const submit = ({ strategy, signed_message }) => {
    fetcher.submit(signed_message, {
      method: "post",
      action: `/actions/login/${strategy}?redirect_to=${location.pathname || "/"}`
    });
  };
  return submit;
};
var WalletLogin = () => {
  const { user } = useStore();
  const submit = useLoginSubmit();
  const loginWithMetamask = async () => {
    if (!ethereum)
      return alert("Metamask not found");
    const provider = new import_ethers2.ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    submit({
      strategy: "metamask",
      signed_message: {
        signature: await signer.signMessage(message),
        address: await signer.getAddress(),
        message
      }
    });
  };
  const loginWithPhantom = async () => {
    if (!isPhantom)
      return alert("Phantom not found");
    try {
      const resp2 = await solana.connect({ onlyIfTrusted: true });
      console.log(resp2.publicKey.toString(), solana.isConnected);
    } catch (err) {
      alert(err.message);
    }
    submit({
      strategy: "phantom",
      signed_message: {
        signature: await solana.signMessage(new TextEncoder().encode(message), "utf8"),
        address: resp.publicKey.toString(),
        message
      }
    });
  };
  return /* @__PURE__ */ React.createElement(StyledWallet, null, /* @__PURE__ */ React.createElement("h3", null, "Rinkeby"), /* @__PURE__ */ React.createElement("button", {
    onClick: loginWithMetamask
  }, "Login with Metamask"), /* @__PURE__ */ React.createElement("p", null, "Address:", " ", (user == null ? void 0 : user.address) && (user == null ? void 0 : user.network) === "rinkeby" ? user.address : "wallet not connected"), /* @__PURE__ */ React.createElement("h3", null, "Solana"), /* @__PURE__ */ React.createElement("button", {
    onClick: loginWithPhantom
  }, "Login with Phantom"), /* @__PURE__ */ React.createElement("p", null, "Address:", " ", (user == null ? void 0 : user.address) && (user == null ? void 0 : user.network) === "solana" ? user.address : "wallet not connected"));
};

// route:D:\Users\Andler\Development\git_local\remix\powerstack-remix\app\routes\index.tsx
var Container2 = styled("div", {
  fontFamily: "system-ui, sans-serif",
  lineHeight: 1.4,
  margin: "auto",
  padding: "$space-1",
  "@media (min-width: 1000px)": {
    width: "600px"
  },
  variants: {
    color: {
      red: {
        backgroundColor: "$red"
      },
      steel: {
        backgroundColor: "$steel",
        color: "white"
      }
    }
  },
  defaultVariants: {
    color: "steel"
  }
});
function Index() {
  const { user, appconfig: appconfig2 } = useStore();
  console.log("Index user value", user);
  console.log("Index appconfig value", appconfig2);
  return /* @__PURE__ */ React.createElement(Container2, null, /* @__PURE__ */ React.createElement("h1", null, "Welcome ", user ? "Back" : null, " to PoweStack Remix"), /* @__PURE__ */ React.createElement(WalletLogin, null), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: "/jokes"
  }, "Jokes")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react8.Link, {
    to: "/jokes-error"
  }, "Jokes: Error"))));
}

// route:D:\Users\Andler\Development\git_local\remix\powerstack-remix\app\routes\jokes.tsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => Jokes
});
var import_react9 = require("@remix-run/react");
var Container3 = styled("div", {
  backgroundColor: "#d6d6d6"
});
function Jokes() {
  return /* @__PURE__ */ React.createElement(Container3, null, /* @__PURE__ */ React.createElement("h1", null, "Jokes"), /* @__PURE__ */ React.createElement("p", null, "This route works fine."), /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: "/"
  }, "Back to home"));
}

// route:D:\Users\Andler\Development\git_local\remix\powerstack-remix\app\routes\jokes\jokes-error.tsx
var jokes_error_exports = {};
__export(jokes_error_exports, {
  default: () => JokesError
});
function JokesError() {
  throw new Error("This route is no joking with us.");
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "84c8e2c5", "entry": { "module": "/build/entry.client-4PQNENKJ.js", "imports": ["/build/_shared/chunk-4ACWVKRS.js", "/build/_shared/chunk-VJK2PPKE.js", "/build/_shared/chunk-QLFXOJ5S.js", "/build/_shared/chunk-6SKE6JXS.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-6DI4TP4B.js", "imports": ["/build/_shared/chunk-FHZ2PEHM.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/actions/login/$strategy": { "id": "routes/actions/login/$strategy", "parentId": "root", "path": "actions/login/:strategy", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/actions/login/$strategy-MOLQ2Q3Z.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-EYAYF6XX.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/jokes": { "id": "routes/jokes", "parentId": "root", "path": "jokes", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/jokes-Z7UYQFSA.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/jokes/jokes-error": { "id": "routes/jokes/jokes-error", "parentId": "routes/jokes", "path": "jokes-error", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/jokes/jokes-error-WN55ZSKU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-84C8E2C5.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/actions/login/$strategy": {
    id: "routes/actions/login/$strategy",
    parentId: "root",
    path: "actions/login/:strategy",
    index: void 0,
    caseSensitive: void 0,
    module: strategy_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/jokes": {
    id: "routes/jokes",
    parentId: "root",
    path: "jokes",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_exports
  },
  "routes/jokes/jokes-error": {
    id: "routes/jokes/jokes-error",
    parentId: "routes/jokes",
    path: "jokes-error",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_error_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=/build/index.js.map
