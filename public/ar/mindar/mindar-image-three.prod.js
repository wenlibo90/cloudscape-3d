import { Matrix4 as Te, Vector3 as Se, Quaternion as Qt, Scene as Ct, WebGLRenderer as Ti, sRGBEncoding as Si, PerspectiveCamera as vi, Group as zt } from "three";
import { o as S, b as w, c as y, d as te, E as A, A as Xt, e as de, m as W, f as K, s as U, g as M, h as ue, t as ve, B as Zt, i as Yt, D as Mt, j as Oi, L as es, r as v, k as pe, S as ts, M as ss, T as me, l as Y, n as xt, p as as, q as ae, R as rs, u as ns, v as is, w as $e, x as Z, y as ce, z as Lt, F as he, G as _i, H as Ai, I as Ye, J as Me, K as et, N as re, O as Fe, P as tt, Q as st, U as os, V as us, W as ls, X as ps, Y as at, Z as rt, _ as Ei, $ as R, a0 as le, a1 as nt, a2 as it, a3 as ms, a4 as cs, a5 as ds, a6 as ki, a7 as q, a8 as Ii, a9 as ot, aa as $i, ab as Di, ac as Ci, ad as zi, ae as xi, af as Li, ag as Ve, ah as Re, ai as Pi, aj as Fi, ak as Vi, al as Ri, am as ji, an as Bi, ao as Hi, ap as Wi, aq as hs, ar as Pt, as as P, at as fs, au as Ui, av as ys, aw as qi, ax as Gi, ay as Ki, az as Ji, aA as gs, aB as Qi, aC as Xi, aD as bs, aE as Zi, aF as Ns, aG as Yi, aH as Mi, aI as eo, aJ as to, aK as so, aL as ao, aM as ro, aN as no, aO as io, aP as Oe, aQ as ee, aR as ut, aS as oo, aT as uo, aU as lo, aV as po, aW as mo, aX as co, aY as ho, aZ as fo, a_ as yo, a$ as go, b0 as bo, b1 as No, b2 as wo, b3 as To, b4 as So, b5 as vo, b6 as Oo, b7 as _o, b8 as Ao, b9 as Eo, ba as ko, bb as Io, bc as lt, bd as ws, be as $o, bf as Do, bg as Co, bh as zo, bi as xo, bj as Lo, bk as Po, bl as Fo, bm as Vo, bn as Ro, bo as jo, bp as Bo, bq as Ho, br as Wo, bs as Uo, bt as qo, bu as Go, bv as Ko, bw as Jo, bx as Qo, by as Xo, bz as Zo, bA as Yo, bB as Mo, bC as eu, bD as tu, bE as su, bF as au, bG as ru, bH as nu, bI as iu, bJ as ou, bK as uu, bL as lu, bM as pu, bN as mu, bO as cu, bP as du, bQ as hu, bR as fu, bS as yu, bT as gu, bU as bu, bV as Nu, bW as wu, bX as Tu, bY as Su, bZ as vu, b_ as Ou, b$ as _u, c0 as Au, c1 as Eu, c2 as ku, c3 as Iu, c4 as $u, c5 as pt, c6 as Du, c7 as Cu, c8 as zu, c9 as xu, ca as Lu, cb as Pu, cc as Fu, cd as Vu, ce as Ru, cf as ju, cg as Bu, ch as Hu, ci as Wu, cj as Uu, ck as qu, cl as Gu, cm as Ku, cn as Ju, co as Qu, cp as Xu, cq as Zu, cr as Yu, cs as Mu, ct as mt, cu as ct, cv as el, cw as tl, cx as sl, cy as al, cz as rl, cA as nl, cB as il, cC as ol, cD as dt, cE as z, cF as Ts, cG as Ss, cH as vs, cI as Os, cJ as _s, cK as As, cL as Es, cM as ks, cN as Is, cO as $s, cP as Ds, cQ as Cs, cR as zs, cS as xs, cT as Ls, cU as Ps, cV as Fs, cW as Vs, cX as Rs, cY as js, cZ as Bs, c_ as Hs, c$ as Ws, d0 as Us, d1 as qs, d2 as Gs, d3 as Ks, d4 as Js, d5 as Qs, d6 as Xs, d7 as Zs, d8 as Ys, d9 as Ms, da as ea, db as ta, dc as sa, dd as aa, de as ra, df as na, dg as ia, dh as oa, di as ua, dj as la, dk as pa, dl as ma, dm as ca, dn as da, dp as ha, dq as fa, dr as ya, ds as ga, dt as ba, du as ht, dv as Na, dw as wa, dx as Ta, dy as Sa, dz as va, dA as Oa, dB as _a, dC as Aa, dD as Ea, dE as ka, dF as ft, dG as Ia, dH as $a, dI as Da, dJ as Ca, dK as za, dL as xa, dM as La, dN as Pa, dO as Fa, dP as Va, dQ as Ra, dR as ja, dS as Ba, dT as Ha, dU as Wa, dV as Ua, dW as qa, dX as Ga, dY as Ka, dZ as Ja, d_ as Qa, d$ as Xa, e0 as Za, e1 as Ya, e2 as Ma, e3 as er, e4 as tr, e5 as sr, e6 as ar, e7 as rr, e8 as nr, e9 as ir, ea as or, eb as ur, ec as lr, ed as pr, ee as mr, ef as cr, eg as dr, eh as hr, ei as fr, ej as yr, ek as gr, el as br, em as Nr, en as wr, eo as Tr, ep as Sr, eq as vr, er as Or, es as _r, et as Ar, eu as Er, ev as kr, ew as Ir, ex as $r, ey as Dr, ez as Cr, eA as zr, eB as xr, eC as Lr, eD as Pr, eE as Fr, eF as Vr, eG as se, eH as Rr, eI as jr, eJ as Br, eK as Hr, eL as Wr, eM as yt, eN as _e, eO as Ur, eP as qr, eQ as Gr, eR as Kr, eS as Jr, eT as Qr, eU as ne, eV as Xr, eW as Zr, eX as Yr, eY as Mr, eZ as V, e_ as L, e$ as Ae, f0 as en, f1 as gt, f2 as De, f3 as ul, f4 as tn, f5 as ll, f6 as sn, f7 as an, f8 as pl, f9 as ml, fa as rn, fb as cl, fc as dl, fd as hl, fe as fl, ff as yl, fg as gl, fh as bl, fi as Nl, fj as wl, fk as Tl, fl as Sl, fm as vl, fn as Ol, fo as _l, fp as Al, fq as El, fr as kl, fs as Il, ft as $l, fu as Dl, fv as Cl, fw as zl, fx as xl, fy as Ll, fz as Pl, fA as Fl, fB as Vl, fC as Rl, fD as jl, fE as Bl, fF as Hl, fG as Wl, fH as Ul, fI as ql, fJ as Gl, fK as Kl, fL as Jl, fM as Ql, fN as Xl, fO as Zl, fP as Yl, fQ as Ml, fR as ep, fS as tp, fT as sp, fU as ap, fV as rp, fW as np, fX as ip, fY as op, fZ as up, f_ as lp, f$ as pp, g0 as mp, g1 as cp, g2 as dp, g3 as hp, g4 as fp, g5 as yp, g6 as gp, g7 as bp, g8 as Np, g9 as wp, ga as Tp, gb as Sp, gc as vp, gd as Op, ge as _p, gf as Ap, gg as Ep, gh as kp, gi as Ip, gj as $p, gk as Dp, gl as Cp, gm as zp, gn as xp, go as Lp, gp as Pp, gq as Fp, gr as Vp, gs as Rp, gt as jp, gu as Bp, gv as Hp, gw as Wp, gx as Up, gy as qp, gz as Gp, gA as Kp, gB as Jp, gC as Qp, gD as Xp, gE as Zp, gF as Yp, gG as Mp, gH as em, gI as tm, gJ as sm, gK as am, gL as rm, gM as nm, gN as im, gO as om, gP as um, gQ as lm, gR as pm, gS as mm, gT as cm, gU as dm, gV as hm, gW as fm, gX as ym, gY as gm, gZ as bm, g_ as Nm, g$ as wm, h0 as Tm, h1 as Sm, h2 as vm, h3 as Om, h4 as _m, h5 as Am, h6 as Em, h7 as km, h8 as Im, h9 as $m, ha as Dm, hb as Cm, hc as zm, hd as xm, he as Lm, hf as Pm, hg as Fm, hh as Vm, hi as Rm, hj as jm, hk as Bm, hl as Hm, hm as Wm, hn as Um, ho as qm, hp as Gm, hq as Km, hr as Jm, hs as Qm, ht as Xm, hu as Zm, hv as Ym, hw as Mm, hx as ec, hy as tc, hz as sc, hA as ac, hB as rc, hC as nc, hD as ic, hE as oc, hF as uc, hG as lc, hH as pc, hI as mc, hJ as cc, hK as dc, hL as hc, hM as fc, hN as yc, hO as gc, hP as bc, hQ as Nc, hR as wc, hS as Tc, hT as Sc, hU as vc, hV as Oc, hW as _c, hX as Ac, hY as Ec, hZ as kc, h_ as Ic, h$ as $c, i0 as Dc, i1 as Cc, i2 as zc, i3 as xc, i4 as Lc, i5 as Pc, i6 as Fc, i7 as Vc, i8 as Rc, i9 as jc, ia as Bc, ib as Hc, ic as Wc, id as Uc, ie as qc, ig as Gc, ih as Kc, ii as Jc, ij as Qc, ik as Xc, il as Zc, im as Yc, io as Mc, ip as ed, iq as td, ir as sd, is as ad, it as rd, iu as nd, iv as id, iw as od, ix as ud, iy as ld, iz as pd, iA as md, iB as cd, iC as dd, iD as hd, iE as fd, iF as yd, iG as gd, iH as bd, iI as Nd, iJ as wd, iK as Td, iL as Sd, iM as vd, iN as Od, iO as _d, iP as Ad, iQ as Ed, iR as kd, iS as Id, iT as $d, iU as Dd, iV as Cd, iW as zd, iX as xd, iY as Ld, iZ as Pd, C as Fd } from "./controller-mGt1s8dJ.js";
import { CSS3DRenderer as Vd } from "three/addons/renderers/CSS3DRenderer.js";
import { U as Rd } from "./ui-fBadYuor.js";
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function jd(s) {
  w(Array.isArray(s), () => "The argument passed to tf.addN() must be a list of tensors"), w(s.length >= 1, () => `Must pass at least one tensor to tf.addN(), but got ${s.length}`);
  const e = s.map((r, n) => y(r, `tensors${n}`, "addN")), t = e[0];
  e.forEach((r) => {
    if (r.dtype !== t.dtype)
      throw new Error("All tensors passed to tf.addN() must have the same dtype");
  }), e.forEach((r) => {
    if (!te(r.shape, t.shape))
      throw new Error("All tensors passed to tf.addN() must have the same shape");
  });
  const a = e;
  return A.runKernel(Xt, a);
}
const nn = /* @__PURE__ */ S({ addN_: jd });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Bd(s, e, t, a, r, n) {
  const u = y(s, "forgetBias", "basicLSTMCell"), o = y(e, "lstmKernel", "basicLSTMCell"), l = y(t, "lstmBias", "basicLSTMCell"), p = y(a, "data", "basicLSTMCell"), m = y(r, "c", "basicLSTMCell"), c = y(n, "h", "basicLSTMCell"), d = de([p, c], 1), h = W(d, o), N = K(h, l), g = N.shape[0], f = N.shape[1] / 4, b = [g, f], O = U(N, [0, 0], b), _ = U(N, [0, f], b), T = U(N, [0, f * 2], b), I = U(N, [0, f * 3], b), D = K(M(ue(O), ve(_)), M(m, ue(K(u, T)))), C = M(ve(D), ue(I));
  return [D, C];
}
const on = /* @__PURE__ */ S({ basicLSTMCell_: Bd });
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Hd(s, e) {
  const t = y(s, "x", "bitwiseAnd"), a = y(e, "y", "bitwiseAnd");
  if (!te(t.shape, a.shape))
    throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${t.shape}, y: ${a.shape}`);
  if (t.dtype !== "int32" || a.dtype !== "int32")
    throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${t.dtype} and type of y: ${a.dtype}`);
  const r = { a: t, b: a };
  return A.runKernel(Zt, r);
}
const un = /* @__PURE__ */ S({ bitwiseAnd_: Hd });
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Wd(s, e) {
  const t = y(s, "s0", "broadcastArgs", "int32"), a = y(e, "s1", "broadcastArgs", "int32");
  if (t.rank !== 1)
    throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${t.rank}`);
  if (a.rank !== 1)
    throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${a.rank}`);
  const r = { s0: t, s1: a };
  return A.runKernel(Yt, r);
}
const ln = /* @__PURE__ */ S({ broadcastArgs_: Wd });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ud(s) {
  const t = { x: y(s, "x", "diag") };
  return A.runKernel(Mt, t);
}
const pn = /* @__PURE__ */ S({ diag_: Ud });
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function qd(s, e) {
  const t = y(s, "x", "ensureShape", "string_or_numeric");
  if (!Oi(t.shape, e))
    throw new Error(`EnsureShape: Shape of tensor ${t.shape} is not compatible with expected shape ${e}`);
  return s;
}
const mn = /* @__PURE__ */ S({ ensureShape_: qd });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function cn(s, e, t) {
  if (t <= 0)
    throw new Error("The number of values should be positive.");
  const a = { start: s, stop: e, num: t };
  return A.runKernel(es, {}, a);
}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const fe = 2147483648;
function Gd(s, e, t = "left") {
  const a = y(s, "sortedSequence", "searchSorted"), r = y(e, "values", "searchSorted"), n = a.shape[a.shape.length - 1], u = r.shape[r.shape.length - 1], o = v(a, [-1, n]), l = v(r, [-1, u]);
  if (o.rank < 2)
    throw new Error("Sorted input argument must be at least 2-dimensional");
  if (o.shape[0] !== l.shape[0])
    throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");
  if (pe(l.shape) >= fe)
    throw new Error(`values tensor size must less than ${fe}`);
  if (o.shape[1] >= fe)
    throw new Error(`trailing dim_size must less than ${fe} for int32 output type, was ${o.shape[1]}`);
  const p = {
    sortedSequence: o,
    values: l
  }, m = { side: t };
  return A.runKernel(ts, p, m);
}
const Ce = /* @__PURE__ */ S({ searchSorted_: Gd });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function dn(s, e) {
  return Ce(s, e, "left");
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Kd(s, e, t, a, r = !1) {
  const u = { x: y(s, "x", "maxPoolWithArgmax") }, o = { filterSize: e, strides: t, pad: a, includeBatchInIndex: r }, l = A.runKernel(ss, u, o);
  return { result: l[0], indexes: l[1] };
}
const hn = /* @__PURE__ */ S({ maxPoolWithArgmax_: Kd });
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function fn(s, e, { indexing: t = "xy" } = {}) {
  if (t !== "xy" && t !== "ij")
    throw new TypeError(`${t} is not a valid third argument to meshgrid`);
  if (s === void 0)
    return [];
  let a = y(s, "x", "meshgrid", s instanceof me ? s.dtype : "float32");
  if (e === void 0)
    return [a];
  let r = y(e, "y", "meshgrid", e instanceof me ? e.dtype : "float32");
  const n = pe(a.shape), u = pe(r.shape);
  return t === "xy" ? (a = v(a, [1, -1]), r = v(r, [-1, 1]), [
    W(Y([u, 1], a.dtype), a),
    W(r, Y([1, n], r.dtype))
  ]) : (a = v(a, [-1, 1]), r = v(r, [1, -1]), [
    W(a, Y([1, u], a.dtype)),
    W(Y([n, 1], r.dtype), r)
  ]);
}
function Jd(s, e, t, a) {
  const r = y(e, "data", "multiRNNCell"), n = xt(t, "c", "multiRNNCell"), u = xt(a, "h", "multiRNNCell");
  let o = r;
  const l = [];
  for (let c = 0; c < s.length; c++) {
    const d = s[c](o, n[c], u[c]);
    l.push(d[0]), l.push(d[1]), o = d[1];
  }
  const p = [], m = [];
  for (let c = 0; c < l.length; c += 2)
    p.push(l[c]), m.push(l[c + 1]);
  return [p, m];
}
const yn = /* @__PURE__ */ S({ multiRNNCell_: Jd });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Qd(s, e, t, a = !1) {
  const r = y(s, "logits", "multinomial"), n = r.size, u = r.rank;
  if (n < 2)
    throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${n}.`);
  if (u > 2)
    throw new Error(`Rank of probabilities must be 1 or 2, but is ${u}`);
  t = t || Math.random();
  const l = { logits: u === 1 ? v(r, [1, -1]) : r }, p = { numSamples: e, seed: t, normalized: a }, m = A.runKernel(as, l, p);
  return u === 1 ? v(m, [m.size]) : m;
}
const gn = /* @__PURE__ */ S({ multinomial_: Qd });
function Xd(s, e) {
  const t = y(s, "v1", "outerProduct"), a = y(e, "v2", "outerProduct");
  w(t.rank === 1 && a.rank === 1, () => `Error in outerProduct: inputs must be rank 1, but got ranks ${t.rank} and ${a.rank}.`);
  const r = v(t, [-1, 1]), n = v(a, [1, -1]);
  return W(r, n);
}
const bn = /* @__PURE__ */ S({ outerProduct_: Xd });
function Zd(s, e, t = 0) {
  return w(e.length === 2, () => "Invalid number of paddings. Must be length of 2."), ae(s, [e], t);
}
const Nn = /* @__PURE__ */ S({ pad1d_: Zd });
function Yd(s, e, t = 0) {
  return w(e.length === 2 && e[0].length === 2 && e[1].length === 2, () => "Invalid number of paddings. Must be length of 2 each."), ae(s, e, t);
}
const wn = /* @__PURE__ */ S({ pad2d_: Yd });
function Md(s, e, t = 0) {
  return w(e.length === 3 && e[0].length === 2 && e[1].length === 2 && e[2].length === 2, () => "Invalid number of paddings. Must be length of 2 each."), ae(s, e, t);
}
const Tn = /* @__PURE__ */ S({ pad3d_: Md });
function eh(s, e, t = 0) {
  return w(e.length === 4 && e[0].length === 2 && e[1].length === 2 && e[2].length === 2 && e[3].length === 2, () => "Invalid number of paddings. Must be length of 2 each."), ae(s, e, t);
}
const Sn = /* @__PURE__ */ S({ pad4d_: eh });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function th(s, e, t, a) {
  const r = s.map((m, c) => y(m, `tensors${c}`, "raggedGather", "int32")), n = y(e, "paramsDenseValues", "raggedGather"), u = y(t, "indices", "raggedGather", "int32"), o = {
    paramsNestedSplits: r,
    paramsDenseValues: n,
    indices: u
  }, l = { outputRaggedRank: a }, p = A.runKernel(rs, o, l);
  return {
    outputNestedSplits: p.slice(0, p.length - 1),
    outputDenseValues: p[p.length - 1]
  };
}
const vn = /* @__PURE__ */ S({ raggedGather_: th });
/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function sh(s, e, t) {
  const a = y(s, "starts", "raggedRange"), r = y(e, "limits", "raggedRange", a.dtype), n = y(t, "deltas", "raggedRange", a.dtype), u = {
    starts: a,
    limits: r,
    deltas: n
  }, o = A.runKernel(ns, u);
  return {
    rtNestedSplits: o[0],
    rtDenseValues: o[1]
  };
}
const On = /* @__PURE__ */ S({ raggedRange_: sh });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function ah(s, e, t, a, r) {
  const n = y(s, "shape", "raggedTensorToTensor", "int32"), u = y(e, "values", "raggedTensorToTensor"), o = y(t, "defaultValue", "raggedTensorToTensor", u.dtype), l = a.map((c, d) => y(c, `tensors${d}`, "raggedTensorToTensor", "int32")), p = {
    shape: n,
    values: u,
    defaultValue: o,
    rowPartitionTensors: l
  }, m = { rowPartitionTypes: r };
  return A.runKernel(is, p, m);
}
const _n = /* @__PURE__ */ S({ raggedTensorToTensor_: ah });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function rh(s, e, t) {
  $e(s);
  const a = pe(s);
  let r = null;
  if (t == null || t === "float32")
    r = new Float32Array(a);
  else if (t === "int32")
    r = new Int32Array(a);
  else if (t === "bool")
    r = new Uint8Array(a);
  else
    throw new Error(`Unknown data type ${t}`);
  for (let n = 0; n < a; n++)
    r[n] = e();
  return A.makeTensor(r, s, t);
}
const An = /* @__PURE__ */ S({ rand_: rh });
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const nh = 1e-3, En = 0.1;
function ih(s, e, t) {
  return t == null && (t = bt()), je(s, e, (a, r) => Nt(a, r, t));
}
function bt() {
  return A.backend.floatPrecision() === 32 ? nh : En;
}
function je(s, e, t) {
  let a = !0;
  if ((Z(s) || Z(e)) && (a = !1), Z(s) && Z(e) && (a = !0), a) {
    const u = s.constructor.name, o = e.constructor.name;
    if (u !== o)
      throw new Error(`Arrays are of different type. Actual: ${u}. Expected: ${o}`);
  }
  if (Array.isArray(s) && Array.isArray(e)) {
    const u = ce(s), o = ce(e);
    if (!te(u, o))
      throw new Error(`Arrays have different shapes. Actual: [${u}]. Expected: [${o}]`);
  }
  const r = Z(s) ? s : Lt(s), n = Z(e) ? e : Lt(e);
  if (r.length !== n.length)
    throw new Error(`Arrays have different lengths actual: ${r.length} vs expected: ${n.length}.
Actual:   ${r}.
Expected: ${n}.`);
  for (let u = 0; u < n.length; ++u) {
    const o = r[u], l = n[u];
    if (!t(o, l))
      throw new Error(`Arrays differ: actual[${u}] = ${o}, expected[${u}] = ${l}.
Actual:   ${r}.
Expected: ${n}.`);
  }
  typeof expect < "u" && expect().nothing();
}
function oh(s, e) {
  s().then(() => e.fail(), () => e()), typeof expect < "u" && expect().nothing();
}
function uh(s, e) {
  const t = typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? [e] : e;
  return he(s) || he(s[0]) || he(e) || he(e[0]) ? je(s, t, (a, r) => a == r) : je(s, e, (a, r) => Nt(a, r, 0));
}
function lh(s, e, t) {
  if (t == null && (t = bt()), !Nt(s, e, t))
    throw new Error(`Numbers differ: actual === ${s}, expected === ${e}`);
  typeof expect < "u" && expect().nothing();
}
function Nt(s, e, t) {
  return !isFinite(s) && !isFinite(e) ? !0 : !(isNaN(s) || isNaN(e) || Math.abs(s - e) > t);
}
function ph(s, e, t) {
  for (let a = 0; a < s.length; a++)
    if (s[a] < e || s[a] > t)
      throw new Error(`Value out of range:${s[a]} low: ${e}, high: ${t}`);
}
function mh(s, e) {
  const t = new Float32Array(s), a = new Float32Array(e);
  if (t.length !== a.length)
    throw new Error(`Expected ArrayBuffer to be of length ${a.length}, but it was ${t.length}`);
  for (let r = 0; r < a.length; r++)
    if (t[r] !== a[r])
      throw new Error(`Expected ArrayBuffer value at ${r} to be ${a[r]} but got ${t[r]} instead`);
}
function kn(s) {
  for (let e = 0; e < s.length; e++) {
    const t = s[e];
    Array.isArray(t) ? kn(t) : s[e] = _i(t);
  }
  return s;
}
function ch(s) {
  const e = document.createElement("video");
  return "playsInline" in e && (e.playsInline = !0), e.muted = !0, e.loop = !0, e.style.position = "fixed", e.style.left = "0px", e.style.top = "0px", e.preload = "auto", e.appendChild(s), new Promise((t) => {
    e.addEventListener("loadeddata", (a) => t(e)), e.load();
  });
}
async function dh(s) {
  await s.play(), "requestVideoFrameCallback" in s && await new Promise((e) => {
    s.requestVideoFrameCallback(e);
  });
}
const hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TEST_EPSILON_FLOAT16: En,
  createVideoElement: ch,
  encodeStrings: kn,
  expectArrayBuffersEqual: mh,
  expectArraysClose: ih,
  expectArraysEqual: uh,
  expectNumbersClose: lh,
  expectPromiseToFail: oh,
  expectValuesInRange: ph,
  play: dh,
  testEpsilon: bt
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function fh(s, e, t = 1, a = "float32", r) {
  if ($e(s), t == null && (t = 1), a == null && (a = "float32"), a !== "float32" && a !== "int32")
    throw new Error(`Unsupported data type ${a}`);
  const n = new Ai(e, t, a, r), u = Ye(s, a);
  for (let o = 0; o < u.values.length; o++)
    u.values[o] = n.nextValue();
  return u.toTensor();
}
const In = /* @__PURE__ */ S({ randomGamma_: fh });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function yh(s, e, t) {
  if (e != null && e === "bool")
    throw new Error(`Unsupported data type ${e}`);
  return Me(s, 0, 1, e, t);
}
const $n = /* @__PURE__ */ S({ randomStandardNormal_: yh });
/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function gh(s, e, t, a) {
  return et(s, e, t, "int32", a);
}
const Dn = /* @__PURE__ */ S({ randomUniformInt_: gh });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function bh(s) {
  const e = y(s, "x", "reverse");
  return w(e.rank === 1, () => `Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`), re(e, 0);
}
const Cn = /* @__PURE__ */ S({ reverse1d_: bh });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Nh(s, e) {
  const t = y(s, "x", "reverse");
  return w(t.rank === 2, () => `Error in reverse2D: x must be rank 2 but got rank ${t.rank}.`), re(t, e);
}
const zn = /* @__PURE__ */ S({ reverse2d_: Nh });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function wh(s, e) {
  const t = y(s, "x", "reverse");
  return w(t.rank === 3, () => `Error in reverse3D: x must be rank 3 but got rank ${t.rank}.`), re(t, e);
}
const xn = /* @__PURE__ */ S({ reverse3d_: wh });
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Th(s, e) {
  const t = y(s, "x", "reverse");
  return w(t.rank === 4, () => `Error in reverse4D: x must be rank 4 but got rank ${t.rank}.`), re(t, e);
}
const Ln = /* @__PURE__ */ S({ reverse4d_: Th });
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function Sh(s, e) {
  const t = y(s, "x", "setdiff1d"), a = y(e, "y", "setdiff1d");
  w(t.dtype === a.dtype, () => `x and y should have the same dtype, but got x (${t.dtype}) and y (${a.dtype}).`), w(t.rank === 1, () => `x should be 1D tensor, but got x (${t.shape}).`), w(a.rank === 1, () => `y should be 1D tensor, but got y (${a.shape}).`);
  const r = await t.data(), n = await a.data(), u = new Set(n);
  let o = 0;
  for (let m = 0; m < r.length; m++)
    u.has(r[m]) || o++;
  const l = new Fe([o], t.dtype), p = new Fe([o], "int32");
  for (let m = 0, c = 0; m < r.length; m++)
    u.has(r[m]) || (l.values[c] = r[m], p.values[c] = m, c++);
  return [l.toTensor(), p.toTensor()];
}
const Pn = Sh;
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Fn(s, e, t) {
  if (tt(s), e != null && e.length !== 4)
    throw new Error("tensor4d() requires shape to have four numbers");
  const a = ce(s, t);
  if (a.length !== 4 && a.length !== 1)
    throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");
  if (a.length === 1 && e == null)
    throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");
  return st(s, e, a, t);
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Vn(s, e, t) {
  if (tt(s), e != null && e.length !== 5)
    throw new Error("tensor5d() requires shape to have five numbers");
  const a = ce(s, t);
  if (a.length !== 5 && a.length !== 1)
    throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");
  if (a.length === 1 && e == null)
    throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");
  return st(s, e, a, t);
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Rn(s, e, t) {
  if (tt(s), e != null && e.length !== 6)
    throw new Error("tensor6d() requires shape to have six numbers");
  const a = ce(s, t);
  if (a.length !== 6 && a.length !== 1)
    throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");
  if (a.length === 1 && e == null)
    throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");
  return e = e || a, st(s, e, a, t);
}
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function vh(s, e, t) {
  const a = y(s, "tensor", "tensorScatterupdate"), r = y(e, "indices", "tensorScatterupdate", "int32"), n = y(t, "updates", "tensorScatterupdate");
  if (os(n, r, a.shape), a.dtype !== n.dtype)
    throw new Error(`tensor and updates must have the same dtype, instead they are ${a.dtype} and ${n.dtype}.`);
  const u = {
    tensor: a,
    indices: r,
    updates: n
  }, o = {};
  return A.runKernel(us, u, o);
}
const jn = S({ tensorScatterUpdate_: vh });
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Bn(s, e) {
  return Ce(s, e, "right");
}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function Oh(s) {
  const e = y(s, "condition", "whereAsync", "bool"), t = await e.data(), a = ls(e.shape, t);
  return s !== e && e.dispose(), a;
}
const wt = Oh;
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function _h(s, e, t) {
  const a = y(s, "tensor", "boolMask"), r = y(e, "mask", "boolMask", "bool"), n = t ?? 0, u = r.rank, o = a.shape;
  w(u > 0, () => "mask cannot be scalar"), ps(o.slice(n, n + u), r.shape, "mask's shape must match the first K dimensions of tensor's shape,");
  let l = 1;
  for (let g = n; g < n + u; g++)
    l *= o[g];
  const p = o.slice(0, n).concat([l], o.slice(n + u)), m = v(a, p), c = v(r, [-1]), d = await wt(c), h = at(d, [1]), N = rt(m, h, n);
  return s !== a && a.dispose(), e !== r && r.dispose(), h.dispose(), m.dispose(), c.dispose(), d.dispose(), N;
}
const Hn = _h;
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ah(s, e, t, a, r = !0) {
  const n = y(s, "v", "movingAverage"), u = y(e, "x", "movingAverage"), o = y(t, "decay", "movingAverage");
  Ei(n, u), w(te(n.shape, u.shape), () => "Shape mismatch in v and x");
  const l = R(1), p = le(l, o);
  let m = M(le(u, n), p);
  if (r) {
    w(a != null, () => "When using zeroDebias: true, step is required.");
    const c = y(a, "step", "movingAverage");
    m = nt(m, le(l, it(o, c)));
  }
  return K(n, m);
}
const Wn = /* @__PURE__ */ S({ movingAverage_: Ah });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Eh(s, e, t) {
  $e(t);
  const a = y(s, "indices", "scatterND", "int32"), r = y(e, "updates", "scatterND");
  os(r, a, t);
  const n = { indices: a, updates: r }, u = { shape: t };
  return A.runKernel(ms, n, u);
}
const Un = /* @__PURE__ */ S({ scatterND_: Eh });
function kh(s, e, t, a) {
  if (s.dtype !== "int32")
    throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${s.dtype}.`);
  if (s.rank > 2)
    throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${s.shape}.`);
  const r = s.rank > 0 ? s.shape[0] : 1, n = s.rank > 1 ? s.shape[1] : 1;
  if (t.length !== n)
    throw new Error(`outputShape has incorrect number of elements:, ${t.length}, should be: ${n}.`);
  const u = e.size;
  if (!(e.rank === 0 || e.rank === 1 && u === r))
    throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${r}]`);
  if (e.dtype !== a.dtype)
    throw new Error("sparseValues.dtype must match defaultValues.dtype");
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ih(s, e, t, a = 0) {
  $e(t);
  const r = y(s, "sparseIndices", "sparseToDense", "int32"), n = y(e, "sparseValues", "sparseToDense", "string_or_numeric"), u = y(a, "defaultValue", "sparseToDense", n.dtype);
  kh(r, n, t, u);
  const o = {
    sparseIndices: r,
    sparseValues: n,
    defaultValue: u
  }, l = { outputShape: t };
  return A.runKernel(cs, o, l);
}
const qn = /* @__PURE__ */ S({ sparseToDense_: Ih });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function $h(s, e) {
  const t = y(e, "indices", "gatherND", "int32"), r = { params: y(s, "x", "gatherND", "string_or_numeric"), indices: t };
  return A.runKernel(ds, r);
}
const Gn = /* @__PURE__ */ S({ gatherND_: $h });
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
async function Dh(s, e, t = 1) {
  const a = y(s, "predictions", "inTopK"), r = y(e, "targets", "inTopK");
  w(a.rank > 1, () => `inTopK() expects the predictions to be of rank 2 or higher, but got ${a.rank}`), w(a.rank - 1 === r.rank, () => `predictions rank should be 1 larger than targets rank, but got predictions rank ${a.rank} and targets rank ${r.rank}`), ps(a.shape.slice(0, a.shape.length - 1), r.shape, "predictions's shape should be align with the targets' shape, except the last dimension.");
  const n = a.shape[a.shape.length - 1];
  w(t > 0 && t <= n, () => `'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${n}), but got ${t}`);
  const u = await a.data(), o = await r.data(), [l, p] = [u.length / n, n], m = ki("bool", l);
  for (let c = 0; c < l; c++) {
    const d = c * p, h = u.subarray(d, d + p), N = [];
    for (let g = 0; g < h.length; g++)
      N.push({ value: h[g], index: g });
    N.sort((g, f) => f.value - g.value), m[c] = 0;
    for (let g = 0; g < t; g++)
      if (N[g].index === o[c]) {
        m[c] = 1;
        break;
      }
  }
  return s !== a && a.dispose(), e !== r && r.dispose(), q(m, r.shape, "bool");
}
const Kn = Dh;
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ch({ x: s, filter: e, strides: t, pad: a, dataFormat: r = "NHWC", dilations: n = [1, 1], dimRoundingMode: u, bias: o, activation: l = "linear", preluActivationWeights: p, leakyreluAlpha: m }) {
  if (Ii(A.state.gradientDepth, l) === !1) {
    let I = ot(s, e, t, a, r, n, u);
    return o != null && (I = K(I, o)), $i(I, l, p, m);
  }
  const c = y(s, "x", "depthwiseConv2d", "float32"), d = y(e, "filter", "depthwiseConv2d", "float32");
  let h = c, N = !1;
  c.rank === 3 && (N = !0, h = v(c, [1, c.shape[0], c.shape[1], c.shape[2]])), w(h.rank === 4, () => `Error in fused depthwiseConv2d: input must be rank 4, but got rank ${h.rank}.`), w(d.rank === 4, () => `Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${d.rank}.`), w(h.shape[3] === d.shape[2], () => `Error in fused depthwiseConv2d: number of input channels (${h.shape[3]}) must match the inChannels dimension in filter ${d.shape[2]}.`), n == null && (n = [1, 1]), w(Di(t, n), () => `Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${t} and dilations '${n}'`), Ci("fused depthwiseConv2d", a, u);
  const g = zi(
    h.shape,
    d.shape,
    t,
    n,
    a,
    u,
    !0
    /* depthwise */
  );
  let f;
  o != null && (f = y(o, "bias", "fused conv2d"), [f] = xi(f, c), Li(g.outShape, f.shape));
  let b;
  p != null && (b = y(p, "prelu weights", "fused depthwiseConv2d"));
  const O = (I, D) => {
    w(Pi(n), () => `Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${n}'`);
    const [C, X, F, j] = D, ze = Fi(I, F, l), $t = Vi(X.shape, ze, C, t, a, n, u), Dt = Ri(X, ze, C.shape, t, a, n, u);
    if (j != null) {
      const wi = ji(f, ze);
      return [$t, Dt, wi];
    }
    return [$t, Dt];
  }, _ = {
    x: h,
    filter: d,
    bias: f,
    preluActivationWeights: b
  }, T = {
    strides: t,
    pad: a,
    dataFormat: r,
    dilations: n,
    dimRoundingMode: u,
    activation: l,
    leakyreluAlpha: m
  };
  return o == null ? Ve((D, C, X) => {
    let F = A.runKernel(Re, _, T);
    return X([C, D, F]), N && (F = v(F, [F.shape[1], F.shape[2], F.shape[3]])), { value: F, gradFunc: O };
  })(h, d) : Ve((D, C, X, F) => {
    let j = A.runKernel(Re, _, T);
    return F([C, D, j, X]), N && (j = v(j, [j.shape[1], j.shape[2], j.shape[3]])), { value: j, gradFunc: O };
  })(h, d, f);
}
const zh = /* @__PURE__ */ S({ fusedDepthwiseConv2d_: Ch });
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  conv2d: Bi,
  depthwiseConv2d: zh,
  matMul: Hi
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const xh = "model", Lh = ".json", Ph = ".weights.bin";
function Ft(s) {
  return new Promise((e) => setTimeout(e)).then(s);
}
class J {
  constructor(e) {
    if (!P().getBool("IS_BROWSER"))
      throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");
    e.startsWith(J.URL_SCHEME) && (e = e.slice(J.URL_SCHEME.length)), (e == null || e.length === 0) && (e = xh), this.modelJsonFileName = e + Lh, this.weightDataFileName = e + Ph;
  }
  async save(e) {
    if (typeof document > "u")
      throw new Error("Browser downloads are not supported in this environment since `document` is not present");
    const t = fs.join(e.weightData), a = window.URL.createObjectURL(new Blob([t], { type: "application/octet-stream" }));
    if (e.modelTopology instanceof ArrayBuffer)
      throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");
    {
      const r = [{
        paths: ["./" + this.weightDataFileName],
        weights: e.weightSpecs
      }], n = Ui(e, r), u = window.URL.createObjectURL(new Blob([JSON.stringify(n)], { type: "application/json" })), o = this.modelJsonAnchor == null ? document.createElement("a") : this.modelJsonAnchor;
      if (o.download = this.modelJsonFileName, o.href = u, await Ft(() => o.dispatchEvent(new MouseEvent("click"))), e.weightData != null) {
        const l = this.weightDataAnchor == null ? document.createElement("a") : this.weightDataAnchor;
        l.download = this.weightDataFileName, l.href = a, await Ft(() => l.dispatchEvent(new MouseEvent("click")));
      }
      return { modelArtifactsInfo: ys(e) };
    }
  }
}
J.URL_SCHEME = "downloads://";
class Fh {
  constructor(e) {
    if (e == null || e.length < 1)
      throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);
    this.jsonFile = e[0], this.weightsFiles = e.slice(1);
  }
  async load() {
    return new Promise((e, t) => {
      const a = new FileReader();
      a.onload = (r) => {
        const n = JSON.parse(r.target.result), u = n.modelTopology;
        if (u == null) {
          t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));
          return;
        }
        if (n.weightsManifest == null) {
          t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));
          return;
        }
        if (this.weightsFiles.length === 0) {
          e({ modelTopology: u });
          return;
        }
        const l = hs(n, (p) => this.loadWeights(p));
        e(l);
      }, a.onerror = (r) => t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`), a.readAsText(this.jsonFile);
    });
  }
  loadWeights(e) {
    const t = [], a = [];
    for (const u of e)
      t.push(...u.weights), a.push(...u.paths);
    const r = this.checkManifestAndWeightFiles(e), n = a.map((u) => this.loadWeightsFile(u, r[u]));
    return Promise.all(n).then((u) => [t, u]);
  }
  loadWeightsFile(e, t) {
    return new Promise((a, r) => {
      const n = new FileReader();
      n.onload = (u) => {
        const o = u.target.result;
        a(o);
      }, n.onerror = (u) => r(`Failed to weights data from file of path '${e}'.`), n.readAsArrayBuffer(t);
    });
  }
  /**
   * Check the compatibility between weights manifest and weight files.
   */
  checkManifestAndWeightFiles(e) {
    const t = [], a = this.weightsFiles.map((n) => Pt(n.name)), r = {};
    for (const n of e)
      n.paths.forEach((u) => {
        const o = Pt(u);
        if (t.indexOf(o) !== -1)
          throw new Error(`Duplicate file basename found in weights manifest: '${o}'`);
        if (t.push(o), a.indexOf(o) === -1)
          throw new Error(`Weight file with basename '${o}' is not provided.`);
        r[u] = this.weightsFiles[a.indexOf(o)];
      });
    if (t.length !== this.weightsFiles.length)
      throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);
    return r;
  }
}
const Vh = (s) => P().getBool("IS_BROWSER") && !Array.isArray(s) && s.startsWith(J.URL_SCHEME) ? Rh(s.slice(J.URL_SCHEME.length)) : null;
Wi.registerSaveRouter(Vh);
function Rh(s = "model") {
  return new J(s);
}
function jh(s) {
  return new Fh(s);
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class xe {
  constructor(e) {
    this.modelArtifacts = e;
  }
  load() {
    return this.modelArtifacts;
  }
}
class Qn {
  constructor(e) {
    this.saveHandler = e;
  }
  save(e) {
    return this.saveHandler(e);
  }
}
class Bh {
  constructor(e) {
    e.load && (this.load = () => Promise.resolve(e.load())), e.save && (this.save = (t) => Promise.resolve(e.save(t)));
  }
}
function Hh(s, e, t, a) {
  const r = arguments;
  return new Bh(Ee(...r));
}
function Ee(s, e, t, a) {
  return arguments.length === 1 ? s.modelTopology != null || s.weightSpecs != null ? new xe(s) : (console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."), new xe({ modelTopology: s })) : (console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."), new xe({
    modelTopology: s,
    weightSpecs: e,
    weightData: t,
    trainingConfig: a
  }));
}
function Wh(s) {
  return new Qn(s);
}
function Uh(s) {
  return new Qn(s);
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CompositeArrayBuffer: fs,
  browserFiles: jh,
  browserHTTPRequest: qi,
  concatenateArrayBuffers: Gi,
  copyModel: Ki,
  decodeWeights: Ji,
  decodeWeightsStream: gs,
  encodeWeights: Qi,
  fromMemory: Hh,
  fromMemorySync: Ee,
  getLoadHandlers: Xi,
  getModelArtifactsForJSON: hs,
  getModelArtifactsForJSONSync: bs,
  getModelArtifactsInfoForJSON: ys,
  getSaveHandlers: Zi,
  getWeightSpecs: Ns,
  http: Yi,
  isHTTPScheme: Mi,
  listModels: eo,
  loadWeights: to,
  moveModel: so,
  registerLoadRouter: ao,
  registerSaveRouter: ro,
  removeModel: no,
  weightsLoaderFactory: io,
  withSaveHandler: Wh,
  withSaveHandlerSync: Uh
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function qh(s, e, t) {
  const a = y(s, "labels", "confusionMatrix"), r = y(e, "predictions", "confusionMatrix");
  w(t == null || t > 0 && Number.isInteger(t), () => `If provided, numClasses must be a positive integer, but got ${t}`), w(a.rank === 1, () => `Expected the rank of labels to be 1, but got ${a.rank}`), w(r.rank === 1, () => `Expected the rank of predictions to be 1, but got ${r.rank}`), w(a.shape[0] === r.shape[0], () => `Mismatch in the number of examples: ${a.shape[0]} vs. ${r.shape[0]}. Labels and predictions should have the same number of elements.`), w(t > 0 && Number.isInteger(t), () => `numClasses is required to be a positive integer, but got ${t}`);
  const n = Oe(ee(a, "int32"), t), u = Oe(ee(r, "int32"), t), o = ut(n), l = W(o, u);
  return ee(l, "int32");
}
const Gh = /* @__PURE__ */ S({ confusionMatrix_: qh });
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Kh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  confusionMatrix: Gh
}, Symbol.toStringTag, { value: "Module" }));
/** @license See the LICENSE file. */
const Xn = "4.16.0";
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Jh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  nonMaxSuppressionV3Impl: oo,
  nonMaxSuppressionV4Impl: uo,
  nonMaxSuppressionV5Impl: lo,
  whereImpl: ls
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
function Qh(s) {
  return new po(s);
}
function Xh(s) {
  return new mo(s);
}
function Zh() {
  return new co();
}
function Yh(s) {
  return new ho(s);
}
const Mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  maxNorm: Qh,
  minMaxNorm: Yh,
  nonNeg: Zh,
  unitNorm: Xh
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
function ef() {
  return new fo();
}
function tf() {
  return new yo();
}
function sf(s) {
  return new go(s);
}
function af(s) {
  return new bo(s);
}
function rf(s) {
  return new No(s);
}
function nf(s) {
  return new wo(s);
}
function of(s) {
  return new To(s);
}
function uf(s) {
  return new So(s);
}
function lf(s) {
  return new vo(s);
}
function pf(s) {
  return new Oo(s);
}
function mf(s) {
  return new _o(s);
}
function cf(s) {
  return new Ao(s);
}
function df(s) {
  return new Eo(s);
}
function hf(s) {
  return new ko(s);
}
function ff(s) {
  return new Io(s);
}
const yf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  constant: sf,
  glorotNormal: pf,
  glorotUniform: lf,
  heNormal: mf,
  heUniform: cf,
  identity: of,
  leCunNormal: df,
  leCunUniform: hf,
  ones: tf,
  orthogonal: ff,
  randomNormal: rf,
  randomUniform: af,
  truncatedNormal: nf,
  varianceScaling: uf,
  zeros: ef
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
function gf(s) {
  return new lt(s);
}
function bf(s) {
  return new ws(s);
}
function Zn(s) {
  return $o(s);
}
function Nf(s, e) {
  Do.registerCallbackConstructor(s, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
function wf(s) {
  return new Co(s);
}
function Tf(s) {
  return new zo(s);
}
function Sf(s) {
  return new xo(s);
}
function vf(s) {
  return new Lo(s);
}
function Of(s) {
  return new Po(s);
}
function _f(s) {
  return new Fo(s);
}
function Af(s) {
  return new Vo(s);
}
function Ef(s) {
  return new Ro(s);
}
function kf(s) {
  return new jo(s);
}
function If(s) {
  return new Bo(s);
}
function $f(s) {
  return new Ho(s);
}
function Df(s) {
  return new Wo(s);
}
function Cf(s) {
  return new Uo(s);
}
function zf(s) {
  return new qo(s);
}
function xf(s) {
  return new Go(s);
}
function Lf(s) {
  return new Ko(s);
}
function Pf(s) {
  return new Jo(s);
}
function Ff(s) {
  return new Qo(s);
}
function Vf(s) {
  return new Xo(s);
}
function Rf(s) {
  return new Zo(s);
}
function jf(s) {
  return new Yo(s);
}
function Bf(s) {
  return new Mo(s);
}
function Hf(s) {
  return new eu(s);
}
function Wf(s) {
  return new tu(s);
}
function Uf(s) {
  return new su(s);
}
function qf(s) {
  return new au(s);
}
function Gf(s) {
  return new ru(s);
}
function Kf(s) {
  return new nu(s);
}
function Jf(s) {
  return new iu(s);
}
function Qf(s) {
  return new ou(s);
}
function Xf(s) {
  return new uu(s);
}
function Zf(s) {
  return new lu(s);
}
function Yf(s) {
  return new pu(s);
}
function Mf(s) {
  return new mu(s);
}
function ey(s) {
  return new cu(s);
}
function St(s) {
  return new du(s);
}
function ty(s) {
  return St(s);
}
function sy(s) {
  return St(s);
}
function vt(s) {
  return new hu(s);
}
function ay(s) {
  return vt(s);
}
function ry(s) {
  return vt(s);
}
function Ot(s) {
  return new fu(s);
}
function ny(s) {
  return Ot(s);
}
function iy(s) {
  return Ot(s);
}
function oy(s) {
  return new yu(s);
}
function uy(s) {
  return new gu(s);
}
function Yn(s) {
  return new bu(s);
}
function Mn(s) {
  return new Nu(s);
}
function ei(s) {
  return new wu(s);
}
function ti(s) {
  return new Tu(s);
}
function ly(s) {
  return new Su(s);
}
function py(s) {
  return new vu(s);
}
function my(s) {
  return new Ou(s);
}
function cy(s) {
  return new _u(s);
}
function dy(s) {
  return new Au(s);
}
function hy(s) {
  return new Eu(s);
}
function fy(s) {
  return new ku(s);
}
function yy(s) {
  return new Iu(s);
}
function gy(s) {
  return new $u(s);
}
function by(s) {
  return new pt(s);
}
function Ny(s) {
  return new Du(s);
}
function wy(s) {
  return new Cu(s);
}
function Ty(s) {
  return new zu(s);
}
const Sy = Yn, vy = Mn, Oy = ei, _y = ti;
function Ay(s) {
  return new xu(s);
}
function Ey(s) {
  return new Lu(s);
}
function ky(s) {
  return new Pu(s);
}
function Iy(s) {
  return new Fu(s);
}
function $y(s) {
  return new Vu(s);
}
function Dy(s) {
  return new Ru(s);
}
function Cy(s) {
  return new ju(s);
}
function zy(s) {
  return new Bu(s);
}
function xy(s) {
  return new Hu(s);
}
const Ly = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layer: Wu,
  RNN: pt,
  RNNCell: Uu,
  activation: Pf,
  add: qf,
  alphaDropout: ky,
  average: Gf,
  averagePooling1d: St,
  averagePooling2d: vt,
  averagePooling3d: Ot,
  avgPool1d: ty,
  avgPool2d: ay,
  avgPool3d: ny,
  avgPooling1d: sy,
  avgPooling2d: ry,
  avgPooling3d: iy,
  batchNormalization: Yf,
  bidirectional: wy,
  categoryEncoding: zy,
  centerCrop: Dy,
  concatenate: Kf,
  conv1d: Ef,
  conv2d: kf,
  conv2dTranspose: If,
  conv3d: $f,
  conv3dTranspose: Df,
  convLstm2d: yy,
  convLstm2dCell: gy,
  cropping2D: zf,
  dense: Ff,
  depthwiseConv2d: Lf,
  dot: Zf,
  dropout: Vf,
  elu: Tf,
  embedding: Uf,
  flatten: jf,
  gaussianDropout: Ey,
  gaussianNoise: Ay,
  globalAveragePooling1d: oy,
  globalAveragePooling2d: uy,
  globalMaxPool1d: Sy,
  globalMaxPool2d: vy,
  globalMaxPooling1d: Yn,
  globalMaxPooling2d: Mn,
  gru: py,
  gruCell: my,
  input: Zn,
  inputLayer: wf,
  layerNormalization: Mf,
  leakyReLU: vf,
  lstm: cy,
  lstmCell: dy,
  masking: Iy,
  maxPool1d: Oy,
  maxPool2d: _y,
  maxPooling1d: ei,
  maxPooling2d: ti,
  maxPooling3d: ly,
  maximum: Jf,
  minimum: Qf,
  multiply: Xf,
  permute: Wf,
  prelu: Of,
  randomWidth: xy,
  reLU: Sf,
  repeatVector: Bf,
  rescaling: $y,
  reshape: Hf,
  resizing: Cy,
  rnn: by,
  separableConv2d: Cf,
  simpleRNN: hy,
  simpleRNNCell: fy,
  softmax: _f,
  spatialDropout1d: Rf,
  stackedRNNCells: Ny,
  thresholdedReLU: Af,
  timeDistributed: Ty,
  upSampling2d: xf,
  zeroPadding2d: ey
}, Symbol.toStringTag, { value: "Module" }));
function Py(s, e) {
  return qu(s, e);
}
function Fy(s, e) {
  return Gu(s, e);
}
function Vy(s, e) {
  return Ku(s, e);
}
function Ry(s, e) {
  return Ju(s, e);
}
function jy(s, e) {
  return Qu(s, e);
}
function By(s, e) {
  return Xu(s, e);
}
function Hy(s, e) {
  return Zu(s, e);
}
function Wy(s, e) {
  return Yu(s, e);
}
function Uy(s, e) {
  return Mu(s, e);
}
function qy(s, e) {
  return mt(s, e);
}
function Gy(s, e) {
  return mt(s, e);
}
function Ky(s, e) {
  return mt(s, e);
}
function Jy(s, e) {
  return ct(s, e);
}
function Qy(s, e) {
  return ct(s, e);
}
function Xy(s, e) {
  return ct(s, e);
}
const Zy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MAPE: Gy,
  MSE: Qy,
  binaryAccuracy: Py,
  binaryCrossentropy: Fy,
  categoricalAccuracy: Ry,
  categoricalCrossentropy: jy,
  cosineProximity: Wy,
  mape: Ky,
  meanAbsoluteError: Uy,
  meanAbsolutePercentageError: qy,
  meanSquaredError: Jy,
  mse: Xy,
  precision: By,
  recall: Hy,
  sparseCategoricalAccuracy: Vy
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
const Yy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  modelFromJSON: el
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
function My(s) {
  return new tl(s);
}
function eg(s) {
  return sl(s);
}
function tg(s) {
  return al(s);
}
const sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  l1: eg,
  l1l2: My,
  l2: tg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Use of this source code is governed by an MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 * =============================================================================
 */
class si extends rl {
  constructor() {
    super(...arguments), this.model = null;
  }
  setModel(e) {
    if (!(e instanceof lt))
      throw new Error("model must be a LayersModel, not some other Container");
    this.model = e;
  }
}
function ye(s, e) {
  return s < e;
}
function Vt(s, e) {
  return s > e;
}
class ai extends si {
  constructor(e) {
    if (super(), e == null && (e = {}), e.restoreBestWeights)
      throw new nl("restoreBestWeights = True is not implemented in EarlyStopping yet.");
    this.monitor = e.monitor || "val_loss", this.minDelta = Math.abs(e.minDelta || 0), this.patience = e.patience || 0, this.verbose = e.verbose || 0, this.mode = e.mode || "auto", this.baseline = e.baseline, ["auto", "min", "max"].indexOf(this.mode) === -1 && (console.warn(`EarlyStopping mode '${this.mode}' is invalid. Falling back to mode 'auto'.`), this.mode = "auto"), this.mode === "min" ? this.monitorFunc = ye : this.mode === "max" ? this.monitorFunc = Vt : this.monitor.indexOf("acc") !== -1 ? this.monitorFunc = Vt : this.monitorFunc = ye, this.monitorFunc === ye && (this.minDelta *= -1);
  }
  async onTrainBegin(e) {
    this.wait = 0, this.stoppedEpoch = 0, this.baseline != null ? this.best = this.baseline : this.best = this.monitorFunc === ye ? 1 / 0 : -1 / 0;
  }
  async onEpochEnd(e, t) {
    await il(t);
    const a = this.getMonitorValue(t);
    a != null && (this.monitorFunc(a - this.minDelta, this.best) ? (this.best = a, this.wait = 0) : (this.wait++, this.wait >= this.patience && (this.stoppedEpoch = e, this.model.stopTraining = !0)));
  }
  async onTrainEnd(e) {
    this.stoppedEpoch > 0 && this.verbose && console.log(`Epoch ${this.stoppedEpoch}: early stopping.`);
  }
  getMonitorValue(e) {
    e == null && (e = {});
    const t = e[this.monitor];
    return t == null && console.warn(`Metric for EarlyStopping ${this.monitor} is not available. Available metrics are: ${Object.keys(e)}`), t;
  }
}
function ag(s) {
  return new ai(s);
}
const rg = { earlyStopping: ag };
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const _t = {};
function ng(s, e) {
  const t = {
    tfOpName: s,
    category: "custom",
    inputs: [],
    attrs: [],
    customExecutor: e
  };
  _t[s] = t;
}
function ri(s) {
  return _t[s];
}
function ig(s) {
  delete _t[s];
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function i(s, e, t, a, r) {
  const n = e.inputParams[s];
  if (n && n.inputIndexStart !== void 0) {
    const o = n.inputIndexStart, l = n.inputIndexEnd === 0 ? void 0 : n.inputIndexEnd === void 0 ? o + 1 : n.inputIndexEnd, p = o < 0 ? e.inputNames.length + o : o;
    if (n.type === "tensor")
      return E(e.inputNames[p], t, a, r);
    if (n.type === "tensors") {
      const d = e.inputs.slice(o, l);
      return e.inputNames.slice(o, l).filter((N, g) => {
        var f;
        return ((f = d[g]) === null || f === void 0 ? void 0 : f.op) !== "NoOp";
      }).map((N) => E(N, t, a, r));
    }
    const m = E(e.inputNames[p], t, a, r), c = m.dataSync();
    return n.type === "number" ? c[0] : ol(m.shape, c);
  }
  const u = e.attrParams[s];
  return u && u.value;
}
function E(s, e, t, a) {
  const [r, n] = $(s, t);
  if (a != null) {
    const o = a.getHashTableHandleByName(r);
    if (o != null)
      return o;
  }
  const u = t.currentContextIds.find((o) => !!e[ke(r, o)]);
  return u !== void 0 ? e[ke(r, u)][n] : void 0;
}
function Rt(s, e, t) {
  return e[ke(s, t.currentContextId)];
}
function B(s, e) {
  const [t, a, r] = $(s, e);
  return [
    ke(t, e && e.currentContextId),
    a,
    r
  ];
}
function ke(s, e) {
  return e ? `${s}-${e}` : s;
}
function $(s, e) {
  if (s === "")
    return ["", 0, void 0];
  const t = e != null && e.parseNodeNameCache != null;
  if (t) {
    const n = e.parseNodeNameCache.get(s);
    if (n != null)
      return n;
  }
  const a = s.split(":");
  let r;
  if (a.length === 1)
    r = [s, 0, void 0];
  else {
    const n = a[0], u = a.length === 3 ? a[1] : void 0, o = Number(a[a.length - 1]);
    r = [n, o, u];
  }
  return t && e.parseNodeNameCache.set(s, r), r;
}
function we(s, e, t) {
  let a = i("pad", s, e, t);
  if (a === "explicit") {
    a = i("explicitPaddings", s, e, t);
    const r = [[0, 0], [0, 0], [0, 0], [0, 0]];
    for (let n = 0; n < 4; n++)
      r[n][0] = a[n * 2], r[n][1] = a[n * 2 + 1];
    return r;
  }
  return a;
}
function H(s) {
  return s.kept ? s : dt(s);
}
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const og = [
  {
    tfOpName: "Add",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "AddV2",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "AddN",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        end: 0,
        name: "tensors",
        type: "tensors"
      }
    ]
  },
  {
    tfOpName: "BiasAdd",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Sub",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "RealDiv",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Div",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "DivNoNan",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "FloorDiv",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Mul",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Maximum",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Minimum",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Pow",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "SquaredDifference",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Mod",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "FloorMod",
    category: "arithmetic",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  }
], ug = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: og
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const lg = [
  {
    tfOpName: "Abs",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Acos",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Asin",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Atan",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Atan2",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "y",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Ceil",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "ClipByValue",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "clipValueMin",
        type: "number"
      },
      {
        start: 2,
        name: "clipValueMax",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Complex",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "real",
        type: "tensor"
      },
      {
        start: 1,
        name: "imag",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "ComplexAbs",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Cos",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Cosh",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Elu",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Exp",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Floor",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Log",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Imag",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "Tout",
        name: "outputType",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Neg",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Real",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "Tout",
        name: "outputType",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Prelu",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "alpha",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Relu",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Relu6",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Selu",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Sigmoid",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Sin",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Sinh",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Sqrt",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Rsqrt",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Square",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Tan",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Tanh",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Sign",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Round",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Expm1",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Log1p",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Reciprocal",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Softplus",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Asinh",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Acosh",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Atanh",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Erf",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LeakyRelu",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "alpha",
        name: "alpha",
        type: "number",
        defaultValue: 0.2
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "IsNan",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "IsFinite",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "IsInf",
    category: "basic_math",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  }
], pg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: lg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const mg = [
  {
    tfOpName: "EmptyTensorList",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "elementShape",
        type: "shape"
      },
      {
        start: 1,
        name: "maxNumElements",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "LoopCond",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "pred",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "Switch",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "data",
        type: "tensor"
      },
      {
        start: 1,
        name: "pred",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "Merge",
    category: "control",
    inputs: [
      {
        start: 0,
        end: 0,
        name: "tensors",
        type: "tensors"
      }
    ]
  },
  {
    tfOpName: "Enter",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensor",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "frame_name",
        name: "frameName",
        type: "string"
      },
      {
        tfName: "is_constant",
        name: "isConstant",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "Exit",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensor",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "NextIteration",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensor",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "TensorArrayV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "size",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      },
      {
        tfName: "element_shape",
        name: "elementShape",
        type: "shape"
      },
      {
        tfName: "dynamic_size",
        name: "dynamicSize",
        type: "bool"
      },
      {
        tfName: "clear_after_read",
        name: "clearAfterRead",
        type: "bool"
      },
      {
        tfName: "identical_element_shapes",
        name: "identicalElementShapes",
        type: "bool"
      },
      {
        tfName: "tensor_array_name",
        name: "name",
        type: "string"
      }
    ]
  },
  {
    tfOpName: "TensorArrayWriteV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorArrayId",
        type: "tensor"
      },
      {
        start: 1,
        name: "index",
        type: "number"
      },
      {
        start: 2,
        name: "tensor",
        type: "tensor"
      },
      {
        start: 3,
        name: "flowIn",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "TensorArrayReadV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorArrayId",
        type: "tensor"
      },
      {
        start: 1,
        name: "index",
        type: "number"
      },
      {
        start: 2,
        name: "flowIn",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "TensorArrayGatherV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorArrayId",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "number[]"
      },
      {
        start: 2,
        name: "flowIn",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      },
      {
        tfName: "element_shape",
        name: "elementShape",
        type: "shape"
      }
    ]
  },
  {
    tfOpName: "TensorArrayScatterV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorArrayId",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "number[]"
      },
      {
        start: 2,
        name: "tensor",
        type: "tensor"
      },
      {
        start: 3,
        name: "flowIn",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorArrayConcatV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorArrayId",
        type: "tensor"
      },
      {
        start: 1,
        name: "flowIn",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      },
      {
        tfName: "element_shape_except0",
        name: "elementShapeExcept0",
        type: "shape",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "TensorArraySplitV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorArrayId",
        type: "tensor"
      },
      {
        start: 1,
        name: "tensor",
        type: "tensor"
      },
      {
        start: 2,
        name: "lengths",
        type: "number[]"
      },
      {
        start: 3,
        name: "flowIn",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorArraySizeV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorArrayId",
        type: "tensor"
      },
      {
        start: 1,
        name: "flowIn",
        type: "number"
      }
    ]
  },
  {
    tfOpName: "TensorArrayCloseV3",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorArrayId",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "StatelessIf",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "cond",
        type: "tensor"
      },
      {
        start: 1,
        end: 0,
        name: "args",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "then_branch",
        name: "thenBranch",
        type: "func"
      },
      {
        tfName: "else_branch",
        name: "elseBranch",
        type: "func"
      }
    ]
  },
  {
    tfOpName: "If",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "cond",
        type: "tensor"
      },
      {
        start: 1,
        end: 0,
        name: "args",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "then_branch",
        name: "thenBranch",
        type: "func"
      },
      {
        tfName: "else_branch",
        name: "elseBranch",
        type: "func"
      }
    ]
  },
  {
    tfOpName: "StatelessWhile",
    category: "control",
    inputs: [
      {
        start: 0,
        end: 0,
        name: "args",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "cond",
        name: "cond",
        type: "func"
      },
      {
        tfName: "body",
        name: "body",
        type: "func"
      }
    ]
  },
  {
    tfOpName: "While",
    category: "control",
    inputs: [
      {
        start: 0,
        end: 0,
        name: "args",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "cond",
        name: "cond",
        type: "func"
      },
      {
        tfName: "body",
        name: "body",
        type: "func"
      }
    ]
  },
  {
    tfOpName: "TensorListScatter",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensor",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "number[]"
      },
      {
        start: 2,
        name: "elementShape",
        type: "shape"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListScatterV2",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensor",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "number[]"
      },
      {
        start: 2,
        name: "elementShape",
        type: "shape"
      },
      {
        start: 3,
        name: "numElements",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListGather",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "number[]"
      },
      {
        start: 2,
        name: "elementShape",
        type: "shape"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListGetItem",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      },
      {
        start: 1,
        name: "index",
        type: "number"
      },
      {
        start: 2,
        name: "elementShape",
        type: "shape"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListSetItem",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      },
      {
        start: 1,
        name: "index",
        type: "number"
      },
      {
        start: 2,
        name: "tensor",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListReserve",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "elementShape",
        type: "shape"
      },
      {
        start: 1,
        name: "numElements",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListFromTensor",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensor",
        type: "tensor"
      },
      {
        start: 1,
        name: "elementShape",
        type: "shape"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListStack",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      },
      {
        start: 1,
        name: "elementShape",
        type: "shape"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      },
      {
        tfName: "num_elements",
        name: "numElements",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListSplit",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensor",
        type: "tensor"
      },
      {
        start: 1,
        name: "elementShape",
        type: "shape"
      },
      {
        start: 2,
        name: "lengths",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListConcat",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "element_shape",
        name: "elementShape",
        type: "shape"
      },
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListConcatV2",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "element_shape",
        name: "elementShape",
        type: "shape"
      },
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListPopBack",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      },
      {
        start: 1,
        name: "elementShape",
        type: "shape"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListPushBack",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      },
      {
        start: 1,
        name: "tensor",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "element_dtype",
        name: "elementDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TensorListLength",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "TensorListResize",
    category: "control",
    inputs: [
      {
        start: 0,
        name: "tensorListId",
        type: "tensor"
      },
      {
        start: 1,
        name: "size",
        type: "number"
      }
    ]
  }
], cg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: mg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const dg = [
  {
    tfOpName: "AvgPool",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      },
      {
        tfName: "ksize",
        name: "kernelSize",
        type: "number[]"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "MaxPool",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      },
      {
        tfName: "ksize",
        name: "kernelSize",
        type: "number[]"
      },
      {
        tfName: "explicit_paddings",
        name: "explicitPaddings",
        type: "number[]",
        defaultValue: [],
        notSupported: !0
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "MaxPoolWithArgmax",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "ksize",
        name: "kernelSize",
        type: "number[]"
      },
      {
        tfName: "include_batch_in_index",
        name: "includeBatchInIndex",
        type: "bool"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "AvgPool3D",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      },
      {
        tfName: "ksize",
        name: "kernelSize",
        type: "number[]"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "MaxPool3D",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      },
      {
        tfName: "ksize",
        name: "kernelSize",
        type: "number[]"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Conv1D",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "stride",
        name: "stride",
        type: "number"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        defaultValue: "NWC"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "dilation",
        name: "dilation",
        type: "number",
        defaultValue: 1
      }
    ]
  },
  {
    tfOpName: "Conv2D",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "useCudnnOnGpu",
        name: "useCudnnOnGpu",
        type: "bool"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        defaultValue: "NHWC"
      },
      {
        tfName: "explicit_paddings",
        name: "explicitPaddings",
        type: "number[]",
        defaultValue: []
      },
      {
        tfName: "dilations",
        name: "dilations",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "_FusedConv2D",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      },
      {
        start: 2,
        end: 0,
        name: "args",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "num_args",
        name: "numArgs",
        type: "number"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "explicit_paddings",
        name: "explicitPaddings",
        type: "number[]",
        defaultValue: []
      },
      {
        tfName: "use_cudnn_on_gpu",
        name: "useCudnnOnGpu",
        type: "bool",
        defaultValue: !0
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        defaultValue: "NHWC"
      },
      {
        tfName: "dilations",
        name: "dilations",
        type: "number[]",
        defaultValue: [
          1,
          1,
          1,
          1
        ]
      },
      {
        tfName: "fused_ops",
        name: "fusedOps",
        type: "string[]",
        defaultValue: []
      },
      {
        tfName: "epsilon",
        name: "epsilon",
        type: "number",
        defaultValue: 1e-4
      },
      {
        tfName: "leakyrelu_alpha",
        name: "leakyreluAlpha",
        type: "number",
        defaultValue: 0.2
      }
    ]
  },
  {
    tfOpName: "Conv2DBackpropInput",
    category: "convolution",
    inputs: [
      {
        start: 2,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      },
      {
        start: 0,
        name: "outputShape",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      },
      {
        tfName: "explicit_paddings",
        name: "explicitPaddings",
        type: "number[]",
        defaultValue: []
      },
      {
        tfName: "dilations",
        name: "dilations",
        type: "number[]",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "DepthwiseConv2d",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "input",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        defaultValue: "NHWC"
      },
      {
        tfName: "explicit_paddings",
        name: "explicitPaddings",
        type: "number[]",
        defaultValue: []
      },
      {
        tfName: "dilations",
        name: "dilations",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "DepthwiseConv2dNative",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "input",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        defaultValue: "NHWC"
      },
      {
        tfName: "explicit_paddings",
        name: "explicitPaddings",
        type: "number[]",
        defaultValue: []
      },
      {
        tfName: "dilations",
        name: "dilations",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "FusedDepthwiseConv2dNative",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      },
      {
        start: 2,
        end: 0,
        name: "args",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "num_args",
        name: "numArgs",
        type: "number"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        defaultValue: "NHWC"
      },
      {
        tfName: "dilations",
        name: "dilations",
        type: "number[]",
        defaultValue: [
          1,
          1,
          1,
          1
        ]
      },
      {
        tfName: "fused_ops",
        name: "fusedOps",
        type: "string[]",
        defaultValue: []
      },
      {
        tfName: "explicit_paddings",
        name: "explicitPaddings",
        type: "number[]",
        defaultValue: []
      }
    ]
  },
  {
    tfOpName: "Conv3D",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        defaultValue: "NHWC"
      },
      {
        tfName: "dilations",
        name: "dilations",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "Dilation2D",
    category: "convolution",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "filter",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "strides",
        name: "strides",
        type: "number[]"
      },
      {
        tfName: "rates",
        name: "dilations",
        type: "number[]"
      },
      {
        tfName: "padding",
        name: "pad",
        type: "string"
      }
    ]
  }
], hg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: dg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const fg = [
  {
    tfOpName: "Fill",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "shape",
        type: "number[]"
      },
      {
        start: 1,
        name: "value",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "LinSpace",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "start",
        type: "number"
      },
      {
        start: 1,
        name: "stop",
        type: "number"
      },
      {
        start: 2,
        name: "num",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "OneHot",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "indices",
        type: "tensor"
      },
      {
        start: 1,
        name: "depth",
        type: "number"
      },
      {
        start: 2,
        name: "onValue",
        type: "number",
        defaultValue: 1
      },
      {
        start: 3,
        name: "offValue",
        type: "number",
        defaultValue: 0
      }
    ],
    attrs: [
      {
        tfName: "axis",
        name: "axis",
        type: "number",
        notSupported: !0
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "Ones",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "shape",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "OnesLike",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "RandomStandardNormal",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "shape",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "seed",
        name: "seed",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "seed2",
        name: "seed2",
        type: "number",
        defaultValue: 0,
        notSupported: !0
      },
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      },
      {
        tfName: "T",
        name: "T",
        type: "number",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "RandomUniform",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "shape",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "minval",
        name: "minval",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "maxval",
        name: "maxval",
        type: "number",
        defaultValue: 1
      },
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      },
      {
        tfName: "seed",
        name: "seed",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "seed2",
        name: "seed2",
        type: "number",
        defaultValue: 0,
        notSupported: !0
      },
      {
        tfName: "T",
        name: "T",
        type: "number",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "RandomUniformInt",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "shape",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "minval",
        name: "minval",
        type: "number"
      },
      {
        tfName: "maxval",
        name: "maxval",
        type: "number"
      },
      {
        tfName: "seed",
        name: "seed",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "seed2",
        name: "seed2",
        type: "number",
        defaultValue: 0,
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Range",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "start",
        type: "number"
      },
      {
        start: 1,
        name: "stop",
        type: "number"
      },
      {
        start: 2,
        name: "step",
        type: "number",
        defaultValue: 0
      }
    ],
    attrs: [
      {
        tfName: "Tidx",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "TruncatedNormal",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "shape",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "means",
        name: "mean",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "stddev",
        name: "stdDev",
        type: "number",
        defaultValue: 1
      },
      {
        tfName: "seed",
        name: "seed",
        type: "number"
      },
      {
        tfName: "seed2",
        name: "seed2",
        type: "number",
        defaultValue: 0,
        notSupported: !0
      },
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      },
      {
        tfName: "T",
        name: "T",
        type: "number",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Zeros",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "shape",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "ZerosLike",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "Multinomial",
    category: "creation",
    inputs: [
      {
        start: 0,
        name: "logits",
        type: "tensor"
      },
      {
        start: 1,
        name: "numSamples",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "seed",
        name: "seed",
        type: "number"
      },
      {
        tfName: "seed2",
        name: "seed2",
        type: "number"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      },
      {
        tfName: "output_dtype",
        name: "output_dtype",
        type: "dtype"
      }
    ]
  }
], yg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: fg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const gg = [
  {
    tfOpName: "NonMaxSuppressionV2",
    category: "dynamic",
    inputs: [
      {
        start: 0,
        name: "boxes",
        type: "tensor"
      },
      {
        start: 1,
        name: "scores",
        type: "tensor"
      },
      {
        start: 2,
        name: "maxOutputSize",
        type: "number"
      },
      {
        start: 3,
        name: "iouThreshold",
        type: "number"
      }
    ]
  },
  {
    tfOpName: "NonMaxSuppressionV3",
    category: "dynamic",
    inputs: [
      {
        start: 0,
        name: "boxes",
        type: "tensor"
      },
      {
        start: 1,
        name: "scores",
        type: "tensor"
      },
      {
        start: 2,
        name: "maxOutputSize",
        type: "number"
      },
      {
        start: 3,
        name: "iouThreshold",
        type: "number"
      },
      {
        start: 4,
        name: "scoreThreshold",
        type: "number"
      }
    ]
  },
  {
    tfOpName: "NonMaxSuppressionV4",
    category: "dynamic",
    inputs: [
      {
        start: 0,
        name: "boxes",
        type: "tensor"
      },
      {
        start: 1,
        name: "scores",
        type: "tensor"
      },
      {
        start: 2,
        name: "maxOutputSize",
        type: "number"
      },
      {
        start: 3,
        name: "iouThreshold",
        type: "number"
      },
      {
        start: 4,
        name: "scoreThreshold",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "T_threshold",
        name: "threshold",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "pad_to_max_output_size",
        name: "padToMaxOutputSize",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "NonMaxSuppressionV5",
    category: "dynamic",
    inputs: [
      {
        start: 0,
        name: "boxes",
        type: "tensor"
      },
      {
        start: 1,
        name: "scores",
        type: "tensor"
      },
      {
        start: 2,
        name: "maxOutputSize",
        type: "number"
      },
      {
        start: 3,
        name: "iouThreshold",
        type: "number"
      },
      {
        start: 4,
        name: "scoreThreshold",
        type: "number"
      },
      {
        start: 5,
        name: "softNmsSigma",
        type: "number"
      }
    ]
  },
  {
    tfOpName: "Where",
    category: "dynamic",
    inputs: [
      {
        start: 0,
        name: "condition",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "ListDiff",
    category: "dynamic",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "y",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  }
], bg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: gg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ng = [
  {
    tfOpName: "LowerBound",
    category: "evaluation",
    inputs: [
      {
        start: 0,
        name: "sortedSequence",
        type: "tensor"
      },
      {
        start: 1,
        name: "values",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "TopKV2",
    category: "evaluation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "k",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "sorted",
        name: "sorted",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "UpperBound",
    category: "evaluation",
    inputs: [
      {
        start: 0,
        name: "sortedSequence",
        type: "tensor"
      },
      {
        start: 1,
        name: "values",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "Unique",
    category: "evaluation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "UniqueV2",
    category: "evaluation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number"
      }
    ]
  }
], wg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Ng
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Tg = [
  {
    tfOpName: "PlaceholderWithDefault",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "default",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "shape",
        name: "shape",
        type: "shape"
      },
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "Placeholder",
    category: "graph",
    attrs: [
      {
        tfName: "shape",
        name: "shape",
        type: "shape"
      },
      {
        tfName: "dtype",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "Const",
    category: "graph"
  },
  {
    tfOpName: "Identity",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "IdentityN",
    category: "graph",
    inputs: [
      {
        start: 0,
        end: 0,
        name: "x",
        type: "tensors"
      }
    ]
  },
  {
    tfOpName: "Snapshot",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "Rank",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "Size",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "Shape",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "ShapeN",
    category: "graph",
    inputs: [
      {
        start: 0,
        end: 0,
        name: "x",
        type: "tensors"
      }
    ]
  },
  {
    tfOpName: "Print",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "data",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "message",
        name: "message",
        type: "string"
      },
      {
        tfName: "first_n",
        name: "firstN",
        type: "number",
        notSupported: !0
      },
      {
        tfName: "summarize",
        name: "summarize",
        type: "number",
        defaultValue: 3
      }
    ]
  },
  {
    tfOpName: "NoOp",
    category: "graph",
    inputs: []
  },
  {
    tfOpName: "StopGradient",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "FakeQuantWithMinMaxVars",
    category: "graph",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "min",
        name: "min",
        type: "number"
      },
      {
        tfName: "max",
        name: "max",
        type: "number"
      }
    ]
  }
], Sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Tg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const vg = [
  {
    tfOpName: "HashTable",
    category: "hash_table",
    inputs: [],
    attrs: [
      {
        tfName: "shared_name",
        name: "sharedName",
        type: "string"
      },
      {
        tfName: "use_node_name_sharing",
        name: "useNodeNameSharing",
        type: "bool"
      },
      {
        tfName: "key_dtype",
        name: "keyDType",
        type: "dtype"
      },
      {
        tfName: "value_dtype",
        name: "valueDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "HashTableV2",
    category: "hash_table",
    inputs: [],
    attrs: [
      {
        tfName: "shared_name",
        name: "sharedName",
        type: "string"
      },
      {
        tfName: "use_node_name_sharing",
        name: "useNodeNameSharing",
        type: "bool"
      },
      {
        tfName: "key_dtype",
        name: "keyDType",
        type: "dtype"
      },
      {
        tfName: "value_dtype",
        name: "valueDType",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "LookupTableImport",
    category: "hash_table",
    inputs: [
      {
        start: 0,
        name: "tableHandle",
        type: "tensor"
      },
      {
        start: 1,
        name: "keys",
        type: "tensor"
      },
      {
        start: 2,
        name: "values",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "Tin",
        name: "tIn",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "Tout",
        name: "tOut",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LookupTableImportV2",
    category: "hash_table",
    inputs: [
      {
        start: 0,
        name: "tableHandle",
        type: "tensor"
      },
      {
        start: 1,
        name: "keys",
        type: "tensor"
      },
      {
        start: 2,
        name: "values",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "Tin",
        name: "tIn",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "Tout",
        name: "tOut",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LookupTableFind",
    category: "hash_table",
    inputs: [
      {
        start: 0,
        name: "tableHandle",
        type: "tensor"
      },
      {
        start: 1,
        name: "keys",
        type: "tensor"
      },
      {
        start: 2,
        name: "defaultValue",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "Tin",
        name: "tIn",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "Tout",
        name: "tOut",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LookupTableFindV2",
    category: "hash_table",
    inputs: [
      {
        start: 0,
        name: "tableHandle",
        type: "tensor"
      },
      {
        start: 1,
        name: "keys",
        type: "tensor"
      },
      {
        start: 2,
        name: "defaultValue",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "Tin",
        name: "tIn",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "Tout",
        name: "tOut",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LookupTableSize",
    category: "hash_table",
    inputs: [
      {
        start: 0,
        name: "tableHandle",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "LookupTableSizeV2",
    category: "hash_table",
    inputs: [
      {
        start: 0,
        name: "tableHandle",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "InitializeTable",
    category: "hash_table",
    inputs: [
      {
        start: 0,
        name: "tableHandle",
        type: "tensor"
      },
      {
        start: 1,
        name: "keys",
        type: "tensor"
      },
      {
        start: 2,
        name: "values",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "InitializeTableV2",
    category: "hash_table",
    inputs: [
      {
        start: 0,
        name: "tableHandle",
        type: "tensor"
      },
      {
        start: 1,
        name: "keys",
        type: "tensor"
      },
      {
        start: 2,
        name: "values",
        type: "tensor"
      }
    ]
  }
], Og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: vg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const _g = [
  {
    tfOpName: "ResizeBilinear",
    category: "image",
    inputs: [
      {
        start: 0,
        name: "images",
        type: "tensor"
      },
      {
        start: 1,
        name: "size",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "align_corners",
        name: "alignCorners",
        type: "bool"
      },
      {
        tfName: "half_pixel_centers",
        name: "halfPixelCenters",
        type: "bool"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "ResizeNearestNeighbor",
    category: "image",
    inputs: [
      {
        start: 0,
        name: "images",
        type: "tensor"
      },
      {
        start: 1,
        name: "size",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "align_corners",
        name: "alignCorners",
        type: "bool"
      },
      {
        tfName: "half_pixel_centers",
        name: "halfPixelCenters",
        type: "bool"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "CropAndResize",
    category: "image",
    inputs: [
      {
        start: 0,
        name: "image",
        type: "tensor"
      },
      {
        start: 1,
        name: "boxes",
        type: "tensor"
      },
      {
        start: 2,
        name: "boxInd",
        type: "tensor"
      },
      {
        start: 3,
        name: "cropSize",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "method",
        name: "method",
        type: "string"
      },
      {
        tfName: "extrapolation_value",
        name: "extrapolationValue",
        type: "number"
      }
    ]
  },
  {
    tfOpName: "ImageProjectiveTransformV3",
    category: "image",
    inputs: [
      {
        start: 0,
        name: "images",
        type: "tensor"
      },
      {
        start: 1,
        name: "transforms",
        type: "tensor"
      },
      {
        start: 2,
        name: "outputShape",
        type: "number[]"
      },
      {
        start: 3,
        name: "fillValue",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "interpolation",
        name: "interpolation",
        type: "string"
      },
      {
        tfName: "fill_mode",
        name: "fillMode",
        type: "string"
      }
    ]
  }
], Ag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: _g
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Eg = [
  {
    tfOpName: "Equal",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "NotEqual",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Greater",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "GreaterEqual",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Less",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LessEqual",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LogicalAnd",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LogicalNot",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LogicalOr",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Select",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "condition",
        type: "tensor"
      },
      {
        start: 1,
        name: "a",
        type: "tensor"
      },
      {
        start: 2,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "SelectV2",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "condition",
        type: "tensor"
      },
      {
        start: 1,
        name: "a",
        type: "tensor"
      },
      {
        start: 2,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "BitwiseAnd",
    category: "logical",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "y",
        type: "tensor"
      }
    ]
  }
], kg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Eg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ig = [
  {
    tfOpName: "_FusedMatMul",
    category: "matrices",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      },
      {
        start: 2,
        end: 0,
        name: "args",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "num_args",
        name: "numArgs",
        type: "number"
      },
      {
        tfName: "fused_ops",
        name: "fusedOps",
        type: "string[]",
        defaultValue: []
      },
      {
        tfName: "epsilon",
        name: "epsilon",
        type: "number",
        defaultValue: 1e-4
      },
      {
        tfName: "transpose_a",
        name: "transposeA",
        type: "bool",
        defaultValue: !1
      },
      {
        tfName: "transpose_b",
        name: "transposeB",
        type: "bool",
        defaultValue: !1
      },
      {
        tfName: "leakyrelu_alpha",
        name: "leakyreluAlpha",
        type: "number",
        defaultValue: 0.2
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "MatMul",
    category: "matrices",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "transpose_a",
        name: "transposeA",
        type: "bool",
        defaultValue: !1
      },
      {
        tfName: "transpose_b",
        name: "transposeB",
        type: "bool",
        defaultValue: !1
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "BatchMatMul",
    category: "matrices",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "adj_x",
        name: "transposeA",
        type: "bool",
        defaultValue: !1
      },
      {
        tfName: "adj_y",
        name: "transposeB",
        type: "bool",
        defaultValue: !1
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "BatchMatMulV2",
    category: "matrices",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "b",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "adj_x",
        name: "transposeA",
        type: "bool",
        defaultValue: !1
      },
      {
        tfName: "adj_y",
        name: "transposeB",
        type: "bool",
        defaultValue: !1
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Transpose",
    category: "matrices",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "perm",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Einsum",
    category: "matrices",
    inputs: [
      {
        start: 0,
        end: 0,
        name: "tensors",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "equation",
        name: "equation",
        type: "string"
      },
      {
        tfName: "N",
        name: "n",
        type: "number",
        defaultValue: 2
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "MatrixBandPart",
    category: "matrices",
    inputs: [
      {
        start: 0,
        name: "a",
        type: "tensor"
      },
      {
        start: 1,
        name: "numLower",
        type: "tensor"
      },
      {
        start: 1,
        name: "numUpper",
        type: "tensor"
      }
    ]
  }
], $g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Ig
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Dg = [
  {
    tfOpName: "EuclideanNorm",
    category: "normalization",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "keep_dims",
        name: "keepDims",
        type: "bool",
        defaultValue: !1
      }
    ]
  },
  {
    tfOpName: "FusedBatchNorm",
    category: "normalization",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "scale",
        type: "tensor"
      },
      {
        start: 2,
        name: "offset",
        type: "tensor"
      },
      {
        start: 3,
        name: "mean",
        type: "tensor"
      },
      {
        start: 4,
        name: "variance",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "epsilon",
        name: "epsilon",
        type: "number",
        defaultValue: 1e-3
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "FusedBatchNormV2",
    category: "normalization",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "scale",
        type: "tensor"
      },
      {
        start: 2,
        name: "offset",
        type: "tensor"
      },
      {
        start: 3,
        name: "mean",
        type: "tensor"
      },
      {
        start: 4,
        name: "variance",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "epsilon",
        name: "epsilon",
        type: "number",
        defaultValue: 1e-3
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "FusedBatchNormV3",
    category: "normalization",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "scale",
        type: "tensor"
      },
      {
        start: 2,
        name: "offset",
        type: "tensor"
      },
      {
        start: 3,
        name: "mean",
        type: "tensor"
      },
      {
        start: 4,
        name: "variance",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "epsilon",
        name: "epsilon",
        type: "number",
        defaultValue: 1e-3
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "LRN",
    category: "normalization",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "depth_radius",
        name: "radius",
        type: "number",
        defaultValue: 5
      },
      {
        tfName: "bias",
        name: "bias",
        type: "number",
        defaultValue: 1
      },
      {
        tfName: "alpha",
        name: "alpha",
        type: "number",
        defaultValue: 1
      },
      {
        tfName: "beta",
        name: "beta",
        type: "number",
        defaultValue: 0.5
      }
    ]
  },
  {
    tfOpName: "Softmax",
    category: "normalization",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "LogSoftmax",
    category: "normalization",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  }
], Cg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Dg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const zg = [
  {
    tfOpName: "Bincount",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "size",
        type: "number"
      },
      {
        start: 2,
        name: "weights",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "DenseBincount",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "size",
        type: "number"
      },
      {
        start: 2,
        name: "weights",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "binary_output",
        name: "binaryOutput",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "Max",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "keep_dims",
        name: "keepDims",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "Mean",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "keep_dims",
        name: "keepDims",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "Min",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "keep_dims",
        name: "keepDims",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "Sum",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "keep_dims",
        name: "keepDims",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "All",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "keep_dims",
        name: "keepDims",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "Any",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "keep_dims",
        name: "keepDims",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "ArgMax",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number"
      }
    ]
  },
  {
    tfOpName: "ArgMin",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number"
      }
    ]
  },
  {
    tfOpName: "Prod",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "keep_dims",
        name: "keepDims",
        type: "bool"
      },
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Cumprod",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "exclusive",
        name: "exclusive",
        type: "bool"
      },
      {
        tfName: "reverse",
        name: "reverse",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "Cumsum",
    category: "reduction",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "exclusive",
        name: "exclusive",
        type: "bool"
      },
      {
        tfName: "reverse",
        name: "reverse",
        type: "bool"
      }
    ]
  }
], xg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: zg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Lg = [
  {
    tfOpName: "ConcatV2",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        end: -1,
        name: "tensors",
        type: "tensors"
      },
      {
        start: -1,
        name: "axis",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "N",
        name: "n",
        type: "number",
        defaultValue: 2
      }
    ]
  },
  {
    tfOpName: "Concat",
    category: "slice_join",
    inputs: [
      {
        start: 1,
        end: 0,
        name: "tensors",
        type: "tensors"
      },
      {
        start: 0,
        name: "axis",
        type: "number"
      }
    ],
    attrs: [
      {
        tfName: "N",
        name: "n",
        type: "number",
        defaultValue: 2
      }
    ]
  },
  {
    tfOpName: "GatherV2",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "tensor"
      },
      {
        start: 2,
        name: "axis",
        type: "number",
        defaultValue: 0
      }
    ],
    attrs: [
      {
        tfName: "batch_dims",
        name: "batchDims",
        type: "number",
        defaultValue: 0
      }
    ]
  },
  {
    tfOpName: "Gather",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "validate_indices",
        name: "validateIndices",
        type: "bool",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Reverse",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "dims",
        type: "bool[]"
      }
    ]
  },
  {
    tfOpName: "ReverseV2",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "Slice",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "begin",
        type: "number[]"
      },
      {
        start: 2,
        name: "size",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "StridedSlice",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "begin",
        type: "number[]"
      },
      {
        start: 2,
        name: "end",
        type: "number[]"
      },
      {
        start: 3,
        name: "strides",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "begin_mask",
        name: "beginMask",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "end_mask",
        name: "endMask",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "new_axis_mask",
        name: "newAxisMask",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "ellipsis_mask",
        name: "ellipsisMask",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "shrink_axis_mask",
        name: "shrinkAxisMask",
        type: "number",
        defaultValue: 0
      }
    ]
  },
  {
    tfOpName: "Pack",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        end: 0,
        name: "tensors",
        type: "tensors"
      }
    ],
    attrs: [
      {
        tfName: "axis",
        name: "axis",
        type: "number",
        defaultValue: 0
      }
    ]
  },
  {
    tfOpName: "Unpack",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "tensor",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "axis",
        name: "axis",
        type: "number",
        defaultValue: 0
      },
      {
        tfName: "num",
        name: "num",
        type: "number",
        defaultValue: 0,
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "Tile",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "reps",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "Split",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "axis",
        type: "number",
        defaultValue: 0
      },
      {
        start: 1,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "num_split",
        name: "numOrSizeSplits",
        type: "number",
        defaultValue: 1
      }
    ]
  },
  {
    tfOpName: "SplitV",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "numOrSizeSplits",
        type: "number[]"
      },
      {
        start: 2,
        name: "axis",
        type: "number",
        defaultValue: 0
      }
    ]
  },
  {
    tfOpName: "ScatterNd",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "indices",
        type: "tensor"
      },
      {
        start: 1,
        name: "values",
        type: "tensor"
      },
      {
        start: 2,
        name: "shape",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "GatherNd",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "SparseToDense",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "sparseIndices",
        type: "tensor"
      },
      {
        start: 1,
        name: "outputShape",
        type: "number[]"
      },
      {
        start: 2,
        name: "sparseValues",
        type: "tensor"
      },
      {
        start: 3,
        name: "defaultValue",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "validate_indices",
        name: "validateIndices",
        type: "bool",
        defaultValue: !1,
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "TensorScatterUpdate",
    category: "slice_join",
    inputs: [
      {
        start: 0,
        name: "tensor",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "tensor"
      },
      {
        start: 2,
        name: "values",
        type: "tensor"
      }
    ]
  }
], Pg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Lg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Fg = [
  {
    tfOpName: "SparseFillEmptyRows",
    category: "sparse",
    inputs: [
      {
        start: 0,
        name: "indices",
        type: "tensor"
      },
      {
        start: 1,
        name: "values",
        type: "tensor"
      },
      {
        start: 2,
        name: "denseShape",
        type: "tensor"
      },
      {
        start: 3,
        name: "defaultValue",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "SparseReshape",
    category: "sparse",
    inputs: [
      {
        start: 0,
        name: "inputIndices",
        type: "tensor"
      },
      {
        start: 1,
        name: "inputShape",
        type: "tensor"
      },
      {
        start: 2,
        name: "newShape",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "T",
        name: "dtype",
        type: "dtype",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "SparseSegmentMean",
    category: "sparse",
    inputs: [
      {
        start: 0,
        name: "data",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "tensor"
      },
      {
        start: 2,
        name: "segmentIds",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "SparseSegmentSum",
    category: "sparse",
    inputs: [
      {
        start: 0,
        name: "data",
        type: "tensor"
      },
      {
        start: 1,
        name: "indices",
        type: "tensor"
      },
      {
        start: 2,
        name: "segmentIds",
        type: "tensor"
      }
    ]
  }
], Vg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Fg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Rg = [
  {
    tfOpName: "FFT",
    category: "spectral",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "IFFT",
    category: "spectral",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ]
  },
  {
    tfOpName: "RFFT",
    category: "spectral",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "fft_length",
        type: "number",
        notSupported: !0
      }
    ]
  },
  {
    tfOpName: "IRFFT",
    category: "spectral",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "fft_length",
        type: "number",
        notSupported: !0
      }
    ]
  }
], jg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Rg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Bg = [
  {
    tfOpName: "StaticRegexReplace",
    category: "string",
    inputs: [
      {
        start: 0,
        name: "input",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "pattern",
        name: "pattern",
        type: "string"
      },
      {
        tfName: "rewrite",
        name: "rewrite",
        type: "string"
      },
      {
        tfName: "replace_global",
        name: "replaceGlobal",
        type: "bool"
      }
    ]
  },
  {
    tfOpName: "StringNGrams",
    category: "string",
    inputs: [
      {
        start: 0,
        name: "data",
        type: "tensor"
      },
      {
        start: 1,
        name: "dataSplits",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "separator",
        name: "separator",
        type: "string"
      },
      {
        tfName: "ngram_widths",
        name: "nGramWidths",
        type: "number[]"
      },
      {
        tfName: "left_pad",
        name: "leftPad",
        type: "string"
      },
      {
        tfName: "right_pad",
        name: "rightPad",
        type: "string"
      },
      {
        tfName: "pad_width",
        name: "padWidth",
        type: "number"
      },
      {
        tfName: "preserve_short_sequences",
        name: "preserveShortSequences",
        type: "bool"
      }
    ],
    outputs: [
      "ngrams",
      "ngrams_splits"
    ]
  },
  {
    tfOpName: "StringSplit",
    category: "string",
    inputs: [
      {
        start: 0,
        name: "input",
        type: "tensor"
      },
      {
        start: 1,
        name: "delimiter",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "skip_empty",
        name: "skipEmpty",
        type: "bool"
      }
    ],
    outputs: [
      "indices",
      "values",
      "shape"
    ]
  },
  {
    tfOpName: "StringToHashBucketFast",
    category: "string",
    inputs: [
      {
        start: 0,
        name: "input",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "num_buckets",
        name: "numBuckets",
        type: "number"
      }
    ]
  }
], Hg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Bg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Wg = [
  {
    tfOpName: "Cast",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "SrcT",
        name: "sdtype",
        type: "dtype",
        notSupported: !0
      },
      {
        tfName: "DstT",
        name: "dtype",
        type: "dtype"
      }
    ]
  },
  {
    tfOpName: "ExpandDims",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "axis",
        type: "number"
      }
    ]
  },
  {
    tfOpName: "MirrorPad",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "padding",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "mode",
        name: "mode",
        type: "string"
      }
    ]
  },
  {
    tfOpName: "Pad",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "padding",
        type: "number[]"
      }
    ],
    attrs: [
      {
        tfName: "constant_value",
        name: "constantValue",
        type: "number",
        defaultValue: 0
      }
    ]
  },
  {
    tfOpName: "PadV2",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "padding",
        type: "number[]"
      },
      {
        start: 2,
        name: "constantValue",
        type: "number",
        defaultValue: 0
      }
    ]
  },
  {
    tfOpName: "Reshape",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "shape",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "EnsureShape",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "shape",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "Squeeze",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "axis",
        tfDeprecatedName: "squeeze_dims",
        name: "axis",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "SpaceToBatchND",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "blockShape",
        type: "number[]"
      },
      {
        start: 2,
        name: "paddings",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "BatchToSpaceND",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "blockShape",
        type: "number[]"
      },
      {
        start: 2,
        name: "crops",
        type: "number[]"
      }
    ]
  },
  {
    tfOpName: "DepthToSpace",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      }
    ],
    attrs: [
      {
        tfName: "block_size",
        name: "blockSize",
        type: "number"
      },
      {
        tfName: "data_format",
        name: "dataFormat",
        type: "string"
      }
    ]
  },
  {
    tfOpName: "BroadcastTo",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "x",
        type: "tensor"
      },
      {
        start: 1,
        name: "shape",
        type: "number[]"
      }
    ],
    attrs: []
  },
  {
    tfOpName: "BroadcastArgs",
    category: "transformation",
    inputs: [
      {
        start: 0,
        name: "s0",
        type: "tensor"
      },
      {
        start: 1,
        name: "s1",
        type: "tensor"
      }
    ],
    attrs: []
  }
], Ug = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  json: Wg
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class jt {
  // Singleton instance for the mapper
  static get Instance() {
    return this._instance || (this._instance = new this());
  }
  // Loads the op mapping from the JSON file.
  constructor() {
    const e = [
      ug,
      pg,
      cg,
      hg,
      yg,
      bg,
      wg,
      Sg,
      Og,
      Ag,
      kg,
      $g,
      Cg,
      xg,
      Pg,
      Vg,
      jg,
      Hg,
      Ug
    ], t = [].concat(...e.map((a) => a.json));
    this.opMappers = t.reduce((a, r) => (a[r.tfOpName] = r, a), {});
  }
  // Converts the model inference graph from Tensorflow GraphDef to local
  // representation for TensorFlow.js API
  transformGraph(e, t = {}) {
    const a = e.node, r = [], n = [], u = [], o = a.reduce((g, f) => (g[f.name] = this.mapNode(f), f.op.startsWith("Placeholder") ? r.push(g[f.name]) : f.op === "Const" ? n.push(g[f.name]) : (f.input == null || f.input.length === 0) && u.push(g[f.name]), g), {});
    let l = [];
    const p = [];
    let m = {}, c = {};
    t != null && (m = this.mapSignatureEntries(t.inputs), c = this.mapSignatureEntries(t.outputs));
    const d = Object.keys(o);
    d.forEach((g) => {
      const f = o[g];
      f.inputNames.forEach((b, O) => {
        const [_, , T] = B(b), I = o[_];
        if (I.outputs != null) {
          const D = I.outputs.indexOf(T);
          if (D !== -1) {
            const C = `${_}:${D}`;
            f.inputNames[O] = C;
          }
        }
        f.inputs.push(I), I.children.push(f);
      });
    }), Object.keys(c).length === 0 ? d.forEach((g) => {
      const f = o[g];
      f.children.length === 0 && p.push(f);
    }) : Object.keys(c).forEach((g) => {
      const [f] = B(g), b = o[f];
      b != null && (b.signatureKey = c[g], p.push(b));
    }), Object.keys(m).length > 0 ? Object.keys(m).forEach((g) => {
      const [f] = B(g), b = o[f];
      b && (b.signatureKey = m[g], l.push(b));
    }) : l = r;
    let h = {};
    e.library != null && e.library.function != null && (h = e.library.function.reduce((g, f) => (g[f.signature.name] = this.mapFunction(f), g), {}));
    const N = { nodes: o, inputs: l, outputs: p, weights: n, placeholders: r, signature: t, functions: h };
    return u.length > 0 && (N.initNodes = u), N;
  }
  mapSignatureEntries(e) {
    return Object.keys(e || {}).reduce((t, a) => (t[e[a].name] = a, t), {});
  }
  mapNode(e) {
    const t = ri(e.op) || this.opMappers[e.op] || {};
    e.attr == null && (e.attr = {});
    const a = {
      name: e.name,
      op: e.op,
      category: t.category,
      inputNames: (e.input || []).map((r) => r.startsWith("^") ? r.slice(1) : r),
      inputs: [],
      children: [],
      inputParams: {},
      attrParams: {},
      rawAttrs: e.attr,
      outputs: t.outputs
    };
    return t.inputs != null && (a.inputParams = t.inputs.reduce((r, n) => (r[n.name] = {
      type: n.type,
      inputIndexStart: n.start,
      inputIndexEnd: n.end
    }, r), {})), t.attrs != null && (a.attrParams = t.attrs.reduce((r, n) => {
      const u = n.type;
      let o;
      switch (n.type) {
        case "string":
          o = Be(e.attr, n.tfName, n.defaultValue), o === void 0 && n.tfDeprecatedName && (o = Be(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "string[]":
          o = Je(e.attr, n.tfName, n.defaultValue), o === void 0 && n.tfDeprecatedName && (o = Je(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "number":
          o = We(e.attr, n.tfName, n.defaultValue || 0), o === void 0 && n.tfDeprecatedName && (o = We(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "number[]":
          o = Ke(e.attr, n.tfName, n.defaultValue), o === void 0 && n.tfDeprecatedName && (o = Ke(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "bool":
          o = He(e.attr, n.tfName, n.defaultValue), o === void 0 && n.tfDeprecatedName && (o = He(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "bool[]":
          o = Xe(e.attr, n.tfName, n.defaultValue), o === void 0 && n.tfDeprecatedName && (o = Xe(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "shape":
          o = Ge(e.attr, n.tfName, n.defaultValue), o === void 0 && n.tfDeprecatedName && (o = Ge(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "shape[]":
          o = Qe(e.attr, n.tfName, n.defaultValue), o === void 0 && n.tfDeprecatedName && (o = Qe(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "dtype":
          o = Ue(e.attr, n.tfName, n.defaultValue), o === void 0 && n.tfDeprecatedName && (o = Ue(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "dtype[]":
          o = qe(e.attr, n.tfName, n.defaultValue), o === void 0 && n.tfDeprecatedName && (o = qe(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "func":
          o = Bt(e.attr, n.tfName, n.defaultValue), o === void 0 && n.tfDeprecatedName && (o = Bt(e.attr, n.tfDeprecatedName, n.defaultValue));
          break;
        case "tensor":
        case "tensors":
          break;
        default:
          throw new Error(`Unsupported param type: ${n.type} for op: ${e.op}`);
      }
      return r[n.name] = { value: o, type: u }, r;
    }, {})), a;
  }
  // map the TFunctionDef to TFJS graph object
  mapFunction(e) {
    const t = e.nodeDef, a = [], r = [];
    let n = {};
    t != null && (n = t.reduce((c, d) => (c[d.name] = this.mapNode(d), d.op === "Const" && r.push(c[d.name]), c), {}));
    const u = [], o = [];
    e.signature.inputArg.forEach((c) => {
      const [d] = B(c.name), h = {
        name: d,
        op: "Placeholder",
        inputs: [],
        inputNames: [],
        category: "graph",
        inputParams: {},
        attrParams: { dtype: { value: At(c.type), type: "dtype" } },
        children: []
      };
      h.signatureKey = c.name, u.push(h), n[d] = h;
    }), Object.keys(n).forEach((c) => {
      const d = n[c];
      d.inputNames.forEach((h, N) => {
        const [g, , f] = B(h), b = n[g];
        if (b.outputs != null) {
          const O = b.outputs.indexOf(f);
          if (O !== -1) {
            const _ = `${g}:${O}`;
            d.inputNames[N] = _;
          }
        }
        d.inputs.push(b), b.children.push(d);
      });
    });
    const p = e.ret;
    e.signature.outputArg.forEach((c) => {
      const [d, h] = B(p[c.name]), N = n[d];
      N != null && (N.defaultOutput = h, o.push(N));
    });
    const m = this.mapArgsToSignature(e);
    return { nodes: n, inputs: u, outputs: o, weights: r, placeholders: a, signature: m };
  }
  mapArgsToSignature(e) {
    return {
      methodName: e.signature.name,
      inputs: e.signature.inputArg.reduce((t, a) => (t[a.name] = this.mapArgToTensorInfo(a), t), {}),
      outputs: e.signature.outputArg.reduce((t, a) => (t[a.name] = this.mapArgToTensorInfo(a, e.ret), t), {})
    };
  }
  mapArgToTensorInfo(e, t) {
    let a = e.name;
    return t != null && (a = t[a]), { name: a, dtype: e.type };
  }
}
function qg(s) {
  const e = P().global;
  if (typeof e.atob < "u")
    return e.atob(s);
  if (typeof Buffer < "u")
    return new Buffer(s, "base64").toString();
  throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()");
}
function ni(s, e) {
  const t = Array.isArray(s) ? String.fromCharCode.apply(null, s) : qg(s);
  return e ? t : t.toLowerCase();
}
function Be(s, e, t, a = !1) {
  const r = s[e];
  return r != null ? ni(r.s, a) : t;
}
function He(s, e, t) {
  const a = s[e];
  return a ? a.b : t;
}
function We(s, e, t) {
  const a = s[e] || {}, r = a.i != null ? a.i : a.f != null ? a.f : t;
  return typeof r == "number" ? r : parseInt(r, 10);
}
function At(s) {
  switch (typeof s == "string" && (s = z[s]), s) {
    case z.DT_FLOAT:
    case z.DT_HALF:
      return "float32";
    case z.DT_INT32:
    case z.DT_INT64:
    case z.DT_INT8:
    case z.DT_UINT8:
      return "int32";
    case z.DT_BOOL:
      return "bool";
    case z.DT_DOUBLE:
      return "float32";
    case z.DT_STRING:
      return "string";
    case z.DT_COMPLEX64:
    case z.DT_COMPLEX128:
      return "complex64";
    default:
      return null;
  }
}
function Bt(s, e, t) {
  const a = s[e];
  return a && a.func ? a.func.name : t;
}
function Ue(s, e, t) {
  const a = s[e];
  return a && a.type ? At(a.type) : t;
}
function qe(s, e, t) {
  const a = s[e];
  return a && a.list && a.list.type ? a.list.type.map((r) => At(r)) : t;
}
function ii(s) {
  if (!s.unknownRank)
    return s.dim != null ? s.dim.map((e) => typeof e.size == "number" ? e.size : parseInt(e.size, 10)) : [];
}
function Ge(s, e, t) {
  const a = s[e];
  return a && a.shape ? ii(a.shape) : t;
}
function Ke(s, e, t) {
  const a = s[e];
  return a ? ((a.list.f && a.list.f.length ? a.list.f : a.list.i) || []).map((r) => typeof r == "number" ? r : parseInt(r, 10)) : t;
}
function Je(s, e, t, a = !1) {
  const r = s[e];
  return r && r.list && r.list.s ? r.list.s.map((n) => ni(n, a)) : t;
}
function Qe(s, e, t) {
  const a = s[e];
  return a && a.list && a.list.shape ? a.list.shape.map((r) => ii(r)) : t;
}
function Xe(s, e, t) {
  const a = s[e];
  return a && a.list && a.list.b ? a.list.b : t;
}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Gg {
  constructor(e, t, a) {
    this.node = e, this.tensorMap = t, this.context = a, this.inputs = [], this.attrs = {}, this.inputs = e.inputNames.map((r) => this.getInput(r)), e.rawAttrs != null && (this.attrs = Object.keys(e.rawAttrs).reduce((r, n) => (r[n] = this.getAttr(n), r), {}));
  }
  /**
   * Return the value of the attribute or input param.
   * @param name String: name of attribute or input param.
   */
  getInput(e) {
    return E(e, this.tensorMap, this.context);
  }
  /**
   * Return the value of the attribute or input param.
   * @param name String: name of attribute or input param.
   */
  getAttr(e, t) {
    const a = this.node.rawAttrs[e];
    if (a.tensor != null)
      return E(e, this.tensorMap, this.context);
    if (a.i != null || a.f != null)
      return We(this.node.rawAttrs, e, t);
    if (a.s != null)
      return Be(this.node.rawAttrs, e, t);
    if (a.b != null)
      return He(this.node.rawAttrs, e, t);
    if (a.shape != null)
      return Ge(this.node.rawAttrs, e, t);
    if (a.type != null)
      return Ue(this.node.rawAttrs, e, t);
    if (a.list != null) {
      if (a.list.i != null || a.list.f != null)
        return Ke(this.node.rawAttrs, e, t);
      if (a.list.s != null)
        return Je(this.node.rawAttrs, e, t);
      if (a.list.shape != null)
        return Qe(this.node.rawAttrs, e, t);
      if (a.list.b != null)
        return Xe(this.node.rawAttrs, e, t);
      if (a.list.type != null)
        return qe(this.node.rawAttrs, e, t);
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  OP_SCOPE_SUFFIX: Ts,
  abs: Ss,
  acos: vs,
  acosh: Os,
  add: K,
  addN: nn,
  all: _s,
  any: As,
  argMax: Es,
  argMin: ks,
  asin: Is,
  asinh: $s,
  atan: Ds,
  atan2: Cs,
  atanh: zs,
  avgPool: xs,
  avgPool3d: Ls,
  basicLSTMCell: on,
  batchNorm: Ps,
  batchNorm2d: Fs,
  batchNorm3d: Vs,
  batchNorm4d: Rs,
  batchToSpaceND: js,
  bincount: Bs,
  bitwiseAnd: un,
  booleanMaskAsync: Hn,
  broadcastArgs: ln,
  broadcastTo: Hs,
  buffer: Ye,
  cast: ee,
  ceil: Ws,
  clipByValue: Us,
  clone: dt,
  complex: qs,
  concat: de,
  concat1d: Gs,
  concat2d: Ks,
  concat3d: Js,
  concat4d: Qs,
  conv1d: Xs,
  conv2d: Zs,
  conv2dTranspose: Ys,
  conv3d: Ms,
  conv3dTranspose: ea,
  cos: ta,
  cosh: sa,
  cosineWindow: aa,
  cumprod: ra,
  cumsum: na,
  denseBincount: ia,
  depthToSpace: oa,
  depthwiseConv2d: ot,
  diag: pn,
  dilation2d: ua,
  div: nt,
  divNoNan: la,
  dot: pa,
  dropout: ma,
  einsum: ca,
  elu: da,
  enclosingPowerOfTwo: ha,
  ensureShape: mn,
  equal: fa,
  erf: ya,
  euclideanNorm: ga,
  exp: ba,
  expandDims: ht,
  expm1: Na,
  eye: wa,
  fft: Ta,
  fill: Sa,
  floor: va,
  floorDiv: Oa,
  fused: Jn,
  gather: rt,
  gatherND: Gn,
  greater: _a,
  greaterEqual: Aa,
  ifft: Ea,
  imag: ka,
  image: ft,
  inTopKAsync: Kn,
  irfft: Ia,
  isFinite: $a,
  isInf: Da,
  isNaN: Ca,
  leakyRelu: za,
  less: xa,
  lessEqual: La,
  linalg: Pa,
  linspace: cn,
  localResponseNormalization: Fa,
  log: Va,
  log1p: Ra,
  logSigmoid: ja,
  logSoftmax: Ba,
  logSumExp: Ha,
  logicalAnd: Wa,
  logicalNot: Ua,
  logicalOr: qa,
  logicalXor: Ga,
  losses: Ka,
  lowerBound: dn,
  matMul: W,
  max: Ja,
  maxPool: Qa,
  maxPool3d: Xa,
  maxPoolWithArgmax: hn,
  maximum: Za,
  mean: Ya,
  meshgrid: fn,
  min: Ma,
  minimum: er,
  mirrorPad: tr,
  mod: sr,
  moments: ar,
  movingAverage: Wn,
  mul: M,
  multiRNNCell: yn,
  multinomial: gn,
  neg: rr,
  norm: nr,
  notEqual: ir,
  oneHot: Oe,
  ones: Y,
  onesLike: or,
  op: S,
  outerProduct: bn,
  pad: ae,
  pad1d: Nn,
  pad2d: wn,
  pad3d: Tn,
  pad4d: Sn,
  pool: ur,
  pow: it,
  prelu: lr,
  print: pr,
  prod: mr,
  raggedGather: vn,
  raggedRange: On,
  raggedTensorToTensor: _n,
  rand: An,
  randomGamma: In,
  randomNormal: Me,
  randomStandardNormal: $n,
  randomUniform: et,
  randomUniformInt: Dn,
  range: cr,
  real: dr,
  reciprocal: hr,
  relu: fr,
  relu6: yr,
  reshape: v,
  reverse: re,
  reverse1d: Cn,
  reverse2d: zn,
  reverse3d: xn,
  reverse4d: Ln,
  rfft: gr,
  round: br,
  rsqrt: Nr,
  scalar: R,
  scatterND: Un,
  searchSorted: Ce,
  selu: wr,
  separableConv2d: Tr,
  setdiff1dAsync: Pn,
  sigmoid: ue,
  sign: Sr,
  signal: vr,
  sin: Or,
  sinh: _r,
  slice: U,
  slice1d: Ar,
  slice2d: Er,
  slice3d: kr,
  slice4d: Ir,
  softmax: $r,
  softplus: Dr,
  spaceToBatchND: Cr,
  sparse: zr,
  sparseToDense: qn,
  spectral: xr,
  split: Lr,
  sqrt: Pr,
  square: Fr,
  squaredDifference: Vr,
  squeeze: at,
  stack: se,
  step: Rr,
  stridedSlice: jr,
  string: Br,
  sub: le,
  sum: Hr,
  tan: Wr,
  tanh: ve,
  tensor: q,
  tensor1d: yt,
  tensor2d: _e,
  tensor3d: Ur,
  tensor4d: Fn,
  tensor5d: Vn,
  tensor6d: Rn,
  tensorScatterUpdate: jn,
  tile: qr,
  topk: Gr,
  transpose: ut,
  truncatedNormal: Kr,
  unique: Jr,
  unsortedSegmentSum: Qr,
  unstack: ne,
  upperBound: Bn,
  variable: Xr,
  where: Zr,
  whereAsync: wt,
  zeros: Yr,
  zerosLike: Mr
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Kg = (s, e, t, a = k) => {
  switch (s.op) {
    case "BiasAdd":
    case "AddV2":
    case "Add":
      return [a.add(i("a", s, e, t), i("b", s, e, t))];
    case "AddN":
      return [a.addN(i("tensors", s, e, t))];
    case "FloorMod":
    case "Mod":
      return [a.mod(i("a", s, e, t), i("b", s, e, t))];
    case "Mul":
      return [a.mul(i("a", s, e, t), i("b", s, e, t))];
    case "RealDiv":
    case "Div":
      return [a.div(i("a", s, e, t), i("b", s, e, t))];
    case "DivNoNan":
      return [a.divNoNan(i("a", s, e, t), i("b", s, e, t))];
    case "FloorDiv":
      return [a.floorDiv(i("a", s, e, t), i("b", s, e, t))];
    case "Sub":
      return [a.sub(i("a", s, e, t), i("b", s, e, t))];
    case "Minimum":
      return [a.minimum(i("a", s, e, t), i("b", s, e, t))];
    case "Maximum":
      return [a.maximum(i("a", s, e, t), i("b", s, e, t))];
    case "Pow":
      return [a.pow(i("a", s, e, t), i("b", s, e, t))];
    case "SquaredDifference":
      return [a.squaredDifference(i("a", s, e, t), i("b", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Jg = (s, e, t, a = k) => {
  switch (s.op) {
    case "Abs":
    case "ComplexAbs":
      return [a.abs(i("x", s, e, t))];
    case "Acos":
      return [a.acos(i("x", s, e, t))];
    case "Acosh":
      return [a.acosh(i("x", s, e, t))];
    case "Asin":
      return [a.asin(i("x", s, e, t))];
    case "Asinh":
      return [a.asinh(i("x", s, e, t))];
    case "Atan":
      return [a.atan(i("x", s, e, t))];
    case "Atan2":
      return [a.atan2(i("x", s, e, t), i("y", s, e, t))];
    case "Atanh":
      return [a.atanh(i("x", s, e, t))];
    case "Ceil":
      return [a.ceil(i("x", s, e, t))];
    case "Complex":
      return [a.complex(i("real", s, e, t), i("imag", s, e, t))];
    case "Cos":
      return [a.cos(i("x", s, e, t))];
    case "Cosh":
      return [a.cosh(i("x", s, e, t))];
    case "Elu":
      return [a.elu(i("x", s, e, t))];
    case "Erf":
      return [a.erf(i("x", s, e, t))];
    case "Exp":
      return [a.exp(i("x", s, e, t))];
    case "Expm1":
      return [a.expm1(i("x", s, e, t))];
    case "Floor":
      return [a.floor(i("x", s, e, t))];
    case "Log":
      return [a.log(i("x", s, e, t))];
    case "Log1p":
      return [a.log1p(i("x", s, e, t))];
    case "Imag":
      return [a.imag(i("x", s, e, t))];
    case "Neg":
      return [a.neg(i("x", s, e, t))];
    case "Reciprocal":
      return [a.reciprocal(i("x", s, e, t))];
    case "Real":
      return [a.real(i("x", s, e, t))];
    case "Relu":
      return [a.relu(i("x", s, e, t))];
    case "Round":
      return [a.round(i("x", s, e, t))];
    case "Selu":
      return [a.selu(i("x", s, e, t))];
    case "Sigmoid":
      return [a.sigmoid(i("x", s, e, t))];
    case "Sin":
      return [a.sin(i("x", s, e, t))];
    case "Sign":
      return [a.sign(i("x", s, e, t))];
    case "Sinh":
      return [a.sinh(i("x", s, e, t))];
    case "Softplus":
      return [a.softplus(i("x", s, e, t))];
    case "Sqrt":
      return [a.sqrt(i("x", s, e, t))];
    case "Square":
      return [a.square(i("x", s, e, t))];
    case "Tanh":
      return [a.tanh(i("x", s, e, t))];
    case "Tan":
      return [a.tan(i("x", s, e, t))];
    case "ClipByValue":
      return [a.clipByValue(i("x", s, e, t), i("clipValueMin", s, e, t), i("clipValueMax", s, e, t))];
    case "Relu6":
      return [a.relu6(i("x", s, e, t))];
    case "Rsqrt":
      return [a.rsqrt(E(s.inputNames[0], e, t))];
    case "LeakyRelu":
      return [a.leakyRelu(i("x", s, e, t), i("alpha", s, e, t))];
    case "Prelu":
      return [a.prelu(i("x", s, e, t), i("alpha", s, e, t))];
    case "IsNan":
      return [a.isNaN(E(s.inputNames[0], e, t))];
    case "IsInf":
      return [a.isInf(E(s.inputNames[0], e, t))];
    case "IsFinite":
      return [a.isFinite(E(s.inputNames[0], e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function x(s, e, t = "") {
  if (!(typeof s == "number" || typeof e == "number")) {
    w(s.length === e.length, () => t + ` Shapes ${s} and ${e} must match`);
    for (let a = 0; a < s.length; a++) {
      const r = s[a], n = e[a];
      w(r < 0 || n < 0 || r === n, () => t + ` Shapes ${s} and ${e} must match`);
    }
  }
}
function Ht(s) {
  return !(typeof s == "number" || s.some((e) => e < 0));
}
function ie(s, e, t) {
  let a = Ze(s, t);
  const r = !Ht(a);
  if (r && e.length === 0)
    throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${a}`);
  if (r && e.forEach((n) => {
    a = Ze(n.shape, a);
  }), !Ht(a))
    throw new Error(`Non-fully-defined elementShape: ${a}`);
  return a;
}
function Ze(s, e) {
  if (typeof s == "number")
    return e;
  if (typeof e == "number")
    return s;
  if (s.length !== e.length)
    throw new Error(`Incompatible ranks during merge: ${s} vs. ${e}`);
  const t = [];
  for (let a = 0; a < s.length; ++a) {
    const r = s[a], n = e[a];
    if (r >= 0 && n >= 0 && r !== n)
      throw new Error(`Incompatible shape during merge: ${s} vs. ${e}`);
    t[a] = r >= 0 ? r : n;
  }
  return t;
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Qg {
  constructor(e, t, a, r, n, u, o) {
    this.name = e, this.dtype = t, this.maxSize = a, this.elementShape = r, this.identicalElementShapes = n, this.dynamicSize = u, this.clearAfterRead = o, this.tensors = [], this.closed_ = !1, this.idTensor = R(0), V(this.idTensor);
  }
  get id() {
    return this.idTensor.id;
  }
  get closed() {
    return this.closed_;
  }
  /**
   * Dispose the tensors and idTensor and mark the TensoryArray as closed.
   */
  clearAndClose(e) {
    this.tensors.forEach((t) => {
      (e == null || !e.has(t.tensor.id)) && t.tensor.dispose();
    }), this.tensors = [], this.closed_ = !0, this.idTensor.dispose();
  }
  size() {
    return this.tensors.length;
  }
  /**
   * Read the value at location index in the TensorArray.
   * @param index Number the index to read from.
   */
  read(e) {
    if (this.closed_)
      throw new Error(`TensorArray ${this.name} has already been closed.`);
    if (e < 0 || e >= this.size())
      throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);
    const t = this.tensors[e];
    if (t.cleared)
      throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);
    return this.clearAfterRead && (t.cleared = !0), t.read = !0, t.tensor;
  }
  /**
   * Helper method to read multiple tensors from the specified indices.
   */
  readMany(e) {
    return e.map((t) => this.read(t));
  }
  /**
   * Write value into the index of the TensorArray.
   * @param index number the index to write to.
   * @param tensor
   */
  write(e, t) {
    if (this.closed_)
      throw new Error(`TensorArray ${this.name} has already been closed.`);
    if (e < 0 || !this.dynamicSize && e >= this.maxSize)
      throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);
    const a = this.tensors[e] || {};
    if (t.dtype !== this.dtype)
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);
    if (this.size() === 0 && (this.elementShape == null || this.elementShape.length === 0) && (this.elementShape = t.shape), x(this.elementShape, t.shape, `TensorArray ${this.name}: Could not write to TensorArray index ${e}.`), a.read)
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);
    if (a.written)
      throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);
    a.tensor = t, V(t), a.written = !0, this.tensors[e] = a;
  }
  /**
   * Helper method to write multiple tensors to the specified indices.
   */
  writeMany(e, t) {
    if (e.length !== t.length)
      throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);
    e.forEach((a, r) => this.write(a, t[r]));
  }
  /**
   * Return selected values in the TensorArray as a packed Tensor. All of
   * selected values must have been written and their shapes must all match.
   * @param [indices] number[] Optional. Taking values in [0, max_value). If the
   *    TensorArray is not dynamic, max_value=size(). If not specified returns
   *    all tensors in the original order.
   * @param [dtype]
   */
  gather(e, t) {
    if (t && t !== this.dtype)
      throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);
    if (e)
      e = e.slice(0, this.size());
    else {
      e = [];
      for (let r = 0; r < this.size(); r++)
        e.push(r);
    }
    if (e.length === 0)
      return q([], [0].concat(this.elementShape));
    const a = this.readMany(e);
    return x(this.elementShape, a[0].shape, "TensorArray shape mismatch: "), se(a, 0);
  }
  /**
   * Return the values in the TensorArray as a concatenated Tensor.
   */
  concat(e) {
    if (e && e !== this.dtype)
      throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);
    if (this.size() === 0)
      return q([], [0].concat(this.elementShape));
    const t = [];
    for (let r = 0; r < this.size(); r++)
      t.push(r);
    const a = this.readMany(t);
    return x(this.elementShape, a[0].shape, `TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${a[0].shape})`), de(a, 0);
  }
  /**
   * Scatter the values of a Tensor in specific indices of a TensorArray.
   * @param indices nummber[] values in [0, max_value). If the
   *    TensorArray is not dynamic, max_value=size().
   * @param tensor Tensor input tensor.
   */
  scatter(e, t) {
    if (t.dtype !== this.dtype)
      throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);
    if (e.length !== t.shape[0])
      throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);
    const a = Math.max(...e);
    if (!this.dynamicSize && a >= this.maxSize)
      throw new Error(`Max index must be < array size (${a}  vs. ${this.maxSize})`);
    this.writeMany(e, ne(t, 0));
  }
  /**
   * Split the values of a Tensor into the TensorArray.
   * @param length number[] with the lengths to use when splitting value along
   *    its first dimension.
   * @param tensor Tensor, the tensor to split.
   */
  split(e, t) {
    if (t.dtype !== this.dtype)
      throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);
    let a = 0;
    const r = e.map((l) => (a += l, a));
    if (a !== t.shape[0])
      throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${a}, and tensor's shape is: ${t.shape}`);
    if (!this.dynamicSize && e.length !== this.maxSize)
      throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);
    const n = a === 0 ? 0 : t.size / a, u = [];
    L(() => {
      t = v(t, [1, a, n]);
      for (let l = 0; l < e.length; ++l) {
        const m = [0, l === 0 ? 0 : r[l - 1], 0], c = [1, e[l], n];
        u[l] = v(U(t, m, c), this.elementShape);
      }
      return u;
    });
    const o = [];
    for (let l = 0; l < e.length; l++)
      o[l] = l;
    this.writeMany(o, u);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Q {
  get id() {
    return this.idTensor.id;
  }
  /**
   *
   * @param tensors list of tensors
   * @param elementShape shape of each tensor, this can be a single number (any
   * shape is allowed) or partial shape (dim = -1).
   * @param elementDtype data type of each tensor
   * @param maxNumElements The maximum allowed size of `tensors`. Defaults to -1
   *   meaning that the size of `tensors` is unbounded.
   */
  constructor(e, t, a, r = -1) {
    this.tensors = e, this.elementShape = t, this.elementDtype = a, e != null && e.forEach((n) => {
      if (a !== n.dtype)
        throw new Error(`Invalid data types; op elements ${a}, but list elements ${n.dtype}`);
      x(t, n.shape, "TensorList shape mismatch: "), V(n);
    }), this.idTensor = R(0), this.maxNumElements = r, V(this.idTensor);
  }
  /**
   * Get a new TensorList containing a copy of the underlying tensor container.
   */
  copy() {
    return new Q([...this.tensors], this.elementShape, this.elementDtype);
  }
  /**
   * Dispose the tensors and idTensor and clear the tensor list.
   */
  clearAndClose(e) {
    this.tensors.forEach((t) => {
      (e == null || !e.has(t.id)) && t.dispose();
    }), this.tensors.length = 0, this.idTensor.dispose();
  }
  /**
   * The size of the tensors in the tensor list.
   */
  size() {
    return this.tensors.length;
  }
  /**
   * Return a tensor that stacks a list of rank-R tf.Tensors into one rank-(R+1)
   * tf.Tensor.
   * @param elementShape shape of each tensor
   * @param elementDtype data type of each tensor
   * @param numElements the number of elements to stack
   */
  stack(e, t, a = -1) {
    if (t !== this.elementDtype)
      throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);
    if (a !== -1 && this.tensors.length !== a)
      throw new Error(`Operation expected a list with ${a} elements but got a list with ${this.tensors.length} elements.`);
    x(e, this.elementShape, "TensorList shape mismatch: ");
    const r = ie(this.elementShape, this.tensors, e);
    return L(() => {
      const n = this.tensors.map((u) => v(u, r));
      return se(n, 0);
    });
  }
  /**
   * Pop a tensor from the end of the list.
   * @param elementShape shape of the tensor
   * @param elementDtype data type of the tensor
   */
  popBack(e, t) {
    if (t !== this.elementDtype)
      throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);
    if (this.size() === 0)
      throw new Error("Trying to pop from an empty list.");
    const a = ie(this.elementShape, this.tensors, e), r = this.tensors.pop();
    return r.kept = !1, x(r.shape, e, "TensorList shape mismatch: "), v(r, a);
  }
  /**
   * Push a tensor to the end of the list.
   * @param tensor Tensor to be pushed.
   */
  pushBack(e) {
    if (e.dtype !== this.elementDtype)
      throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);
    if (x(e.shape, this.elementShape, "TensorList shape mismatch: "), this.maxNumElements === this.size())
      throw new Error("Trying to push element into a full list.");
    V(e), this.tensors.push(e);
  }
  /**
   * Update the size of the list.
   * @param size the new size of the list.
   */
  resize(e) {
    if (e < 0)
      throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);
    if (this.maxNumElements !== -1 && e > this.maxNumElements)
      throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);
    const t = new Q([], this.elementShape, this.elementDtype, this.maxNumElements);
    t.tensors.length = e;
    for (let a = 0; a < Math.min(this.tensors.length, e); ++a)
      t.tensors[a] = this.tensors[a];
    return t;
  }
  /**
   * Retrieve the element at the provided index
   * @param elementShape shape of the tensor
   * @param elementDtype dtype of the tensor
   * @param elementIndex index of the tensor
   */
  getItem(e, t, a) {
    if (a !== this.elementDtype)
      throw new Error(`Invalid data types; op elements ${a}, but list elements ${this.elementDtype}`);
    if (e < 0 || e > this.tensors.length)
      throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);
    if (this.tensors[e] == null)
      throw new Error(`element at index ${e} is null.`);
    x(this.tensors[e].shape, t, "TensorList shape mismatch: ");
    const r = ie(this.elementShape, this.tensors, t);
    return v(this.tensors[e], r);
  }
  /**
   * Set the tensor at the index
   * @param elementIndex index of the tensor
   * @param tensor the tensor to be inserted into the list
   */
  setItem(e, t) {
    if (t.dtype !== this.elementDtype)
      throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);
    if (e < 0 || this.maxNumElements !== -1 && e >= this.maxNumElements)
      throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);
    x(this.elementShape, t.shape, "TensorList shape mismatch: "), V(t), this.tensors[e] != null && (this.tensors[e].kept = !1), this.tensors[e] = t;
  }
  /**
   * Return selected values in the TensorList as a stacked Tensor. All of
   * selected values must have been written and their shapes must all match.
   * @param indices indices of tensors to gather
   * @param elementDtype output tensor dtype
   * @param elementShape output tensor element shape
   */
  gather(e, t, a) {
    if (t !== this.elementDtype)
      throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);
    x(this.elementShape, a, "TensorList shape mismatch: "), e = e.slice(0, this.size());
    const r = ie(this.elementShape, this.tensors, a);
    return e.length === 0 ? q([], [0].concat(r)) : L(() => {
      const n = e.map((u) => v(this.tensors[u], r));
      return se(n, 0);
    });
  }
  /**
   * Return the values in the TensorList as a concatenated Tensor.
   * @param elementDtype output tensor dtype
   * @param elementShape output tensor element shape
   */
  concat(e, t) {
    if (e && e !== this.elementDtype)
      throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);
    x(this.elementShape, t, "TensorList shape mismatch: ");
    const a = ie(this.elementShape, this.tensors, t);
    return this.size() === 0 ? q([], [0].concat(a)) : L(() => {
      const r = this.tensors.map((n) => v(n, a));
      return de(r, 0);
    });
  }
}
function Xg(s, e, t) {
  const a = s.dtype;
  if (s.shape.length < 1)
    throw new Error(`Tensor must be at least a vector, but saw shape: ${s.shape}`);
  if (s.dtype !== t)
    throw new Error(`Invalid data types; op elements ${s.dtype}, but list elements ${t}`);
  const r = s.shape.slice(1);
  x(r, e, "TensorList shape mismatch: ");
  const n = ne(s);
  return new Q(n, e, a);
}
function Zg(s, e, t, a) {
  return new Q([], s, e, a);
}
function Yg(s, e, t, a) {
  if (e.length !== s.shape[0])
    throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${s.shape[0]}`);
  const r = Math.max(...e);
  if (a != null && a !== -1 && r >= a)
    throw new Error(`Max index must be < array size (${r}  vs. ${a})`);
  const n = new Q([], t, s.dtype, a), u = ne(s, 0);
  return e.forEach((o, l) => {
    n.setItem(o, u[l]);
  }), n;
}
function Mg(s, e, t) {
  let a = 0;
  const r = e.map((m) => (a += m, a));
  if (a !== s.shape[0])
    throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${a}, and tensor's shape is: ${s.shape}`);
  const n = s.shape.slice(1), u = Ze(n, t), o = a === 0 ? 0 : s.size / a, l = L(() => {
    const m = [];
    s = v(s, [1, a, o]);
    for (let c = 0; c < e.length; ++c) {
      const h = [0, c === 0 ? 0 : r[c - 1], 0], N = [1, e[c], o];
      m[c] = v(U(s, h, N), u);
    }
    return s.dispose(), m;
  }), p = new Q([], t, s.dtype, e.length);
  for (let m = 0; m < l.length; m++)
    p.setItem(m, l[m]);
  return p;
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const eb = async (s, e, t) => {
  switch (s.op) {
    case "If":
    case "StatelessIf": {
      const a = i("thenBranch", s, e, t), r = i("elseBranch", s, e, t), n = i("cond", s, e, t), u = i("args", s, e, t);
      return (await n.data())[0] ? t.functionMap[a].executeFunctionAsync(u, t.tensorArrayMap, t.tensorListMap) : t.functionMap[r].executeFunctionAsync(u, t.tensorArrayMap, t.tensorListMap);
    }
    case "While":
    case "StatelessWhile": {
      const a = i("body", s, e, t), r = i("cond", s, e, t), n = i("args", s, e, t), u = await t.functionMap[r].executeFunctionAsync(n, t.tensorArrayMap, t.tensorListMap), o = n.map((m) => m.id);
      let l = await u[0].data();
      u.forEach((m) => {
        !m.kept && o.indexOf(m.id) === -1 && m.dispose();
      });
      let p = n;
      for (; l[0]; ) {
        const m = p;
        p = await t.functionMap[a].executeFunctionAsync(p, t.tensorArrayMap, t.tensorListMap);
        const c = p.map((h) => h.id);
        m.forEach((h) => {
          !h.kept && o.indexOf(h.id) === -1 && c.indexOf(h.id) === -1 && h.dispose();
        });
        const d = await t.functionMap[r].executeFunctionAsync(p, t.tensorArrayMap, t.tensorListMap);
        l = await d[0].data(), d.forEach((h) => {
          !h.kept && o.indexOf(h.id) === -1 && c.indexOf(h.id) === -1 && h.dispose();
        });
      }
      return p;
    }
    case "LoopCond": {
      const a = i("pred", s, e, t);
      return [H(a)];
    }
    case "Switch": {
      const a = i("pred", s, e, t);
      let r = i("data", s, e, t);
      return r.kept || (r = H(r)), (await a.data())[0] ? [void 0, r] : [r, void 0];
    }
    case "Merge": {
      const a = s.inputNames.find((r) => E(r, e, t) !== void 0);
      if (a) {
        const r = E(a, e, t);
        return [H(r)];
      }
      return;
    }
    case "Enter": {
      const a = i("frameName", s, e, t), r = i("tensor", s, e, t);
      return t.enterFrame(a), [H(r)];
    }
    case "Exit": {
      const a = i("tensor", s, e, t);
      return t.exitFrame(), [H(a)];
    }
    case "NextIteration": {
      const a = i("tensor", s, e, t);
      return t.nextIteration(), [H(a)];
    }
    case "TensorArrayV3": {
      const a = i("size", s, e, t), r = i("dtype", s, e, t), n = i("elementShape", s, e, t), u = i("dynamicSize", s, e, t), o = i("clearAfterRead", s, e, t), l = i("identicalElementShapes", s, e, t), p = i("name", s, e, t), m = new Qg(p, r, a, n, l, u, o);
      return t.addTensorArray(m), [m.idTensor, R(1)];
    }
    case "TensorArrayWriteV3": {
      const a = i("tensorArrayId", s, e, t), r = i("index", s, e, t), n = i("tensor", s, e, t), u = t.getTensorArray(a.id);
      return u.write(r, n), [u.idTensor];
    }
    case "TensorArrayReadV3": {
      const a = i("tensorArrayId", s, e, t), r = i("index", s, e, t);
      return [t.getTensorArray(a.id).read(r)];
    }
    case "TensorArrayGatherV3": {
      const a = i("tensorArrayId", s, e, t), r = i("indices", s, e, t), n = i("dtype", s, e, t);
      return [t.getTensorArray(a.id).gather(r, n)];
    }
    case "TensorArrayScatterV3": {
      const a = i("tensorArrayId", s, e, t), r = i("indices", s, e, t), n = i("tensor", s, e, t), u = t.getTensorArray(a.id);
      return u.scatter(r, n), [u.idTensor];
    }
    case "TensorArrayConcatV3": {
      const a = i("tensorArrayId", s, e, t), r = t.getTensorArray(a.id), n = i("dtype", s, e, t);
      return [r.concat(n)];
    }
    case "TensorArraySplitV3": {
      const a = i("tensorArrayId", s, e, t), r = i("tensor", s, e, t), n = i("lengths", s, e, t), u = t.getTensorArray(a.id);
      return u.split(n, r), [u.idTensor];
    }
    case "TensorArraySizeV3": {
      const a = i("tensorArrayId", s, e, t), r = t.getTensorArray(a.id);
      return [R(r.size(), "int32")];
    }
    case "TensorArrayCloseV3": {
      const a = i("tensorArrayId", s, e, t), r = t.getTensorArray(a.id);
      return r.clearAndClose(), [r.idTensor];
    }
    case "TensorListSetItem": {
      const a = i("tensorListId", s, e, t), r = i("index", s, e, t), n = i("tensor", s, e, t), u = t.getTensorList(a.id);
      return u.setItem(r, n), [u.idTensor];
    }
    case "TensorListGetItem": {
      const a = i("tensorListId", s, e, t), r = i("index", s, e, t), n = i("elementShape", s, e, t), u = i("elementDType", s, e, t);
      return [t.getTensorList(a.id).getItem(r, n, u)];
    }
    case "TensorListScatterV2":
    case "TensorListScatter": {
      const a = i("indices", s, e, t), r = i("tensor", s, e, t), n = i("elementShape", s, e, t), u = i("numElements", s, e, t), o = Yg(r, a, n, u);
      return t.addTensorList(o), [o.idTensor];
    }
    case "TensorListReserve":
    case "EmptyTensorList": {
      const a = i("elementShape", s, e, t), r = i("elementDType", s, e, t);
      let n;
      s.op === "TensorListReserve" ? n = "numElements" : n = "maxNumElements";
      const u = i(n, s, e, t), o = s.op === "TensorListReserve" ? -1 : u, l = Zg(a, r, u, o);
      return t.addTensorList(l), [l.idTensor];
    }
    case "TensorListGather": {
      const a = i("tensorListId", s, e, t), r = i("indices", s, e, t), n = i("elementShape", s, e, t), u = i("elementDType", s, e, t);
      return [t.getTensorList(a.id).gather(r, u, n)];
    }
    case "TensorListStack": {
      const a = i("tensorListId", s, e, t), r = i("elementShape", s, e, t), n = i("elementDType", s, e, t), u = i("numElements", s, e, t);
      return [t.getTensorList(a.id).stack(r, n, u)];
    }
    case "TensorListFromTensor": {
      const a = i("tensor", s, e, t), r = i("elementShape", s, e, t), n = i("elementDType", s, e, t), u = Xg(a, r, n);
      return t.addTensorList(u), [u.idTensor];
    }
    case "TensorListConcat":
    case "TensorListConcatV2": {
      const a = i("tensorListId", s, e, t), r = t.getTensorList(a.id), n = i("dtype", s, e, t), u = i("elementShape", s, e, t);
      return [r.concat(n, u)];
    }
    case "TensorListPushBack": {
      const a = i("tensorListId", s, e, t), r = i("tensor", s, e, t), n = t.getTensorList(a.id);
      return n.pushBack(r), [n.idTensor];
    }
    case "TensorListPopBack": {
      const a = i("tensorListId", s, e, t), r = i("elementShape", s, e, t), n = i("elementDType", s, e, t);
      return [t.getTensorList(a.id).popBack(r, n)];
    }
    case "TensorListSplit": {
      const a = i("tensor", s, e, t), r = i("elementShape", s, e, t), n = i("lengths", s, e, t), u = Mg(a, n, r);
      return t.addTensorList(u), [u.idTensor];
    }
    case "TensorListLength": {
      const a = i("tensorListId", s, e, t), r = t.getTensorList(a.id);
      return [R(r.size(), "int32")];
    }
    case "TensorListResize": {
      const a = i("tensorListId", s, e, t), r = i("size", s, e, t), u = t.getTensorList(a.id).resize(r);
      return t.addTensorList(u), [u.idTensor];
    }
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Wt(s, e, t) {
  const [a, r] = i("fusedOps", s, e, t), n = a === "biasadd", u = !n, o = r === "prelu", l = a === "fusedbatchnorm", p = i("numArgs", s, e, t);
  if (n) {
    if (o && p !== 2)
      throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");
    if (!o && n && p !== 1)
      throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.");
  }
  if (l)
    throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");
  const m = i("strides", s, e, t), c = we(s, e, t), d = i("dataFormat", s, e, t).toUpperCase(), h = i("dilations", s, e, t);
  let [N, g] = i("args", s, e, t);
  u && (g = N, N = void 0);
  const f = i("leakyreluAlpha", s, e, t);
  return {
    stride: m,
    pad: c,
    dataFormat: d,
    dilations: h,
    biasArg: N,
    preluArg: g,
    activationFunc: r,
    leakyreluAlpha: f
  };
}
const tb = (s, e, t, a = k) => {
  switch (s.op) {
    case "Conv1D": {
      const r = i("stride", s, e, t), n = i("pad", s, e, t), u = i("dataFormat", s, e, t).toUpperCase(), o = i("dilation", s, e, t);
      return [a.conv1d(i("x", s, e, t), i("filter", s, e, t), r, n, u, o)];
    }
    case "Conv2D": {
      const r = i("strides", s, e, t), n = we(s, e, t), u = i("dataFormat", s, e, t).toUpperCase(), o = i("dilations", s, e, t);
      return [a.conv2d(i("x", s, e, t), i("filter", s, e, t), [r[1], r[2]], n, u, [o[1], o[2]])];
    }
    case "_FusedConv2D": {
      const { stride: r, pad: n, dataFormat: u, dilations: o, biasArg: l, preluArg: p, activationFunc: m, leakyreluAlpha: c } = Wt(s, e, t);
      return [a.fused.conv2d({
        x: i("x", s, e, t),
        filter: i("filter", s, e, t),
        strides: [r[1], r[2]],
        pad: n,
        dataFormat: u,
        dilations: [o[1], o[2]],
        bias: l,
        activation: m,
        preluActivationWeights: p,
        leakyreluAlpha: c
      })];
    }
    case "FusedDepthwiseConv2dNative": {
      const { stride: r, pad: n, dataFormat: u, dilations: o, biasArg: l, preluArg: p, activationFunc: m, leakyreluAlpha: c } = Wt(s, e, t);
      return [a.fused.depthwiseConv2d({
        x: i("x", s, e, t),
        filter: i("filter", s, e, t),
        strides: [r[1], r[2]],
        pad: n,
        dataFormat: u,
        dilations: [o[1], o[2]],
        bias: l,
        activation: m,
        preluActivationWeights: p,
        leakyreluAlpha: c
      })];
    }
    case "Conv2DBackpropInput":
    case "Conv2dTranspose": {
      const r = i("outputShape", s, e, t), n = i("strides", s, e, t), u = we(s, e, t);
      return [a.conv2dTranspose(i("x", s, e, t), i("filter", s, e, t), r, [n[1], n[2]], u)];
    }
    case "DepthwiseConv2dNative":
    case "DepthwiseConv2d": {
      const r = i("strides", s, e, t), n = we(s, e, t), u = i("dilations", s, e, t), o = i("dataFormat", s, e, t).toUpperCase();
      return [a.depthwiseConv2d(i("input", s, e, t), i("filter", s, e, t), [r[1], r[2]], n, o, [u[1], u[2]])];
    }
    case "Conv3D": {
      const r = i("strides", s, e, t), n = i("pad", s, e, t), u = i("dataFormat", s, e, t).toUpperCase(), o = i("dilations", s, e, t);
      return [a.conv3d(i("x", s, e, t), i("filter", s, e, t), [r[1], r[2], r[3]], n, u, [o[1], o[2], o[3]])];
    }
    case "AvgPool": {
      const r = i("strides", s, e, t), n = i("pad", s, e, t), u = i("kernelSize", s, e, t);
      return [a.avgPool(i("x", s, e, t), [u[1], u[2]], [r[1], r[2]], n)];
    }
    case "MaxPool": {
      const r = i("strides", s, e, t), n = i("pad", s, e, t), u = i("kernelSize", s, e, t);
      return [a.maxPool(i("x", s, e, t), [u[1], u[2]], [r[1], r[2]], n)];
    }
    case "MaxPoolWithArgmax": {
      const r = i("strides", s, e, t), n = i("pad", s, e, t), u = i("kernelSize", s, e, t), o = i("includeBatchInIndex", s, e, t), { result: l, indexes: p } = a.maxPoolWithArgmax(i("x", s, e, t), [u[1], u[2]], [r[1], r[2]], n, o);
      return [l, p];
    }
    case "AvgPool3D": {
      const r = i("strides", s, e, t), n = i("pad", s, e, t), u = i("kernelSize", s, e, t);
      return [a.avgPool3d(i("x", s, e, t), [u[1], u[2], u[3]], [r[1], r[2], r[3]], n)];
    }
    case "MaxPool3D": {
      const r = i("strides", s, e, t), n = i("pad", s, e, t), u = i("kernelSize", s, e, t);
      return [a.maxPool3d(i("x", s, e, t), [u[1], u[2], u[3]], [r[1], r[2], r[3]], n)];
    }
    case "Dilation2D": {
      const r = i("strides", s, e, t), n = i("pad", s, e, t), u = i("dilations", s, e, t), o = r[1], l = r[2], p = u[1], m = u[2];
      return [a.dilation2d(
        i("x", s, e, t),
        i("filter", s, e, t),
        [o, l],
        n,
        [p, m],
        "NHWC"
        /* dataFormat */
      )];
    }
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const sb = (s, e, t, a = k) => {
  switch (s.op) {
    case "Fill": {
      const r = i("shape", s, e, t), n = i("dtype", s, e, t), u = i("value", s, e, t);
      return [a.fill(r, u, n)];
    }
    case "LinSpace": {
      const r = i("start", s, e, t), n = i("stop", s, e, t), u = i("num", s, e, t);
      return [a.linspace(r, n, u)];
    }
    case "Multinomial": {
      const r = i("logits", s, e, t), n = i("numSamples", s, e, t), u = i("seed", s, e, t);
      return [a.multinomial(r, n, u)];
    }
    case "OneHot": {
      const r = i("indices", s, e, t), n = i("depth", s, e, t), u = i("onValue", s, e, t), o = i("offValue", s, e, t), l = i("dtype", s, e, t);
      return [a.oneHot(r, n, u, o, l)];
    }
    case "Ones":
      return [a.ones(i("shape", s, e, t), i("dtype", s, e, t))];
    case "OnesLike":
      return [a.onesLike(i("x", s, e, t))];
    case "RandomStandardNormal":
      return [a.randomStandardNormal(i("shape", s, e, t), i("dtype", s, e, t), i("seed", s, e, t))];
    case "RandomUniform":
      return [a.randomUniform(
        // tslint:disable-next-line:no-any
        i("shape", s, e, t),
        i("minval", s, e, t),
        i("maxval", s, e, t),
        i("dtype", s, e, t)
      )];
    case "RandomUniformInt":
      return [a.randomUniformInt(i("shape", s, e, t), i("minval", s, e, t), i("maxval", s, e, t), i("seed", s, e, t))];
    case "Range": {
      const r = i("start", s, e, t), n = i("stop", s, e, t), u = i("step", s, e, t);
      return [a.range(r, n, u, i("dtype", s, e, t))];
    }
    case "TruncatedNormal": {
      const r = i("shape", s, e, t), n = i("mean", s, e, t), u = i("stdDev", s, e, t), o = i("seed", s, e, t);
      return [a.truncatedNormal(r, n, u, i("dtype", s, e, t), o)];
    }
    case "Zeros":
      return [a.zeros(i("shape", s, e, t), i("dtype", s, e, t))];
    case "ZerosLike":
      return [a.zerosLike(i("x", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Le(s, e, t) {
  const a = i("boxes", s, e, t), r = i("scores", s, e, t), n = i("maxOutputSize", s, e, t), u = i("iouThreshold", s, e, t), o = i("scoreThreshold", s, e, t), l = i("softNmsSigma", s, e, t);
  return {
    boxes: a,
    scores: r,
    maxOutputSize: n,
    iouThreshold: u,
    scoreThreshold: o,
    softNmsSigma: l
  };
}
const ab = async (s, e, t, a, r = k) => {
  switch (s.op) {
    case "NonMaxSuppressionV5": {
      const { boxes: n, scores: u, maxOutputSize: o, iouThreshold: l, scoreThreshold: p, softNmsSigma: m } = Le(s, e, t), c = await r.image.nonMaxSuppressionWithScoreAsync(n, u, o, l, p, m);
      return [c.selectedIndices, c.selectedScores];
    }
    case "NonMaxSuppressionV4": {
      const { boxes: n, scores: u, maxOutputSize: o, iouThreshold: l, scoreThreshold: p } = Le(s, e, t), m = i("padToMaxOutputSize", s, e, t), c = await r.image.nonMaxSuppressionPaddedAsync(n, u, o, l, p, m);
      return [c.selectedIndices, c.validOutputs];
    }
    case "NonMaxSuppressionV3":
    case "NonMaxSuppressionV2": {
      const { boxes: n, scores: u, maxOutputSize: o, iouThreshold: l, scoreThreshold: p } = Le(s, e, t);
      return [await r.image.nonMaxSuppressionAsync(n, u, o, l, p)];
    }
    case "Where": {
      const n = r.cast(i("condition", s, e, t), "bool"), u = [await r.whereAsync(n)];
      return n.dispose(), u;
    }
    case "ListDiff":
      return r.setdiff1dAsync(i("x", s, e, t), i("y", s, e, t));
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const rb = (s, e, t, a = k) => {
  switch (s.op) {
    case "LowerBound": {
      const r = i("sortedSequence", s, e, t), n = i("values", s, e, t);
      return [a.lowerBound(r, n)];
    }
    case "TopKV2": {
      const r = i("x", s, e, t), n = i("k", s, e, t), u = i("sorted", s, e, t), o = a.topk(r, n, u);
      return [o.values, o.indices];
    }
    case "UpperBound": {
      const r = i("sortedSequence", s, e, t), n = i("values", s, e, t);
      return [a.upperBound(r, n)];
    }
    case "Unique": {
      const r = i("x", s, e, t), n = a.unique(r);
      return [n.values, n.indices];
    }
    case "UniqueV2": {
      const r = i("x", s, e, t), n = i("axis", s, e, t), u = a.unique(r, n);
      return [u.values, u.indices];
    }
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const nb = (s, e, t, a = k) => {
  switch (s.op) {
    case "Const":
      return e[s.name];
    case "PlaceholderWithDefault":
      const r = i("default", s, e, t);
      return [E(s.name, e, t) || r];
    case "Placeholder":
      return [E(s.name, e, t)];
    case "Identity":
    case "StopGradient":
    case "FakeQuantWithMinMaxVars": {
      const m = i("x", s, e, t);
      return [H(m)];
    }
    case "IdentityN":
      return i("x", s, e, t).map((m) => H(m));
    case "Snapshot":
      const n = i("x", s, e, t);
      return [H(n)];
    case "Shape":
      return [a.tensor1d(i("x", s, e, t).shape, "int32")];
    case "ShapeN":
      return i("x", s, e, t).map((m) => a.tensor1d(m.shape));
    case "Size":
      return [a.scalar(i("x", s, e, t).size, "int32")];
    case "Rank":
      return [a.scalar(i("x", s, e, t).rank, "int32")];
    case "NoOp":
      return [a.scalar(1)];
    case "Print":
      const u = i("x", s, e, t), o = i("data", s, e, t), l = i("message", s, e, t), p = i("summarize", s, e, t);
      console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."), console.log(l);
      for (let m = 0; m < o.length; m++)
        console.log(Array.prototype.slice.call(o[m].dataSync()).slice(0, p));
      return [u];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class ib {
  get id() {
    return this.handle.id;
  }
  /**
   * Constructor of HashTable. Creates a hash table.
   *
   * @param keyDType `dtype` of the table keys.
   * @param valueDType `dtype` of the table values.
   */
  constructor(e, t) {
    this.keyDType = e, this.valueDType = t, this.handle = R(0), this.tensorMap = /* @__PURE__ */ new Map(), V(this.handle);
  }
  /**
   * Dispose the tensors and handle and clear the hashtable.
   */
  clearAndClose() {
    this.tensorMap.forEach((e) => e.dispose()), this.tensorMap.clear(), this.handle.dispose();
  }
  /**
   * The number of items in the hash table.
   */
  size() {
    return this.tensorMap.size;
  }
  /**
   * The number of items in the hash table as a rank-0 tensor.
   */
  tensorSize() {
    return R(this.size(), "int32");
  }
  /**
   * Replaces the contents of the table with the specified keys and values.
   * @param keys Keys to store in the hashtable.
   * @param values Values to store in the hashtable.
   */
  async import(e, t) {
    this.checkKeyAndValueTensor(e, t);
    const a = await e.data();
    return this.tensorMap.forEach((r) => r.dispose()), this.tensorMap.clear(), L(() => {
      const r = ne(t), n = a.length, u = r.length;
      w(n === u, () => `The number of elements doesn't match, keys has ${n} elements, the values has ${u} elements.`);
      for (let o = 0; o < n; o++) {
        const l = a[o], p = r[o];
        V(p), this.tensorMap.set(l, p);
      }
      return this.handle;
    });
  }
  /**
   * Looks up keys in a hash table, outputs the corresponding values.
   *
   * Performs batch lookups, for every element in the key tensor, `find`
   * stacks the corresponding value into the return tensor.
   *
   * If an element is not present in the table, the given `defaultValue` is
   * used.
   *
   * @param keys Keys to look up. Must have the same type as the keys of the
   *     table.
   * @param defaultValue The scalar `defaultValue` is the value output for keys
   *     not present in the table. It must also be of the same type as the
   *     table values.
   */
  async find(e, t) {
    this.checkKeyAndValueTensor(e, t);
    const a = await e.data();
    return L(() => {
      const r = [];
      for (let n = 0; n < a.length; n++) {
        const u = a[n], o = this.findWithDefault(u, t);
        r.push(o);
      }
      return se(r);
    });
  }
  // tslint:disable-next-line: no-any
  findWithDefault(e, t) {
    const a = this.tensorMap.get(e);
    return a ?? t;
  }
  checkKeyAndValueTensor(e, t) {
    if (e.dtype !== this.keyDType)
      throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);
    if (t.dtype !== this.valueDType)
      throw new Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ob = async (s, e, t, a) => {
  switch (s.op) {
    case "HashTable":
    case "HashTableV2": {
      const r = a.getHashTableHandleByName(s.name);
      if (r != null)
        return [r];
      {
        const n = i("keyDType", s, e, t), u = i("valueDType", s, e, t), o = new ib(n, u);
        return a.addHashTable(s.name, o), [o.handle];
      }
    }
    case "InitializeTable":
    case "InitializeTableV2":
    case "LookupTableImport":
    case "LookupTableImportV2": {
      const r = i("tableHandle", s, e, t, a), n = i("keys", s, e, t), u = i("values", s, e, t);
      return [await a.getHashTableById(r.id).import(n, u)];
    }
    case "LookupTableFind":
    case "LookupTableFindV2": {
      const r = i("tableHandle", s, e, t, a), n = i("keys", s, e, t), u = i("defaultValue", s, e, t);
      return [await a.getHashTableById(r.id).find(n, u)];
    }
    case "LookupTableSize":
    case "LookupTableSizeV2": {
      const r = i("tableHandle", s, e, t, a);
      return [a.getHashTableById(r.id).tensorSize()];
    }
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const ub = (s, e, t, a = k) => {
  switch (s.op) {
    case "ResizeBilinear": {
      const r = i("images", s, e, t), n = i("size", s, e, t), u = i("alignCorners", s, e, t), o = i("halfPixelCenters", s, e, t);
      return [a.image.resizeBilinear(r, [n[0], n[1]], u, o)];
    }
    case "ResizeNearestNeighbor": {
      const r = i("images", s, e, t), n = i("size", s, e, t), u = i("alignCorners", s, e, t), o = i("halfPixelCenters", s, e, t);
      return [a.image.resizeNearestNeighbor(r, [n[0], n[1]], u, o)];
    }
    case "CropAndResize": {
      const r = i("image", s, e, t), n = i("boxes", s, e, t), u = i("boxInd", s, e, t), o = i("cropSize", s, e, t), l = i("method", s, e, t), p = i("extrapolationValue", s, e, t);
      return [a.image.cropAndResize(r, n, u, o, l, p)];
    }
    case "ImageProjectiveTransformV3": {
      const r = i("images", s, e, t), n = i("transforms", s, e, t), u = i("outputShape", s, e, t), o = i("fillValue", s, e, t), l = i("interpolation", s, e, t), p = i("fillMode", s, e, t);
      return [a.image.transform(r, n, l.toLowerCase(), p.toLowerCase(), o, u)];
    }
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const lb = (s, e, t, a = k) => {
  switch (s.op) {
    case "Equal":
      return [a.equal(i("a", s, e, t), i("b", s, e, t))];
    case "NotEqual":
      return [a.notEqual(i("a", s, e, t), i("b", s, e, t))];
    case "Greater":
      return [a.greater(i("a", s, e, t), i("b", s, e, t))];
    case "GreaterEqual":
      return [a.greaterEqual(i("a", s, e, t), i("b", s, e, t))];
    case "Less":
      return [a.less(i("a", s, e, t), i("b", s, e, t))];
    case "LessEqual":
      return [a.lessEqual(i("a", s, e, t), i("b", s, e, t))];
    case "LogicalAnd":
      return [a.logicalAnd(i("a", s, e, t), i("b", s, e, t))];
    case "LogicalNot":
      return [a.logicalNot(i("a", s, e, t))];
    case "LogicalOr":
      return [a.logicalOr(i("a", s, e, t), i("b", s, e, t))];
    case "Select":
    case "SelectV2":
      return [a.where(i("condition", s, e, t), i("a", s, e, t), i("b", s, e, t))];
    case "BitwiseAnd":
      return [a.bitwiseAnd(i("a", s, e, t), i("b", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const pb = (s, e, t, a = k) => {
  switch (s.op) {
    case "BatchMatMul":
    case "BatchMatMulV2":
    case "MatMul":
      return [a.matMul(i("a", s, e, t), i("b", s, e, t), i("transposeA", s, e, t), i("transposeB", s, e, t))];
    case "Einsum":
      return [a.einsum(i("equation", s, e, t), ...i("tensors", s, e, t))];
    case "Transpose":
      return [a.transpose(i("x", s, e, t), i("perm", s, e, t))];
    case "_FusedMatMul":
      const [r, n] = i("fusedOps", s, e, t), u = r === "biasadd", o = n === "prelu", l = i("numArgs", s, e, t), p = i("leakyreluAlpha", s, e, t);
      if (u) {
        if (o && l !== 2)
          throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");
        if (!o && l !== 1)
          throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.");
      }
      const [m, c] = i("args", s, e, t);
      return [a.fused.matMul({
        a: i("a", s, e, t),
        b: i("b", s, e, t),
        transposeA: i("transposeA", s, e, t),
        transposeB: i("transposeB", s, e, t),
        bias: m,
        activation: n,
        preluActivationWeights: c,
        leakyreluAlpha: p
      })];
    case "MatrixBandPart":
      return [a.linalg.bandPart(i("a", s, e, t), i("numLower", s, e, t), i("numUpper", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const mb = (s, e, t, a = k) => {
  switch (s.op) {
    case "EuclideanNorm":
      return [a.euclideanNorm(i("x", s, e, t), i("axis", s, e, t), i("keepDims", s, e, t))];
    case "FusedBatchNorm":
    case "FusedBatchNormV2":
      return [a.batchNorm(i("x", s, e, t), i("mean", s, e, t), i("variance", s, e, t), i("offset", s, e, t), i("scale", s, e, t), i("epsilon", s, e, t))];
    case "FusedBatchNormV3":
      return [a.batchNorm(i("x", s, e, t), i("mean", s, e, t), i("variance", s, e, t), i("offset", s, e, t), i("scale", s, e, t), i("epsilon", s, e, t))];
    case "LRN":
      return [a.localResponseNormalization(i("x", s, e, t), i("radius", s, e, t), i("bias", s, e, t), i("alpha", s, e, t), i("beta", s, e, t))];
    case "Softmax":
      return [a.softmax(i("x", s, e, t))];
    case "LogSoftmax":
      return [a.logSoftmax(i("x", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const cb = (s, e, t, a = k) => {
  switch (s.op) {
    case "RaggedGather": {
      const { outputNestedSplits: r, outputDenseValues: n } = a.raggedGather(i("paramsNestedSplits", s, e, t), i("paramsDenseValues", s, e, t), i("indices", s, e, t), i("outputRaggedRank", s, e, t));
      return r.concat(n);
    }
    case "RaggedRange": {
      const { rtNestedSplits: r, rtDenseValues: n } = a.raggedRange(i("starts", s, e, t), i("limits", s, e, t), i("splits", s, e, t));
      return [r, n];
    }
    case "RaggedTensorToTensor":
      return [a.raggedTensorToTensor(i("shape", s, e, t), i("values", s, e, t), i("defaultValue", s, e, t), i("rowPartitionTensors", s, e, t), i("rowPartitionTypes", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const db = (s, e, t, a = k) => {
  switch (s.op) {
    case "Max": {
      const o = i("axis", s, e, t), l = i("keepDims", s, e, t);
      return [a.max(i("x", s, e, t), o, l)];
    }
    case "Mean": {
      const o = i("axis", s, e, t), l = i("keepDims", s, e, t);
      return [a.mean(i("x", s, e, t), o, l)];
    }
    case "Min": {
      const o = i("axis", s, e, t), l = i("keepDims", s, e, t);
      return [a.min(i("x", s, e, t), o, l)];
    }
    case "Sum": {
      const o = i("axis", s, e, t), l = i("keepDims", s, e, t);
      return [a.sum(i("x", s, e, t), o, l)];
    }
    case "All": {
      const o = i("axis", s, e, t), l = i("keepDims", s, e, t);
      return [a.all(i("x", s, e, t), o, l)];
    }
    case "Any": {
      const o = i("axis", s, e, t), l = i("keepDims", s, e, t);
      return [a.any(i("x", s, e, t), o, l)];
    }
    case "ArgMax": {
      const o = i("axis", s, e, t);
      return [a.argMax(i("x", s, e, t), o)];
    }
    case "ArgMin": {
      const o = i("axis", s, e, t);
      return [a.argMin(i("x", s, e, t), o)];
    }
    case "Prod": {
      const o = i("axis", s, e, t), l = i("keepDims", s, e, t);
      return [a.prod(i("x", s, e, t), o, l)];
    }
    case "Cumprod": {
      const o = i("axis", s, e, t), l = i("exclusive", s, e, t), p = i("reverse", s, e, t);
      return [a.cumprod(i("x", s, e, t), o, l, p)];
    }
    case "Cumsum": {
      const o = i("axis", s, e, t), l = i("exclusive", s, e, t), p = i("reverse", s, e, t);
      return [a.cumsum(i("x", s, e, t), o, l, p)];
    }
    case "Bincount":
      const r = i("x", s, e, t), n = i("weights", s, e, t), u = i("size", s, e, t);
      return [a.bincount(r, n, u)];
    case "DenseBincount": {
      const o = i("x", s, e, t), l = i("weights", s, e, t), p = i("size", s, e, t), m = i("binaryOutput", s, e, t);
      return [a.denseBincount(o, l, p, m)];
    }
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const hb = (s, e, t, a = k) => {
  switch (s.op) {
    case "ConcatV2":
    case "Concat": {
      const r = i("n", s, e, t), n = i("axis", s, e, t);
      let u = i("tensors", s, e, t);
      return u = u.slice(0, r), [a.concat(u, n)];
    }
    case "Gather": {
      const r = i("x", s, e, t), n = i("indices", s, e, t);
      return [a.gather(r, a.cast(n, "int32"), 0)];
    }
    case "GatherV2": {
      const r = i("axis", s, e, t), n = i("batchDims", s, e, t), u = i("x", s, e, t), o = i("indices", s, e, t);
      return [a.gather(u, a.cast(o, "int32"), r, n)];
    }
    case "Reverse": {
      const r = i("dims", s, e, t), n = [];
      for (let o = 0; o < r.length; o++)
        r[o] && n.push(o);
      const u = i("x", s, e, t);
      return [a.reverse(u, n)];
    }
    case "ReverseV2": {
      const r = i("axis", s, e, t), n = i("x", s, e, t);
      return [a.reverse(n, r)];
    }
    case "Slice": {
      const r = i("begin", s, e, t), n = i("size", s, e, t);
      return [a.slice(i("x", s, e, t), r, n)];
    }
    case "StridedSlice": {
      const r = i("begin", s, e, t), n = i("end", s, e, t), u = i("strides", s, e, t), o = i("beginMask", s, e, t), l = i("endMask", s, e, t), p = i("ellipsisMask", s, e, t), m = i("newAxisMask", s, e, t), c = i("shrinkAxisMask", s, e, t), d = i("x", s, e, t);
      return [a.stridedSlice(d, r, n, u, o, l, p, m, c)];
    }
    case "Pack":
      return L(() => {
        const r = i("axis", s, e, t), n = i("tensors", s, e, t), u = n[0].shape, o = a.squeeze(n[0]).shape, l = n.map((p) => {
          const m = te(p.shape, u);
          if (!m && !te(a.squeeze(p).shape, o))
            throw new Error("the input tensors shape does not match");
          return m ? p : a.reshape(p, u);
        });
        return [a.stack(l, r)];
      });
    case "Unpack": {
      const r = i("axis", s, e, t), n = i("tensor", s, e, t);
      return a.unstack(n, r);
    }
    case "Tile": {
      const r = i("reps", s, e, t);
      return [a.tile(i("x", s, e, t), r)];
    }
    case "Split":
    case "SplitV": {
      const r = i("axis", s, e, t), n = i("numOrSizeSplits", s, e, t), u = i("x", s, e, t);
      return a.split(u, n, r);
    }
    case "ScatterNd": {
      const r = i("indices", s, e, t), n = i("values", s, e, t), u = i("shape", s, e, t);
      return [a.scatterND(r, n, u)];
    }
    case "GatherNd": {
      const r = i("x", s, e, t), n = i("indices", s, e, t);
      return [a.gatherND(r, n)];
    }
    case "SparseToDense": {
      const r = i("sparseIndices", s, e, t), n = i("outputShape", s, e, t), u = i("sparseValues", s, e, t), o = i("defaultValue", s, e, t);
      return [a.sparseToDense(r, u, n, u.dtype === o.dtype ? o : a.cast(o, u.dtype))];
    }
    case "TensorScatterUpdate": {
      const r = i("indices", s, e, t), n = i("values", s, e, t), u = i("tensor", s, e, t);
      return [a.tensorScatterUpdate(u, r, n)];
    }
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const fb = (s, e, t, a = k) => {
  switch (s.op) {
    case "SparseFillEmptyRows": {
      const { outputIndices: r, outputValues: n, emptyRowIndicator: u, reverseIndexMap: o } = a.sparse.sparseFillEmptyRows(i("indices", s, e, t), i("values", s, e, t), i("denseShape", s, e, t), i("defaultValue", s, e, t));
      return [
        r,
        n,
        u,
        o
      ];
    }
    case "SparseReshape": {
      const { outputIndices: r, outputShape: n } = a.sparse.sparseReshape(i("inputIndices", s, e, t), i("inputShape", s, e, t), i("newShape", s, e, t));
      return [r, n];
    }
    case "SparseSegmentMean":
      return [a.sparse.sparseSegmentMean(i("data", s, e, t), i("indices", s, e, t), i("segmentIds", s, e, t))];
    case "SparseSegmentSum":
      return [a.sparse.sparseSegmentSum(i("data", s, e, t), i("indices", s, e, t), i("segmentIds", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const yb = (s, e, t, a = k) => {
  switch (s.op) {
    case "FFT":
      return [a.fft(i("x", s, e, t))];
    case "IFFT":
      return [a.ifft(i("x", s, e, t))];
    case "RFFT":
      return [a.rfft(i("x", s, e, t))];
    case "IRFFT":
      return [a.irfft(i("x", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const gb = (s, e, t, a = k) => {
  switch (s.op) {
    case "StaticRegexReplace":
      return [a.string.staticRegexReplace(i("input", s, e, t), i("pattern", s, e, t), i("rewrite", s, e, t), i("replaceGlobal", s, e, t))];
    case "StringNGrams": {
      const { nGrams: r, nGramsSplits: n } = a.string.stringNGrams(i("data", s, e, t), i("dataSplits", s, e, t), i("separator", s, e, t), i("nGramWidths", s, e, t), i("leftPad", s, e, t), i("rightPad", s, e, t), i("padWidth", s, e, t), i("preserveShortSequences", s, e, t));
      return [r, n];
    }
    case "StringSplit": {
      const { indices: r, values: n, shape: u } = a.string.stringSplit(i("input", s, e, t), i("delimiter", s, e, t), i("skipEmpty", s, e, t));
      return [r, n, u];
    }
    case "StringToHashBucketFast":
      return [a.string.stringToHashBucketFast(i("input", s, e, t), i("numBuckets", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const bb = (s, e, t, a = k) => {
  switch (s.op) {
    case "Cast":
      return [a.cast(i("x", s, e, t), i("dtype", s, e, t))];
    case "ExpandDims": {
      const r = i("axis", s, e, t);
      return [a.expandDims(i("x", s, e, t), r)];
    }
    case "Squeeze": {
      const r = i("axis", s, e, t);
      return [a.squeeze(i("x", s, e, t), r)];
    }
    case "Reshape":
      return [a.reshape(i("x", s, e, t), i("shape", s, e, t))];
    case "EnsureShape":
      return [a.ensureShape(i("x", s, e, t), i("shape", s, e, t))];
    case "MirrorPad":
      return [a.mirrorPad(i("x", s, e, t), i("padding", s, e, t), i("mode", s, e, t))];
    case "PadV2":
    case "Pad":
      return [a.pad(i("x", s, e, t), i("padding", s, e, t), i("constantValue", s, e, t))];
    case "SpaceToBatchND": {
      const r = i("blockShape", s, e, t), n = i("paddings", s, e, t);
      return [a.spaceToBatchND(i("x", s, e, t), r, n)];
    }
    case "BatchToSpaceND": {
      const r = i("blockShape", s, e, t), n = i("crops", s, e, t);
      return [a.batchToSpaceND(i("x", s, e, t), r, n)];
    }
    case "DepthToSpace": {
      const r = i("blockSize", s, e, t), n = i("dataFormat", s, e, t).toUpperCase();
      return [a.depthToSpace(i("x", s, e, t), r, n)];
    }
    case "BroadcastTo":
      return [a.broadcastTo(i("x", s, e, t), i("shape", s, e, t))];
    case "BroadcastArgs":
      return [a.broadcastArgs(i("s0", s, e, t), i("s1", s, e, t))];
    default:
      throw TypeError(`Node type ${s.op} is not implemented`);
  }
};
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Ut(s, e, t, a, r = L) {
  const n = ((u, o, l) => {
    switch (u.category) {
      case "arithmetic":
        return r(() => Kg(u, o, l));
      case "basic_math":
        return r(() => Jg(u, o, l));
      case "control":
        return eb(u, o, l);
      case "convolution":
        return r(() => tb(u, o, l));
      case "creation":
        return r(() => sb(u, o, l));
      case "dynamic":
        return ab(u, o, l);
      case "evaluation":
        return r(() => rb(u, o, l));
      case "image":
        return r(() => ub(u, o, l));
      case "graph":
        return r(() => nb(u, o, l));
      case "logical":
        return r(() => lb(u, o, l));
      case "matrices":
        return r(() => pb(u, o, l));
      case "normalization":
        return r(() => mb(u, o, l));
      case "ragged":
        return r(() => cb(u, o, l));
      case "reduction":
        return r(() => db(u, o, l));
      case "slice_join":
        return r(() => hb(u, o, l));
      case "sparse":
        return r(() => fb(u, o, l));
      case "spectral":
        return r(() => yb(u, o, l));
      case "string":
        return r(() => gb(u, o, l));
      case "transformation":
        return r(() => bb(u, o, l));
      case "hash_table":
        return ob(u, o, l, a);
      case "custom":
        const p = ri(u.op);
        if (p && p.customExecutor)
          return p.customExecutor(new Gg(u, o, l));
        throw TypeError(`Custom op ${u.op} is not registered.`);
      default:
        throw TypeError(`Unknown op '${u.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`);
    }
  })(s, e, t);
  return Ae(n) ? n.then((u) => [].concat(u)) : [].concat(n);
}
class qt {
  constructor(e = {}, t = {}, a = {}, r = {}, n) {
    this.weightMap = e, this.tensorArrayMap = t, this.tensorListMap = a, this.functionMap = r, this.parseNodeNameCache = n, this.rootContext = { id: 0, frameName: "", iterationId: 0 }, this.contexts = [this.rootContext], this.lastId = 0, this.generateCurrentContextIds();
  }
  newFrame(e, t) {
    return { id: e, frameName: t, iterationId: 0 };
  }
  /**
   * Set the current context
   * @param contexts: ExecutionContextInfo[] the current path of execution
   * frames
   */
  set currentContext(e) {
    this.contexts !== e && (this.contexts = e, this.generateCurrentContextIds());
  }
  get currentContext() {
    return this.contexts;
  }
  /**
   * Returns the current context in string format.
   */
  get currentContextId() {
    return this._currentContextIds[0];
  }
  /**
   * Returns the current context and all parent contexts in string format.
   * This allow access to the nodes in the current and parent frames.
   */
  get currentContextIds() {
    return this._currentContextIds;
  }
  generateCurrentContextIds() {
    const e = [];
    for (let t = 0; t < this.contexts.length - 1; t++) {
      const a = this.contexts.slice(0, this.contexts.length - t);
      e.push(this.contextIdforContexts(a));
    }
    e.push(""), this._currentContextIds = e;
  }
  contextIdforContexts(e) {
    return e ? e.map((t) => t.id === 0 && t.iterationId === 0 ? "" : `${t.frameName}-${t.iterationId}`).join("/") : "";
  }
  /**
   * Enter a new frame, a new context is pushed on the current context list.
   * @param frameId new frame id
   */
  enterFrame(e) {
    this.contexts && (this.lastId++, this.contexts = this.contexts.slice(), this.contexts.push(this.newFrame(this.lastId, e)), this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)));
  }
  /**
   * Exit the current frame, the last context is removed from the current
   * context list.
   */
  exitFrame() {
    if (this.contexts && this.contexts.length > 1)
      this.contexts = this.contexts.slice(), this.contexts.splice(-1), this.currentContextIds.shift();
    else
      throw new Error("Cannot exit frame, the context is empty");
  }
  /**
   * Enter the next iteration of a loop, the iteration id of last context is
   * increased.
   */
  nextIteration() {
    if (this.contexts && this.contexts.length > 0) {
      this.contexts = this.contexts.slice(), this.lastId++;
      const e = Object.assign({}, this.contexts[this.contexts.length - 1]);
      e.iterationId += 1, e.id = this.lastId, this.contexts.splice(-1, 1, e), this._currentContextIds.splice(0, 1, this.contextIdforContexts(this.contexts));
    } else
      throw new Error("Cannot increase frame iteration, the context is empty");
  }
  getWeight(e) {
    return this.weightMap[e];
  }
  addTensorArray(e) {
    this.tensorArrayMap[e.id] = e;
  }
  getTensorArray(e) {
    return this.tensorArrayMap[e];
  }
  addTensorList(e) {
    this.tensorListMap[e.id] = e;
  }
  getTensorList(e) {
    return this.tensorListMap[e];
  }
  dispose(e) {
    for (const t in this.tensorArrayMap)
      this.tensorArrayMap[t].clearAndClose(e);
    for (const t in this.tensorListMap)
      this.tensorListMap[t].clearAndClose(e);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Gt(s, e, t, a) {
  const r = /* @__PURE__ */ new Set(), n = [];
  let u = null, o = null;
  const l = /* @__PURE__ */ new Set(), p = new Set(Object.keys(s).map((d) => $(d)[0]));
  a = a || [];
  const m = new Set(a.map((d) => $(d.name)[0])), c = [...e];
  for (; c.length > 0; ) {
    const d = c.pop();
    if ((G(d) || Ab(d) || Eb(d)) && u == null && (u = d, o = u.children.map((h) => h.name).filter((h) => r.has(h))), r.add(d.name), t[d.name] == null && !p.has(d.name) && !m.has(d.name)) {
      if (d.inputs.length === 0) {
        n.push(d.name);
        continue;
      }
      d.inputs.forEach((h) => {
        l.has(h.name) || (l.add(h.name), c.push(h));
      });
    }
  }
  return { inputs: s, outputs: e, usedNodes: r, missingInputs: n, dynamicNode: u, syncInputs: o };
}
function Nb(s, e) {
  const { usedNodes: t, inputs: a } = e, r = Object.keys(a).map((f) => $(f)[0]).map((f) => s.nodes[f]), n = s.initNodes || [], u = (f) => t.has(typeof f == "string" ? f : f.name);
  function o(f) {
    return [...new Map(f.map((b) => [b.name, b])).values()];
  }
  const l = o([
    ...r,
    ...s.weights,
    ...n
  ]).filter(u), p = o([
    ...l,
    ...Object.values(s.nodes)
  ]).filter(u), m = new Map(p.map((f) => [f.name, f])), c = {};
  for (const f of p) {
    c[f.name] = c[f.name] || 0;
    for (const b of f.children)
      u(b) || (c[b.name] = Number.POSITIVE_INFINITY), c[b.name] = (c[b.name] || 0) + 1;
  }
  const d = Object.entries(c).filter(([, f]) => f === 0).map(([f]) => f), h = [...d];
  for (; d.length > 0; ) {
    const f = d.pop(), b = m.get(f);
    for (const O of b.children.filter(u))
      --c[O.name] === 0 && (h.push(O.name), d.push(O.name));
  }
  const N = h.map((f) => m.get(f)), g = wb(N, l);
  return Tb(g, l), g;
}
function wb(s, e) {
  const t = new Map(s.map((u) => [u.name, u])), a = e.map((u) => u.name), r = new Set(a);
  for (; a.length > 0; ) {
    const u = a.pop(), o = t.get(u);
    for (const l of o.children)
      !t.has(l.name) || r.has(l.name) || (r.add(l.name), a.push(l.name));
  }
  return s.filter((u) => r.has(u.name));
}
class ge extends Error {
  constructor(e) {
    super(`NodesExecutionOrderError: ${e}`);
  }
}
function Tb(s, e) {
  const t = new Map(s.map((o, l) => [o.name, l])), a = new Set(e.map((o) => o.name)), r = (o) => a.has(typeof o == "string" ? o : o.name), n = new Set(s.map((o) => o.name)), u = (o) => n.has(typeof o == "string" ? o : o.name);
  for (const o of s) {
    for (const l of o.children.filter(u)) {
      if (!t.has(l.name))
        throw new ge(`Child ${l.name} of node ${o.name} is unreachable.`);
      if (t.get(o.name) > t.get(l.name))
        throw new ge(`Node ${o.name} is scheduled to run after its child ${l.name}.`);
    }
    if (!r(o))
      for (const l of o.inputs) {
        if (!t.has(l.name))
          throw new ge(`Input ${l.name} of node ${o.name} is unreachable.`);
        if (t.get(l.name) > t.get(o.name))
          throw new ge(`Node ${o.name} is scheduled to run before its input ${l.name}.`);
      }
  }
}
function Sb(s) {
  const e = new Map(s.map((o, l) => [o.name, l])), t = Number.MAX_SAFE_INTEGER, a = s.map((o, l) => G(o) ? t : l), r = (o) => {
    const l = a[e.get(o.name)];
    return l ?? -1;
  }, n = s.map((o, l) => o.children.map(r).reduce((p, m) => Math.max(p, m), a[l])), u = /* @__PURE__ */ new Map();
  for (let o = 0; o < s.length; ++o) {
    const l = n[o];
    if (l === t)
      continue;
    const p = s[o], m = s[l];
    u.has(m.name) || u.set(m.name, []), u.get(m.name).push(p);
  }
  return u;
}
const vb = /* @__PURE__ */ new Set([
  "Switch",
  "Merge",
  "Enter",
  "Exit",
  "NextIteration",
  "StatelessIf",
  "StatelessWhile",
  "if",
  "While"
]), Ob = /* @__PURE__ */ new Set([
  "NonMaxSuppressionV2",
  "NonMaxSuppressionV3",
  "NonMaxSuppressionV5",
  "Where"
]), _b = /* @__PURE__ */ new Set([
  "HashTable",
  "HashTableV2",
  "LookupTableImport",
  "LookupTableImportV2",
  "LookupTableFind",
  "LookupTableFindV2",
  "LookupTableSize",
  "LookupTableSizeV2"
]);
function G(s) {
  return vb.has(s.op);
}
function Ab(s) {
  return Ob.has(s.op);
}
function Eb(s) {
  return _b.has(s.op);
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class Ie {
  get weightIds() {
    return this.parent ? this.parent.weightIds : this._weightIds;
  }
  get functionExecutorMap() {
    return this.parent ? this.parent.functionExecutorMap : this._functionExecutorMap;
  }
  get weightMap() {
    return this.parent ? this.parent.weightMap : this._weightMap;
  }
  set weightMap(e) {
    const t = Object.keys(e).map((a) => e[a].map((r) => r.id));
    this._weightIds = [].concat(...t), this._weightMap = e;
  }
  /**
   * Set `ResourceManager` shared by executors of a model.
   * @param resourceManager: `ResourceManager` of the `GraphModel`.
   */
  set resourceManager(e) {
    this._resourceManager = e;
  }
  get inputs() {
    return this._inputs.map((e) => ({
      name: e.name,
      shape: e.attrParams.shape ? e.attrParams.shape.value : void 0,
      dtype: e.attrParams.dtype ? e.attrParams.dtype.value : void 0
    }));
  }
  get outputs() {
    return this._outputs.map((e) => ({
      name: e.name,
      shape: e.attrParams.shape ? e.attrParams.shape.value : void 0,
      dtype: e.attrParams.dtype ? e.attrParams.dtype.value : void 0
    }));
  }
  get inputNodes() {
    return this._inputs.map((e) => e.signatureKey || e.name);
  }
  get outputNodes() {
    return this._outputs.map((e) => {
      const t = e.signatureKey || e.name;
      return e.defaultOutput ? `${t}:${e.defaultOutput}` : t;
    });
  }
  get functions() {
    return Object.keys(this._functions).reduce((e, t) => (e[t] = this._functions[t].signature, e), {});
  }
  /**
   *
   * @param graph Graph the model or function graph to be executed.
   * @param parent When building function exector you need to set the parent
   * executor. Since the weights and function executor maps are set at parant
   * level, that function executor can access the function maps and weight maps
   * through the parent.
   */
  constructor(e, t) {
    this.graph = e, this.parent = t, this.compiledMap = /* @__PURE__ */ new Map(), this.parseNodeNameCache = /* @__PURE__ */ new Map(), this._weightMap = {}, this.SEPARATOR = ",", this._functions = {}, this._functionExecutorMap = {}, this.keepIntermediateTensors = !1, this._outputs = e.outputs, this._inputs = e.inputs, this._initNodes = e.initNodes, this._signature = e.signature, this._functions = e.functions, e.functions != null && Object.keys(e.functions).forEach((a) => {
      this._functionExecutorMap[a] = new Ie(e.functions[a], this);
    });
  }
  getCompilationKey(e, t) {
    const a = e.map((n) => n.name).sort(), r = t.map((n) => n.name).sort();
    return a.join(this.SEPARATOR) + "--" + r.join(this.SEPARATOR);
  }
  /**
   * Compiles the inference graph and returns the minimal set of nodes that are
   * required for execution, in the correct execution order.
   * @returns {Object} compilation The compile result.
   * @returns {Node[]} compilation.orderedNodes Nodes in the correct execution
   *     order.
   * @returns {Map<string, Node[]>} compilation.nodeLiveUntilMap A map from node
   *     to disposable nodes after its execution. That is, for a node `x`,
   *     `nodeLiveUntilMap[x]` indicates all nodes whose intermediate
   *     tensors should be disposed after `x` is executed.
   */
  compile(e, t) {
    const a = Gt(e, t, this.weightMap, this._initNodes), { missingInputs: r, dynamicNode: n, syncInputs: u } = a;
    if (n != null)
      throw new Error(`This execution contains the node '${n.name}', which has the dynamic op '${n.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${u}]`);
    if (r.length > 0) {
      const p = t.map((c) => c.name), m = Object.keys(e);
      throw new Error(`Cannot compute the outputs [${p}] from the provided inputs [${m}]. Missing the following inputs: [${r}]`);
    }
    const o = Nb(this.graph, a), l = Sb(o);
    return { orderedNodes: o, nodeLiveUntilMap: l };
  }
  cloneAndKeepTensor(e) {
    if (e == null)
      return null;
    const t = e.clone();
    return V(t), t;
  }
  cloneTensorList(e) {
    return e ? e.map((a) => this.cloneAndKeepTensor(a)) : null;
  }
  cloneTensorMap(e) {
    return Object.fromEntries(Object.entries(e).map(([t, a]) => [t, this.cloneTensorList(a)]));
  }
  /**
   * Executes the inference for given input tensors.
   * @param inputs Tensor map for the model inputs, keyed by the input node
   * names.
   * @param outputs Optional. output node name from the Tensorflow model, if
   * no outputs are specified, the default outputs of the model would be used.
   * You can inspect intermediate nodes of the model by adding them to the
   * outputs array.
   */
  execute(e, t) {
    this.disposeIntermediateTensors(), e = this.mapInputs(e);
    const a = Object.keys(e).sort();
    this.checkInputs(e), this.checkInputShapeAndType(e), t = this.mapOutputs(t), this.checkOutputs(t);
    const r = a.map((d) => this.graph.nodes[$(d)[0]]), n = t.map((d) => $(d)[0]), u = new Set(n);
    let o = n.map((d) => this.graph.nodes[d]);
    o.length === 0 && (o = this._outputs);
    const l = this.getCompilationKey(r, o);
    let p = this.compiledMap.get(l);
    p == null && (p = this.compile(e, o), this.compiledMap.set(l, p));
    try {
      this.keepIntermediateTensors = P().getBool("KEEP_INTERMEDIATE_TENSORS");
    } catch (d) {
      this.keepIntermediateTensors = !1, console.warn(d.message);
    }
    const m = {}, c = {};
    return L(() => {
      const d = new qt(this.weightMap, m, c, this.functionExecutorMap, this.parseNodeNameCache), h = Object.assign({}, this.weightMap);
      this.keepIntermediateTensors && (this.clonedTensorsMap = this.cloneTensorMap(this.weightMap)), Object.keys(e).forEach((b) => {
        const [O, _] = $(b, d), T = [];
        T[_] = e[b], h[O] = T, this.keepIntermediateTensors && (this.clonedTensorsMap[O] = this.cloneTensorList(T));
      });
      const N = this.getFrozenTensorIds(h), { orderedNodes: g, nodeLiveUntilMap: f } = p;
      for (const b of g) {
        if (h[b.name])
          continue;
        const O = Ut(b, h, d, this._resourceManager);
        if (Ae(O))
          throw new Error(`The execution of the op '${b.op}' returned a promise. Please use model.executeAsync() instead.`);
        h[b.name] = O, this.keepIntermediateTensors && (this.clonedTensorsMap[b.name] = this.cloneTensorList(O)), this.checkTensorForDisposalWithNodeLiveUntilInfo(b, h, d, N, u, f.get(b.name));
      }
      return this.parent == null && d.dispose(N), t.map((b) => E(b, h, d));
    });
  }
  getFrozenTensorIds(e) {
    const t = [].concat.apply([], Object.keys(e).map((a) => e[a]).map((a) => a.map((r) => r.id)));
    return new Set(t);
  }
  checkTensorForDisposal(e, t, a, r, n, u, o) {
    if (!(G(t) || u.has(e))) {
      for (const l of a[e])
        l != null && (o[l.id] = (o[l.id] || 0) + t.children.length);
      for (const l of t.inputs) {
        if (G(l))
          continue;
        const p = Rt(l.name, a, r);
        if (p != null)
          for (const m of p) {
            if (!m || m.kept || n.has(m.id))
              continue;
            const c = o[m.id];
            c === 1 ? (m.dispose(), delete o[m.id]) : c != null && o[m.id]--;
          }
      }
    }
  }
  checkTensorForDisposalWithNodeLiveUntilInfo(e, t, a, r, n, u) {
    function o(l) {
      return G(l) || n.has(l.name);
    }
    if (!(G(e) || u == null))
      for (const l of u) {
        if (o(l))
          continue;
        const p = Rt(l.name, t, a);
        for (const m of p)
          !m || m.kept || r.has(m.id) || m.dispose();
      }
  }
  /**
   * Executes the inference for given input tensors in Async fashion.
   * @param inputs Tensor map for the model inputs, keyed by the input node
   * names.
   * @param outputs output node name from the Tensorflow model, if no outputs
   * are specified, the default outputs of the model would be used. You can
   * inspect intermediate nodes of the model by adding them to the outputs
   * array.
   */
  async executeAsync(e, t) {
    return this._executeAsync(e, t);
  }
  disposeIntermediateTensors() {
    this.clonedTensorsMap && (Object.values(this.clonedTensorsMap).forEach((e) => {
      for (const t of e)
        t && !t.isDisposed && t.dispose();
    }), this.clonedTensorsMap = null);
  }
  getIntermediateTensors() {
    return this.clonedTensorsMap;
  }
  /**
   * Executes the inference for given input tensors in Async fashion.
   * @param inputs Tensor map for the model inputs, keyed by the input node
   * names.
   * @param outputs Optional. output node name from the Tensorflow model,
   * if no outputs are specified, the default outputs of the model would be
   * used. You can inspect intermediate nodes of the model by adding them to
   * the outputs array.
   * @param isFunctionExecution Optional. Flag for executing a function.
   * @param tensorArrayMap Optional, global TensorArray map by id. Used for
   * function execution.
   * @param tensorArrayMap Optinal global TensorList map by id. Used for
   * function execution.
   */
  async _executeAsync(e, t, a = !1, r = {}, n = {}) {
    this.disposeIntermediateTensors(), a || (e = this.mapInputs(e), this.checkInputs(e), this.checkInputShapeAndType(e), t = this.mapOutputs(t), this.checkOutputs(t));
    try {
      this.keepIntermediateTensors = P().getBool("KEEP_INTERMEDIATE_TENSORS");
    } catch (d) {
      this.keepIntermediateTensors = !1, console.warn(d.message);
    }
    const u = new qt(this.weightMap, r, n, this.functionExecutorMap, this.parseNodeNameCache);
    this.keepIntermediateTensors && (this.clonedTensorsMap = this.cloneTensorMap(this.weightMap));
    const o = await this.executeWithControlFlow(e, u, t, a), l = t.map((d) => E(d, o, u)), p = l.map((d) => d.id), m = Object.keys(e).map((d) => e[d].id), c = /* @__PURE__ */ new Set([...p, ...m, ...this.weightIds]);
    return Object.values(o).forEach((d) => {
      d.forEach((h) => {
        h && !h.isDisposed && !c.has(h.id) && h.dispose();
      });
    }), this.parent == null && u.dispose(c), l;
  }
  async executeFunctionAsync(e, t, a) {
    const r = e.reduce((n, u, o) => (n[this.inputs[o].name] = u, n), {});
    return this._executeAsync(r, this.outputNodes, !0, t, a);
  }
  /**
   * When there are control flow nodes in the graph, the graph execution use
   * ExecutionContext to keep track of the frames and loop iterators.
   * @param inputs placeholder tensors for the graph.
   * @param context the execution context object for current execution.
   * @param outputNames Optional. output node name from the Tensorflow model,
   * if no outputs are specified, the default outputs of the model would be
   * used. You can inspect intermediate nodes of the model by adding them to
   * the outputs array.
   * @param isFunctionExecution Flag for executing a function.
   */
  async executeWithControlFlow(e, t, a, r) {
    const n = Object.keys(e), u = n.map((T) => this.graph.nodes[$(T)[0]]), o = a.map((T) => $(T)[0]), l = new Set(o);
    let p = o.map((T) => this.graph.nodes[T]);
    p.length === 0 && (p = this._outputs);
    const { usedNodes: m, missingInputs: c, dynamicNode: d, syncInputs: h } = Gt(e, p, this.weightMap, this._initNodes), N = [
      ...u,
      ...this.graph.weights,
      ...this._initNodes || []
    ].map((T) => ({ node: T, contexts: t.currentContext })), g = Object.assign({}, this.weightMap);
    Object.keys(e).forEach((T) => {
      const [I, D] = $(T), C = [];
      C[D] = e[T], g[I] = C;
    });
    const f = {}, b = this.getFrozenTensorIds(g), O = {};
    for (; N.length > 0; ) {
      const T = this.processStack(u, N, t, g, O, b, l, f, m);
      await Promise.all(T);
    }
    d == null && !r && console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");
    const _ = p.filter((T) => !G(T) && !E(T.name, g, t)).map((T) => T.name);
    if (_.length > 0) {
      let T = "";
      throw d != null && (T = `Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${h}]`), new Error(`Cannot compute the outputs [${_}] from the provided inputs [${n}]. Consider providing the following inputs: [${c}]. ${T}`);
    }
    return g;
  }
  processStack(e, t, a, r, n, u, o, l, p) {
    const m = [];
    for (; t.length > 0; ) {
      const c = t.pop();
      a.currentContext = c.contexts;
      let d = "";
      if (c.node.op === "Enter" && i("isConstant", c.node, r, a) && ([d] = B(c.node.name, a)), r[c.node.name] == null) {
        const h = Ut(c.node, r, a, this._resourceManager);
        d || ([d] = B(c.node.name, a));
        const N = a.currentContext;
        Ae(h) ? m.push(h.then((g) => (r[d] = g, this.keepIntermediateTensors && (this.clonedTensorsMap[d] = this.cloneTensorList(g)), a.currentContext = N, this.checkTensorForDisposal(d, c.node, r, a, u, o, l), this.processChildNodes(c.node, t, a, r, n, p), g))) : (r[d] = h, this.keepIntermediateTensors && (this.clonedTensorsMap[d] = this.cloneTensorList(h)), this.checkTensorForDisposal(d, c.node, r, a, u, o, l), this.processChildNodes(c.node, t, a, r, n, p));
      } else
        this.processChildNodes(c.node, t, a, r, n, p);
    }
    return m;
  }
  processChildNodes(e, t, a, r, n, u) {
    e.children.forEach((o) => {
      const [l] = B(o.name, a);
      n[l] || !u.has(o.name) || (o.op === "Merge" ? o.inputNames.some((p) => !!E(p, r, a)) && (n[l] = !0, t.push({ contexts: a.currentContext, node: o })) : o.inputNames.every((p) => !!E(p, r, a)) && (n[l] = !0, t.push({ contexts: a.currentContext, node: o })));
    });
  }
  /**
   * Releases the memory used by the weight tensors.
   */
  dispose() {
    Object.keys(this.weightMap).forEach((e) => this.weightMap[e].forEach((t) => t.dispose()));
  }
  checkInputShapeAndType(e) {
    Object.keys(e).forEach((t) => {
      const a = e[t], [r] = $(t), n = this.graph.nodes[r];
      if (n.attrParams.shape && n.attrParams.shape.value) {
        const u = n.attrParams.shape.value, o = u.length === a.shape.length && a.shape.every((l, p) => u[p] === -1 || u[p] === l);
        w(o, () => `The shape of dict['${n.name}'] provided in model.execute(dict) must be [${u}], but was [${a.shape}]`);
      }
      n.attrParams.dtype && n.attrParams.dtype.value && w(a.dtype === n.attrParams.dtype.value, () => `The dtype of dict['${n.name}'] provided in model.execute(dict) must be ${n.attrParams.dtype.value}, but was ${a.dtype}`);
    });
  }
  mapInputs(e) {
    var t, a;
    const r = {};
    for (const n in e) {
      const u = (a = (t = this._signature) === null || t === void 0 ? void 0 : t.inputs) === null || a === void 0 ? void 0 : a[n];
      u != null ? r[u.name] = e[n] : r[n] = e[n];
    }
    return r;
  }
  checkInputs(e) {
    const t = Object.keys(e).filter((a) => {
      const [r] = $(a);
      return this.graph.nodes[r] == null;
    });
    if (t.length > 0)
      throw new Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`);
  }
  mapOutputs(e) {
    return e.map((t) => {
      var a, r;
      const n = (r = (a = this._signature) === null || a === void 0 ? void 0 : a.outputs) === null || r === void 0 ? void 0 : r[t];
      return n != null ? n.name : t;
    }, {});
  }
  checkOutputs(e) {
    e.forEach((t) => {
      const [a] = $(t);
      if (!this.graph.nodes[a])
        throw new Error(`The output '${t}' is not found in the graph`);
    });
  }
}
class kb {
  constructor(e = {}, t = {}) {
    this.hashTableNameToHandle = e, this.hashTableMap = t;
  }
  /**
   * Register a `HashTable` in the resource manager.
   *
   * The `HashTable` can be retrieved by `resourceManager.getHashTableById`,
   * where id is the table handle tensor's id.
   *
   * @param name Op node name that creates the `HashTable`.
   * @param hashTable The `HashTable` to be added to resource manager.
   */
  addHashTable(e, t) {
    this.hashTableNameToHandle[e] = t.handle, this.hashTableMap[t.id] = t;
  }
  /**
   * Get the table handle by node name.
   * @param name Op node name that creates the `HashTable`. This name is also
   *     used in the inputs list of lookup and import `HashTable` ops.
   */
  getHashTableHandleByName(e) {
    return this.hashTableNameToHandle[e];
  }
  /**
   * Get the actual `HashTable` by its handle tensor's id.
   * @param id The id of the handle tensor.
   */
  getHashTableById(e) {
    return this.hashTableMap[e];
  }
  /**
   * Dispose `ResourceManager`, including its hashTables and tensors in them.
   */
  dispose() {
    for (const e in this.hashTableMap)
      this.hashTableMap[e].clearAndClose(), delete this.hashTableMap[e];
    for (const e in this.hashTableNameToHandle)
      this.hashTableNameToHandle[e].dispose(), delete this.hashTableNameToHandle[e];
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Ib = "?tfjs-format=file", $b = "model.json";
class Et {
  // Returns the version information for the tensorflow model GraphDef.
  get modelVersion() {
    return this.version;
  }
  get inputNodes() {
    return this.executor.inputNodes;
  }
  get outputNodes() {
    return this.executor.outputNodes;
  }
  get inputs() {
    return this.executor.inputs;
  }
  get outputs() {
    return this.executor.outputs;
  }
  get weights() {
    return this.executor.weightMap;
  }
  get metadata() {
    return this.artifacts.userDefinedMetadata;
  }
  get modelSignature() {
    return this.signature;
  }
  get modelStructuredOutputKeys() {
    return this.structuredOutputKeys;
  }
  /**
   * @param modelUrl url for the model, or an `io.IOHandler`.
   * @param weightManifestUrl url for the weight file generated by
   * scripts/convert.py script.
   * @param requestOption options for Request, which allows to send credentials
   * and custom headers.
   * @param onProgress Optional, progress callback function, fired periodically
   * before the load is completed.
   */
  constructor(e, t = {}, a = Tt) {
    this.modelUrl = e, this.loadOptions = t, this.version = "n/a", this.io = a, t == null && (this.loadOptions = {}), this.resourceManager = new kb();
  }
  findIOHandler() {
    const e = this.modelUrl;
    if (e.load != null)
      this.handler = e;
    else if (this.loadOptions.requestInit != null)
      this.handler = this.io.browserHTTPRequest(e, this.loadOptions);
    else {
      const t = this.io.getLoadHandlers(e, this.loadOptions);
      if (t.length === 0)
        t.push(this.io.browserHTTPRequest(e, this.loadOptions));
      else if (t.length > 1)
        throw new Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);
      this.handler = t[0];
    }
  }
  /**
   * Loads the model and weight files, construct the in memory weight map and
   * compile the inference graph.
   */
  load() {
    if (this.findIOHandler(), this.handler.load == null)
      throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");
    const e = this.handler.load();
    return Ae(e) ? e.then((t) => t.getWeightStream == null ? this.loadSync(t) : this.loadStreaming(t)) : this.loadSync(e);
  }
  /**
   * Synchronously construct the in memory weight map and
   * compile the inference graph.
   *
   * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
   */
  loadSync(e) {
    const t = this.io.decodeWeights(e.weightData, e.weightSpecs);
    return this.loadWithWeightMap(e, t);
  }
  async loadStreaming(e) {
    if (e.getWeightStream == null)
      throw new Error("Model artifacts missing streamWeights function");
    const t = await gs(e.getWeightStream(), e.weightSpecs);
    return this.loadWithWeightMap(e, t);
  }
  loadWithWeightMap(e, t) {
    this.artifacts = e;
    const a = this.artifacts.modelTopology;
    let r = this.artifacts.signature;
    if (this.artifacts.userDefinedMetadata != null) {
      const n = this.artifacts.userDefinedMetadata;
      n.signature != null && (r = n.signature), n.structuredOutputKeys != null && (this.structuredOutputKeys = n.structuredOutputKeys);
    }
    if (this.signature = r, this.version = `${a.versions.producer}.${a.versions.minConsumer}`, this.executor = new Ie(jt.Instance.transformGraph(a, this.signature)), this.executor.weightMap = this.convertTensorMapToTensorsMap(t), this.executor.resourceManager = this.resourceManager, e.modelInitializer != null && e.modelInitializer.node != null) {
      const n = jt.Instance.transformGraph(e.modelInitializer);
      this.initializer = new Ie(n), this.initializer.weightMap = this.executor.weightMap, this.initializer.resourceManager = this.resourceManager, this.initializerSignature = e.initializerSignature;
    }
    return !0;
  }
  /**
   * Save the configuration and/or weights of the GraphModel.
   *
   * An `IOHandler` is an object that has a `save` method of the proper
   * signature defined. The `save` method manages the storing or
   * transmission of serialized data ("artifacts") that represent the
   * model's topology and weights onto or via a specific medium, such as
   * file downloads, local storage, IndexedDB in the web browser and HTTP
   * requests to a server. TensorFlow.js provides `IOHandler`
   * implementations for a number of frequently used saving mediums, such as
   * `tf.io.browserDownloads` and `tf.io.browserLocalStorage`. See `tf.io`
   * for more details.
   *
   * This method also allows you to refer to certain types of `IOHandler`s
   * as URL-like string shortcuts, such as 'localstorage://' and
   * 'indexeddb://'.
   *
   * Example 1: Save `model`'s topology and weights to browser [local
   * storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage);
   * then load it back.
   *
   * ```js
   * const modelUrl =
   *    'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
   * const model = await tf.loadGraphModel(modelUrl);
   * const zeros = tf.zeros([1, 224, 224, 3]);
   * model.predict(zeros).print();
   *
   * const saveResults = await model.save('localstorage://my-model-1');
   *
   * const loadedModel = await tf.loadGraphModel('localstorage://my-model-1');
   * console.log('Prediction from loaded model:');
   * model.predict(zeros).print();
   * ```
   *
   * @param handlerOrURL An instance of `IOHandler` or a URL-like,
   * scheme-based string shortcut for `IOHandler`.
   * @param config Options for saving the model.
   * @returns A `Promise` of `SaveResult`, which summarizes the result of
   * the saving, such as byte sizes of the saved artifacts for the model's
   *   topology and weight values.
   *
   * @doc {heading: 'Models', subheading: 'Classes', ignoreCI: true}
   */
  async save(e, t) {
    if (typeof e == "string") {
      const a = this.io.getSaveHandlers(e);
      if (a.length === 0)
        throw new Error(`Cannot find any save handlers for URL '${e}'`);
      if (a.length > 1)
        throw new Error(`Found more than one (${a.length}) save handlers for URL '${e}'`);
      e = a[0];
    }
    if (e.save == null)
      throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");
    return e.save(this.artifacts);
  }
  addStructuredOutputNames(e) {
    if (this.structuredOutputKeys) {
      const t = e instanceof me ? [e] : e, a = {};
      return t.forEach((r, n) => a[this.structuredOutputKeys[n]] = r), a;
    }
    return e;
  }
  /**
   * Execute the inference for the input tensors.
   *
   * @param input The input tensors, when there is single input for the model,
   * inputs param should be a `tf.Tensor`. For models with mutliple inputs,
   * inputs params should be in either `tf.Tensor`[] if the input order is
   * fixed, or otherwise NamedTensorMap format.
   *
   * For model with multiple inputs, we recommend you use NamedTensorMap as the
   * input type, if you use `tf.Tensor`[], the order of the array needs to
   * follow the
   * order of inputNodes array. @see {@link GraphModel.inputNodes}
   *
   * You can also feed any intermediate nodes using the NamedTensorMap as the
   * input type. For example, given the graph
   *    InputNode => Intermediate => OutputNode,
   * you can execute the subgraph Intermediate => OutputNode by calling
   *    model.execute('IntermediateNode' : tf.tensor(...));
   *
   * This is useful for models that uses tf.dynamic_rnn, where the intermediate
   * state needs to be fed manually.
   *
   * For batch inference execution, the tensors for each input need to be
   * concatenated together. For example with mobilenet, the required input shape
   * is [1, 244, 244, 3], which represents the [batch, height, width, channel].
   * If we are provide a batched data of 100 images, the input tensor should be
   * in the shape of [100, 244, 244, 3].
   *
   * @param config Prediction configuration for specifying the batch size.
   * Currently the batch size option is ignored for graph model.
   *
   * @returns Inference result tensors. If the model is converted and it
   * originally had structured_outputs in tensorflow, then a NamedTensorMap
   * will be returned matching the structured_outputs. If no structured_outputs
   * are present, the output will be single `tf.Tensor` if the model has single
   * output node, otherwise Tensor[].
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  predict(e, t) {
    const a = this.execute(e, this.outputNodes);
    return this.addStructuredOutputNames(a);
  }
  /**
   * Execute the inference for the input tensors in async fashion, use this
   * method when your model contains control flow ops.
   *
   * @param input The input tensors, when there is single input for the model,
   * inputs param should be a `tf.Tensor`. For models with mutliple inputs,
   * inputs params should be in either `tf.Tensor`[] if the input order is
   * fixed, or otherwise NamedTensorMap format.
   *
   * For model with multiple inputs, we recommend you use NamedTensorMap as the
   * input type, if you use `tf.Tensor`[], the order of the array needs to
   * follow the
   * order of inputNodes array. @see {@link GraphModel.inputNodes}
   *
   * You can also feed any intermediate nodes using the NamedTensorMap as the
   * input type. For example, given the graph
   *    InputNode => Intermediate => OutputNode,
   * you can execute the subgraph Intermediate => OutputNode by calling
   *    model.execute('IntermediateNode' : tf.tensor(...));
   *
   * This is useful for models that uses tf.dynamic_rnn, where the intermediate
   * state needs to be fed manually.
   *
   * For batch inference execution, the tensors for each input need to be
   * concatenated together. For example with mobilenet, the required input shape
   * is [1, 244, 244, 3], which represents the [batch, height, width, channel].
   * If we are provide a batched data of 100 images, the input tensor should be
   * in the shape of [100, 244, 244, 3].
   *
   * @param config Prediction configuration for specifying the batch size.
   * Currently the batch size option is ignored for graph model.
   *
   * @returns A Promise of inference result tensors. If the model is converted
   * and it originally had structured_outputs in tensorflow, then a
   * NamedTensorMap will be returned matching the structured_outputs. If no
   * structured_outputs are present, the output will be single `tf.Tensor` if
   * the model has single output node, otherwise Tensor[].
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  async predictAsync(e, t) {
    const a = await this.executeAsync(e, this.outputNodes);
    return this.addStructuredOutputNames(a);
  }
  normalizeInputs(e) {
    var t;
    if (!(e instanceof me) && !Array.isArray(e)) {
      const n = (t = this.signature) === null || t === void 0 ? void 0 : t.inputs;
      if (n != null)
        for (const u in n) {
          const o = n[u];
          o.resourceId != null && (e[u] = this.resourceIdToCapturedInput[o.resourceId]);
        }
      return e;
    }
    e = Array.isArray(e) ? e : [e];
    const a = Object.keys(this.resourceIdToCapturedInput).length;
    if (e.length + a !== this.inputNodes.length)
      throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length - a} non-resource placeholders, while there are ${e.length} input tensors provided.`);
    let r = 0;
    return this.inputNodes.reduce((n, u) => {
      var o, l, p;
      const m = (p = (l = (o = this.signature) === null || o === void 0 ? void 0 : o.inputs) === null || l === void 0 ? void 0 : l[u]) === null || p === void 0 ? void 0 : p.resourceId;
      return m != null ? n[u] = this.resourceIdToCapturedInput[m] : n[u] = e[r++], n;
    }, {});
  }
  normalizeOutputs(e) {
    return e = e || this.outputNodes, Array.isArray(e) ? e : [e];
  }
  executeInitializerGraph() {
    return this.initializer == null ? [] : this.initializerSignature == null ? this.initializer.execute({}, []) : this.initializer.execute({}, Object.keys(this.initializerSignature.outputs));
  }
  async executeInitializerGraphAsync() {
    return this.initializer == null ? [] : this.initializerSignature == null ? this.initializer.executeAsync({}, []) : this.initializer.executeAsync({}, Object.keys(this.initializerSignature.outputs));
  }
  setResourceIdToCapturedInput(e) {
    if (this.resourceIdToCapturedInput = {}, this.initializerSignature) {
      const t = this.initializerSignature.outputs, a = Object.keys(t);
      for (let r = 0; r < a.length; r++) {
        const n = a[r], u = t[n];
        this.resourceIdToCapturedInput[u.resourceId] = e[r];
      }
    }
  }
  /**
   * Executes inference for the model for given input tensors.
   * @param inputs tensor, tensor array or tensor map of the inputs for the
   * model, keyed by the input node names.
   * @param outputs output node name from the TensorFlow model, if no
   * outputs are specified, the default outputs of the model would be used.
   * You can inspect intermediate nodes of the model by adding them to the
   * outputs array.
   *
   * @returns A single tensor if provided with a single output or no outputs
   * are provided and there is only one default output, otherwise return a
   * tensor array. The order of the tensor array is the same as the outputs
   * if provided, otherwise the order of outputNodes attribute of the model.
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  execute(e, t) {
    this.resourceIdToCapturedInput == null && this.setResourceIdToCapturedInput(this.executeInitializerGraph()), e = this.normalizeInputs(e), t = this.normalizeOutputs(t);
    const a = this.executor.execute(e, t);
    return a.length > 1 ? a : a[0];
  }
  /**
   * Executes inference for the model for given input tensors in async
   * fashion, use this method when your model contains control flow ops.
   * @param inputs tensor, tensor array or tensor map of the inputs for the
   * model, keyed by the input node names.
   * @param outputs output node name from the TensorFlow model, if no outputs
   * are specified, the default outputs of the model would be used. You can
   * inspect intermediate nodes of the model by adding them to the outputs
   * array.
   *
   * @returns A Promise of single tensor if provided with a single output or
   * no outputs are provided and there is only one default output, otherwise
   * return a tensor map.
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  async executeAsync(e, t) {
    this.resourceIdToCapturedInput == null && this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()), e = this.normalizeInputs(e), t = this.normalizeOutputs(t);
    const a = await this.executor.executeAsync(e, t);
    return a.length > 1 ? a : a[0];
  }
  /**
   * Get intermediate tensors for model debugging mode (flag
   * KEEP_INTERMEDIATE_TENSORS is true).
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  getIntermediateTensors() {
    return this.executor.getIntermediateTensors();
  }
  /**
   * Dispose intermediate tensors for model debugging mode (flag
   * KEEP_INTERMEDIATE_TENSORS is true).
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  disposeIntermediateTensors() {
    this.executor.disposeIntermediateTensors();
  }
  convertTensorMapToTensorsMap(e) {
    return Object.keys(e).reduce((t, a) => (t[a] = [e[a]], t), {});
  }
  /**
   * Releases the memory used by the weight tensors and resourceManager.
   *
   * @doc {heading: 'Models', subheading: 'Classes'}
   */
  dispose() {
    this.executor.dispose(), this.initializer && (this.initializer.dispose(), this.resourceIdToCapturedInput && en(this.resourceIdToCapturedInput)), this.resourceManager.dispose();
  }
}
async function Db(s, e = {}, t = Tt) {
  if (s == null)
    throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");
  e == null && (e = {}), e.fromTFHub && typeof s == "string" && (s = zb(s));
  const a = new Et(s, e, t);
  return await a.load(), a;
}
function Cb(s) {
  if (s == null)
    throw new Error("modelUrl in loadGraphModelSync() cannot be null. Please provide model artifacts or an IOHandler that loads the model");
  let e;
  if (s instanceof Array) {
    const [a, r] = s;
    if (!a)
      throw new Error("modelJSON must be the first element of the array");
    if (!r || !(r instanceof ArrayBuffer))
      throw new Error("An ArrayBuffer of weights must be the second element of the array");
    if (!("modelTopology" in a))
      throw new Error("Model JSON is missing 'modelTopology'");
    if (!("weightsManifest" in a))
      throw new Error("Model JSON is missing 'weightsManifest'");
    const n = Ns(a.weightsManifest), u = bs(a, n, r);
    e = Ee(u);
  } else if ("load" in s)
    e = s;
  else if ("modelTopology" in s && "weightSpecs" in s && "weightData" in s)
    e = Ee(s);
  else
    throw new Error("Unknown model format");
  const t = new Et(e);
  return t.load(), t;
}
function zb(s) {
  return s.endsWith("/") || (s = s + "/"), `${s}${$b}${Ib}`;
}
/** @license See the LICENSE file. */
const oi = "4.16.0";
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class ui extends gt {
  /**
   * Create a `TextLineDataset`.
   *
   * @param input A `DataSource` providing a chunked, UTF8-encoded byte stream.
   */
  constructor(e) {
    super(), this.input = e;
  }
  async iterator() {
    return (await this.input.iterator()).decodeUTF8().split(`
`).map((r) => (r.endsWith("\r") && (r = r.slice(0, -1)), r));
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
const be = '"', oe = Symbol("out"), Kt = Symbol("field"), Ne = Symbol("quote"), Pe = Symbol("quoteafterquote"), Jt = Symbol("quoteinquote");
class li extends gt {
  /**
   * Returns column names of the csv dataset. If `configuredColumnsOnly` is
   * true, return column names in `columnConfigs`. If `configuredColumnsOnly` is
   * false and `columnNames` is provided, `columnNames`. If
   * `configuredColumnsOnly` is false and `columnNames` is not provided, return
   * all column names parsed from the csv file. For example usage please go to
   * `tf.data.csv`.
   *
   * @doc {heading: 'Data', subheading: 'Classes'}
   */
  async columnNames() {
    return this.columnNamesValidated || await this.setColumnNames(), this.configuredColumnsOnly ? Object.keys(this.columnConfigs) : this.fullColumnNames;
  }
  /* 1) If `columnNames` is provided as string[], use this string[] as output
   * keys in corresponding order. The length must match the number of inferred
   * columns if `hasHeader` is true .
   * 2) If `columnNames` is not provided, parse header line as `columnNames` if
   * hasHeader is true. If `hasHeader` is false, throw an error.
   * 3) If `columnConfigs` is provided, all the keys in `columnConfigs` must
   * exist in parsed `columnNames`.
   */
  async setColumnNames() {
    const e = await this.maybeReadHeaderLine();
    if (!this.fullColumnNames && !e)
      throw new Error("Column names must be provided if there is no header line.");
    this.fullColumnNames && e && w(e.length === this.fullColumnNames.length, () => "The length of provided columnNames (" + this.fullColumnNames.length.toString() + ") does not match the length of the header line read from file (" + e.length.toString() + ")."), this.fullColumnNames || (this.fullColumnNames = e);
    const t = this.fullColumnNames.reduce((r, n) => (r[n] = r[n] + 1 || 1, r), {}), a = Object.keys(t).filter((r) => t[r] > 1);
    if (w(a.length === 0, () => "Duplicate column names found: " + a.toString()), this.columnConfigs) {
      for (const r of Object.keys(this.columnConfigs))
        if (this.fullColumnNames.indexOf(r) === -1)
          throw new Error('The key "' + r + '" provided in columnConfigs does not match any of the column names (' + this.fullColumnNames.toString() + ").");
    }
    this.columnNamesValidated = !0;
  }
  async maybeReadHeaderLine() {
    if (this.hasHeader) {
      const t = await (await this.base.iterator()).next();
      if (t.done)
        throw new Error("No data was found for CSV parsing.");
      const a = t.value;
      return this.parseRow(a, !1);
    } else
      return null;
  }
  /**
   * Create a `CSVDataset`.
   *
   * @param input A `DataSource` providing a chunked, UTF8-encoded byte stream.
   * @param csvConfig (Optional) A CSVConfig object that contains configurations
   *     of reading and decoding from CSV file(s).
   *
   *     hasHeader: (Optional) A boolean value that indicates whether the first
   *     row of provided CSV file is a header line with column names, and should
   *     not be included in the data. Defaults to `true`.
   *
   *     columnNames: (Optional) A list of strings that corresponds to
   *     the CSV column names, in order. If provided, it ignores the column
   *     names inferred from the header row. If not provided, infers the column
   *     names from the first row of the records. If hasHeader is false and
   *     columnNames is not provided, this method throws an error.
   *
   *     columnConfigs: (Optional) A dictionary whose key is column names, value
   *     is an object stating if this column is required, column's data type,
   *     default value, and if this column is label. If provided, keys must
   *     correspond to names provided in columnNames or inferred from the file
   *     header lines. If isLabel is true any column, returns an array of two
   *     items: the first item is a dict of features key/value pairs, the second
   *     item is a dict of labels key/value pairs. If no feature is marked as
   *     label, returns a dict of features only.
   *
   *     configuredColumnsOnly (Optional) If true, only columns provided in
   *     columnConfigs will be parsed and provided during iteration.
   *
   *     delimiter (Optional) The string used to parse each line of the input
   *     file. Defaults to `,`.
   */
  constructor(e, t) {
    super(), this.input = e, this.hasHeader = !0, this.fullColumnNames = null, this.columnNamesValidated = !1, this.columnConfigs = null, this.configuredColumnsOnly = !1, this.delimiter = ",", this.delimWhitespace = !1, this.base = new ui(e), t || (t = {}), this.hasHeader = t.hasHeader !== !1, this.fullColumnNames = t.columnNames, this.columnConfigs = t.columnConfigs, this.configuredColumnsOnly = t.configuredColumnsOnly, t.delimWhitespace ? (w(t.delimiter == null, () => "Delimiter should not be provided when delimWhitespace is true."), this.delimWhitespace = !0, this.delimiter = " ") : this.delimiter = t.delimiter ? t.delimiter : ",";
  }
  async iterator() {
    this.columnNamesValidated || await this.setColumnNames();
    let e = await this.base.iterator();
    return this.hasHeader && (e = e.skip(1)), e.map((t) => this.makeDataElement(t));
  }
  makeDataElement(e) {
    const t = this.parseRow(e), a = {}, r = {};
    for (let n = 0; n < this.fullColumnNames.length; n++) {
      const u = this.fullColumnNames[n], o = this.columnConfigs ? this.columnConfigs[u] : null;
      if (!(this.configuredColumnsOnly && !o)) {
        const l = t[n];
        let p = null;
        if (l === "")
          if (o && o.default !== void 0)
            p = o.default;
          else {
            if (o && (o.required || o.isLabel))
              throw new Error(`Required column ${u} is empty in this line: ${e}`);
            p = void 0;
          }
        else {
          const m = Number(l);
          if (isNaN(m))
            o && o.dtype === "bool" ? p = this.getBoolean(l) : p = l;
          else if (!o || !o.dtype)
            p = m;
          else
            switch (o.dtype) {
              case "float32":
                p = m;
                break;
              case "int32":
                p = Math.floor(m);
                break;
              case "bool":
                p = this.getBoolean(l);
                break;
              default:
                p = m;
            }
        }
        o && o.isLabel ? r[u] = p : a[u] = p;
      }
    }
    return Object.keys(r).length === 0 ? a : { xs: a, ys: r };
  }
  getBoolean(e) {
    return e === "1" || e.toLowerCase() === "true" ? 1 : 0;
  }
  // adapted from https://beta.observablehq.com/@mbostock/streaming-csv
  parseRow(e, t = !0) {
    const a = [];
    let r = 0;
    const n = e.length;
    let u = oe;
    for (let o = 0; o < n; o++)
      switch (u) {
        case oe:
          switch (e.charAt(o)) {
            case be:
              r = o + 1, u = Ne;
              break;
            case this.delimiter:
              if (r = o + 1, this.delimiter === " " && this.delimWhitespace)
                break;
              a.push(""), u = oe;
              break;
            default:
              u = Kt, r = o;
              break;
          }
          break;
        case Kt:
          switch (e.charAt(o)) {
            case this.delimiter:
              a.push(e.substring(r, o)), u = oe, r = o + 1;
              break;
          }
          break;
        case Ne:
          switch (e.charAt(o)) {
            case be:
              u = Pe;
              break;
          }
          break;
        case Pe:
          switch (e.charAt(o)) {
            case this.delimiter:
              a.push(e.substring(r, o - 1)), u = oe, r = o + 1;
              break;
            case be:
              u = Ne;
              break;
            default:
              u = Jt;
              break;
          }
          break;
        case Jt:
          switch (e.charAt(o)) {
            case be:
              u = Ne;
              break;
          }
          break;
      }
    if (u === Pe ? a.push(e.substring(r, n - 1)) : a.push(e.substring(r)), t && a.length !== this.fullColumnNames.length)
      throw new Error(`Invalid row in csv file. Should have ${this.fullColumnNames.length} elements in a row, but got ${a}`);
    return a;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class kt extends De {
  constructor(e) {
    super(), this.microphoneConfig = e, this.isClosed = !1, this.fftSize = e.fftSize || 1024;
    const t = Math.log2(this.fftSize);
    if (this.fftSize < 0 || t < 4 || t > 14 || !Number.isInteger(t))
      throw new Error(`Invalid fftSize: it must be a power of 2 between 2 to 4 and 2 to 14, but got ${this.fftSize}`);
    if (this.numFrames = e.numFramesPerSpectrogram || 43, this.sampleRateHz = e.sampleRateHz, this.columnTruncateLength = e.columnTruncateLength || this.fftSize, this.audioTrackConstraints = e.audioTrackConstraints, this.smoothingTimeConstant = e.smoothingTimeConstant || 0, this.includeSpectrogram = e.includeSpectrogram !== !1, this.includeWaveform = e.includeWaveform === !0, !this.includeSpectrogram && !this.includeWaveform)
      throw new Error("Both includeSpectrogram and includeWaveform are false. At least one type of data should be returned.");
  }
  summary() {
    return "microphone";
  }
  // Construct a MicrophoneIterator and start the audio stream.
  static async create(e = {}) {
    if (!P().get("IS_BROWSER"))
      throw new Error("microphone API is only supported in browser environment.");
    const t = new kt(e);
    return await t.start(), t;
  }
  // Start the audio stream and FFT.
  async start() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: this.audioTrackConstraints == null ? !0 : this.audioTrackConstraints,
        video: !1
      });
    } catch (a) {
      throw new Error(`Error thrown while initializing video stream: ${a.message}`);
    }
    if (!this.stream)
      throw new Error("Could not obtain audio from microphone.");
    const e = (
      // tslint:disable-next-line:no-any
      window.AudioContext || window.webkitAudioContext
    );
    if (this.audioContext = new e(), !this.sampleRateHz)
      this.sampleRateHz = this.audioContext.sampleRate;
    else if (this.audioContext.sampleRate !== this.sampleRateHz)
      throw new Error(`Mismatch in sampling rate: Expected: ${this.sampleRateHz}; Actual: ${this.audioContext.sampleRate}`);
    const t = this.audioContext.createMediaStreamSource(this.stream);
    this.analyser = this.audioContext.createAnalyser(), this.analyser.fftSize = this.fftSize * 2, this.analyser.smoothingTimeConstant = this.smoothingTimeConstant, t.connect(this.analyser), this.freqData = new Float32Array(this.fftSize), this.timeData = new Float32Array(this.fftSize);
  }
  async next() {
    if (this.isClosed)
      return { value: null, done: !0 };
    let e, t;
    const a = await this.getAudioData();
    if (this.includeSpectrogram) {
      const r = this.flattenQueue(a.freqDataQueue);
      e = this.getTensorFromAudioDataArray(r, [this.numFrames, this.columnTruncateLength, 1]);
    }
    if (this.includeWaveform) {
      const r = this.flattenQueue(a.timeDataQueue);
      t = this.getTensorFromAudioDataArray(r, [this.numFrames * this.fftSize, 1]);
    }
    return {
      value: { spectrogram: e, waveform: t },
      done: !1
    };
  }
  // Capture one result from the audio stream, and extract the value from
  // iterator.next() result.
  async capture() {
    return (await this.next()).value;
  }
  async getAudioData() {
    const e = [], t = [];
    let a = 0;
    return new Promise((r) => {
      const n = setInterval(() => {
        this.includeSpectrogram && (this.analyser.getFloatFrequencyData(this.freqData), this.freqData[0] === -1 / 0 && r({ freqDataQueue: e, timeDataQueue: t }), e.push(this.freqData.slice(0, this.columnTruncateLength))), this.includeWaveform && (this.analyser.getFloatTimeDomainData(this.timeData), t.push(this.timeData.slice())), ++a === this.numFrames && (clearInterval(n), r({ freqDataQueue: e, timeDataQueue: t }));
      }, this.fftSize / this.sampleRateHz * 1e3);
    });
  }
  // Stop the audio stream and pause the iterator.
  stop() {
    this.isClosed || (this.isClosed = !0, this.analyser.disconnect(), this.audioContext.close(), this.stream != null && this.stream.getTracks().length > 0 && this.stream.getTracks()[0].stop());
  }
  // Override toArray() function to prevent collecting.
  toArray() {
    throw new Error("Can not convert infinite audio stream to array.");
  }
  // Return audio sampling rate in Hz
  getSampleRate() {
    return this.sampleRateHz;
  }
  flattenQueue(e) {
    const t = e[0].length, a = new Float32Array(e.length * t);
    return e.forEach((r, n) => a.set(r, n * t)), a;
  }
  getTensorFromAudioDataArray(e, t) {
    const a = new Float32Array(pe(t));
    return a.set(e, a.length - e.length), q(a, t);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class It extends De {
  constructor(e, t) {
    if (super(), this.webcamVideoElement = e, this.webcamConfig = t, this.isClosed = !0, this.resize = !1, this.needToResize())
      if (this.resize = !0, this.cropSize = [this.webcamConfig.resizeHeight, this.webcamConfig.resizeWidth], this.cropBoxInd = yt([0], "int32"), this.webcamConfig.centerCrop) {
        const a = this.webcamConfig.resizeWidth * 1 / this.webcamVideoElement.width, r = this.webcamConfig.resizeHeight * 1 / this.webcamVideoElement.height, n = (1 - a) / 2, u = (1 - r) / 2, o = n + a, l = r + u;
        this.cropBox = _e([u, n, l, o], [1, 4]);
      } else
        this.cropBox = _e([0, 0, 1, 1], [1, 4]);
  }
  summary() {
    return "webcam";
  }
  // Construct a WebcamIterator and start it's video stream.
  static async create(e, t = {}) {
    if (!P().get("IS_BROWSER"))
      throw new Error("tf.data.webcam is only supported in browser environment.");
    if (!e) {
      if (e = document.createElement("video"), !t.resizeWidth || !t.resizeHeight)
        throw new Error("Please provide webcam video element, or resizeWidth and resizeHeight to create a hidden video element.");
      e.width = t.resizeWidth, e.height = t.resizeHeight;
    }
    const a = new It(e, t);
    return await a.start(), a;
  }
  // Async function to start video stream.
  async start() {
    this.webcamConfig.facingMode && w(this.webcamConfig.facingMode === "user" || this.webcamConfig.facingMode === "environment", () => `Invalid webcam facing mode: ${this.webcamConfig.facingMode}. Please provide 'user' or 'environment'`);
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: this.webcamConfig.deviceId,
          facingMode: this.webcamConfig.facingMode ? this.webcamConfig.facingMode : "user",
          width: this.webcamVideoElement.width,
          height: this.webcamVideoElement.height
        }
      });
    } catch (e) {
      throw e.message = `Error thrown while initializing video stream: ${e.message}`, e;
    }
    if (!this.stream)
      throw new Error("Could not obtain video from webcam.");
    try {
      this.webcamVideoElement.srcObject = this.stream;
    } catch (e) {
      console.log(e), this.webcamVideoElement.src = window.URL.createObjectURL(this.stream);
    }
    return this.webcamVideoElement.play(), this.isClosed = !1, new Promise((e) => {
      this.webcamVideoElement.onloadedmetadata = () => {
        e();
      };
    });
  }
  async next() {
    if (this.isClosed)
      return { value: null, done: !0 };
    let e;
    try {
      e = ul(this.webcamVideoElement);
    } catch (t) {
      throw new Error(`Error thrown converting video to pixels: ${JSON.stringify(t)}`);
    }
    if (this.resize)
      try {
        return { value: this.cropAndResizeFrame(e), done: !1 };
      } catch (t) {
        throw new Error(`Error thrown cropping the video: ${t.message}`);
      } finally {
        e.dispose();
      }
    else
      return { value: e, done: !1 };
  }
  needToResize() {
    return !!(this.webcamConfig.resizeWidth && this.webcamConfig.resizeHeight && (this.webcamVideoElement.width !== this.webcamConfig.resizeWidth || this.webcamVideoElement.height !== this.webcamConfig.resizeHeight));
  }
  // Cropping and resizing each frame based on config
  cropAndResizeFrame(e) {
    return L(() => {
      const t = ht(ee(e, "float32"), 0);
      let a;
      a = ft.cropAndResize(t, this.cropBox, this.cropBoxInd, this.cropSize, "bilinear");
      const r = a.shape;
      return v(a, r.slice(1));
    });
  }
  // Capture one frame from the video stream, and extract the value from
  // iterator.next() result.
  async capture() {
    return (await this.next()).value;
  }
  // Stop the video stream and pause webcam iterator.
  stop() {
    this.stream.getTracks().forEach((t) => t.stop());
    try {
      this.webcamVideoElement.srcObject = null;
    } catch (t) {
      console.log(t), this.webcamVideoElement.src = null;
    }
    this.isClosed = !0;
  }
  // Override toArray() function to prevent collecting.
  toArray() {
    throw new Error("Can not convert infinite video stream to array.");
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class pi {
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class mi extends De {
  /**
   * Splits a string stream on a given separator.
   *
   * It is assumed that the incoming chunk boundaries have no semantic meaning,
   * so conceptually the incoming stream is treated simply as the concatenation
   * of its elements.
   *
   * The outgoing stream provides chunks corresponding to the results of the
   * standard string split() operation (even if such a chunk spanned incoming
   * chunks).  The separators are not included.
   *
   * A typical usage is to split a text file (represented as a stream with
   * arbitrary chunk boundaries) into lines.
   *
   * @param upstream A readable stream of strings that can be treated as
   *   concatenated.
   * @param separator A character to split on.
   */
  split(e) {
    return new xb(this, e);
  }
}
class xb extends mi {
  constructor(e, t) {
    super(), this.upstream = e, this.impl = new Lb(e, t);
  }
  summary() {
    return this.impl.summary();
  }
  async next() {
    return this.impl.next();
  }
}
class Lb extends tn {
  constructor(e, t) {
    super(), this.upstream = e, this.separator = t, this.carryover = "";
  }
  summary() {
    return `${this.upstream.summary()} -> Split('${this.separator}')`;
  }
  async pump() {
    const e = await this.upstream.next();
    if (e.done)
      return this.carryover === "" ? !1 : (this.outputQueue.push(this.carryover), this.carryover = "", !0);
    const t = e.value.split(this.separator);
    t[0] = this.carryover + t[0];
    for (const a of t.slice(0, -1))
      this.outputQueue.push(a);
    return this.carryover = t[t.length - 1], !0;
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class Pb extends De {
  /**
   * Decode a stream of UTF8-encoded byte arrays to a stream of strings.
   *
   * The byte arrays producetd from the ByteChunkIterator on which this is
   * called will be interpreted as concatenated.  No assumptions are made about
   * the boundaries of the incoming chunks, so a multi-byte UTF8 encoding of a
   * character may span the boundary between chunks.  This naturally happens,
   * for instance, when reading fixed-size byte arrays from a file.
   */
  decodeUTF8() {
    return new Fb(this);
  }
}
class Fb extends mi {
  constructor(e) {
    super(), this.upstream = e, this.impl = new Vb(e);
  }
  summary() {
    return this.impl.summary();
  }
  async next() {
    return this.impl.next();
  }
}
class Vb extends tn {
  constructor(e) {
    if (super(), this.upstream = e, P().get("IS_BROWSER"))
      this.decoder = new TextDecoder("utf-8");
    else {
      const { StringDecoder: t } = require("string_decoder");
      this.decoder = new t("utf8");
    }
  }
  summary() {
    return `${this.upstream.summary()} -> Utf8`;
  }
  async pump() {
    const e = await this.upstream.next();
    let t;
    if (e.done)
      return !1;
    t = e.value;
    let a;
    return P().get("IS_BROWSER") ? a = this.decoder.decode(t, { stream: !0 }) : a = this.decoder.write(Buffer.from(t.buffer)), this.outputQueue.push(a), !0;
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class ci extends Pb {
  constructor(e, t = {}) {
    super(), this.file = e, this.options = t, w(e instanceof Uint8Array || (P().get("IS_BROWSER") ? e instanceof File || e instanceof Blob : !1), () => "FileChunkIterator only supports File, Blob and Uint8Array right now."), this.offset = t.offset || 0, this.chunkSize = t.chunkSize || 1024 * 1024;
  }
  summary() {
    return `FileChunks ${this.file}`;
  }
  async next() {
    return this.offset >= (this.file instanceof Uint8Array ? this.file.byteLength : this.file.size) ? { value: null, done: !0 } : { value: await new Promise((t, a) => {
      const r = this.offset + this.chunkSize;
      if (this.file instanceof Uint8Array)
        t(new Uint8Array(this.file.slice(this.offset, r)));
      else {
        const n = new FileReader();
        n.onload = (o) => {
          let l = n.result;
          if (l instanceof ArrayBuffer && (l = new Uint8Array(l)), !(l instanceof Uint8Array))
            return a(new TypeError("FileReader returned unknown type."));
          t(l);
        }, n.onabort = (o) => a(new Error("Aborted")), n.onerror = (o) => a(new Error(o.type));
        const u = this.file.slice(this.offset, r);
        n.readAsArrayBuffer(u);
      }
      this.offset = r;
    }), done: !1 };
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
async function Rb(s, e = {}, t) {
  let a, r;
  typeof s == "string" ? a = s : (a = s.url, r = jb(s));
  const n = await (t || ll)(a, r);
  if (n.ok) {
    const u = new Uint8Array(await n.arrayBuffer());
    return new ci(u, e);
  } else
    throw new Error(n.statusText);
}
const jb = (s) => ({
  method: s.method,
  headers: s.headers,
  body: s.body,
  mode: s.mode,
  credentials: s.credentials,
  cache: s.cache,
  redirect: s.redirect,
  referrer: s.referrer,
  integrity: s.integrity
});
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
function di(s) {
  return typeof s == "string" && s.slice(0, 7) === "file://";
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class hi extends pi {
  /**
   * Create a `FileDataSource`.
   *
   * @param input Local file path, or `File`/`Blob`/`Uint8Array` object to
   *     read. Local file only works in node environment.
   * @param options Options passed to the underlying `FileChunkIterator`s,
   *   such as {chunksize: 1024}.
   */
  constructor(e, t = {}) {
    super(), this.input = e, this.options = t;
  }
  async iterator() {
    if (di(this.input) && P().get("IS_NODE")) {
      const e = require("fs");
      this.input = e.readFileSync(this.input.slice(7));
    }
    return new ci(this.input, this.options);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
class fi extends pi {
  /**
   * Create a `URLDataSource`.
   *
   * @param url A source URL string, or a `Request` object.
   * @param options Options passed to the underlying `FileChunkIterator`s,
   *   such as {chunksize: 1024}.
   */
  constructor(e, t = {}) {
    super(), this.url = e, this.fileOptions = t;
  }
  // TODO(soergel): provide appropriate caching options.  Currently this
  // will download the URL anew for each call to iterator().  Since we have
  // to treat the downloaded file as a blob/buffer anyway, we may as well retain
  // it-- but that raises GC issues.  Also we may want a persistent disk cache.
  async iterator() {
    return di(this.url) ? new hi(this.url, this.fileOptions).iterator() : Rb(this.url, this.fileOptions);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
function Bb(s, e = {}) {
  return new li(new fi(s), e);
}
function Hb(s) {
  const e = sn(s);
  return an(async () => e);
}
function Wb(s) {
  return an(async () => {
    const e = await s();
    return sn(() => e.next());
  });
}
async function Ub(s, e) {
  return It.create(s, e);
}
async function qb(s) {
  return kt.create(s);
}
/** @license See the LICENSE file. */
const yi = "4.16.0";
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Gb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CSVDataset: li,
  Dataset: gt,
  FileDataSource: hi,
  TextLineDataset: ui,
  URLDataSource: fi,
  array: pl,
  csv: Bb,
  func: Hb,
  generator: Wb,
  microphone: qb,
  version_data: yi,
  webcam: Ub,
  zip: ml
}, Symbol.toStringTag, { value: "Module" }));
/** @license See the LICENSE file. */
const gi = "4.16.0";
/** @license See the LICENSE file. */
const bi = "4.16.0";
/** @license See the LICENSE file. */
const Kb = "4.16.0";
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Jb = {
  "tfjs-core": Xn,
  "tfjs-backend-cpu": gi,
  "tfjs-backend-webgl": bi,
  "tfjs-data": yi,
  "tfjs-layers": rn,
  "tfjs-converter": oi,
  tfjs: Kb
}, Qb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Abs: cl,
  Acos: dl,
  Acosh: hl,
  AdadeltaOptimizer: fl,
  AdagradOptimizer: yl,
  AdamOptimizer: gl,
  AdamaxOptimizer: bl,
  Add: Nl,
  AddN: Xt,
  All: wl,
  Any: Tl,
  ArgMax: Sl,
  ArgMin: vl,
  Asin: Ol,
  Asinh: _l,
  Atan: Al,
  Atan2: El,
  Atanh: kl,
  AvgPool: Il,
  AvgPool3D: $l,
  AvgPool3DGrad: Dl,
  AvgPoolGrad: Cl,
  BatchMatMul: zl,
  BatchToSpaceND: xl,
  Bincount: Ll,
  BitwiseAnd: Zt,
  BroadcastArgs: Yt,
  BroadcastTo: Pl,
  Callback: si,
  CallbackList: Fl,
  Cast: Vl,
  Ceil: Rl,
  ClipByValue: jl,
  Complex: Bl,
  ComplexAbs: Hl,
  Concat: Wl,
  Conv2D: Ul,
  Conv2DBackpropFilter: ql,
  Conv2DBackpropInput: Gl,
  Conv3D: Kl,
  Conv3DBackpropFilterV2: Jl,
  Conv3DBackpropInputV2: Ql,
  Cos: Xl,
  Cosh: Zl,
  CropAndResize: Yl,
  Cumprod: Ml,
  Cumsum: ep,
  CustomCallback: tp,
  DataStorage: sp,
  DenseBincount: ap,
  DepthToSpace: rp,
  DepthwiseConv2dNative: np,
  DepthwiseConv2dNativeBackpropFilter: ip,
  DepthwiseConv2dNativeBackpropInput: op,
  Diag: Mt,
  Dilation2D: up,
  Dilation2DBackpropFilter: lp,
  Dilation2DBackpropInput: pp,
  Draw: mp,
  get ENV() {
    return cp;
  },
  EarlyStopping: ai,
  Einsum: dp,
  Elu: hp,
  EluGrad: fp,
  Environment: yp,
  Equal: gp,
  Erf: bp,
  Exp: Np,
  ExpandDims: wp,
  Expm1: Tp,
  FFT: Sp,
  Fill: vp,
  FlipLeftRight: Op,
  Floor: _p,
  FloorDiv: Ap,
  FromPixels: Ep,
  FusedBatchNorm: kp,
  FusedConv2D: Ip,
  FusedDepthwiseConv2D: Re,
  GPGPUContext: $p,
  GatherNd: ds,
  GatherV2: Dp,
  GraphModel: Et,
  Greater: Cp,
  GreaterEqual: zp,
  History: xp,
  IFFT: Lp,
  Identity: Pp,
  Imag: Fp,
  InputSpec: Vp,
  IsFinite: Rp,
  IsInf: jp,
  IsNan: Bp,
  KernelBackend: Hp,
  LRN: Wp,
  LRNGrad: Up,
  LayerVariable: qp,
  LayersModel: lt,
  LeakyRelu: Gp,
  Less: Kp,
  LessEqual: Jp,
  LinSpace: es,
  Log: Qp,
  Log1p: Xp,
  LogSoftmax: Zp,
  LogicalAnd: Yp,
  LogicalNot: Mp,
  LogicalOr: em,
  LogicalXor: tm,
  LowerBound: sm,
  MathBackendCPU: am,
  MathBackendWebGL: rm,
  MatrixBandPart: nm,
  Max: im,
  MaxPool: om,
  MaxPool3D: um,
  MaxPool3DGrad: lm,
  MaxPoolGrad: pm,
  MaxPoolWithArgmax: ss,
  Maximum: mm,
  Mean: cm,
  Min: dm,
  Minimum: hm,
  MirrorPad: fm,
  Mod: ym,
  MomentumOptimizer: gm,
  Multinomial: as,
  Multiply: bm,
  Neg: Nm,
  NonMaxSuppressionV3: wm,
  NonMaxSuppressionV4: Tm,
  NonMaxSuppressionV5: Sm,
  NotEqual: vm,
  OP_SCOPE_SUFFIX: Ts,
  OneHot: Om,
  OnesLike: _m,
  Optimizer: Am,
  OptimizerConstructors: Em,
  Pack: km,
  PadV2: Im,
  Pool: $m,
  Pow: Dm,
  Prelu: Cm,
  Prod: zm,
  RMSPropOptimizer: xm,
  RNN: pt,
  RaggedGather: rs,
  RaggedRange: ns,
  RaggedTensorToTensor: is,
  Range: Lm,
  get Rank() {
    return Pm;
  },
  Real: Fm,
  RealDiv: Vm,
  Reciprocal: Rm,
  get Reduction() {
    return jm;
  },
  Relu: Bm,
  Relu6: Hm,
  Reshape: Wm,
  ResizeBilinear: Um,
  ResizeBilinearGrad: qm,
  ResizeNearestNeighbor: Gm,
  ResizeNearestNeighborGrad: Km,
  Reverse: Jm,
  RotateWithOffset: Qm,
  Round: Xm,
  Rsqrt: Zm,
  SGDOptimizer: Ym,
  ScatterNd: ms,
  SearchSorted: ts,
  Select: Mm,
  Selu: ec,
  Sequential: ws,
  Sigmoid: tc,
  Sign: sc,
  Sin: ac,
  Sinh: rc,
  Slice: nc,
  Softmax: ic,
  Softplus: oc,
  SpaceToBatchND: uc,
  SparseFillEmptyRows: lc,
  SparseReshape: pc,
  SparseSegmentMean: mc,
  SparseSegmentSum: cc,
  SparseToDense: cs,
  SplitV: dc,
  Sqrt: hc,
  Square: fc,
  SquaredDifference: yc,
  StaticRegexReplace: gc,
  Step: bc,
  StridedSlice: Nc,
  StringNGrams: wc,
  StringSplit: Tc,
  StringToHashBucketFast: Sc,
  Sub: vc,
  Sum: Oc,
  SymbolicTensor: _c,
  Tan: Ac,
  Tanh: Ec,
  Tensor: me,
  TensorBuffer: Fe,
  TensorScatterUpdate: us,
  Tile: kc,
  TopK: Ic,
  Transform: $c,
  Transpose: Dc,
  Unique: Cc,
  Unpack: zc,
  UnsortedSegmentSum: xc,
  UpperBound: Lc,
  Variable: Pc,
  ZerosLike: Fc,
  _FusedMatMul: Vc,
  abs: Ss,
  acos: vs,
  acosh: Os,
  add: K,
  addN: nn,
  all: _s,
  any: As,
  argMax: Es,
  argMin: ks,
  asin: Is,
  asinh: $s,
  atan: Ds,
  atan2: Cs,
  atanh: zs,
  avgPool: xs,
  avgPool3d: Ls,
  backend: Rc,
  backend_util: jc,
  basicLSTMCell: on,
  batchNorm: Ps,
  batchNorm2d: Fs,
  batchNorm3d: Vs,
  batchNorm4d: Rs,
  batchToSpaceND: js,
  bincount: Bs,
  bitwiseAnd: un,
  booleanMaskAsync: Hn,
  broadcastArgs: ln,
  broadcastTo: Hs,
  broadcast_util: Bc,
  browser: Hc,
  buffer: Ye,
  callbacks: rg,
  cast: ee,
  ceil: Ws,
  clipByValue: Us,
  clone: dt,
  complex: qs,
  concat: de,
  concat1d: Gs,
  concat2d: Ks,
  concat3d: Js,
  concat4d: Qs,
  constraints: Mh,
  conv1d: Xs,
  conv2d: Zs,
  conv2dTranspose: Ys,
  conv3d: Ms,
  conv3dTranspose: ea,
  copyRegisteredKernels: Wc,
  cos: ta,
  cosh: sa,
  cosineWindow: aa,
  cumprod: ra,
  cumsum: na,
  customGrad: Ve,
  data: Gb,
  denseBincount: ia,
  deprecationWarn: Uc,
  depthToSpace: oa,
  depthwiseConv2d: ot,
  deregisterOp: ig,
  device_util: qc,
  diag: pn,
  dilation2d: ua,
  disableDeprecationWarnings: Gc,
  dispose: en,
  disposeVariables: Kc,
  div: nt,
  divNoNan: la,
  dot: pa,
  dropout: ma,
  einsum: ca,
  elu: da,
  enableDebugMode: Jc,
  enableProdMode: Qc,
  enclosingPowerOfTwo: ha,
  engine: Xc,
  ensureShape: mn,
  env: P,
  equal: fa,
  erf: ya,
  euclideanNorm: ga,
  exp: ba,
  expandDims: ht,
  expm1: Na,
  eye: wa,
  fft: Ta,
  fill: Sa,
  findBackend: Zc,
  findBackendFactory: Yc,
  floor: va,
  floorDiv: Oa,
  forceHalfFloat: Mc,
  fused: Jn,
  gather: rt,
  gatherND: Gn,
  gather_util: ed,
  getBackend: td,
  getGradient: sd,
  getKernel: ad,
  getKernelsForBackend: rd,
  gpgpu_util: nd,
  grad: id,
  grads: od,
  greater: _a,
  greaterEqual: Aa,
  ifft: Ea,
  imag: ka,
  image: ft,
  inTopKAsync: Kn,
  initializers: yf,
  input: Zn,
  io: Tt,
  irfft: Ia,
  isFinite: $a,
  isInf: Da,
  isNaN: Ca,
  keep: V,
  kernel_impls: Jh,
  layers: Ly,
  leakyRelu: za,
  less: xa,
  lessEqual: La,
  linalg: Pa,
  linspace: cn,
  loadGraphModel: Db,
  loadGraphModelSync: Cb,
  loadLayersModel: ud,
  localResponseNormalization: Fa,
  log: Va,
  log1p: Ra,
  logSigmoid: ja,
  logSoftmax: Ba,
  logSumExp: Ha,
  logicalAnd: Wa,
  logicalNot: Ua,
  logicalOr: qa,
  logicalXor: Ga,
  losses: Ka,
  lowerBound: dn,
  matMul: W,
  math: Kh,
  max: Ja,
  maxPool: Qa,
  maxPool3d: Xa,
  maxPoolWithArgmax: hn,
  maximum: Za,
  mean: Ya,
  memory: ld,
  meshgrid: fn,
  metrics: Zy,
  min: Ma,
  minimum: er,
  mirrorPad: tr,
  mod: sr,
  model: gf,
  models: Yy,
  moments: ar,
  movingAverage: Wn,
  mul: M,
  multiRNNCell: yn,
  multinomial: gn,
  neg: rr,
  nextFrame: pd,
  norm: nr,
  notEqual: ir,
  oneHot: Oe,
  ones: Y,
  onesLike: or,
  op: S,
  outerProduct: bn,
  pad: ae,
  pad1d: Nn,
  pad2d: wn,
  pad3d: Tn,
  pad4d: Sn,
  pool: ur,
  pow: it,
  prelu: lr,
  print: pr,
  prod: mr,
  profile: md,
  raggedGather: vn,
  raggedRange: On,
  raggedTensorToTensor: _n,
  rand: An,
  randomGamma: In,
  randomNormal: Me,
  randomStandardNormal: $n,
  randomUniform: et,
  randomUniformInt: Dn,
  range: cr,
  ready: cd,
  real: dr,
  reciprocal: hr,
  registerBackend: dd,
  registerCallbackConstructor: Nf,
  registerGradient: hd,
  registerKernel: fd,
  registerOp: ng,
  regularizers: sg,
  relu: fr,
  relu6: yr,
  removeBackend: yd,
  reshape: v,
  reverse: re,
  reverse1d: Cn,
  reverse2d: zn,
  reverse3d: xn,
  reverse4d: Ln,
  rfft: gr,
  round: br,
  rsqrt: Nr,
  scalar: R,
  scatterND: Un,
  scatter_util: gd,
  searchSorted: Ce,
  selu: wr,
  separableConv2d: Tr,
  sequential: bf,
  serialization: bd,
  setBackend: Nd,
  setPlatform: wd,
  setWebGLContext: Td,
  setdiff1dAsync: Pn,
  shared: Sd,
  sigmoid: ue,
  sign: Sr,
  signal: vr,
  sin: Or,
  sinh: _r,
  slice: U,
  slice1d: Ar,
  slice2d: Er,
  slice3d: kr,
  slice4d: Ir,
  slice_util: vd,
  softmax: $r,
  softplus: Dr,
  spaceToBatchND: Cr,
  sparse: zr,
  sparseToDense: qn,
  spectral: xr,
  split: Lr,
  sqrt: Pr,
  square: Fr,
  squaredDifference: Vr,
  squeeze: at,
  stack: se,
  step: Rr,
  stridedSlice: jr,
  string: Br,
  sub: le,
  sum: Hr,
  sumOutType: Od,
  tan: Wr,
  tanh: ve,
  tensor: q,
  tensor1d: yt,
  tensor2d: _e,
  tensor3d: Ur,
  tensor4d: Fn,
  tensor5d: Vn,
  tensor6d: Rn,
  tensorScatterUpdate: jn,
  tensor_util: _d,
  test_util: hh,
  tidy: L,
  tile: qr,
  time: Ad,
  topk: Gr,
  train: Ed,
  transpose: ut,
  truncatedNormal: Kr,
  unique: Jr,
  unregisterGradient: kd,
  unregisterKernel: Id,
  unsortedSegmentSum: Qr,
  unstack: ne,
  upcastType: $d,
  upperBound: Bn,
  util: Dd,
  valueAndGrad: Cd,
  valueAndGrads: zd,
  variable: Xr,
  variableGrads: xd,
  version: Jb,
  version_converter: oi,
  version_core: Xn,
  version_cpu: gi,
  version_layers: rn,
  version_webgl: bi,
  webgl: Ld,
  webgl_util: Pd,
  where: Zr,
  whereAsync: wt,
  zeros: Yr,
  zerosLike: Mr
}, Symbol.toStringTag, { value: "Module" })), Ni = new Te();
Ni.compose(new Se(), new Qt(), new Se(1e-3, 1e-3, 1e-3));
const Xb = new Te().set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1);
class Zb {
  constructor({
    container: e,
    imageTargetSrc: t,
    maxTrack: a,
    uiLoading: r = "yes",
    uiScanning: n = "yes",
    uiError: u = "yes",
    filterMinCF: o = null,
    filterBeta: l = null,
    warmupTolerance: p = null,
    missTolerance: m = null,
    userDeviceId: c = null,
    environmentDeviceId: d = null
  }) {
    this.container = e, this.imageTargetSrc = t, this.maxTrack = a, this.filterMinCF = o, this.filterBeta = l, this.warmupTolerance = p, this.missTolerance = m, this.ui = new Rd({ uiLoading: r, uiScanning: n, uiError: u }), this.userDeviceId = c, this.environmentDeviceId = d, this.shouldFaceUser = !1, this.scene = new Ct(), this.cssScene = new Ct(), this.renderer = new Ti({ antialias: !0, alpha: !0 }), this.cssRenderer = new Vd({ antialias: !0 }), this.renderer.outputEncoding = Si, this.renderer.setPixelRatio(window.devicePixelRatio), this.camera = new vi(), this.anchors = [], this.renderer.domElement.style.position = "absolute", this.cssRenderer.domElement.style.position = "absolute", this.container.appendChild(this.renderer.domElement), this.container.appendChild(this.cssRenderer.domElement), window.addEventListener("resize", this.resize.bind(this));
  }
  async start() {
    this.ui.showLoading(), await this._startVideo(), await this._startAR();
  }
  stop() {
    this.controller.stopProcessVideo(), this.video.srcObject.getTracks().forEach(function(t) {
      t.stop();
    }), this.video.remove();
  }
  switchCamera() {
    this.shouldFaceUser = !this.shouldFaceUser, this.stop(), this.start();
  }
  addAnchor(e) {
    const t = new zt();
    t.visible = !1, t.matrixAutoUpdate = !1;
    const a = { group: t, targetIndex: e, onTargetFound: null, onTargetLost: null, onTargetUpdate: null, css: !1, visible: !1 };
    return this.anchors.push(a), this.scene.add(t), a;
  }
  addCSSAnchor(e) {
    const t = new zt();
    t.visible = !1, t.matrixAutoUpdate = !1;
    const a = { group: t, targetIndex: e, onTargetFound: null, onTargetLost: null, onTargetUpdate: null, css: !0, visible: !1 };
    return this.anchors.push(a), this.cssScene.add(t), a;
  }
  _startVideo() {
    return new Promise((e, t) => {
      if (this.video = document.createElement("video"), this.video.setAttribute("autoplay", ""), this.video.setAttribute("muted", ""), this.video.setAttribute("playsinline", ""), this.video.style.position = "absolute", this.video.style.top = "0px", this.video.style.left = "0px", this.video.style.zIndex = "-2", this.container.appendChild(this.video), !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        this.ui.showCompatibility(), t();
        return;
      }
      const a = {
        audio: !1,
        video: {}
      };
      this.shouldFaceUser ? this.userDeviceId ? a.video.deviceId = { exact: this.userDeviceId } : a.video.facingMode = "user" : this.environmentDeviceId ? a.video.deviceId = { exact: this.environmentDeviceId } : a.video.facingMode = "environment", navigator.mediaDevices.getUserMedia(a).then((r) => {
        this.video.addEventListener("loadedmetadata", () => {
          this.video.setAttribute("width", this.video.videoWidth), this.video.setAttribute("height", this.video.videoHeight), e();
        }), this.video.srcObject = r;
      }).catch((r) => {
        console.log("getUserMedia error", r), t();
      });
    });
  }
  _startAR() {
    return new Promise(async (e, t) => {
      const a = this.video;
      this.container, this.controller = new Fd({
        inputWidth: a.videoWidth,
        inputHeight: a.videoHeight,
        filterMinCF: this.filterMinCF,
        filterBeta: this.filterBeta,
        warmupTolerance: this.warmupTolerance,
        missTolerance: this.missTolerance,
        maxTrack: this.maxTrack,
        onUpdate: (n) => {
          if (n.type === "updateMatrix") {
            const { targetIndex: u, worldMatrix: o } = n;
            for (let p = 0; p < this.anchors.length; p++)
              if (this.anchors[p].targetIndex === u) {
                if (this.anchors[p].css ? this.anchors[p].group.children.forEach((m) => {
                  m.element.style.visibility = o === null ? "hidden" : "visible";
                }) : this.anchors[p].group.visible = o !== null, o !== null) {
                  let m = new Te();
                  m.elements = [...o], m.multiply(this.postMatrixs[u]), this.anchors[p].css && m.multiply(Ni), this.anchors[p].group.matrix = m;
                } else
                  this.anchors[p].group.matrix = Xb;
                this.anchors[p].visible && o === null && (this.anchors[p].visible = !1, this.anchors[p].onTargetLost && this.anchors[p].onTargetLost()), !this.anchors[p].visible && o !== null && (this.anchors[p].visible = !0, this.anchors[p].onTargetFound && this.anchors[p].onTargetFound()), this.anchors[p].onTargetUpdate && this.anchors[p].onTargetUpdate();
              }
            this.anchors.reduce((p, m) => p || m.visible, !1) ? this.ui.hideScanning() : this.ui.showScanning();
          }
        }
      }), this.resize();
      const { dimensions: r } = await this.controller.addImageTargets(this.imageTargetSrc);
      this.postMatrixs = [];
      for (let n = 0; n < r.length; n++) {
        const u = new Se(), o = new Qt(), l = new Se(), [p, m] = r[n];
        u.x = p / 2, u.y = p / 2 + (m - p) / 2, l.x = p, l.y = p, l.z = p;
        const c = new Te();
        c.compose(u, o, l), this.postMatrixs.push(c);
      }
      await this.controller.dummyRun(this.video), this.ui.hideLoading(), this.ui.showScanning(), this.controller.processVideo(this.video), e();
    });
  }
  resize() {
    const { renderer: e, cssRenderer: t, camera: a, container: r, video: n } = this;
    if (!n)
      return;
    this.video.setAttribute("width", this.video.videoWidth), this.video.setAttribute("height", this.video.videoHeight);
    let u, o;
    const l = n.videoWidth / n.videoHeight, p = r.clientWidth / r.clientHeight;
    l > p ? (o = r.clientHeight, u = o * l) : (u = r.clientWidth, o = u / l);
    const m = this.controller.getProjectionMatrix(), c = this.controller.inputWidth / this.controller.inputHeight;
    let d;
    c > p ? d = this.video.width / this.controller.inputWidth : d = this.video.height / this.controller.inputHeight;
    let h, N;
    c > p ? (h = r.clientHeight, h *= d) : (N = r.clientWidth, h = N / this.controller.inputWidth * this.controller.inputHeight, h *= d);
    let g = r.clientHeight / h;
    const f = 2 * Math.atan(1 / m[5] * g) * 180 / Math.PI, b = m[14] / (m[10] - 1), O = m[14] / (m[10] + 1);
    m[5] / m[0], a.fov = f, a.near = b, a.far = O, a.aspect = r.clientWidth / r.clientHeight, a.updateProjectionMatrix(), n.style.top = -(o - r.clientHeight) / 2 + "px", n.style.left = -(u - r.clientWidth) / 2 + "px", n.style.width = u + "px", n.style.height = o + "px";
    const _ = e.domElement, T = t.domElement;
    _.style.position = "absolute", _.style.left = 0, _.style.top = 0, _.style.width = r.clientWidth + "px", _.style.height = r.clientHeight + "px", T.style.position = "absolute", T.style.left = 0, T.style.top = 0, T.style.width = r.clientWidth + "px", T.style.height = r.clientHeight + "px", e.setSize(r.clientWidth, r.clientHeight), t.setSize(r.clientWidth, r.clientHeight);
  }
}
window.MINDAR || (window.MINDAR = {});
window.MINDAR.IMAGE || (window.MINDAR.IMAGE = {});
window.MINDAR.IMAGE.MindARThree = Zb;
window.MINDAR.IMAGE.tf = Qb;
export {
  Zb as MindARThree
};
