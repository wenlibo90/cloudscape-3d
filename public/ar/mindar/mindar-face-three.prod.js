import { Scene as m, WebGLRenderer as g, sRGBEncoding as y, PerspectiveCamera as w, Mesh as M, MeshStandardMaterial as b, Group as p, BufferGeometry as x, BufferAttribute as A } from "three";
import { CSS3DRenderer as E } from "three/addons/renderers/CSS3DRenderer.js";
import { C as R } from "./controller-d1-OMKPY.js";
import { U as S } from "./ui-fBadYuor.js";
const I = { BufferGeometry: x, BufferAttribute: A };
class C {
  constructor({
    container: a,
    uiLoading: t = "yes",
    uiScanning: o = "yes",
    uiError: n = "yes",
    filterMinCF: e = null,
    filterBeta: h = null,
    userDeviceId: s = null,
    environmentDeviceId: c = null,
    disableFaceMirror: l = !1
  }) {
    this.container = a, this.ui = new S({ uiLoading: t, uiScanning: o, uiError: n }), this.controller = new R({
      filterMinCF: e,
      filterBeta: h
    }), this.disableFaceMirror = l, this.scene = new m(), this.cssScene = new m(), this.renderer = new g({ antialias: !0, alpha: !0 }), this.cssRenderer = new E({ antialias: !0 }), this.renderer.outputEncoding = y, this.renderer.setPixelRatio(window.devicePixelRatio), this.camera = new w(), this.userDeviceId = s, this.environmentDeviceId = c, this.anchors = [], this.faceMeshes = [], this.latestEstimate = null, this.container.appendChild(this.renderer.domElement), this.container.appendChild(this.cssRenderer.domElement), this.shouldFaceUser = !0, window.addEventListener("resize", this._resize.bind(this));
  }
  async start() {
    this.ui.showLoading(), await this._startVideo(), await this._startAR(), this.ui.hideLoading();
  }
  stop() {
    this.video.srcObject.getTracks().forEach(function(t) {
      t.stop();
    }), this.video.remove(), this.controller.stopProcessVideo();
  }
  switchCamera() {
    this.shouldFaceUser = !this.shouldFaceUser, this.stop(), this.start();
  }
  addFaceMesh() {
    const a = this.controller.createThreeFaceGeometry(I), t = new M(a, new b({ color: 16777215 }));
    return t.visible = !1, t.matrixAutoUpdate = !1, this.faceMeshes.push(t), t;
  }
  addAnchor(a) {
    const t = new p();
    t.matrixAutoUpdate = !1;
    const o = { group: t, landmarkIndex: a, css: !1 };
    return this.anchors.push(o), this.scene.add(t), o;
  }
  addCSSAnchor(a) {
    const t = new p();
    t.matrixAutoUpdate = !1;
    const o = { group: t, landmarkIndex: a, css: !0 };
    return this.anchors.push(o), this.cssScene.add(t), o;
  }
  getLatestEstimate() {
    return this.latestEstimate;
  }
  _startVideo() {
    return new Promise((a, t) => {
      if (this.video = document.createElement("video"), this.video.setAttribute("autoplay", ""), this.video.setAttribute("muted", ""), this.video.setAttribute("playsinline", ""), this.video.style.position = "absolute", this.video.style.top = "0px", this.video.style.left = "0px", this.video.style.zIndex = "-2", this.container.appendChild(this.video), !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        this.ui.showCompatibility(), t();
        return;
      }
      const o = {
        audio: !1,
        video: {}
      };
      this.shouldFaceUser ? this.userDeviceId ? o.video.deviceId = { exact: this.userDeviceId } : o.video.facingMode = "user" : this.environmentDeviceId ? o.video.deviceId = { exact: this.environmentDeviceId } : o.video.facingMode = "environment", navigator.mediaDevices.getUserMedia(o).then((n) => {
        this.video.addEventListener("loadedmetadata", () => {
          this.video.setAttribute("width", this.video.videoWidth), this.video.setAttribute("height", this.video.videoHeight), a();
        }), this.video.srcObject = n;
      }).catch((n) => {
        console.log("getUserMedia error", n), t();
      });
    });
  }
  _startAR() {
    return new Promise(async (a, t) => {
      const o = this.video;
      this.container, this.controller.onUpdate = ({ hasFace: e, estimateResult: h }) => {
        for (let s = 0; s < this.anchors.length; s++)
          this.anchors[s].css ? this.anchors[s].group.children.forEach((c) => {
            c.element.style.visibility = e ? "visible" : "hidden";
          }) : this.anchors[s].group.visible = e;
        for (let s = 0; s < this.faceMeshes.length; s++)
          this.faceMeshes[s].visible = e;
        if (e) {
          const { metricLandmarks: s, faceMatrix: c, faceScale: l, blendshapes: d } = h;
          this.latestEstimate = h;
          for (let r = 0; r < this.anchors.length; r++) {
            const v = this.anchors[r].landmarkIndex, i = this.controller.getLandmarkMatrix(v);
            if (this.anchors[r].css) {
              const u = [
                1e-3 * i[0],
                1e-3 * i[1],
                i[2],
                i[3],
                1e-3 * i[4],
                1e-3 * i[5],
                i[6],
                i[7],
                1e-3 * i[8],
                1e-3 * i[9],
                i[10],
                i[11],
                1e-3 * i[12],
                1e-3 * i[13],
                i[14],
                i[15]
              ];
              this.anchors[r].group.matrix.set(...u);
            } else
              this.anchors[r].group.matrix.set(...i);
          }
          for (let r = 0; r < this.faceMeshes.length; r++)
            this.faceMeshes[r].matrix.set(...c);
        } else
          this.latestEstimate = null;
      }, this._resize();
      const n = this.shouldFaceUser && !this.disableFaceMirror;
      await this.controller.setup(n), await this.controller.dummyRun(o), this._resize(), this.controller.processVideo(o), a();
    });
  }
  _resize() {
    const { renderer: a, cssRenderer: t, camera: o, container: n, video: e } = this;
    if (!e)
      return;
    {
      this.video.setAttribute("width", this.video.videoWidth), this.video.setAttribute("height", this.video.videoHeight), this.controller.onInputResized(e);
      const { fov: v, aspect: i, near: f, far: u } = this.controller.getCameraParams();
      this.camera.fov = v, this.camera.aspect = i, this.camera.near = f, this.camera.far = u, this.camera.updateProjectionMatrix(), this.renderer.setSize(this.video.videoWidth, this.video.videoHeight), this.cssRenderer.setSize(this.video.videoWidth, this.video.videoHeight);
    }
    let h, s;
    const c = e.videoWidth / e.videoHeight, l = n.clientWidth / n.clientHeight;
    c > l ? (s = n.clientHeight, h = s * c) : (h = n.clientWidth, s = h / c), e.style.top = -(s - n.clientHeight) / 2 + "px", e.style.left = -(h - n.clientWidth) / 2 + "px", e.style.width = h + "px", e.style.height = s + "px", this.shouldFaceUser && !this.disableFaceMirror ? e.style.transform = "scaleX(-1)" : e.style.transform = "scaleX(1)";
    const d = a.domElement, r = t.domElement;
    d.style.position = "absolute", d.style.top = e.style.top, d.style.left = e.style.left, d.style.width = e.style.width, d.style.height = e.style.height, r.style.position = "absolute", r.style.top = e.style.top, r.style.left = e.style.left, r.style.transformOrigin = "top left", r.style.transform = "scale(" + h / parseFloat(r.style.width) + "," + s / parseFloat(r.style.height) + ")";
  }
}
window.MINDAR || (window.MINDAR = {});
window.MINDAR.FACE || (window.MINDAR.FACE = {});
window.MINDAR.FACE.MindARThree = C;
export {
  C as MindARThree
};
