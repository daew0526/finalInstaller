/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/comment.js":
/*!**********************************!*\
  !*** ./src/client/js/comment.js ***!
  \**********************************/
/***/ (() => {

eval("const commentContainer = document.querySelector(\".comment__container ul\");\nconst comment = document.querySelector(\".comment\");\nconst textarea = document.querySelector(\".comment__text\");\nconst delBtn = document.querySelectorAll(\".comment__list__delBtn\");\nconst editBtn = document.querySelectorAll(\".comment__list__editBtn\");\n\nconst paintComment = (id, text) => {\n  const fakeDouemnt = document.createDocumentFragment();\n  const li = document.createElement(\"li\");\n  li.className = \"comment__list\";\n  li.dataset.commentId = id;\n  const i = document.createElement(\"i\");\n  i.className = \"fas fa-comment\";\n  const span = document.createElement(\"span\");\n  span.innerText = ` ${text}`;\n  span.className = \"comment__list__txt\";\n  const delBtn = document.createElement(\"button\");\n  delBtn.innerHTML = `❌`;\n  delBtn.className = \"comment__list__delBtn\";\n  delBtn.addEventListener(\"click\", handleDelBtnClick);\n  const editBtn = document.createElement(\"button\");\n  editBtn.innerHTML = `✅`;\n  editBtn.className = \"comment__list__editBtn\";\n  editBtn.addEventListener(\"click\", handleEditBtnClick);\n  li.appendChild(i);\n  li.appendChild(span);\n  li.appendChild(delBtn);\n  li.appendChild(editBtn);\n  fakeDouemnt.appendChild(li);\n  commentContainer.prepend(fakeDouemnt);\n};\n\nconst removeEditTextarea = target => {\n  target.children[4].classList.add(\"remove\");\n  return;\n};\n\nconst paintEditComment = (id, text, target) => {\n  target.dataset.commentId = id;\n  target.children[1].innerText = ` ${text}`;\n  removeEditTextarea(target);\n  return;\n};\n\nconst getInstallerId = () => {\n  const installerContainer = document.querySelector(\".installer\");\n  const id = installerContainer.dataset.installerId;\n  return id;\n};\n\nconst getEditTextarea = () => {\n  const edit = document.querySelector(\".comment__edit__text\");\n  const value = edit.value;\n  return value;\n};\n\nconst getTextValue = () => {\n  const value = textarea.value;\n  return value;\n};\n\nconst handleEditSubmit = async e => {\n  e.preventDefault(); // textarea값 갖기(get)\n\n  const text = getEditTextarea();\n  const curCommentParent = e.target.parentNode;\n  const id = curCommentParent.dataset.commentId; // fetch를 통해서 보내기(put or path)\n\n  const responsive = await fetch(`/api/installer/${id}/comment`, {\n    method: \"PATCH\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      text\n    })\n  });\n\n  if (responsive.status === 201) {\n    const json = await responsive.json();\n    paintEditComment(json.editCommentId, json.text, curCommentParent);\n  }\n};\n\nconst paintTextarea = target => {\n  // 태그를 미리 설정해서 class이름만 추가시키는걸로 코드 변환\n  const fakeDouemnt = document.createDocumentFragment();\n  const form = document.createElement(\"form\");\n  form.className = \"comment\";\n  form.addEventListener(\"submit\", handleEditSubmit);\n  const textarea = document.createElement(\"textarea\");\n  textarea.className = \"comment__text comment__edit__text\";\n  textarea.placeholder = \"Write your edit comment...\";\n  textarea.cols = \"20\";\n  textarea.rows = \"10\";\n  const subBtn = document.createElement(\"button\");\n  subBtn.innerText = \"Edit Submit\";\n  form.appendChild(textarea);\n  form.appendChild(subBtn);\n  fakeDouemnt.appendChild(form);\n  target.after(fakeDouemnt);\n};\n\nconst handleEditBtnClick = e => {\n  // 밑에 textarea생성(paint)\n  paintTextarea(e.target);\n};\n\nconst handleDelBtnClick = async e => {\n  const curCommentParent = e.target.parentNode;\n  const id = curCommentParent.dataset.commentId;\n  const responsive = await fetch(`/api/installer/${id}/comment`, {\n    method: \"DELETE\"\n  });\n\n  if (responsive.status === 201) {\n    commentContainer.removeChild(curCommentParent);\n  }\n};\n\nconst handleSubmit = async e => {\n  e.preventDefault();\n  const text = getTextValue();\n  const id = getInstallerId();\n\n  if (text === \"\" || text === \" \") {\n    return;\n  }\n\n  const responsive = await fetch(`/api/installer/${id}/comment`, {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify({\n      text\n    })\n  });\n\n  if (responsive.status === 201) {\n    const json = await responsive.json();\n    paintComment(json.newCommentId, json.text);\n  }\n\n  if (responsive.status === 404) {// errorMessage();\n  }\n\n  textarea.value = \"\";\n};\n\nfunction init() {\n  if (comment) {\n    comment.addEventListener(\"submit\", handleSubmit);\n\n    if (delBtn) {\n      delBtn.forEach(el => el.addEventListener(\"click\", handleDelBtnClick));\n    }\n\n    if (editBtn) {\n      editBtn.forEach(el => el.addEventListener(\"click\", handleEditBtnClick));\n    }\n  }\n}\n\ninit();\n\n//# sourceURL=webpack://installer/./src/client/js/comment.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/comment.js"]();
/******/ 	
/******/ })()
;