less-plugin-skeleton             
========================

Imports [Skeleton Less code](https://github.com/whatsnewsaes/Skeleton-less)) before your custom Less code.
Skeleton is a simple, responsive boilerplate to kickstart any responsive project.
Check out [http://getskeleton.com](http://getskeleton.com) for documentation and details.

## lessc usage

Install..

Requires Less v2.4.0

```
npm install -g less-plugin-skeleton
```

and then on the command line,

```
lessc file.less --skeleton
```

##  Media Queries


Note: The best way to structure the use of media queries is to create the queries
near the relevant code. For example, if you wanted to change the styles for buttons
on small devices, paste the mobile query code up in the buttons section and style it
there.

Example:
```
@media (min-width: @bp-larger-than-mobile) {
.button,
button {
  height: 24px;
  padding: 0 15px;
}  
}
```

### avaible Media Queries:
```
/* Larger than mobile */
@media (min-width: @bp-larger-than-mobile) {}

/* Larger than phablet (also point when grid becomes active) */
@media (min-width: @bp-larger-than-phablet) {}

/* Larger than tablet */
@media (min-width: @bp-larger-than-tablet) {}

/* Larger than desktop */
@media (min-width: @bp-larger-than-desktop) {}

/* Larger than Desktop HD */
@media (min-width: @bp-larger-than-desktophd) {}
```

## Programmatic usage

```
var Skeleton = require('less-plugin-skeleton'),
    SkeletonPlugin = new Skeleton();
less.render(lessString, { plugins: [SkeletonPlugin] })
  .then(
```

## Browser usage

Browser usage is not supported at this time.
