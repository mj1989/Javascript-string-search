# Javascript-string-search
Javascript string search.

Create a static webpage using HTML, CSS and JS. The page should have two text input boxes:
- Full text
- Keywords list

A user will copy and paste text fragments into each of the boxes.

There should also be a button labeled "search".

When a user clicks the "search" button, your javascript code should:
- Extract all keywords from the second input text box. A keyword is a string that starts with mod_ (that is "mod" and then underscore). This is a name of Moodle module - you can see example names in the plugin's repository: https://moodle.org/plugins/?q=type:mod .
- For each of the module names extracted, search for such a string in the first (full text) input box.
- For every keyword extracted, display the results:
  - keyword (module) name, result (FOUND or NOT FOUND).

Example:

Text copied into first input box (full text) (I've put keywords in bold just to highlight them):

Lorem ipsum dolor sit mod_collaborate amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. mod_livepoll Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit mod_hsuforum esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Text copied into second input box (Keywords list):

test, mod_collaborate test

abc, mod_livepoll_extended , ipsum dolor

xyz, mod_hsu, ipsum dolor

After clicking the "search" button the result is:

mod_collaborate, FOUND

mod_livepoll_extended, NOT FOUND

mod_hsu, NOT FOUND

The layout / UI / design is not important here, only the functionality. You can use any JS/HTML/CSS technology framework you wish (or you can choose not  to use framework at all).
