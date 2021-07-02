module.exports = `

#ifndef KB_H
#define KB_H

#include "quantum.h"

#define LAYOUT_all( \\
%keymap_1%
) { \\
%keymap_2%
}

#endif

`.trim();
