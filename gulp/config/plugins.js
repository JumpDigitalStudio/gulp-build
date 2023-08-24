import replace from "gulp-replace"; // Search and replace
import plumber from "gulp-plumber"; // Error processing
import notify from "gulp-notify"; // Messages (tips)
import browserSync from "browser-sync"; // Browser live server
import newer from "gulp-newer"; // Check updates
import gulpIf from "gulp-if";

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browser: browserSync,
  newer: newer,
  if: gulpIf,
};
