### VSCODE Shortcuts

- `alt+up` to move line up.
- `alt+down` to move line down.
- `ctrl+alt+up` To add cursor above.
- `ctrl+alt+down` To add cursor below.
- Cursors blinking across many lines
  - If you have copied multiple words/selection to the clipboard, you can paste them across across these cursors.
  - `ctrl+u` undo cursor.
  - `ctrl+l` to select each line that has a cursor.
  - `{ "key": "shift+alt+u", "command": "cursorLineStart" }` To move each cursor to the start of the line.
  - `{ "key": "shift+alt+i", "command": "cursorLineEnd" }` To move each cursor to the end of the line.
    - Overrides `{ "key": "shift+alt+i", "command": "-editor.action.insertCursorAtEndOfEachLineSelected", "when": "editorTextFocus" }`
  - `{ "key": "shift+alt+j", "command": "cursorHomeSelect", "when": "editorTextFocus" }` Select to from the start.
  - `{ "key": "shift+alt+k", "command": "cursorEndSelect", "when": "editorTextFocus" }` Select to the end.
