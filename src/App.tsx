import * as React from 'react';
import { Grommet, Box, TextInput, ThemeValue } from 'grommet';

const theme: ThemeValue = {
  global: {
    font: {
      family: 'Lato',
      size: '40px',
      height: '20px',
    },
  },
};

type Props = {};

type State = {
  text: string;
};

class App extends React.Component<Props, State> {
  public state: State = {
    text: '',
  };

  public render() {
    return (
      <Grommet theme={theme} full={true}>
        <Box
          fill={true}
          flex={true}
          pad="large"
          background={{ color: 'black' }}
          border={{ color: 'accent-3', size: 'large' }}
        >
          <TextInput
            plain={true}
            placeholder="Type something here"
            autoFocus={true}
            value={this.state.text}
            onChange={(event: any) => {
              this.setState({ text: event.target.value });
            }}
          />
        </Box>
      </Grommet>
    );
  }
}

export default App;
