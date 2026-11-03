const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(
  path.join(__dirname, '..', 'index.html'),
  'utf8'
);

test('HTML document declares UTF-8 encoding', () => {
  assert.match(html, /<meta charset="utf-8">/i);
});

test('Emoji examples section exists', () => {
  assert.match(html, /<h3>HTML Emoji Examples<\/h3>/);
});

test('Emoji examples include Unicode character references', () => {
  assert.match(html, /&#128512;/);
  assert.match(html, /&#128525;/);
  assert.match(html, /&#128640;/);
});

test('Emoji examples support different font sizes', () => {
  for (const size of [16, 32, 48]) {
    assert.ok(
      html.includes(`font-size:${size}px`),
      `Missing ${size}px emoji example`
    );
  }
});

test('Emoji example includes accessible text', () => {
  assert.match(html, /aria-label="Smiling face"/);
});
