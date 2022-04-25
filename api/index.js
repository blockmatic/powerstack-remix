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
var transitions = { instant: "0ms", "x-fast": "107ms", fast: "160ms", normal: "240ms", slow: "360ms", "x-slow": "540ms" };
var colors = { primary: "#044bff", "shadow-layer-1": "#00000014", "shadow-layer-2": "#0000000a", background: "#ffffff", neutral: "#eaeef0", "neutral-400": "#eef2f3", "neutral-300": "#f2f5f7", "neutral-600": "#b3c1c8", "neutral-700": "#7d94a0", "neutral-200": "#f6f8fa", "neutral-800": "#51646d", text: "#000505", "primary-400": "#1d5dff", "primary-300": "#366fff", "primary-200": "#4f81ff", "primary-600": "#033ccc", "primary-700": "#052e96", "primary-800": "#052062" };
var fonts = { bold: "Gilroy-Bold", "extra-bold": "Gilroy-ExtraBold", "semi-bold": "Gilroy-SemiBold" };
var easeCurves = { "in-out-quint": { x1: 0.86, y1: 0, x2: 0.07, y2: 1 }, "out-quint": { x1: 0.23, y1: 1, x2: 0.32, y2: 1 }, "in-sine": { x1: 0.47, y1: 0, x2: 0.745, y2: 0.715 } };
var space = { none: "0px", "xxx-small": "6px", "xx-small": "9px", "x-small": "14px", small: "21px", regular: "32px", large: "48px", "x-large": "72px", "xx-large": "108px", "xxx-large": "162px" };
var light_theme_default = { name, typeStyles, radii, shadows, transitions, colors, fonts, easeCurves, space };

// app/styles/dark-theme.json
var name2 = "dark";
var typeStyles2 = { "display-1": { fontFamily: "Gilroy-ExtraBold", fontSize: "48px", lineHeight: "62px", letterSpacing: "0.1em" }, "display-2": { fontFamily: "Gilroy-ExtraBold", fontSize: "40px", lineHeight: "52px", letterSpacing: "0.1em" }, "h-1": { fontFamily: "Gilroy-Bold", fontSize: "33px", lineHeight: "44px", letterSpacing: "0.1em" }, "h-2": { fontFamily: "Gilroy-Bold", fontSize: "28px", lineHeight: "38px", letterSpacing: "0.1em" }, "h-3": { fontFamily: "Gilroy-Bold", fontSize: "23px", lineHeight: "32px", letterSpacing: "0.1em" }, "h-4": { fontFamily: "Gilroy-Bold", fontSize: "19px", lineHeight: "27px", letterSpacing: "0.1em" }, "h-5": { fontFamily: "Gilroy-Bold", fontSize: "16px", lineHeight: "23px", letterSpacing: "0.1em" }, body: { fontFamily: "Gilroy-Bold", fontSize: "16px", lineHeight: "23px", letterSpacing: "0.1em" }, small: { fontFamily: "Gilroy-SemiBold", fontSize: "13px", lineHeight: "20px", letterSpacing: "0.1em" }, "x-small": { fontFamily: "Gilroy-SemiBold", fontSize: "11px", lineHeight: "17px", letterSpacing: "0.1em" } };
var radii2 = { "radius-4": "4px", "radius-6": "6px", "radius-12": "12px", "radius-20": "20px" };
var shadows2 = { "drop-shadow-1": "0px 4px 8px 0px #0000003d, 2px 2px 2px 0px #0000001f", "drop-shadow-2": "0px 8px 16px 0px #0000003d, 4px 4px 4px 0px #00000021", "drop-shadow-3": "0px 12px 20px 0px #0000003d, 6px 6px 6px 0px #0000001f", "drop-shadow-4": "0px 16px 24px 0px #0000003d, 8px 8px 8px 0px #0000001f", "drop-shadow-5": "0px 24px 28px 0px #0000003d, 12px 12px 12px 0px #0000001f" };
var colors2 = { primary: "#00023e", "shadow-layer-1": "#00000014", "shadow-layer-2": "#0000000a", background: "#002f2f", neutral: "#eaeef0", "neutral-400": "#eef2f3", "neutral-300": "#f2f5f7", "neutral-600": "#b3c1c8", "neutral-700": "#7d94a0", "neutral-200": "#f6f8fa", "neutral-800": "#51646d", text: "#fefefe", "primary-400": "#00036b", "primary-300": "#000598", "primary-200": "#0006c4", "primary-600": "#010231", "primary-700": "#010224", "primary-800": "#010218" };
var fonts2 = { bold: "Gilroy-Bold", "extra-bold": "Gilroy-ExtraBold", "semi-bold": "Gilroy-SemiBold" };
var durations = { instant: "0", "x-fast": "107", fast: "160", normal: "240", slow: "360", "x-slow": "540" };
var easeCurves2 = { "in-out-quint": { x1: 0.86, y1: 0, x2: 0.07, y2: 1 }, "out-quint": { x1: 0.23, y1: 1, x2: 0.32, y2: 1 }, "in-sine": { x1: 0.47, y1: 0, x2: 0.745, y2: 0.715 } };
var space2 = { none: "0px", "xxx-small": "6px", "xx-small": "9px", "x-small": "14px", small: "21px", regular: "32px", large: "48px", "x-large": "72px", "xx-large": "108px", "xxx-large": "162px" };
var dark_theme_default = { name: name2, typeStyles: typeStyles2, radii: radii2, shadows: shadows2, colors: colors2, fonts: fonts2, durations, easeCurves: easeCurves2, space: space2 };

