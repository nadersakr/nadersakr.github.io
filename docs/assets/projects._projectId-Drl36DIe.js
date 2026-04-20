import { r as h, j as e, R as H, a as pt, u as gt, L as ht } from "./index-EyA4U2tn.js";
import { c as ft, L as Y, B as X } from "./loader-YZUiUiwx.js";
import { I as J, X as xt } from "./input-vy0qOjVk.js";
import { L as I, C as Ue } from "./checkbox-DDXkD4Xl.js";
import { u as bt } from "./useAuth-BrlpBzXi.js";
import { c as K, s as g } from "./client-DZDrzSlV.js";
import { b as yt } from "./logo-uuobCn-8.js";
import { A as Ve } from "./arrow-left-TP3CRfAc.js";
import { C as vt } from "./check-HBKcQwEo.js";
import { P as wt } from "./plus-Dz-D31Co.js";
import { I as jt, S as Nt, A as kt } from "./sparkles-Ch88X6Hi.js";
const St = [
    ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
    ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
    ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
    ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
    ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
    ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }],
],
    _t = K("grip-vertical", St);
const Ct = [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
],
    Et = K("refresh-cw", Ct);
const Pt = [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
],
    De = K("trash-2", Pt);
const It = [
    ["path", { d: "M12 3v12", key: "1x0j5s" }],
    ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
],
    Ge = K("upload", It),
    pe = h.forwardRef(({ className: u, ...a }, r) =>
        e.jsx("textarea", {
            className: ft(
                "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                u,
            ),
            ref: r,
            ...a,
        }),
    );
pe.displayName = "Textarea";
function Tt(u) {
    if (typeof document > "u") return;
    let a = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    ((r.type = "text/css"),
        a.appendChild(r),
        r.styleSheet ? (r.styleSheet.cssText = u) : r.appendChild(document.createTextNode(u)));
}
Array(12).fill(0);
let ge = 1;
class Rt {
    constructor() {
        ((this.subscribe = (a) => (
            this.subscribers.push(a),
            () => {
                const r = this.subscribers.indexOf(a);
                this.subscribers.splice(r, 1);
            }
        )),
            (this.publish = (a) => {
                this.subscribers.forEach((r) => r(a));
            }),
            (this.addToast = (a) => {
                (this.publish(a), (this.toasts = [...this.toasts, a]));
            }),
            (this.create = (a) => {
                var r;
                const { message: p, ...x } = a,
                    b =
                        typeof a?.id == "number" || ((r = a.id) == null ? void 0 : r.length) > 0 ? a.id : ge++,
                    R = this.toasts.find((j) => j.id === b),
                    Z = a.dismissible === void 0 ? !0 : a.dismissible;
                return (
                    this.dismissedToasts.has(b) && this.dismissedToasts.delete(b),
                    R
                        ? (this.toasts = this.toasts.map((j) =>
                            j.id === b
                                ? (this.publish({ ...j, ...a, id: b, title: p }),
                                    { ...j, ...a, id: b, dismissible: Z, title: p })
                                : j,
                        ))
                        : this.addToast({ title: p, ...x, dismissible: Z, id: b }),
                    b
                );
            }),
            (this.dismiss = (a) => (
                a
                    ? (this.dismissedToasts.add(a),
                        requestAnimationFrame(() => this.subscribers.forEach((r) => r({ id: a, dismiss: !0 }))))
                    : this.toasts.forEach((r) => {
                        this.subscribers.forEach((p) => p({ id: r.id, dismiss: !0 }));
                    }),
                a
            )),
            (this.message = (a, r) => this.create({ ...r, message: a })),
            (this.error = (a, r) => this.create({ ...r, message: a, type: "error" })),
            (this.success = (a, r) => this.create({ ...r, type: "success", message: a })),
            (this.info = (a, r) => this.create({ ...r, type: "info", message: a })),
            (this.warning = (a, r) => this.create({ ...r, type: "warning", message: a })),
            (this.loading = (a, r) => this.create({ ...r, type: "loading", message: a })),
            (this.promise = (a, r) => {
                if (!r) return;
                let p;
                r.loading !== void 0 &&
                    (p = this.create({
                        ...r,
                        promise: a,
                        type: "loading",
                        message: r.loading,
                        description: typeof r.description != "function" ? r.description : void 0,
                    }));
                const x = Promise.resolve(a instanceof Function ? a() : a);
                let b = p !== void 0,
                    R;
                const Z = x
                    .then(async (f) => {
                        if (((R = ["resolve", f]), H.isValidElement(f)))
                            ((b = !1), this.create({ id: p, type: "default", message: f }));
                        else if (At(f) && !f.ok) {
                            b = !1;
                            const y =
                                typeof r.error == "function"
                                    ? await r.error(`HTTP error! status: ${f.status}`)
                                    : r.error,
                                z =
                                    typeof r.description == "function"
                                        ? await r.description(`HTTP error! status: ${f.status}`)
                                        : r.description,
                                A = typeof y == "object" && !H.isValidElement(y) ? y : { message: y };
                            this.create({ id: p, type: "error", description: z, ...A });
                        } else if (f instanceof Error) {
                            b = !1;
                            const y = typeof r.error == "function" ? await r.error(f) : r.error,
                                z = typeof r.description == "function" ? await r.description(f) : r.description,
                                A = typeof y == "object" && !H.isValidElement(y) ? y : { message: y };
                            this.create({ id: p, type: "error", description: z, ...A });
                        } else if (r.success !== void 0) {
                            b = !1;
                            const y = typeof r.success == "function" ? await r.success(f) : r.success,
                                z = typeof r.description == "function" ? await r.description(f) : r.description,
                                A = typeof y == "object" && !H.isValidElement(y) ? y : { message: y };
                            this.create({ id: p, type: "success", description: z, ...A });
                        }
                    })
                    .catch(async (f) => {
                        if (((R = ["reject", f]), r.error !== void 0)) {
                            b = !1;
                            const _ = typeof r.error == "function" ? await r.error(f) : r.error,
                                y = typeof r.description == "function" ? await r.description(f) : r.description,
                                V = typeof _ == "object" && !H.isValidElement(_) ? _ : { message: _ };
                            this.create({ id: p, type: "error", description: y, ...V });
                        }
                    })
                    .finally(() => {
                        (b && (this.dismiss(p), (p = void 0)), r.finally == null || r.finally.call(r));
                    }),
                    j = () =>
                        new Promise((f, _) => Z.then(() => (R[0] === "reject" ? _(R[1]) : f(R[1]))).catch(_));
                return typeof p != "string" && typeof p != "number"
                    ? { unwrap: j }
                    : Object.assign(p, { unwrap: j });
            }),
            (this.custom = (a, r) => {
                const p = r?.id || ge++;
                return (this.create({ jsx: a(p), id: p, ...r }), p);
            }),
            (this.getActiveToasts = () => this.toasts.filter((a) => !this.dismissedToasts.has(a.id))),
            (this.subscribers = []),
            (this.toasts = []),
            (this.dismissedToasts = new Set()));
    }
}
const E = new Rt(),
    zt = (u, a) => {
        const r = a?.id || ge++;
        return (E.addToast({ title: u, ...a, id: r }), r);
    },
    At = (u) =>
        u &&
        typeof u == "object" &&
        "ok" in u &&
        typeof u.ok == "boolean" &&
        "status" in u &&
        typeof u.status == "number",
    Mt = zt,
    $t = () => E.toasts,
    Yt = () => E.getActiveToasts(),
    N = Object.assign(
        Mt,
        {
            success: E.success,
            info: E.info,
            warning: E.warning,
            error: E.error,
            custom: E.custom,
            message: E.message,
            promise: E.promise,
            dismiss: E.dismiss,
            loading: E.loading,
        },
        { getHistory: $t, getToasts: Yt },
    );
