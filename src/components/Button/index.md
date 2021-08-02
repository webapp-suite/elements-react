# Button

## Default

```tsx
import React from 'react';
import { Button } from '@webapp-suite/elements-react';

export default () => <Button>Default</Button>;
```

## Type

The `default` and `primary` buttons are used in most cases, you can also use other types in specific scenarios.

```tsx
import React from 'react';
import { Button, Space } from '@webapp-suite/elements-react';

export default () => (
    <Space>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="accept">accept</Button>
        <Button type="warning">warning</Button>
        <Button type="danger">danger</Button>
        <Button type="text">Text</Button>
    </Space>
);
```

## Size

Besides default `md` size, Button component provides three additional sizes for you to choose among different scenarios.

```tsx
import React from 'react';
import { Button, Space } from '@webapp-suite/elements-react';

export default () => (
    <Space>
        <Button size="micro">micro</Button>
        <Button size="macro">macro</Button>
    </Space>
);
```

## Click

Bind the click event on the Button.

```tsx
import React from 'react';
import { Button } from '@webapp-suite/elements-react';

export default () => <Button onClick={() => alert('Clicked!')}>Click</Button>;
```

## Disabled

Determine if the button is disabled. `onClick` event won't be dispatched.

```tsx
import React from 'react';
import { Button } from '@webapp-suite/elements-react';

export default () => (
    <Button disabled onClick={() => alert('Clicked!')}>
        Disabled
    </Button>
);
```

<API></API>
