# Modal

## Default

```tsx
import React, { useState } from 'react';
import { Button, Modal } from '@webapp-suite/elements-react';

const { ModalBody } = Modal;

export default () => {
    let [showModal, setShowModal] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setShowModal(true)}>
                Default Modal
            </Button>
            <Modal
                onClose={() => setShowModal(false)}
                visible={showModal}
                title="Default Modal"
            >
                <ModalBody>
                    Modal ipsum dolor amet jerky sausage pork belly tenderloin
                    burgdoggen kevin prosciutto beef ribs shoulder tri-tip
                    salami ribeye turducken rump. Rump prosciutto ham, kevin
                    picanha drumstick chuck pork chop. Short ribs tail shank,
                    alcatra kevin spare ribs meatloaf beef. Pork loin salami
                    flank andouille prosciutto chuck bresaola sirloin ribeye.
                    Bacon picanha salami filet mignon capicola beef ribs.
                    Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha.
                </ModalBody>
            </Modal>
        </>
    );
};
```

## Size

```tsx
import React, { useState } from 'react';
import { Button, Modal, Space } from '@webapp-suite/elements-react';

const { ModalBody } = Modal;

export default () => {
    let [showModal, setShowModal] = useState(false);
    let [size, setSize] = useState('small');
    return (
        <>
            <Space>
                <Button
                    onClick={() => {
                        setShowModal(true);
                        setSize('small');
                    }}
                >
                    Small Modal
                </Button>
                <Button
                    onClick={() => {
                        setShowModal(true);
                        setSize('medium');
                    }}
                >
                    Medium Modal
                </Button>
                <Button
                    onClick={() => {
                        setShowModal(true);
                        setSize('large');
                    }}
                >
                    Large Modal
                </Button>
            </Space>
            <Modal
                onClose={() => setShowModal(false)}
                visible={showModal}
                size={size}
                title={`${size} Modal`.replace(/^\S/, (s) => s.toUpperCase())}
            >
                <ModalBody>
                    Modal ipsum dolor amet jerky sausage pork belly tenderloin
                    burgdoggen kevin prosciutto beef ribs shoulder tri-tip
                    salami ribeye turducken rump. Rump prosciutto ham, kevin
                    picanha drumstick chuck pork chop. Short ribs tail shank,
                    alcatra kevin spare ribs meatloaf beef. Pork loin salami
                    flank andouille prosciutto chuck bresaola sirloin ribeye.
                    Bacon picanha salami filet mignon capicola beef ribs.
                    Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha.
                </ModalBody>
            </Modal>
        </>
    );
};
```

## Customized Width

```tsx
import React, { useState } from 'react';
import { Button, Modal } from '@webapp-suite/elements-react';

const { ModalBody } = Modal;

export default () => {
    let [showModal, setShowModal] = useState(false);
    return (
        <>
            <Button onClick={() => setShowModal(true)}>
                Modal With Customized Width
            </Button>
            <Modal
                onClose={() => setShowModal(false)}
                visible={showModal}
                title="Modal With Customized Width"
                width="500px"
            >
                <ModalBody>
                    Modal ipsum dolor amet jerky sausage pork belly tenderloin
                    burgdoggen kevin prosciutto beef ribs shoulder tri-tip
                    salami ribeye turducken rump. Rump prosciutto ham, kevin
                    picanha drumstick chuck pork chop. Short ribs tail shank,
                    alcatra kevin spare ribs meatloaf beef. Pork loin salami
                    flank andouille prosciutto chuck bresaola sirloin ribeye.
                    Bacon picanha salami filet mignon capicola beef ribs.
                    Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha.
                </ModalBody>
            </Modal>
        </>
    );
};
```

## Footer