Tt(
    "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
);
const ue = ["Setup", "Features", "Outro", "Storyboard", "Generate"],
    Ft = 5 * 1024 * 1024,
    Lt = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/svg+xml"];
function Jt() {
    const { projectId: u } = pt.useParams(),
        { user: a, loading: r } = bt(),
        p = gt(),
        [x, b] = h.useState(0),
        [R, Z] = h.useState(!0),
        [j, f] = h.useState(!1),
        [_, y] = h.useState(!1),
        [z, V] = h.useState(null),
        A = h.useRef(null),
        [he, fe] = h.useState(""),
        [xe, Q] = h.useState(null),
        [ee, te] = h.useState("#593CFB"),
        [re, ae] = h.useState("#F97316"),
        [be, ye] = h.useState(""),
        [ve, we] = h.useState(!1),
        [je, Ne] = h.useState(!1),
        [k, D] = h.useState([{ id: "1", title: "", description: "", screenshots: [] }]),
        [w, B] = h.useState([]),
        [se, ke] = h.useState(!1),
        [M, qe] = h.useState(null);
    (h.useEffect(() => {
        !r && !a && p({ to: "/login" });
    }, [r, a, p]),
        h.useEffect(() => {
            if (!a) return;
            async function t() {
                const { data: n } = await g.from("projects").select("*").eq("id", u).single();
                if (!n) {
                    p({ to: "/dashboard" });
                    return;
                }
                (fe(n.name),
                    Q(n.logo_url),
                    te(n.primary_color),
                    ae(n.secondary_color),
                    ye(n.outro_text || ""),
                    we(n.show_google_play),
                    Ne(n.show_app_store));
                const { data: o } = await g
                    .from("features")
                    .select("*, feature_screenshots(id, screenshot_url, sort_order)")
                    .eq("project_id", u)
                    .order("sort_order");
                (o &&
                    o.length > 0 &&
                    D(
                        o.map((c) => ({
                            id: c.id,
                            dbId: c.id,
                            title: c.title,
                            description: c.description,
                            screenshots: (c.feature_screenshots || [])
                                .sort((i, s) => i.sort_order - s.sort_order)
                                .map((i) => ({ dbId: i.id, url: i.screenshot_url })),
                        })),
                    ),
                    Z(!1));
            }
            t();
        }, [a, u, p]));
    const Se = (t) =>
        Lt.includes(t.type)
            ? t.size > Ft
                ? "Image must be smaller than 5MB"
                : null
            : "Please upload a JPG, PNG, WebP, or SVG image",
        Xe = async (t) => {
            if (!a) return;
            const n = Se(t);
            if (n) {
                N.error(n);
                return;
            }
            y(!0);
            try {
                const o = t.name.split(".").pop(),
                    c = `${a.id}/${u}-${Date.now()}.${o}`,
                    { error: i } = await g.storage.from("project-logos").upload(c, t, { upsert: !0 });
                if (i) throw i;
                const {
                    data: { publicUrl: s },
                } = g.storage.from("project-logos").getPublicUrl(c);
                (Q(s),
                    await g.from("projects").update({ logo_url: s }).eq("id", u),
                    N.success("Logo uploaded"));
            } catch (o) {
                N.error(o.message || "Upload failed");
            } finally {
                y(!1);
            }
        },
        Ze = async (t, n) => {
            if (!a) return;
            const o = k.find((s) => s.id === t);
            if (!o) return;
            if (o.screenshots.length >= 3) {
                N.error("Maximum 3 screenshots per feature");
                return;
            }
            const c = Se(n);
            if (c) {
                N.error(c);
                return;
            }
            let i = o.dbId;
            if (!i) {
                const { data: s, error: m } = await g
                    .from("features")
                    .insert({
                        project_id: u,
                        title: o.title || "Untitled",
                        description: o.description,
                        sort_order: k.indexOf(o),
                    })
                    .select()
                    .single();
                if (m || !s) {
                    N.error("Could not create feature");
                    return;
                }
                ((i = s.id), D((d) => d.map((S) => (S.id === t ? { ...S, dbId: i } : S))));
            }
            V(t);
            try {
                const s = n.name.split(".").pop(),
                    m = `${a.id}/${i}-${Date.now()}.${s}`,
                    { error: d } = await g.storage.from("feature-screenshots").upload(m, n);
                if (d) throw d;
                const {
                    data: { publicUrl: S },
                } = g.storage.from("feature-screenshots").getPublicUrl(m),
                    { data: G, error: de } = await g
                        .from("feature_screenshots")
                        .insert({ feature_id: i, screenshot_url: S, sort_order: o.screenshots.length })
                        .select()
                        .single();
                if (de) throw de;
                (D((O) =>
                    O.map((q) =>
                        q.id === t ? { ...q, screenshots: [...q.screenshots, { dbId: G.id, url: S }] } : q,
                    ),
                ),
                    N.success("Screenshot added"));
            } catch (s) {
                N.error(s.message || "Upload failed");
            } finally {
                V(null);
            }
        },
        Oe = async (t, n) => {
            const o = k.find((i) => i.id === t);
            if (!o) return;
            const c = o.screenshots[n];
            (c?.dbId && (await g.from("feature_screenshots").delete().eq("id", c.dbId)),
                D((i) =>
                    i.map((s) =>
                        s.id === t ? { ...s, screenshots: s.screenshots.filter((m, d) => d !== n) } : s,
                    ),
                ));
        },
        Be = async () => {
            (Q(null), await g.from("projects").update({ logo_url: null }).eq("id", u));
        },
        oe = async () => {
            if (a) {
                (f(!0),
                    await g
                        .from("projects")
                        .update({
                            name: he,
                            primary_color: ee,
                            secondary_color: re,
                            outro_text: be,
                            show_google_play: ve,
                            show_app_store: je,
                        })
                        .eq("id", u));
                for (let t = 0; t < k.length; t++) {
                    const n = k[t];
                    if (n.dbId)
                        await g
                            .from("features")
                            .update({ title: n.title, description: n.description, sort_order: t })
                            .eq("id", n.dbId);
                    else {
                        const { data: o } = await g
                            .from("features")
                            .insert({ project_id: u, title: n.title, description: n.description, sort_order: t })
                            .select()
                            .single();
                        o && (n.dbId = o.id);
                    }
                }
                f(!1);
            }
        },
        He = () => {
            D([...k, { id: String(Date.now()), title: "", description: "", screenshots: [] }]);
        },
        We = async (t) => {
            if (k.length <= 1) return;
            const n = k.find((o) => o.id === t);
            (n?.dbId && (await g.from("features").delete().eq("id", n.dbId)),
                D(k.filter((o) => o.id !== t)));
        },
        _e = (t, n) => {
            D(k.map((o) => (o.id === t ? { ...o, ...n } : o)));
        },
        Je = async () => {
            await oe();
            const t = x + 1;
            (b(t), t === 3 && M && (await Ee(M)));
        },
        Ce = async (t) => {
            (qe(t), await Ee(t));
        },
        Ee = h.useCallback(
            async (t) => {
                const n = k.filter((s) => s.title || s.dbId),
                    o = [
                        { key: "intro", type: "intro", title: "Intro", durationSec: 4 },
                        ...n.map((s) => ({
                            key: `feature-${s.dbId || s.id}`,
                            type: "feature",
                            featureId: s.dbId,
                            title: s.title || "Feature",
                            durationSec: 6,
                        })),
                        { key: "outro", type: "outro", title: "Outro", durationSec: 4 },
                    ],
                    { data: c } = await g.from("generated_images").select("*").eq("project_id", u),
                    i = o.map((s) => {
                        const m = c?.find((d) =>
                            s.type === "feature"
                                ? d.type === "feature" && d.feature_id === s.featureId
                                : d.type === s.type,
                        );
                        return m ? { ...s, image_url: m.image_url, script: m.script ?? void 0 } : s;
                    });
                B(i);
                for (let s = 0; s < i.length; s++) i[s].image_url || (await Pe(i[s].key, i, s, t));
            },
            [k, u],
        ),
        Pe = async (t, n, o, c) => {
            const s = (n || w).find((m) => m.key === t);
            if (s) {
                if (s.type === "feature" && !s.featureId) {
                    N.error("Save the feature first");
                    return;
                }
                B((m) => m.map((d) => (d.key === t ? { ...d, loading: !0 } : d)));
                try {
                    const { data: m, error: d } = await g.functions.invoke("generate-slide-image", {
                        body: {
                            projectId: u,
                            type: s.type,
                            featureId: s.featureId,
                            sortOrder: o ?? 0,
                            aspectRatio: c || M || "16:9",
                        },
                    });
                    if (d) throw d;
                    if (m?.error) throw new Error(m.error);
                    B((S) =>
                        S.map((G) =>
                            G.key === t ? { ...G, image_url: m.image_url, script: m.script, loading: !1 } : G,
                        ),
                    );
                } catch (m) {
                    (B((d) => d.map((S) => (S.key === t ? { ...S, loading: !1 } : S))),
                        N.error(m.message || "Failed to generate slide"));
                }
            }
        },
        [Ie, ne] = h.useState(0),
        [ie, Te] = h.useState(null),
        Ke = (t) =>
            new Promise((n, o) => {
                const c = new Image();
                ((c.crossOrigin = "anonymous"), (c.onload = () => n(c)), (c.onerror = o), (c.src = t));
            }),
        Qe = async () => {
            if (!a) {
                N.error("You must be signed in");
                return;
            }
            if (w.length === 0 || w.some((o) => !o.image_url)) {
                N.error("Wait for all slide images to finish generating");
                return;
            }
            const { data: t, error: n } = await g
                .from("credits")
                .select("balance")
                .eq("user_id", a.id)
                .maybeSingle();
            if (n) {
                N.error("Could not check credits");
                return;
            }
            if (!t || t.balance < 1) {
                N.error("Not enough credits. Please top up to render videos.");
                return;
            }
            (ke(!0), Te(null), ne(0));
            try {
                const o = [];
                for (const l of w) o.push(await Ke(l.image_url));
                const c = M === "9:16",
                    i = c ? 1080 : 1920,
                    s = c ? 1920 : 1080,
                    m = document.createElement("canvas");
                ((m.width = i), (m.height = s));
                const d = m.getContext("2d");
                ((d.fillStyle = "#000"), d.fillRect(0, 0, i, s));
                const G = m.captureStream(30),
                    O =
                        ["video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"].find((l) =>
                            window.MediaRecorder?.isTypeSupported?.(l),
                        ) || "video/webm",
                    q = [],
                    W = new MediaRecorder(G, { mimeType: O, videoBitsPerSecond: 5e6 });
                W.ondataavailable = (l) => {
                    l.data.size > 0 && q.push(l.data);
                };
                const et = new Promise((l) => {
                    W.onstop = () => l();
                });
                W.start();
                const T = 600,
                    tt = (l) => (l < 0.5 ? 2 * l * l : 1 - Math.pow(-2 * l + 2, 2) / 2),
                    rt = w.map((l, L) => {
                        const P = [
                            { startZoom: 1, endZoom: 1.12, panX: 0, panY: 0 },
                            { startZoom: 1.12, endZoom: 1, panX: 0, panY: 0 },
                            { startZoom: 1.05, endZoom: 1.15, panX: -0.06, panY: 0 },
                            { startZoom: 1.05, endZoom: 1.15, panX: 0.06, panY: 0 },
                            { startZoom: 1.08, endZoom: 1.18, panX: 0, panY: -0.05 },
                            { startZoom: 1.08, endZoom: 1.18, panX: 0, panY: 0.05 },
                        ];
                        return l.type === "intro" ? P[0] : l.type === "outro" ? P[1] : P[2 + (L % 4)];
                    }),
                    F = w.map((l) => l.durationSec * 1e3),
                    Re = F.reduce((l, L) => l + L, 0) - T * (w.length - 1),
                    ze = [];
                let Ae = 0;
                for (let l = 0; l < w.length; l++) (ze.push(Ae), (Ae += F[l] - (l < w.length - 1 ? T : 0)));
                const at = (l, L, P) => {
                    const v = o[l],
                        $ = rt[l],
                        le = F[l],
                        C = tt(Math.max(0, Math.min(1, L / le))),
                        U = Math.max(i / v.width, s / v.height),
                        it = v.width * U,
                        dt = v.height * U,
                        Fe = $.startZoom + ($.endZoom - $.startZoom) * C,
                        ce = it * Fe,
                        me = dt * Fe,
                        lt = ce - i,
                        ct = me - s,
                        Le = C,
                        mt = (i - ce) / 2 + lt * $.panX * (Le - 0.5),
                        ut = (s - me) / 2 + ct * $.panY * (Le - 0.5);
                    ((d.globalAlpha = P), d.drawImage(v, mt, ut, ce, me), (d.globalAlpha = 1));
                },
                    st = performance.now();
                (await new Promise((l) => {
                    const L = () => {
                        const P = performance.now() - st;
                        if (P >= Re) {
                            l();
                            return;
                        }
                        ((d.fillStyle = "#000"), d.fillRect(0, 0, i, s));
                        for (let v = 0; v < w.length; v++) {
                            const $ = ze[v],
                                le = $ + F[v];
                            if (P < $ || P > le) continue;
                            const C = P - $;
                            let U = 1;
                            (v > 0 && C < T && (U = C / T),
                                v < w.length - 1 && C > F[v] - T && (U = Math.max(0, (F[v] - C) / T)),
                                v === 0 && C < T && (U = C / T),
                                v === w.length - 1 && C > F[v] - T && (U = Math.max(0, (F[v] - C) / T)),
                                at(v, C, U));
                        }
                        (ne(Math.round((P / Re) * 100)), requestAnimationFrame(L));
                    };
                    requestAnimationFrame(L);
                }),
                    (d.fillStyle = "#000"),
                    d.fillRect(0, 0, i, s),
                    await new Promise((l) => setTimeout(l, 200)),
                    W.stop(),
                    await et);
                const ot = new Blob(q, { type: O }),
                    nt = O.includes("webm") ? "webm" : "mp4",
                    Me = `${a.id}/${u}/promo-${Date.now()}.${nt}`,
                    { error: $e } = await g.storage
                        .from("generated-slides")
                        .upload(Me, ot, { contentType: O, upsert: !0 });
                if ($e) throw $e;
                const {
                    data: { publicUrl: Ye },
                } = g.storage.from("generated-slides").getPublicUrl(Me);
                (await g.from("videos").insert({ project_id: u, video_url: Ye, status: "completed" }),
                    await g
                        .from("credits")
                        .update({ balance: t.balance - 1 })
                        .eq("user_id", a.id),
                    await g.from("transactions").insert({ user_id: a.id, amount: -1, type: "video_render" }),
                    Te(Ye),
                    N.success("Video ready!"));
            } catch (o) {
                (console.error("video render failed", o), N.error(o?.message || "Video render failed"));
            } finally {
                (ke(!1), ne(0));
            }
        };
    return r || R
        ? e.jsx("div", {
            className: "flex min-h-screen items-center justify-center bg-background",
            children: e.jsx(Y, { size: 44, label: "Loading project" }),
        })
        : e.jsxs("div", {
            className: "min-h-screen bg-background",
            children: [
                e.jsx("header", {
                    className: "border-b border-border bg-background",
                    children: e.jsxs("div", {
                        className: "mx-auto flex h-16 max-w-5xl items-center justify-between px-6",
                        children: [
                            e.jsxs(ht, {
                                to: "/dashboard",
                                className:
                                    "flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors",
                                children: [
                                    e.jsx(Ve, { className: "h-4 w-4" }),
                                    e.jsx("span", { className: "text-sm", children: "Back to Dashboard" }),
                                ],
                            }),
                            e.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    e.jsxs(X, {
                                        variant: "outline",
                                        size: "sm",
                                        onClick: oe,
                                        disabled: j,
                                        children: [
                                            j && e.jsx(Y, { size: 14, label: "Saving project" }),
                                            j ? "Saving..." : "Save",
                                        ],
                                    }),
                                    e.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            e.jsx("img", {
                                                src: yt,
                                                alt: "Appmotion",
                                                className: "h-7 w-7 object-contain",
                                            }),
                                            e.jsx("span", {
                                                className: "font-display text-sm font-bold text-foreground",
                                                children: "Appmotion",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                e.jsxs("main", {
                    className: `mx-auto px-6 py-10 ${x >= 3 ? "max-w-6xl" : "max-w-3xl"}`,
                    children: [
                        e.jsx("div", {
                            className: "mb-10 flex items-center justify-center gap-1",
                            children: ue.map((t, n) =>
                                e.jsxs(
                                    "div",
                                    {
                                        className: "flex items-center gap-1",
                                        children: [
                                            e.jsxs("button", {
                                                onClick: () => {
                                                    (oe(), b(n));
                                                },
                                                className: `flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${n === x ? "bg-primary text-primary-foreground" : n < x ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`,
                                                children: [n < x ? e.jsx(vt, { className: "h-3.5 w-3.5" }) : null, t],
                                            }),
                                            n < ue.length - 1 &&
                                            e.jsx("div", {
                                                className: `h-px w-8 ${n < x ? "bg-primary/50" : "bg-border"}`,
                                            }),
                                        ],
                                    },
                                    t,
                                ),
                            ),
                        }),
                        x === 0 &&
                        e.jsxs("div", {
                            className: "space-y-6 rounded-2xl border border-border bg-card p-8 shadow-sm",
                            children: [
                                e.jsxs("div", {
                                    className: "grid gap-6 sm:grid-cols-2 sm:items-center",
                                    style: { maxWidth: "760px", margin: "0 auto" },
                                    children: [
                                        e.jsxs("div", {
                                            className: "space-y-5",
                                            children: [
                                                e.jsxs("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        e.jsx(I, { htmlFor: "name", children: "App Name" }),
                                                        e.jsx(J, {
                                                            id: "name",
                                                            placeholder: "My Amazing App",
                                                            value: he,
                                                            onChange: (t) => fe(t.target.value),
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        // e.jsx(I, { children: "Colors" }),
                                                        e.jsxs("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                e.jsx(I, { htmlFor: "primary", children: "Primary Color" }),
                                                                e.jsxs("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        e.jsx("input", {
                                                                            type: "color",
                                                                            id: "primary",
                                                                            value: ee,
                                                                            onChange: (t) => te(t.target.value),
                                                                            className:
                                                                                "h-10 w-10 cursor-pointer rounded-lg border border-border",
                                                                        }),
                                                                        e.jsx(J, {
                                                                            value: ee,
                                                                            onChange: (t) => te(t.target.value),
                                                                            className: "flex-1",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        e.jsxs("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                e.jsx(I, { htmlFor: "secondary", children: "Secondary Color" }),
                                                                e.jsxs("div", {
                                                                    className: "flex items-center gap-3",
                                                                    children: [
                                                                        e.jsx("input", {
                                                                            type: "color",
                                                                            id: "secondary",
                                                                            value: re,
                                                                            onChange: (t) => ae(t.target.value),
                                                                            className:
                                                                                "h-10 w-10 cursor-pointer rounded-lg border border-border",
                                                                        }),
                                                                        e.jsx(J, {
                                                                            value: re,
                                                                            onChange: (t) => ae(t.target.value),
                                                                            className: "flex-1",
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        e.jsxs("div", {
                                            className: "w-full space-y-2",
                                            style: { maxWidth: "240px", justifySelf: "center" },
                                            children: [
                                                e.jsx(I, { children: "Logo" }),
                                                e.jsx("input", {
                                                    ref: A,
                                                    type: "file",
                                                    accept: "image/jpeg,image/png,image/webp,image/svg+xml",
                                                    className: "hidden",
                                                    onChange: (t) => {
                                                        const n = t.target.files?.[0];
                                                        (n && Xe(n), (t.target.value = ""));
                                                    },
                                                }),
                                                xe
                                                    ? e.jsxs("div", {
                                                        className:
                                                            "relative flex w-full items-center justify-center rounded-xl border border-border bg-muted/30 overflow-hidden group",
                                                        style: { aspectRatio: "1 / 1" },
                                                        children: [
                                                            e.jsx("img", {
                                                                src: xe,
                                                                alt: "Project logo",
                                                                className: "max-h-28 max-w-full object-contain",
                                                            }),
                                                            e.jsxs("div", {
                                                                className:
                                                                    "absolute inset-0 flex items-center justify-center gap-2 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity",
                                                                children: [
                                                                    e.jsx(X, {
                                                                        type: "button",
                                                                        size: "sm",
                                                                        variant: "outline",
                                                                        onClick: () => A.current?.click(),
                                                                        children: "Replace",
                                                                    }),
                                                                    e.jsx(X, {
                                                                        type: "button",
                                                                        size: "sm",
                                                                        variant: "outline",
                                                                        onClick: Be,
                                                                        children: e.jsx(De, { className: "h-3.5 w-3.5" }),
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    })
                                                    : e.jsx("button", {
                                                        type: "button",
                                                        onClick: () => A.current?.click(),
                                                        disabled: _,
                                                        className:
                                                            "flex w-full items-center justify-center rounded-xl border border-dashed border-border bg-muted/50 cursor-pointer hover:border-primary/50 transition-colors disabled:opacity-60",
                                                        style: { aspectRatio: "1 / 1" },
                                                        children: e.jsxs("div", {
                                                            className: "text-center",
                                                            children: [
                                                                _
                                                                    ? e.jsx(Y, {
                                                                        size: 32,
                                                                        label: "Uploading logo",
                                                                        className: "mx-auto",
                                                                    })
                                                                    : e.jsx(Ge, {
                                                                        className: "mx-auto h-8 w-8 text-muted-foreground",
                                                                    }),
                                                                e.jsx("p", {
                                                                    className: "mt-2 text-sm text-muted-foreground",
                                                                    children: _
                                                                        ? "Uploading..."
                                                                        : "Click to upload logo (PNG, JPG, SVG, max 5MB)",
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        x === 1 &&
                        e.jsxs("div", {
                            className: "space-y-6",
                            children: [
                                e.jsxs("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        e.jsxs("div", {
                                            children: [
                                                e.jsx("h2", {
                                                    className: "font-display text-2xl font-bold text-foreground",
                                                    children: "App Features",
                                                }),
                                                e.jsx("p", {
                                                    className: "mt-1 text-sm text-muted-foreground",
                                                    children: "Add your app's key features with screenshots",
                                                }),
                                            ],
                                        }),
                                        e.jsxs(X, {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: He,
                                            className: "gap-1",
                                            children: [e.jsx(wt, { className: "h-3.5 w-3.5" }), "Add Feature"],
                                        }),
                                    ],
                                }),
                                k.map((t, n) =>
                                    e.jsxs(
                                        "div",
                                        {
                                            className:
                                                "rounded-2xl border border-border bg-card p-6 space-y-4 shadow-sm",
                                            children: [
                                                e.jsxs("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        e.jsxs("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                e.jsx(_t, {
                                                                    className: "h-4 w-4 text-muted-foreground cursor-grab",
                                                                }),
                                                                e.jsxs("span", {
                                                                    className: "text-sm font-medium text-muted-foreground",
                                                                    children: ["Feature ", n + 1],
                                                                }),
                                                            ],
                                                        }),
                                                        k.length > 1 &&
                                                        e.jsx("button", {
                                                            onClick: () => We(t.id),
                                                            className:
                                                                "text-muted-foreground hover:text-destructive transition-colors",
                                                            children: e.jsx(De, { className: "h-4 w-4" }),
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        e.jsx(I, { children: "Title" }),
                                                        e.jsx(J, {
                                                            placeholder: "e.g. Smart Dashboard",
                                                            value: t.title,
                                                            onChange: (o) => _e(t.id, { title: o.target.value }),
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        e.jsx(I, { children: "Description" }),
                                                        e.jsx(pe, {
                                                            placeholder: "Describe this feature in a sentence...",
                                                            value: t.description,
                                                            onChange: (o) => _e(t.id, { description: o.target.value }),
                                                            rows: 2,
                                                        }),
                                                    ],
                                                }),
                                                e.jsxs("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        e.jsx(I, { children: "Screenshots (up to 3)" }),
                                                        e.jsx("div", {
                                                            className: "grid grid-cols-3 gap-3",
                                                            children: [0, 1, 2].map((o) => {
                                                                const c = t.screenshots[o],
                                                                    i = z === t.id && o === t.screenshots.length;
                                                                return c
                                                                    ? e.jsxs(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "relative aspect-[9/16] rounded-xl overflow-hidden border border-border group",
                                                                            children: [
                                                                                e.jsx("img", {
                                                                                    src: c.url,
                                                                                    alt: `Screenshot ${o + 1}`,
                                                                                    className: "h-full w-full object-cover",
                                                                                }),
                                                                                e.jsx("button", {
                                                                                    type: "button",
                                                                                    onClick: () => Oe(t.id, o),
                                                                                    className:
                                                                                        "absolute top-1.5 right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive hover:text-destructive-foreground",
                                                                                    children: e.jsx(xt, { className: "h-3.5 w-3.5" }),
                                                                                }),
                                                                            ],
                                                                        },
                                                                        o,
                                                                    )
                                                                    : e.jsxs(
                                                                        "label",
                                                                        {
                                                                            className: `flex aspect-[9/16] items-center justify-center rounded-xl border border-dashed border-border bg-muted/50 cursor-pointer hover:border-primary/50 transition-colors ${i ? "opacity-60 pointer-events-none" : ""}`,
                                                                            children: [
                                                                                e.jsx("input", {
                                                                                    type: "file",
                                                                                    accept: "image/jpeg,image/png,image/webp",
                                                                                    className: "hidden",
                                                                                    disabled: z === t.id,
                                                                                    onChange: (s) => {
                                                                                        const m = s.target.files?.[0];
                                                                                        (m && Ze(t.id, m), (s.target.value = ""));
                                                                                    },
                                                                                }),
                                                                                e.jsxs("div", {
                                                                                    className: "text-center p-2",
                                                                                    children: [
                                                                                        i
                                                                                            ? e.jsx(Y, {
                                                                                                size: 20,
                                                                                                label: `Uploading screenshot ${o + 1}`,
                                                                                                className: "mx-auto",
                                                                                            })
                                                                                            : e.jsx(Ge, {
                                                                                                className:
                                                                                                    "mx-auto h-5 w-5 text-muted-foreground",
                                                                                            }),
                                                                                        e.jsxs("p", {
                                                                                            className: "mt-1 text-xs text-muted-foreground",
                                                                                            children: ["Screen ", o + 1],
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                            ],
                                                                        },
                                                                        o,
                                                                    );
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        },
                                        t.id,
                                    ),
                                ),
                            ],
                        }),
                        x === 2 &&
                        e.jsxs("div", {
                            className: "space-y-6 rounded-2xl border border-border bg-card p-8 shadow-sm",
                            children: [
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("h2", {
                                            className: "font-display text-2xl font-bold text-foreground",
                                            children: "Outro",
                                        }),
                                        e.jsx("p", {
                                            className: "mt-1 text-sm text-muted-foreground",
                                            children: "Customize the ending of your promo video",
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                        e.jsx(I, { htmlFor: "outro", children: "Closing Text" }),
                                        e.jsx(pe, {
                                            id: "outro",
                                            placeholder: "Download now and transform your workflow!",
                                            value: be,
                                            onChange: (t) => ye(t.target.value),
                                            rows: 3,
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "space-y-4",
                                    children: [
                                        e.jsx(I, { children: "Store Badges" }),
                                        e.jsxs("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                e.jsx(Ue, {
                                                    id: "googleplay",
                                                    checked: ve,
                                                    onCheckedChange: (t) => we(t === !0),
                                                }),
                                                e.jsx(I, {
                                                    htmlFor: "googleplay",
                                                    className: "cursor-pointer text-foreground",
                                                    children: "Show Google Play badge",
                                                }),
                                            ],
                                        }),
                                        e.jsxs("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                e.jsx(Ue, {
                                                    id: "appstore",
                                                    checked: je,
                                                    onCheckedChange: (t) => Ne(t === !0),
                                                }),
                                                e.jsx(I, {
                                                    htmlFor: "appstore",
                                                    className: "cursor-pointer text-foreground",
                                                    children: "Show App Store badge",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        x === 3 &&
                        !M &&
                        e.jsxs("div", {
                            className:
                                "space-y-6 rounded-2xl border border-border bg-card p-8 shadow-sm text-center",
                            children: [
                                e.jsxs("div", {
                                    children: [
                                        e.jsx("h2", {
                                            className: "font-display text-2xl font-bold text-foreground",
                                            children: "Pick your video format",
                                        }),
                                        e.jsx("p", {
                                            className: "mt-1 text-sm text-muted-foreground",
                                            children:
                                                "All slide images and the final video will be generated in this aspect ratio.",
                                        }),
                                    ],
                                }),
                                e.jsxs("div", {
                                    className: "grid gap-4 sm:grid-cols-2",
                                    children: [
                                        e.jsxs("button", {
                                            type: "button",
                                            onClick: () => Ce("16:9"),
                                            className:
                                                "group flex flex-col items-center gap-3 rounded-xl border-2 border-border bg-muted/30 p-6 hover:border-primary transition-colors",
                                            children: [
                                                e.jsx("div", {
                                                    className:
                                                        "aspect-video w-full max-w-[200px] rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 border border-border",
                                                }),
                                                e.jsxs("div", {
                                                    children: [
                                                        e.jsx("p", {
                                                            className: "font-semibold text-foreground",
                                                            children: "Landscape · 16:9",
                                                        }),
                                                        e.jsx("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: "YouTube, web, TV",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        e.jsxs("button", {
                                            type: "button",
                                            onClick: () => Ce("9:16"),
                                            className:
                                                "group flex flex-col items-center gap-3 rounded-xl border-2 border-border bg-muted/30 p-6 hover:border-primary transition-colors",
                                            children: [
                                                e.jsx("div", {
                                                    className:
                                                        "aspect-[9/16] w-full max-w-[120px] rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 border border-border",
                                                }),
                                                e.jsxs("div", {
                                                    children: [
                                                        e.jsx("p", {
                                                            className: "font-semibold text-foreground",
                                                            children: "Vertical · 9:16",
                                                        }),
                                                        e.jsx("p", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Reels, TikTok, Shorts",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        x === 3 &&
                        M &&
                        e.jsx("div", {
                            className: "space-y-6",
                            children: e.jsx("div", {
                                className: "w-full overflow-x-auto pb-2",
                                children: e.jsx("div", {
                                    className: "mx-auto flex w-max gap-4 snap-x snap-mandatory px-1",
                                    children: w.map((t, n) => {
                                        const o = t.type === "outro",
                                            i = t.type === "intro" ? "Intro" : o ? "Outro" : `Feature ${n}`;
                                        return e.jsxs(
                                            "div",
                                            {
                                                style: {
                                                    width:
                                                        M === "9:16"
                                                            ? "clamp(180px, 20vw, 220px)"
                                                            : "clamp(280px, 30vw, 360px)",
                                                },
                                                className:
                                                    "snap-start flex-none rounded-2xl border border-border bg-card overflow-hidden shadow-sm flex flex-col",
                                                children: [
                                                    e.jsxs("div", {
                                                        className: `relative ${M === "9:16" ? "aspect-[9/16]" : "aspect-video"} bg-muted`,
                                                        children: [
                                                            e.jsxs("span", {
                                                                className:
                                                                    "absolute top-2 left-2 z-10 rounded-md bg-background/90 px-2 py-1 text-[11px] font-semibold text-foreground",
                                                                children: [i, " — Preview Image"],
                                                            }),
                                                            e.jsx("button", {
                                                                type: "button",
                                                                onClick: () => Pe(t.key),
                                                                disabled: t.loading,
                                                                title: "Regenerate image",
                                                                className:
                                                                    "absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background/90 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-60",
                                                                children: t.loading
                                                                    ? e.jsx(Y, { size: 14, label: "Regenerating slide image" })
                                                                    : e.jsx(Et, { className: "h-4 w-4" }),
                                                            }),
                                                            t.image_url
                                                                ? e.jsx("img", {
                                                                    src: t.image_url,
                                                                    alt: i,
                                                                    className: "h-full w-full object-cover",
                                                                })
                                                                : e.jsx("div", {
                                                                    className: "flex h-full w-full items-center justify-center",
                                                                    children: t.loading
                                                                        ? e.jsxs("div", {
                                                                            className:
                                                                                "flex flex-col items-center gap-2 text-muted-foreground",
                                                                            children: [
                                                                                e.jsx(Y, {
                                                                                    size: 24,
                                                                                    label: "Generating slide image",
                                                                                }),
                                                                                e.jsx("span", {
                                                                                    className: "text-xs",
                                                                                    children: "Generating...",
                                                                                }),
                                                                            ],
                                                                        })
                                                                        : e.jsx(jt, {
                                                                            className: "h-8 w-8 text-muted-foreground/50",
                                                                        }),
                                                                }),
                                                        ],
                                                    }),
                                                    e.jsxs("div", {
                                                        className: "p-4 flex-1 space-y-3",
                                                        children: [
                                                            e.jsxs("div", {
                                                                children: [
                                                                    e.jsx("p", {
                                                                        className:
                                                                            "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1",
                                                                        children: "Script",
                                                                    }),
                                                                    e.jsx("p", {
                                                                        className: "text-sm text-foreground min-h-[2.5em]",
                                                                        children: t.script
                                                                            ? t.script
                                                                            : t.loading
                                                                                ? e.jsxs("span", {
                                                                                    className:
                                                                                        "inline-flex items-center gap-2 text-muted-foreground",
                                                                                    children: [
                                                                                        e.jsx(Y, { size: 14, label: "Writing script" }),
                                                                                        "Writing script...",
                                                                                    ],
                                                                                })
                                                                                : "—",
                                                                    }),
                                                                ],
                                                            }),
                                                            e.jsxs("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    e.jsx("span", {
                                                                        className:
                                                                            "text-xs font-semibold text-muted-foreground uppercase tracking-wide",
                                                                        children: "Duration",
                                                                    }),
                                                                    e.jsx("div", {
                                                                        className: "flex gap-1",
                                                                        children: [4, 5, 6].map((s) =>
                                                                            e.jsxs(
                                                                                "button",
                                                                                {
                                                                                    type: "button",
                                                                                    onClick: () =>
                                                                                        B((m) =>
                                                                                            m.map((d) =>
                                                                                                d.key === t.key ? { ...d, durationSec: s } : d,
                                                                                            ),
                                                                                        ),
                                                                                    className: `rounded-md px-2 py-1 text-xs font-semibold transition-colors ${t.durationSec === s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/70"}`,
                                                                                    children: [s, "s"],
                                                                                },
                                                                                s,
                                                                            ),
                                                                        ),
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            },
                                            t.key,
                                        );
                                    }),
                                }),
                            }),
                        }),
                        x === 4 &&
                        e.jsxs("div", {
                            className: "space-y-6",
                            children: [
                                e.jsxs("div", {
                                    className: "text-center",
                                    children: [
                                        e.jsx("h2", {
                                            className: "font-display text-2xl font-bold text-foreground",
                                            children: "Ready to Render",
                                        }),
                                        e.jsxs("p", {
                                            className: "mt-1 text-sm text-muted-foreground",
                                            children: [
                                                w.length,
                                                " slides · estimated ",
                                                Math.max(
                                                    0,
                                                    w.reduce((t, n) => t + n.durationSec, 0) -
                                                    0.6 * Math.max(0, w.length - 1),
                                                ).toFixed(1),
                                                "s video",
                                            ],
                                        }),
                                    ],
                                }),
                                e.jsx("div", {
                                    className: "rounded-2xl border border-border bg-card p-6",
                                    children: e.jsx("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: w.map((t) =>
                                            e.jsx(
                                                "div",
                                                {
                                                    className: `relative ${M === "9:16" ? "h-32 w-[72px]" : "h-20 w-32"} rounded-md overflow-hidden border border-border bg-muted`,
                                                    children:
                                                        t.image_url &&
                                                        e.jsx("img", {
                                                            src: t.image_url,
                                                            alt: "",
                                                            className: "h-full w-full object-cover",
                                                        }),
                                                },
                                                t.key,
                                            ),
                                        ),
                                    }),
                                }),
                                e.jsxs("div", {
                                    className: "text-center",
                                    children: [
                                        e.jsxs(X, {
                                            size: "lg",
                                            className: "gap-2",
                                            onClick: Qe,
                                            disabled: se || w.some((t) => !t.image_url),
                                            children: [
                                                se
                                                    ? e.jsx(Y, { size: 20, label: "Generating video" })
                                                    : e.jsx(Nt, { className: "h-5 w-5" }),
                                                "Generate Video (1 credit)",
                                            ],
                                        }),
                                        e.jsx("p", {
                                            className: "mt-3 text-xs text-muted-foreground",
                                            children: "This will deduct 1 credit from your balance",
                                        }),
                                        se &&
                                        e.jsxs("div", {
                                            className: "mt-4 mx-auto max-w-md",
                                            children: [
                                                e.jsx("div", {
                                                    className: "h-2 w-full overflow-hidden rounded-full bg-muted",
                                                    children: e.jsx("div", {
                                                        className: "h-full bg-primary transition-all",
                                                        style: { width: `${Ie}%` },
                                                    }),
                                                }),
                                                e.jsxs("p", {
                                                    className: "mt-2 text-xs text-muted-foreground",
                                                    children: ["Rendering… ", Ie, "%"],
                                                }),
                                            ],
                                        }),
                                        ie &&
                                        e.jsxs("div", {
                                            className: "mt-6 space-y-3",
                                            children: [
                                                e.jsx("video", {
                                                    src: ie,
                                                    controls: !0,
                                                    className:
                                                        "mx-auto w-full max-w-2xl rounded-xl border border-border",
                                                }),
                                                e.jsx("div", {
                                                    className: "flex justify-center gap-3",
                                                    children: e.jsx("a", {
                                                        href: ie,
                                                        download: !0,
                                                        className:
                                                            "inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90",
                                                        children: "Download video",
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        e.jsxs("div", {
                            className: `mt-8 flex items-center justify-between ${x >= 3 ? "mx-auto w-full max-w-3xl" : ""}`,
                            children: [
                                e.jsxs(X, {
                                    variant: "outline",
                                    onClick: () => b(Math.max(0, x - 1)),
                                    disabled: x === 0,
                                    className: "gap-2",
                                    children: [e.jsx(Ve, { className: "h-4 w-4" }), "Previous"],
                                }),
                                x < ue.length - 1 &&
                                e.jsxs(X, {
                                    onClick: Je,
                                    disabled: j,
                                    className: "gap-2",
                                    children: [
                                        j && e.jsx(Y, { size: 14, label: "Saving project" }),
                                        j ? "Saving..." : "Next",
                                        !j && e.jsx(kt, { className: "h-4 w-4" }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
}
export { Jt as component };
