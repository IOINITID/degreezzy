![logo](logo.svg)

[![npm version](https://badge.fury.io/js/degreezzy.svg)](https://badge.fury.io/js/degreezzy)
![npm](https://img.shields.io/npm/dw/degreezzy)
![license](https://badgen.net/github/license/IOINITID/degreezzy)
[![build](https://github.com/IOINITID/degreezzy/actions/workflows/build-action.yml/badge.svg)](https://github.com/IOINITID/degreezzy/actions/workflows/build-action.yml)
[![codecov](https://codecov.io/gh/IOINITID/degreezzy/branch/master/graph/badge.svg?token=SO0DPS4UVT)](https://codecov.io/gh/IOINITID/degreezzy)

## What is it? 🐱

It is a library with utilitarian functions for working with degrees and directions.

## How to use it?

First you need to install the package from npm:

```
npm install --save degreezzy
```

After that, you need to import the package into your project:

```
import { getDirectionByDegrees, getDegreesByDirection } from 'degreezzy';
```

Now you can use this in your project, for example:

```
const degrees = 360; // Degrees value.

const direction = getDirectionByDegrees(degrees); // Returns a direction value: 'N';
```

You can also:

```
const direction = 'N'; // Direction value.

const degrees = getDegreesByDirection(direction); // Returns a degrees value: 360;
```

There are also functions for converting radians to degrees.

```
import { getDegreesByRadians, getRadiansByDegrees } from 'degreezzy';
```

Which you can use that way.

```
const radians = 6.283185307179586; // Radians value.
const degrees = getDegreesByRadians(radians); // Returns a degrees value: 360.
```

Or degrees to radians.

```
const degrees = 360; // Degrees value.
const radians = getRadiansByDegrees(degrees); // Returns a radians value: 6.283185307179586.
```

## Thanks for using this library.

If you have any suggestions or improvements, we are always open to the Pull Requests. If you liked it, you can put a star on the GitHub, thanks!