```tsx
import React, { useState } from 'react';
import { Button, Modal } from '@webapp-suite/elements-react';

const { ModalBody, ModalFooter } = Modal;

export default () => {
    let [showModal, setShowModal] = useState(false);
    return (
        <>
            <Button onClick={() => setShowModal(true)}>
                Modal With Footer
            </Button>
            <Modal
                onClose={() => setShowModal(false)}
                visible={showModal}
                title="Modal With Footer"
            >
                <ModalBody>
                    Modal ipsum dolor amet jerky sausage pork belly tenderloin
                    burgdoggen kevin prosciutto beef ribs shoulder tri-tip
                    salami ribeye turducken rump. Rump prosciutto ham, kevin
                    picanha drumstick chuck pork chop. Short ribs tail shank,
                    alcatra kevin spare ribs meatloaf beef. Pork loin salami
                    flank andouille prosciutto chuck bresaola sirloin ribeye.
                    Bacon picanha salami filet mignon capicola beef ribs.
                    Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha. Modal ipsum dolor amet jerky sausage pork belly
                    tenderloin burgdoggen kevin prosciutto beef ribs shoulder
                    tri-tip salami ribeye turducken rump. Rump prosciutto ham,
                    kevin picanha drumstick chuck pork chop. Short ribs tail
                    shank, alcatra kevin spare ribs meatloaf beef. Pork loin
                    salami flank andouille prosciutto chuck bresaola sirloin
                    ribeye. Bacon picanha salami filet mignon capicola beef
                    ribs. Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha. Modal ipsum dolor amet jerky sausage pork belly
                    tenderloin burgdoggen kevin prosciutto beef ribs shoulder
                    tri-tip salami ribeye turducken rump. Rump prosciutto ham,
                    kevin picanha drumstick chuck pork chop. Short ribs tail
                    shank, alcatra kevin spare ribs meatloaf beef. Pork loin
                    salami flank andouille prosciutto chuck bresaola sirloin
                    ribeye. Bacon picanha salami filet mignon capicola beef
                    ribs. Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha. Modal ipsum dolor amet jerky sausage pork belly
                    tenderloin burgdoggen kevin prosciutto beef ribs shoulder
                    tri-tip salami ribeye turducken rump. Rump prosciutto ham,
                    kevin picanha drumstick chuck pork chop. Short ribs tail
                    shank, alcatra kevin spare ribs meatloaf beef. Pork loin
                    salami flank andouille prosciutto chuck bresaola sirloin
                    ribeye. Bacon picanha salami filet mignon capicola beef
                    ribs. Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha. Modal ipsum dolor amet jerky sausage pork belly
                    tenderloin burgdoggen kevin prosciutto beef ribs shoulder
                    tri-tip salami ribeye turducken rump. Rump prosciutto ham,
                    kevin picanha drumstick chuck pork chop. Short ribs tail
                    shank, alcatra kevin spare ribs meatloaf beef. Pork loin
                    salami flank andouille prosciutto chuck bresaola sirloin
                    ribeye. Bacon picanha salami filet mignon capicola beef
                    ribs. Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha. Modal ipsum dolor amet jerky sausage pork belly
                    tenderloin burgdoggen kevin prosciutto beef ribs shoulder
                    tri-tip salami ribeye turducken rump. Rump prosciutto ham,
                    kevin picanha drumstick chuck pork chop. Short ribs tail
                    shank, alcatra kevin spare ribs meatloaf beef. Pork loin
                    salami flank andouille prosciutto chuck bresaola sirloin
                    ribeye. Bacon picanha salami filet mignon capicola beef
                    ribs. Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha. Modal ipsum dolor amet jerky sausage pork belly
                    tenderloin burgdoggen kevin prosciutto beef ribs shoulder
                    tri-tip salami ribeye turducken rump. Rump prosciutto ham,
                    kevin picanha drumstick chuck pork chop. Short ribs tail
                    shank, alcatra kevin spare ribs meatloaf beef. Pork loin
                    salami flank andouille prosciutto chuck bresaola sirloin
                    ribeye. Bacon picanha salami filet mignon capicola beef
                    ribs. Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha. Modal ipsum dolor amet jerky sausage pork belly
                    tenderloin burgdoggen kevin prosciutto beef ribs shoulder
                    tri-tip salami ribeye turducken rump. Rump prosciutto ham,
                    kevin picanha drumstick chuck pork chop. Short ribs tail
                    shank, alcatra kevin spare ribs meatloaf beef. Pork loin
                    salami flank andouille prosciutto chuck bresaola sirloin
                    ribeye. Bacon picanha salami filet mignon capicola beef
                    ribs. Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha. Modal ipsum dolor amet jerky sausage pork belly
                    tenderloin burgdoggen kevin prosciutto beef ribs shoulder
                    tri-tip salami ribeye turducken rump. Rump prosciutto ham,
                    kevin picanha drumstick chuck pork chop. Short ribs tail
                    shank, alcatra kevin spare ribs meatloaf beef. Pork loin
                    salami flank andouille prosciutto chuck bresaola sirloin
                    ribeye. Bacon picanha salami filet mignon capicola beef
                    ribs. Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha. Modal ipsum dolor amet jerky sausage pork belly
                    tenderloin burgdoggen kevin prosciutto beef ribs shoulder
                    tri-tip salami ribeye turducken rump. Rump prosciutto ham,
                    kevin picanha drumstick chuck pork chop. Short ribs tail
                    shank, alcatra kevin spare ribs meatloaf beef. Pork loin
                    salami flank andouille prosciutto chuck bresaola sirloin
                    ribeye. Bacon picanha salami filet mignon capicola beef
                    ribs. Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha. Modal ipsum dolor amet jerky sausage pork belly
                    tenderloin burgdoggen kevin prosciutto beef ribs shoulder
                    tri-tip salami ribeye turducken rump. Rump prosciutto ham,
                    kevin picanha drumstick chuck pork chop. Short ribs tail
                    shank, alcatra kevin spare ribs meatloaf beef. Pork loin
                    salami flank andouille prosciutto chuck bresaola sirloin
                    ribeye. Bacon picanha salami filet mignon capicola beef
                    ribs. Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha. Modal ipsum dolor amet jerky sausage pork belly
                    tenderloin burgdoggen kevin prosciutto beef ribs shoulder
                    tri-tip salami ribeye turducken rump. Rump prosciutto ham,
                    kevin picanha drumstick chuck pork chop. Short ribs tail
                    shank, alcatra kevin spare ribs meatloaf beef. Pork loin
                    salami flank andouille prosciutto chuck bresaola sirloin
                    ribeye. Bacon picanha salami filet mignon capicola beef
                    ribs. Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha.
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button type="primary">Create</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};
```