// app/styles/stitches.config.ts
console.log("Light Theme for Stitches\n", light_theme_default);
console.log("Dark Theme for Stitches\n", dark_theme_default);
var getFontSizes = () => {
  let fontSizes = {};
  for (const property in light_theme_default.typeStyles) {
    const tempFontSize = light_theme_default.typeStyles[property]["fontSize"];
    fontSizes[property] = tempFontSize;
  }
  return fontSizes;
};
var { styled, globalCss, getCssText, config } = (0, import_react.createStitches)({
  theme: {
    colors: __spreadProps(__spreadValues({}, light_theme_default.colors), {
      "header-bg": "hsla(0,0%,100%,.8)"
    }),
    sizes: {
      container: "78.5rem",
      iconSmall: "1.375rem",
      iconMedium: "2.75rem"
    },
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700
    },
    space: light_theme_default.space,
    fonts: light_theme_default.fonts,
    fontSizes: getFontSizes()
  },
  styles: {
    h1: {
      fontFamily: "Gilroy-ExtraBold"
    }
  },
  media: {
    tabletUp: "(min-width: 768px)",
    desktopUp: "(min-width: 1024px)",
    largeDesktopUp: "(min-width: 1680px)"
  },
  utils: {
    p: (value) => ({
      padding: value
    }),
    pt: (value) => ({
      paddingTop: value
    }),
    pr: (value) => ({
      paddingRight: value
    }),
    pb: (value) => ({
      paddingBottom: value
    }),
    pl: (value) => ({
      paddingLeft: value
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    m: (value) => ({
      margin: value
    }),
    mt: (value) => ({
      marginTop: value
    }),
    mr: (value) => ({
      marginRight: value
    }),
    mb: (value) => ({
      marginBottom: value
    }),
    ml: (value) => ({
      marginLeft: value
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    bg: (value) => ({
      backgroundColor: value
    }),
    size: (value) => ({
      width: value,
      height: value
    })
  }
});
var globalStyles = globalCss({
  "@font-face": [
    {
      fontDisplay: "swap",
      fontFamily: "Gilroy-Bold",
      src: "url(/fonts/Gilroy-Bold.ttf)"
    },
    {
      fontDisplay: "swap",
      fontFamily: '"Gilroy-ExtraBold"',
      src: "url(/fonts/Gilroy-ExtraBold.ttf)"
    },
    {
      fontDisplay: "swap",
      fontFamily: "Gilroy-SemiBold",
      src: "url(/fonts/Gilroy-SemiBold.ttf)"
    }
  ],
  body: {
    fontFamily: "$semi-bold",
    margin: 0
  },
  "*, *::before, *::after": {
    boxSizing: "border-box"
  }
});

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

// app/library/prisma.ts
var import_client = require("@prisma/client");
var prisma;
if (false) {
  prisma = new import_client.PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new import_client.PrismaClient();
  }
  prisma = global.prisma;
}

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
  globalStyles();
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

// route:D:\Users\Andler\Development\git_local\remix\powerstack-remix\app\routes\$account.tsx
var account_exports = {};
__export(account_exports, {
  default: () => Index,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");
var import_react6 = require("@remix-run/react");
var loader2 = async ({ params }) => {
  const account = await prisma.accounts.findFirst({
    where: {
      account: params.account
    }
  });
  return (0, import_node3.json)({ account });
};
function Index() {
  const { account } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(account, null, 2));
}

// route:D:\Users\Andler\Development\git_local\remix\powerstack-remix\app\routes\about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index2
});

// app/components/Flex.tsx
var Flex = styled("div", {
  boxSizing: "border-box",
  display: "flex",
  variants: {
    direction: {
      row: {
        flexDirection: "row"
      },
      column: {
        flexDirection: "column"
      },
      rowReverse: {
        flexDirection: "row-reverse"
      },
      columnReverse: {
        flexDirection: "column-reverse"
      }
    },
    align: {
      start: {
        alignItems: "flex-start"
      },
      center: {
        alignItems: "center"
      },
      end: {
        alignItems: "flex-end"
      },
      stretch: {
        alignItems: "stretch"
      },
      baseline: {
        alignItems: "baseline"
      }
    },
    justify: {
      start: {
        justifyContent: "flex-start"
      },
      center: {
        justifyContent: "center"
      },
      end: {
        justifyContent: "flex-end"
      },
      between: {
        justifyContent: "space-between"
      }
    },
    wrap: {
      noWrap: {
        flexWrap: "nowrap"
      },
      wrap: {
        flexWrap: "wrap"
      },
      wrapReverse: {
        flexWrap: "wrap-reverse"
      }
    }
  },
  defaultVariants: {
    direction: "row",
    align: "stretch",
    justify: "start",
    wrap: "noWrap"
  }
});

// app/components/Container.tsx
var Container2 = styled("div", {
  px: "$regular",
  maxWidth: "$container",
  margin: "0 auto",
  width: "100%"
});

// app/components/Header.tsx
var import_react7 = require("@remix-run/react");

// app/components/icons/GhLoginIcon.tsx
var GhLoginIcon = () => /* @__PURE__ */ React.createElement("svg", {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ React.createElement("path", {
  d: "M16 1C7.43625 1 0.5 7.94013 0.5 16.5C0.5 23.3497 4.94075 29.1583 11.0981 31.2056C11.8731 31.3516 12.1573 30.8724 12.1573 30.4603C12.1573 30.0922 12.1444 29.117 12.1379 27.8253C7.82633 28.7605 6.917 25.7458 6.917 25.7458C6.21175 23.9568 5.19262 23.4789 5.19262 23.4789C3.78858 22.5179 5.30112 22.5373 5.30112 22.5373C6.85758 22.6458 7.67521 24.1338 7.67521 24.1338C9.05729 26.504 11.3035 25.8194 12.1896 25.4228C12.3291 24.4205 12.7282 23.7372 13.1713 23.3497C9.72896 22.9622 6.111 21.6292 6.111 15.6901C6.111 13.998 6.71162 12.616 7.70621 11.531C7.53183 11.1396 7.00871 9.56375 7.84183 7.42863C7.84183 7.42863 9.13996 7.01271 12.1043 9.01738C13.3443 8.6725 14.6618 8.502 15.9793 8.49425C17.2968 8.502 18.6143 8.6725 19.8543 9.01738C22.7993 7.01271 24.0975 7.42863 24.0975 7.42863C24.9306 9.56375 24.4075 11.1396 24.2525 11.531C25.2406 12.616 25.8412 13.998 25.8412 15.6901C25.8412 21.6447 22.2181 22.9558 18.7693 23.3368C19.3118 23.8018 19.8156 24.7525 19.8156 26.2043C19.8156 28.2787 19.7962 29.945 19.7962 30.4487C19.7962 30.8556 20.0675 31.34 20.8618 31.185C27.0631 29.1519 31.5 23.3394 31.5 16.5C31.5 7.94013 24.5599 1 16 1",
  fill: "black"
}));
var GhLoginIcon_default = GhLoginIcon;

// app/components/icons/MetamaskIcon.tsx
var MetamaskIcon = () => /* @__PURE__ */ React.createElement("svg", {
  width: "34",
  height: "34",
  viewBox: "0 0 34 34",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /* @__PURE__ */ React.createElement("path", {
  d: "M29.2511 3.78845L18.6328 11.6748L20.5964 7.02197L29.2511 3.78845Z",
  fill: "#E2761B",
  stroke: "#E2761B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M4.73828 3.78845L15.2712 11.7495L13.4037 7.02197L4.73828 3.78845Z",
  fill: "#E4761B",
  stroke: "#E4761B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M25.4305 22.0691L22.6025 26.4018L28.6534 28.0666L30.3929 22.1651L25.4305 22.0691Z",
  fill: "#E4761B",
  stroke: "#E4761B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M3.61768 22.1651L5.34649 28.0666L11.3973 26.4018L8.56934 22.0691L3.61768 22.1651Z",
  fill: "#E4761B",
  stroke: "#E4761B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M11.0558 14.7483L9.36963 17.2988L15.3778 17.5656L15.1644 11.1093L11.0558 14.7483Z",
  fill: "#E4761B",
  stroke: "#E4761B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M22.9335 14.7483L18.7715 11.0345L18.6328 17.5656L24.6303 17.2988L22.9335 14.7483Z",
  fill: "#E4761B",
  stroke: "#E4761B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M11.3972 26.4017L15.0042 24.6409L11.8881 22.2078L11.3972 26.4017Z",
  fill: "#E4761B",
  stroke: "#E4761B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M18.9849 24.6409L22.6026 26.4017L22.101 22.2078L18.9849 24.6409Z",
  fill: "#E4761B",
  stroke: "#E4761B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M22.6028 26.4017L18.9851 24.6409L19.2732 26.9993L19.2412 27.9918L22.6028 26.4017Z",
  fill: "#D7C1B3",
  stroke: "#D7C1B3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M11.3975 26.4017L14.759 27.9918L14.7377 26.9993L15.0045 24.6409L11.3975 26.4017Z",
  fill: "#D7C1B3",
  stroke: "#D7C1B3",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M11.3973 26.4018L11.9096 22.0691L8.56934 22.1651L11.3973 26.4018Z",
  fill: "#CD6116",
  stroke: "#CD6116",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M22.0903 22.0691L22.6026 26.4018L25.4306 22.1651L22.0903 22.0691Z",
  fill: "#CD6116",
  stroke: "#CD6116",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M24.6303 17.2988L18.6328 17.5656L19.1877 20.6497L20.0735 18.7929L22.2078 19.764L24.6303 17.2988Z",
  fill: "#CD6116",
  stroke: "#CD6116",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M11.8028 19.764L13.9371 18.7929L14.8122 20.6497L15.3778 17.5656L9.36963 17.2988L11.8028 19.764Z",
  fill: "#CD6116",
  stroke: "#CD6116",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M14.8124 20.6497L11.803 19.764L13.9266 18.7928L14.8124 20.6497Z",
  fill: "#233447",
  stroke: "#233447",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M19.177 20.6497L20.0628 18.7928L22.1971 19.764L19.177 20.6497Z",
  fill: "#233447",
  stroke: "#233447",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M9.36963 17.2988L11.8881 22.2078L11.8028 19.764L9.36963 17.2988Z",
  fill: "#E4751F",
  stroke: "#E4751F",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M22.2075 19.764L22.1008 22.2078L24.63 17.2988L22.2075 19.764Z",
  fill: "#E4751F",
  stroke: "#E4751F",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M15.3779 17.5657L14.8123 20.6498L15.5166 24.2888L15.6767 19.4972L15.3779 17.5657Z",
  fill: "#E4751F",
  stroke: "#E4751F",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M18.6326 17.5657L18.3445 19.4866L18.4725 24.2888L19.1875 20.6498L18.6326 17.5657Z",
  fill: "#E4751F",
  stroke: "#E4751F",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M19.1877 20.6497L18.4727 24.2887L18.9849 24.6409L22.101 22.2077L22.2077 19.7639L19.1877 20.6497Z",
  fill: "#F6851B",
  stroke: "#F6851B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M11.803 19.7639L11.8884 22.2077L15.0045 24.6409L15.5167 24.2887L14.8124 20.6497L11.803 19.7639Z",
  fill: "#F6851B",
  stroke: "#F6851B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M19.2412 27.9918L19.2732 26.9993L19.0064 26.7646H14.9831L14.7377 26.9993L14.759 27.9918L11.3975 26.4017L12.5713 27.3622L14.9511 29.0163H19.0384L21.4288 27.3622L22.6027 26.4017L19.2412 27.9918Z",
  fill: "#C0AD9E",
  stroke: "#C0AD9E",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M18.9849 24.641L18.4726 24.2888H15.5166L15.0043 24.641L14.7375 26.9994L14.983 26.7647H19.0062L19.273 26.9994L18.9849 24.641Z",
  fill: "#161616",
  stroke: "#161616",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M29.6992 12.1871L30.6063 7.83302L29.251 3.78845L18.9849 11.408L22.9334 14.7483L28.5147 16.381L29.7526 14.9404L29.219 14.5562L30.0728 13.7772L29.4111 13.2649L30.2648 12.6139L29.6992 12.1871Z",
  fill: "#763D16",
  stroke: "#763D16",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M3.39355 7.83302L4.30065 12.1871L3.72438 12.6139L4.57811 13.2649L3.92714 13.7772L4.78087 14.5562L4.24729 14.9404L5.47453 16.381L11.0558 14.7483L15.0044 11.408L4.73819 3.78845L3.39355 7.83302Z",
  fill: "#763D16",
  stroke: "#763D16",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M28.5148 16.3811L22.9335 14.7483L24.6303 17.2988L22.1011 22.2078L25.4306 22.1651H30.393L28.5148 16.3811Z",
  fill: "#F6851B",
  stroke: "#F6851B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M11.0558 14.7483L5.47455 16.3811L3.61768 22.1651H8.56934L11.8882 22.2078L9.36972 17.2988L11.0558 14.7483Z",
  fill: "#F6851B",
  stroke: "#F6851B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}), /* @__PURE__ */ React.createElement("path", {
  d: "M18.6327 17.5656L18.9849 11.408L20.607 7.02197H13.4036L15.0043 11.408L15.3778 17.5656L15.5059 19.5078L15.5166 24.2888H18.4726L18.494 19.5078L18.6327 17.5656Z",
  fill: "#F6851B",
  stroke: "#F6851B",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}));
var MetamaskIcon_default = MetamaskIcon;

// app/components/icons/BlockmaticIcon.tsx
var React2 = __toESM(require("react"));
var BlockmaticIcon = (props) => /* @__PURE__ */ React2.createElement("svg", __spreadValues({
  width: "426",
  height: "84",
  viewBox: "0 0 426 84",
  fill: "none"
}, props), /* @__PURE__ */ React2.createElement("path", {
  d: "M0 37C0 18.9127 14.6627 4 32.75 4V4C50.8373 4 65.5 18.9127 65.5 37V37C65.5 55.0873 50.8373 70 32.75 70V70C14.6627 70 0 55.0873 0 37V37Z",
  fill: "url(#pattern0)"
}), /* @__PURE__ */ React2.createElement("path", {
  d: "M0 37C0 18.9127 14.6627 4 32.75 4V4C50.8373 4 65.5 18.9127 65.5 37V37C65.5 55.0873 50.8373 70 32.75 70V70C14.6627 70 0 55.0873 0 37V37Z",
  fill: "url(#pattern1)"
}), /* @__PURE__ */ React2.createElement("path", {
  d: "M116.8 26.048C121.379 26.048 125.277 27.7933 128.496 31.284C131.76 34.7293 133.392 38.968 133.392 44C133.392 49.032 131.76 53.2933 128.496 56.784C125.277 60.2293 121.379 61.952 116.8 61.952C112.04 61.952 108.368 60.2973 105.784 56.988V61H97.012V13.4H105.784V31.012C108.368 27.7027 112.04 26.048 116.8 26.048ZM108.436 50.936C110.204 52.704 112.448 53.588 115.168 53.588C117.888 53.588 120.132 52.704 121.9 50.936C123.713 49.1227 124.62 46.8107 124.62 44C124.62 41.1893 123.713 38.9 121.9 37.132C120.132 35.3187 117.888 34.412 115.168 34.412C112.448 34.412 110.204 35.3187 108.436 37.132C106.668 38.9 105.784 41.1893 105.784 44C105.784 46.8107 106.668 49.1227 108.436 50.936ZM137.538 61V11.36H146.31V61H137.538ZM181.267 56.784C177.777 60.2293 173.515 61.952 168.483 61.952C163.451 61.952 159.19 60.2293 155.699 56.784C152.254 53.2933 150.531 49.032 150.531 44C150.531 38.968 152.254 34.7293 155.699 31.284C159.19 27.7933 163.451 26.048 168.483 26.048C173.515 26.048 177.777 27.7933 181.267 31.284C184.758 34.7293 186.503 38.968 186.503 44C186.503 49.032 184.758 53.2933 181.267 56.784ZM161.887 50.732C163.655 52.5 165.854 53.384 168.483 53.384C171.113 53.384 173.311 52.5 175.079 50.732C176.847 48.964 177.731 46.72 177.731 44C177.731 41.28 176.847 39.036 175.079 37.268C173.311 35.5 171.113 34.616 168.483 34.616C165.854 34.616 163.655 35.5 161.887 37.268C160.165 39.036 159.303 41.28 159.303 44C159.303 46.72 160.165 48.964 161.887 50.732ZM206.818 61.952C201.696 61.952 197.412 60.2293 193.966 56.784C190.566 53.3387 188.866 49.0773 188.866 44C188.866 38.9227 190.566 34.6613 193.966 31.216C197.412 27.7707 201.696 26.048 206.818 26.048C210.128 26.048 213.142 26.8413 215.862 28.428C218.582 30.0147 220.645 32.1453 222.05 34.82L214.502 39.24C213.822 37.8347 212.78 36.724 211.374 35.908C210.014 35.092 208.473 34.684 206.75 34.684C204.121 34.684 201.945 35.568 200.222 37.336C198.5 39.0587 197.638 41.28 197.638 44C197.638 46.6747 198.5 48.896 200.222 50.664C201.945 52.3867 204.121 53.248 206.75 53.248C208.518 53.248 210.082 52.8627 211.442 52.092C212.848 51.276 213.89 50.1653 214.57 48.76L222.186 53.112C220.69 55.7867 218.582 57.94 215.862 59.572C213.142 61.1587 210.128 61.952 206.818 61.952ZM256.134 61H245.934L233.558 45.564V61H224.786V13.4H233.558V41.96L245.254 27H255.726L242.058 43.796L256.134 61ZM296.076 26.048C299.975 26.048 303.08 27.3173 305.392 29.856C307.749 32.3947 308.928 35.7947 308.928 40.056V61H300.156V40.668C300.156 38.628 299.657 37.0413 298.66 35.908C297.663 34.7747 296.257 34.208 294.444 34.208C292.449 34.208 290.885 34.8653 289.752 36.18C288.664 37.4947 288.12 39.3987 288.12 41.892V61H279.348V40.668C279.348 38.628 278.849 37.0413 277.852 35.908C276.855 34.7747 275.449 34.208 273.636 34.208C271.687 34.208 270.123 34.8653 268.944 36.18C267.811 37.4947 267.244 39.3987 267.244 41.892V61H258.472V27H267.244V30.604C269.284 27.5667 272.435 26.048 276.696 26.048C280.867 26.048 283.949 27.68 285.944 30.944C288.211 27.68 291.588 26.048 296.076 26.048ZM340.178 27H348.95V61H340.178V56.988C337.549 60.2973 333.854 61.952 329.094 61.952C324.561 61.952 320.662 60.2293 317.398 56.784C314.18 53.2933 312.57 49.032 312.57 44C312.57 38.968 314.18 34.7293 317.398 31.284C320.662 27.7933 324.561 26.048 329.094 26.048C333.854 26.048 337.549 27.7027 340.178 31.012V27ZM323.994 50.936C325.762 52.704 328.006 53.588 330.726 53.588C333.446 53.588 335.69 52.704 337.458 50.936C339.272 49.1227 340.178 46.8107 340.178 44C340.178 41.1893 339.272 38.9 337.458 37.132C335.69 35.3187 333.446 34.412 330.726 34.412C328.006 34.412 325.762 35.3187 323.994 37.132C322.226 38.9 321.342 41.1893 321.342 44C321.342 46.8107 322.226 49.1227 323.994 50.936ZM374.313 35.432H366.629V49.576C366.629 50.7547 366.923 51.616 367.513 52.16C368.102 52.704 368.963 53.0213 370.097 53.112C371.23 53.1573 372.635 53.1347 374.313 53.044V61C368.283 61.68 364.022 61.1133 361.529 59.3C359.081 57.4867 357.857 54.2453 357.857 49.576V35.432H351.941V27H357.857V20.132L366.629 17.48V27H374.313V35.432ZM382.81 22.92C381.359 22.92 380.09 22.3987 379.002 21.356C377.959 20.268 377.438 18.9987 377.438 17.548C377.438 16.0973 377.959 14.828 379.002 13.74C380.09 12.652 381.359 12.108 382.81 12.108C384.306 12.108 385.575 12.652 386.618 13.74C387.706 14.828 388.25 16.0973 388.25 17.548C388.25 18.9987 387.706 20.268 386.618 21.356C385.575 22.3987 384.306 22.92 382.81 22.92ZM378.458 61V27H387.23V61H378.458ZM409.402 61.952C404.28 61.952 399.996 60.2293 396.55 56.784C393.15 53.3387 391.45 49.0773 391.45 44C391.45 38.9227 393.15 34.6613 396.55 31.216C399.996 27.7707 404.28 26.048 409.402 26.048C412.712 26.048 415.726 26.8413 418.446 28.428C421.166 30.0147 423.229 32.1453 424.634 34.82L417.086 39.24C416.406 37.8347 415.364 36.724 413.958 35.908C412.598 35.092 411.057 34.684 409.334 34.684C406.705 34.684 404.529 35.568 402.806 37.336C401.084 39.0587 400.222 41.28 400.222 44C400.222 46.6747 401.084 48.896 402.806 50.664C404.529 52.3867 406.705 53.248 409.334 53.248C411.102 53.248 412.666 52.8627 414.026 52.092C415.432 51.276 416.474 50.1653 417.154 48.76L424.77 53.112C423.274 55.7867 421.166 57.94 418.446 59.572C415.726 61.1587 412.712 61.952 409.402 61.952Z",
  fill: "black"
}), /* @__PURE__ */ React2.createElement("defs", null, /* @__PURE__ */ React2.createElement("pattern", {
  id: "pattern0",
  patternContentUnits: "objectBoundingBox",
  width: "1",
  height: "1"
}, /* @__PURE__ */ React2.createElement("use", {
  xlinkHref: "#image0_225_511",
  transform: "translate(-0.694656 -0.742424) scale(0.0152672 0.0151515)"
})), /* @__PURE__ */ React2.createElement("pattern", {
  id: "pattern1",
  patternContentUnits: "objectBoundingBox",
  width: "1",
  height: "1"
}, /* @__PURE__ */ React2.createElement("use", {
  xlinkHref: "#image0_225_511",
  transform: "translate(-0.694656 -0.742424) scale(0.0152672 0.0151515)"
})), /* @__PURE__ */ React2.createElement("image", {
  id: "image0_225_511",
  width: "505",
  height: "160",
  xlinkHref: "data:image/png;base64,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"
})));
var BlockmaticIcon_default = BlockmaticIcon;

// app/components/Header.tsx
function Header() {
  const linkStyles = {
    color: "$text",
    ml: "$small",
    textDecoration: "none",
    transition: "color 0.4s",
    "&:hover": {
      color: "$primary-400"
    }
  };
  const NavBar = styled(Flex, {
    backdropFilter: "saturate(180%) blur(5px)",
    boxShadow: "inset 0 -1px 0 0 rgba(0,0,0,.1)",
    bg: "$header-bg",
    position: "absolute",
    py: "$x-small",
    top: 0,
    width: "100%",
    zIndex: 1e3
  });
  const LinkItem = styled(import_react7.Link, linkStyles);
  const AnchorItem = styled("a", __spreadProps(__spreadValues({}, linkStyles), {
    "& svg": {
      size: "$iconSmall"
    }
  }));
  const VisuallyHidden = styled("h2", {
    position: "absolute",
    clip: "rect(1px, 1px, 1px, 1px)",
    overflow: "hidden",
    height: "1px",
    width: "1px",
    wordWrap: "normal"
  });
  const Logo = styled("img", {
    maxHeight: "$iconMedium",
    objectFit: "contain"
  });
  return /* @__PURE__ */ React.createElement(NavBar, null, /* @__PURE__ */ React.createElement(Container2, {
    css: { px: "$xx-small", "@tabletUp": { px: "$small" } }
  }, /* @__PURE__ */ React.createElement(Flex, {
    justify: "between",
    align: "center"
  }, /* @__PURE__ */ React.createElement(Flex, {
    css: { "svg": { height: "32px", width: "max-content" } }
  }, /* @__PURE__ */ React.createElement(BlockmaticIcon_default, null)), /* @__PURE__ */ React.createElement(Flex, {
    justify: "end",
    as: "nav",
    role: "navigation",
    "aria-labelledby": "main-nav-title",
    align: "center"
  }, /* @__PURE__ */ React.createElement(VisuallyHidden, null, "Main navigation"), /* @__PURE__ */ React.createElement(LinkItem, {
    to: "#"
  }, "Login"), /* @__PURE__ */ React.createElement(AnchorItem, {
    "aria-label": "Go to Powerstack Template",
    href: "https://github.com/blockmatic/powerstack-remix"
  }, /* @__PURE__ */ React.createElement(GhLoginIcon_default, null))))));
}

// route:D:\Users\Andler\Development\git_local\remix\powerstack-remix\app\routes\about.tsx
function Index2() {
  const { user } = useStore();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("h1", null, "Something"), /* @__PURE__ */ React.createElement("pre", null, JSON.stringify(user, null, 2)));
}

// route:D:\Users\Andler\Development\git_local\remix\powerstack-remix\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index3
});
var import_react9 = require("@remix-run/react");

