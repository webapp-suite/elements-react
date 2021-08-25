# Dialog

## Basic

```tsx
import React from 'react';
import { Button, Dialog } from '@webapp-suite/elements-react';

export default () => (
    <Button
        onClick={() => {
            Dialog.info({
                text: 'This is info hint text !',
            });
        }}
    >
        info
    </Button>
);
```

## Type

```tsx
import React from 'react';
import { Button, Space, Dialog } from '@webapp-suite/elements-react';

export default () => (
    <Space>
        <Button
            onClick={() => {
                Dialog.info({
                    text: 'This is info hint text !',
                });
            }}
        >
            info
        </Button>
        <Button
            onClick={() => {
                Dialog.warning({
                    text: 'This is warning hint text !',
                });
            }}
        >
            warning
        </Button>
        <Button
            onClick={() => {
                Dialog.danger({
                    text: 'This is danger hint text !',
                });
            }}
        >
            danger
        </Button>
    </Space>
);
```

<API></API>
