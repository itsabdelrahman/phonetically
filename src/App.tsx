import * as React from 'react';
import { Grommet, Box, Heading, TextInput, Table, TableCell } from 'grommet';
import mapping from './mapping';

type Props = {};

type State = {
  text: string;
};

class App extends React.Component<Props, State> {
  public state: State = {
    text: '',
  };

  public render() {
    const { text } = this.state;

    const words: string[] = text.split(' ');

    return (
      <Grommet
        full={true}
        theme={{
          global: {
            font: {
              family: 'Lato',
              size: '40px',
              height: '20px',
            },
          },
        }}
      >
        <Box
          flex={true}
          pad="large"
          background={{ color: 'black' }}
          border={{ color: '#81FCED', size: 'large' }}
        >
          <Box style={{ flex: 0.2 }}>
            <TextInput
              plain={true}
              placeholder="Type something here"
              autoFocus={true}
              spellCheck={false}
              value={text}
              onChange={(event: any) => {
                this.setState({ text: event.target.value });
              }}
            />
          </Box>

          <Box style={{ flex: 0.8 }}>
            <Table>
              {words.map((word, index) => {
                const characters: string[] = word.split('');

                return (
                  <div key={index}>
                    {characters.map(character => (
                      <TableCell>
                        <Heading size="large" margin="4px">
                          {character.toUpperCase()}
                        </Heading>

                        <Heading size="small" margin="4px">
                          {mapping[character.toLowerCase()]}
                        </Heading>
                      </TableCell>
                    ))}
                  </div>
                );
              })}
            </Table>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default App;
