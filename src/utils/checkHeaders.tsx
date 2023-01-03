import * as XLSX from 'xlsx';

function safeDecodeRange(range: any) {
  var o = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
  var idx = 0,
    i = 0,
    cc = 0;
  var len = range.length;
  for (idx = 0; i < len; ++i) {
    if ((cc = range.charCodeAt(i) - 64) < 1 || cc > 26) break;
    idx = 26 * idx + cc;
  }
  o.s.c = --idx;
  for (idx = 0; i < len; ++i) {
    if ((cc = range.charCodeAt(i) - 48) < 0 || cc > 9) break;
    idx = 10 * idx + cc;
  }
  o.s.r = --idx;
  if (i === len || range.charCodeAt(++i) === 58) {
    o.e.c = o.s.c;
    o.e.r = o.s.r;
    return o;
  }
  for (idx = 0; i != len; ++i) {
    if ((cc = range.charCodeAt(i) - 64) < 1 || cc > 26) break;
    idx = 26 * idx + cc;
  }
  o.e.c = --idx;
  for (idx = 0; i != len; ++i) {
    if ((cc = range.charCodeAt(i) - 48) < 0 || cc > 9) break;
    idx = 10 * idx + cc;
  }
  o.e.r = --idx;
  return o;
}

/**
 * Check the headers of csv file with the provided schema
 *
 * @param sheet provided schema
 * @param objHeaders headers of csv file
 * @returns
 */
function checkHeaders(sheet: any, objHeaders: any) {
  var header = 0,
    offset = 1;
  var hdr: any = [];
  var o: any = {};
  if (sheet == null || sheet['!ref'] == null) return [];
  var range = o.range !== undefined ? o.range : sheet['!ref'];
  var r;
  if (o.header === 1) header = 1;
  else if (o.header === 'A') header = 2;
  else if (Array.isArray(o.header)) header = 3;
  switch (typeof range) {
    case 'string':
      r = safeDecodeRange(range);
      break;
    case 'number':
      r = safeDecodeRange(sheet['!ref']);
      r.s.r = range;
      break;
    default:
      r = range;
  }
  if (header > 0) offset = 0;
  var rr = XLSX.utils.encode_row(r.s.r);
  var cols = new Array(r.e.c - r.s.c + 1);
  for (var C = r.s.c; C <= r.e.c; ++C) {
    cols[C] = XLSX.utils.encode_col(C);
    var val = sheet[cols[C] + rr];
    switch (header) {
      case 1:
        hdr.push(C);
        break;
      case 2:
        hdr.push(cols[C]);
        break;
      case 3:
        hdr.push(o.header[C - r.s.c]);
        break;
      default:
        if (val === undefined) continue;
        hdr.push(XLSX.utils.format_cell(val));
    }
  }
  const cleanHeader = [...Array.from(new Set(hdr))];
  if (objHeaders.sort().join(',') === cleanHeader.sort().join(',')) {
    return true;
  }
  return false;
}

export default checkHeaders;