// app/components/WalletLogin.tsx
var import_ethers2 = require("ethers");
var import_react8 = require("@remix-run/react");

// app/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  boxSizing: "border-box",
  userSelect: "none",
  "&::before": {
    boxSizing: "border-box"
  },
  "&::after": {
    boxSizing: "border-box"
  },
  fontSize: "$body",
  fontFamily: "$semi-bold",
  fontVariantNumeric: "tabular-nums",
  border: "1px solid none",
  textAlign: "center",
  lineHeight: "1.2",
  transition: "all 240ms ease-in-out",
  "svg": {
    width: "24px",
    height: "24px",
    marginRight: "$xxx-small",
    fill: "$text"
  },
  "&:disabled": {
    color: "$neutral-700",
    backgroundColor: "$neutral-300",
    cursor: "not-allowed"
  },
  variants: {
    size: {
      "small": {
        borderRadius: "4px",
        height: "40px",
        p: "$xx-small"
      },
      "medium": {
        borderRadius: "4px",
        height: "50px",
        p: "$x-small",
        fontSize: "$body"
      },
      "large": {
        borderRadius: "4px",
        height: "50px",
        p: "$x-small",
        fontSize: "$body"
      }
    },
    variant: {
      default: {
        backgroundColor: "$neutral",
        "&:hover:not(:disabled)": {
          backgroundColor: "$neutral-700"
        }
      },
      github: {
        backgroundColor: "$neutral-800",
        color: "#FFF",
        "&:hover:not(:disabled)": {
          backgroundColor: "$neutral-700"
        }
      },
      gitlab: {
        backgroundColor: "$primary-400",
        color: "#FFF",
        "&:hover:not(:disabled)": {
          backgroundColor: "$neutral-300"
        }
      },
      bitbucket: {
        backgroundColor: "$primary",
        color: "#FFF",
        "&:hover:not(:disabled)": {
          backgroundColor: "$neutral-400"
        }
      },
      metamask: {
        backgroundColor: "$neutral-700",
        color: "#FFF",
        "&:hover:not(:disabled)": {
          backgroundColor: "$neutral-800"
        }
      },
      anchor: {
        backgroundColor: "$primary-400",
        color: "#FFF",
        "&:hover:not(:disabled)": {
          backgroundColor: "$primary"
        }
      },
      phantom: {
        backgroundColor: "$primary",
        color: "#FFF",
        "&:hover:not(:disabled)": {
          backgroundColor: "$primary-600"
        }
      }
    }
  },
  defaultVariants: {
    size: "medium",
    variant: "default"
  }
});