## Combine With Dialog

```tsx
import React, { useState } from 'react';
import { Button, Modal, Dialog } from '@webapp-suite/elements-react';

const { ModalBody } = Modal;

export default () => {
    let [showModal, setShowModal] = useState(false);
    return (
        <>
            <Button type="primary" onClick={() => setShowModal(true)}>
                Default Modal
            </Button>
            <Modal
                onClose={() => setShowModal(false)}
                visible={showModal}
                title="Default Modal"
            >
                <ModalBody>
                    <Button
                        onClick={() =>
                            Dialog.warning({
                                text: 'Are you sure you want to delete this?',
                            })
                        }
                    >
                        open dialog
                    </Button>
                    <br />
                    Modal ipsum dolor amet jerky sausage pork belly tenderloin
                    burgdoggen kevin prosciutto beef ribs shoulder tri-tip
                    salami ribeye turducken rump. Rump prosciutto ham, kevin
                    picanha drumstick chuck pork chop. Short ribs tail shank,
                    alcatra kevin spare ribs meatloaf beef. Pork loin salami
                    flank andouille prosciutto chuck bresaola sirloin ribeye.
                    Bacon picanha salami filet mignon capicola beef ribs.
                    Venison jowl meatloaf jerky porchetta, brisket shank
                    picanha.
                </ModalBody>
            </Modal>
        </>
    );
};
```

<API></API>
