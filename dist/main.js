/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveBlending, AlphaFormat, AlwaysDepth, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, AxisHelper, BackSide, BasicDepthPacking, BasicShadowMap, BinaryTextureLoader, Bone, BooleanKeyframeTrack, BoundingBoxHelper, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasRenderer, CanvasTexture, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, ClosedSplineCurve3, Color, ColorKeyframeTrack, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeGeometry, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubeUVRefractionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CylinderBufferGeometry, CylinderGeometry, Cylindrical, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DirectionalLightShadow, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicBufferAttribute, EdgesGeometry, EdgesHelper, EllipseCurve, EqualDepth, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, Face3, Face4, FaceColors, FaceNormalsHelper, FileLoader, FlatShading, Float32Attribute, Float32BufferAttribute, Float64Attribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FrontFaceDirectionCCW, FrontFaceDirectionCW, FrontSide, Frustum, GammaEncoding, Geometry, GeometryUtils, GreaterDepth, GreaterEqualDepth, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, Int16Attribute, Int16BufferAttribute, Int32Attribute, Int32BufferAttribute, Int8Attribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, JSONLoader, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LensFlare, LessDepth, LessEqualDepth, Light, LightProbe, LightProbeHelper, LightShadow, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LinePieces, LineSegments, LineStrip, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LogLuvEncoding, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, Math, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshFaceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiMaterial, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NeverDepth, NoBlending, NoColors, NoToneMapping, NormalBlending, NotEqualDepth, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, ParametricBufferGeometry, ParametricGeometry, Particle, ParticleBasicMaterial, ParticleSystem, ParticleSystemMaterial, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointCloud, PointCloudMaterial, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PositionalAudioHelper, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBDEncoding, RGBEEncoding, RGBEFormat, RGBFormat, RGBM16Encoding, RGBM7Encoding, RGB_ETC1_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RectAreaLightHelper, RedFormat, ReinhardToneMapping, RepeatWrapping, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, Scene, SceneUtils, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, SphericalReflectionMapping, Spline, SplineCurve, SplineCurve3, SpotLight, SpotLightHelper, SpotLightShadow, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StereoCamera, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextBufferGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16Attribute, Uint16BufferAttribute, Uint32Attribute, Uint32BufferAttribute, Uint8Attribute, Uint8BufferAttribute, Uint8ClampedAttribute, Uint8ClampedBufferAttribute, Uncharted2ToneMapping, Uniform, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedShortType, Vector2, Vector3, Vector4, VectorKeyframeTrack, Vertex, VertexColors, VertexNormalsHelper, VideoTexture, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderTargetCube, WebGLRenderer, WebGLUtils, WireframeGeometry, WireframeHelper, WrapAroundEnding, XHRLoader, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, sRGBEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _webglChecker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webglChecker */ \"./src/webglChecker.js\");\n\r\n\r\n\r\n// Renderer\r\nvar renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]();\r\nrenderer.setPixelRatio(window.devicePixelRatio);\r\n// renderer.setClearColor(0xffffff, 1)\r\nvar width = window.innerWidth;\r\nvar height = window.innerHeight;\r\nrenderer.setClearColor(0x0E0E32, 1)\r\nrenderer.setSize( width, height );\r\n// renderer.shadowMap.enabled = true;\r\n\r\n\r\n// Camera\r\n// var camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.1, 3000 );\r\nvar camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"OrthographicCamera\"]( width / - 2, width / 2, height / 2, height / - 2, 0.1, 3000 );\r\ncamera.position.set(0, 2, 0);\r\n\r\n// Scene\r\nvar scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\r\ndocument.body.appendChild( renderer.domElement );\r\n\r\n// let helper = new THREE.CameraHelper(camera);\r\n// scene.add(helper)\r\n\r\n// Lights\r\nvar ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__[\"AmbientLight\"](0xffffff, 0.8);\r\nvar pointLight = new three__WEBPACK_IMPORTED_MODULE_0__[\"PointLight\"](0xffffff, 0.8);\r\nvar directionalLight = new three__WEBPACK_IMPORTED_MODULE_0__[\"DirectionalLight\"]( 0xffffff, 0.5 );\r\nscene.add( directionalLight );\r\nambientLight.castShadow = true;\r\npointLight.castShadow = true;\r\n\r\n\r\nscene.add(ambientLight);\r\nscene.add(pointLight);\r\n\r\nvar geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"CubeGeometry\"](100, 100, 100);\r\nvar material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshLambertMaterial\"]({color: 0x1B1B60});\r\nvar mesh = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geometry, material);\r\nmesh.position.set(0, 0, -1000);\r\nmesh.rotation.x = 0.5;\r\nmesh.rotation.y = 0.5;\r\nmesh.castShadow = true;\r\nmesh.receiveShadow = false;\r\n\r\nvar mesh2 = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"](geometry, material);\r\nmesh2.position.set(100, 100, -1000);\r\nmesh2.rotation.x = 0.5;\r\nmesh2.rotation.y = 0.5;\r\n\r\nscene.add(mesh);\r\nscene.add(mesh2);\r\nrenderer.render(scene, camera);\r\n\r\n// requestAnimationFrame(render);\r\n\r\n// function render () {\r\n//     mesh.rotation.x += 0.01;\r\n//     mesh.rotation.y += 0.01;\r\n//     renderer.render(scene, camera);\r\n//     requestAnimationFrame(render);\r\n// }\r\n\r\nwindow.addEventListener( 'resize', onWindowResize, false );\r\n\r\nfunction onWindowResize(){\r\n    var width = window.innerWidth;\r\n    var height = window.innerHeight;\r\n    camera.left = width / - 2;\r\n    camera.right = width / 2;\r\n    camera.top = height / 2;\r\n    camera.bottom = height / - 2;\r\n    camera.updateProjectionMatrix();\r\n    renderer.setSize( width, height );\r\n    renderer.render(scene, camera);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/webglChecker.js":
/*!*****************************!*\
  !*** ./src/webglChecker.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\tisWebGLAvailable: function () {\r\n\t\ttry {\r\n\t\t\tvar canvas = document.createElement( 'canvas' );\r\n\t\t\treturn !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );\r\n\t\t} catch ( e ) {\r\n\t\t\treturn false;\r\n\t\t}\r\n\t},\r\n\r\n\tisWebGL2Available: function () {\r\n\t\ttry {\r\n\t\t\tvar canvas = document.createElement( 'canvas' );\r\n\t\t\treturn !! ( window.WebGL2RenderingContext && canvas.getContext( 'webgl2' ) );\r\n\t\t} catch ( e ) {\r\n\t\t\treturn false;\r\n\t\t}\r\n\t},\r\n\r\n\tgetWebGLErrorMessage: function () {\r\n\t\treturn this.getErrorMessage( 1 );\r\n\t},\r\n\r\n\tgetWebGL2ErrorMessage: function () {\r\n\t\treturn this.getErrorMessage( 2 );\r\n\t},\r\n\r\n\tgetErrorMessage: function ( version ) {\r\n\t\tvar names = {\r\n\t\t\t1: 'WebGL',\r\n\t\t\t2: 'WebGL 2'\r\n\t\t};\r\n\t\tvar contexts = {\r\n\t\t\t1: window.WebGLRenderingContext,\r\n\t\t\t2: window.WebGL2RenderingContext\r\n\t\t};\r\n\t\tvar message = 'Your $0 does not seem to support <a href=\"http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation\" style=\"color:#000\">$1</a>';\r\n\t\tvar element = document.createElement( 'div' );\r\n\t\telement.id = 'webglmessage';\r\n\t\telement.style.fontFamily = 'monospace';\r\n\t\telement.style.fontSize = '13px';\r\n\t\telement.style.fontWeight = 'normal';\r\n\t\telement.style.textAlign = 'center';\r\n\t\telement.style.background = '#fff';\r\n\t\telement.style.color = '#000';\r\n\t\telement.style.padding = '1.5em';\r\n\t\telement.style.width = '400px';\r\n\t\telement.style.margin = '5em auto 0';\r\n\r\n\t\tif ( contexts[ version ] ) {\r\n\t\t\tmessage = message.replace( '$0', 'graphics card' );\r\n\t\t} else {\r\n\t\t\tmessage = message.replace( '$0', 'browser' );\r\n\t\t}\r\n\t\tmessage = message.replace( '$1', names[ version ] );\r\n        element.innerHTML = message;\r\n\t\treturn element;\r\n\t}\r\n});\n\n//# sourceURL=webpack:///./src/webglChecker.js?");

/***/ })

/******/ });