# Header

## Basic

```tsx
/**
 * background: '#eee'
 */
import React from 'react';
import { Header } from '@webapp-suite/elements-react';

export default () => <Header title="My Application" />;
```

## Color

```tsx
import React from 'react';
import { Header } from '@webapp-suite/elements-react';

export default () => <Header title="My Application" color="blue" />;
```

## Action

```tsx
import React from 'react';
import { Header, Button } from '@webapp-suite/elements-react';

export default () => (
    <Header title="My Application" color="blue">
        <Button>Button</Button>
    </Header>
);
```

<API></API>
