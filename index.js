// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var pathCSS = 'assets/v2.2.24-01/css/maps/dialogs.css?v=5';
var pathJS = 'assets/v2.2.24-01/js/maps/dialogs.js?v=5';
var iVersion = 'v2.0.11',
  prefix;
var regex_ver =
  /(assets\/)(([v]{1})(\d+\.)(\d+\.)(\*|\d+\-\d+|\d+))(\/.*\?[v]=)([0-9]+$)/g;
var newcss = pathCSS.replace(
  regex_ver,
  `$1${iVersion}$7${new Date().getTime()}`
);
console.log(newcss);
var nwcss = pathCSS.replace(
  /([v]{1})(\d+\.)(\d+\.)(\*|\d+\-\d+|\d+)/g,
  iVersion
);
console.log('-------------');
[
  'assets/v0.00.00/css/dialogs.css?v=1684221360854',
  'assets/v0.00.00/js/maps/dialogs.js?v=5',
].forEach(function (path, idx, arr) {
  console.log(path);
  console.log(
    path.replace(regex_ver, `$1` + iVersion + `$7` + new Date().getTime())
  );
});
console.log('-------------');

var nwjs = pathJS.replace(/([v]{1})(\d+\.)(\d+\.)(\*|\d+\-\d+|\d+)/g, iVersion);
console.log(nwcss);
console.log(nwjs);
pathCSS.replace(
  /([v]{1})(\d+\.)(\d+\.)(\*|\d+)(\/\w+\/)(maps\/)(\w+\.(?:js|css))/g,
  '$1/$2'
);
pathJS.replace(
  /([v]{1})(\d+\.)(\d+\.)(\*|\d+)(\/\w+\/)(maps\/)(\w+\.\w+)/g,
  'asset$1/$2'
);
console.log(pathCSS);
console.log(pathJS);
var TEST = 'Test abc test test abc test test test abc test test abc';
String.prototype.replaceAllSplit = function (search, replacement) {
  var target = this;
  return target.split(search).join(replacement);
};
String.prototype.replaceAllReg = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

console.log(TEST.replaceAllSplit('abc', 'Yasar'));
console.log(TEST.replaceAllReg('abc', 'Arafat'));

var formatTags = ['INSERT', 'DEL', 'STRONG', 'EM', 'U', 'SUB', 'SUP', 'S'],
  ignore = ['INSERT', 'DEL'];

formatTags = formatTags.filter((val) => !ignore.includes(val));
console.log(formatTags);

var text =
  'Aylott, N.and Bolin, N., 2017. Managed intra-party democracy: precursory delegation and party leader selection.Party Politics, 23 (1), 55–65.';

var splitText = text.replace(/\.([A-z])/g, ' .$1').trim();

document.getElementById('text1').textContent = text;
document.getElementById('text2').textContent = text;

var doi1 = '10.5665/sleep.5760';
var doi2 = '10.1136/bmj.m1808';
var doi3 = '10.1136/bmj.m1808';
var doi4 = '10.1136/bmj.m1808';
var doi5 = '10.1136/bmj.m1808';
const regex = /^10.\d{4,9}\/[-._;()/:A-Z0-9]+$/gim;
console.log('doi 1==> ' + regex_ver.test(doi1));
const regex1 = /^10.\d{4,9}\/[-._;()/:A-Z0-9]+$/gim;
console.log('doi 2==> ' + regex1.test(doi2));

var CSS = [
  '../../../UI/svg/ORCID_ID.svg',
  '../../UI/fonts/fonts-open/OpenSans-Italic.ttf',
];
var cssPath = '../../../UI/fonts';
CSS.forEach(function (el, idx, arr) {
  console.log(el.replace(/((\.\.\/\.\.\/UI\/fonts))/g, cssPath));
});

var Obj = {
  btnPrevTrack: 'Prev',
  btnNextTrack: 'Next',
};

console.log('btnPrevTrack'.slice(3, 7));
console.log('btnNextTrack'.slice(3, 7));

const NUMERIC_REGEXP = /[\d]{4}/g;

const numbers = '2.2px 3.1px 4px -7.6px obj.key'.match(NUMERIC_REGEXP);

console.log(numbers);

const YEAR_REGEX = /\d{4}[\–\d{4}]?/gi;
['Wolf, 1974a', 'Wolf (1974a)', '(Wolf, 1974–1795)'].forEach(function (item) {
  let reg = item.match(NUMERIC_REGEXP);
  console.log(reg);
  let reg1 = item.match(YEAR_REGEX);
  console.log(reg1);
});
