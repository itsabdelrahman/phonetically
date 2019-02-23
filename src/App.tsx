import * as React from 'react';
import {
  Grommet,
  Box,
  Heading,
  Text,
  TextInput,
  Table,
  TableCell,
} from 'grommet';
import MediaQuery from 'react-responsive';
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
        style={{ backgroundColor: 'black' }}
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
        <MediaQuery maxDeviceWidth={767}>
          {isMobile => {
            return (
              <Box flex={true} pad="large" background={{ color: 'black' }}>
                <Box
                  style={{ flex: 0.2 }}
                  pad="xsmall"
                  border={{ color: '#81FCED', size: 'small' }}
                >
                  <TextInput
                    style={{ fontSize: isMobile ? 24 : 40 }}
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

                <Box
                  style={{ flex: 0.8, marginTop: 24, marginBottom: 24 }}
                  overflow="scroll"
                  wrap={true}
                >
                  <Table>
                    {words.map((word, index) => {
                      const characters: string[] = word.split('');

                      return (
                        <div key={index}>
                          {characters.map(character => (
                            <TableCell style={{ alignItems: 'center' }}>
                              <Heading
                                size={isMobile ? 'medium' : 'large'}
                                margin="4px"
                              >
                                {character.toUpperCase()}
                              </Heading>

                              <Text
                                style={{ fontWeight: 'bold' }}
                                size={isMobile ? 'small' : 'medium'}
                                margin="4px"
                              >
                                {mapping[character.toLowerCase()]}
                              </Text>
                            </TableCell>
                          ))}
                        </div>
                      );
                    })}
                  </Table>
                </Box>
              </Box>
            );
          }}
        </MediaQuery>
      </Grommet>
    );
  }
}

export default App;
