# **Degreezzy** [![npm version](https://badge.fury.io/js/degreezzy.svg)](https://badge.fury.io/js/degreezzy) ![npm](https://img.shields.io/npm/dw/degreezzy)

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

## Thanks for using this library.

If you have any suggestions or improvements, we are always open to the Pull Requests.
Also, if you liked it, you can put a star on the GitHub, thanks!
