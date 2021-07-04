import React from 'react'
import { withTheme } from '@rjsf/core';
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'

export default function FormKore(props) {

    const Form = withTheme(props.framework);

    return (
        <div>
            <div style={{ margin: '4rem 6rem' }}>
              <Form schema={props.schema} uiSchema={props.uiSchema}
              />
            </div>
        </div>
    )
}
