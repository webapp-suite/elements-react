# Tooltip

```js
import { Tooltip } from '@webapp-suite/elements-react';
```

## Default

```tsx
import React from 'react';
import { Tooltip } from '@webapp-suite/elements-react';

export default () => <Tooltip tooltip="This is my tooltip">Tooltip</Tooltip>;
```

## Position

```tsx
import React from 'react';
import { Tooltip } from '@webapp-suite/elements-react';

export default () => (
    <>
        <Tooltip tooltip="This is my top tooltip" position="top">
            Top Tooltip
        </Tooltip>
        <br />
        <Tooltip tooltip="This is my right tooltip" position="right">
            Right Tooltip
        </Tooltip>
        <br />
        <Tooltip tooltip="This is my left tooltip" position="left">
            Left Tooltip
        </Tooltip>
        <br />
        <Tooltip tooltip="This is my bottom tooltip" position="bottom">
            Bottom Tooltip
        </Tooltip>
    </>
);
```

## width

```tsx
import React from 'react';
import { Tooltip } from '@webapp-suite/elements-react';

export default () => (
    <Tooltip tooltip="This is my tooltip" width="300px">
        Tooltip
    </Tooltip>
);
```

## Disabled

```tsx
import React from 'react';
import { Tooltip } from '@webapp-suite/elements-react';

export default () => (
    <Tooltip tooltip="This is my tooltip" disabled>
        Tooltip
    </Tooltip>
);
```

<API></API>
