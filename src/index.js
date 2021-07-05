import React from 'react'
import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import { Theme as MuiTheme } from 'rjsf-material-ui';
import { Theme as FluentUITheme } from '@rjsf/fluent-ui';
import { Theme as SemanticUITheme } from '@rjsf/semantic-ui';
import { Theme as Bootstrap4Theme } from '@rjsf/bootstrap-4';
import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css'

export default function FormKore(props) {
  let framework = AntDTheme
  switch (framework) {
    case "AntDTheme":
      framework = AntDTheme;
      break;
    case "FluentUITheme":
      framework = FluentUITheme;
      break;
    case "SemanticUITheme":
      framework = SemanticUITheme;
      break;
    case "Bootstrap4Theme":
      framework = Bootstrap4Theme;
      break;
    case "MuiTheme":
      framework = MuiTheme;
      break;
    // default:
    // framework = MuiTheme;
  }


    const Form = withTheme(framework);

    return (
        <div>
            <div style={{ margin: '4rem 6rem' }}>
              <Form schema={props.schema} uiSchema={props.uiSchema}
              />
            </div>
        </div>
    )
}
