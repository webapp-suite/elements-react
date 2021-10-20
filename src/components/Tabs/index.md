# Tabs

```js
import { Tabs, Tab } from '@webapp-suite/elements-react';
```

## Basic

```tsx
/**
 * background: '#eee'
 */
import React from 'react';
import { Tabs, Tab } from '@webapp-suite/elements-react';

const tabsData = [
    { label: 'One', icon: 'ada' },
    { label: 'Two', counter: 12 },
    { label: 'Three' },
    { label: 'Four', selected: true },
    { label: 'Five', icon: 'ada', counter: 9 },
    { label: 'Six' },
];

export default () => (
    <Tabs>
        {tabsData.map((tab, idx) => (
            <Tab
                key={tab.label}
                icon={tab.icon}
                label={tab.label}
                selected={tab.selected}
                counter={tab.counter}
            >
                <h1>{tab.label} content</h1>
            </Tab>
        ))}
    </Tabs>
);
```

## API

### Tabs

<API hideTitle></API>

### Tab

<API src="../Tab/index.tsx" hideTitle></API>