// app/components/WalletLogin.tsx
var Container3 = styled("div", {
  minHeight: "100vh",
  pt: "4.5rem",
  px: "$regular",
  maxWidth: "350px",
  mx: "auto",
  mb: "$regular",
  mt: 0
});
var TitleStyles = styled("h1", {
  textAlign: "center",
  fontFamily: "$extra-bold"
});
var message = "Login to PowerStack Remix";
var useLoginSubmit = () => {
  const location = (0, import_react8.useLocation)();
  const fetcher = (0, import_react8.useFetcher)();
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
  return /* @__PURE__ */ React.createElement(Container3, null, /* @__PURE__ */ React.createElement(TitleStyles, null, "Welcome ", user ? "Back" : null, " to PoweStack Remix"), /* @__PURE__ */ React.createElement(Button, {
    onClick: loginWithMetamask,
    variant: "metamask"
  }, /* @__PURE__ */ React.createElement(MetamaskIcon_default, null), "Login with Metamask"), /* @__PURE__ */ React.createElement(Button, {
    onClick: loginWithPhantom
  }, "Login with Phantom"));
};

// route:D:\Users\Andler\Development\git_local\remix\powerstack-remix\app\routes\index.tsx
function Index3() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(WalletLogin, null), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react9.Link, {
    to: "/about"
  }, "About"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "a83e0274", "entry": { "module": "/build/entry.client-EI3V2OH5.js", "imports": ["/build/_shared/chunk-4ACWVKRS.js", "/build/_shared/chunk-5W3WKP6F.js", "/build/_shared/chunk-HSYOKXM2.js", "/build/_shared/chunk-6SKE6JXS.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-VCWUXH3Z.js", "imports": ["/build/_shared/chunk-CT432GRZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/$account": { "id": "routes/$account", "parentId": "root", "path": ":account", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/$account-YATQ76WE.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-NBW5WPEA.js", "imports": ["/build/_shared/chunk-EV44F5H4.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/actions/login/$strategy": { "id": "routes/actions/login/$strategy", "parentId": "root", "path": "actions/login/:strategy", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/actions/login/$strategy-MOLQ2Q3Z.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-QMQVAPRF.js", "imports": ["/build/_shared/chunk-EV44F5H4.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-A83E0274.js" };

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
  "routes/$account": {
    id: "routes/$account",
    parentId: "root",
    path: ":account",
    index: void 0,
    caseSensitive: void 0,
    module: account_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
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
