import React, { useState } from 'react';
import {
  Grommet,
  Box,
  Heading,
  Text,
  TextInput,
  Table,
  TableCell,
} from 'grommet';
import { useMediaQuery } from 'react-responsive';
import alphabet from './alphabet';

const App: React.FC = () => {
  const [text, setText] = useState('');
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const words = text.split(' ');

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
            onChange={event => {
              setText(event.target.value);
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
              const characters = word.split('');

              return (
                <div key={index}>
                  {characters.map(character => (
                    <TableCell style={{ alignItems: 'center' }}>
                      <Heading
                        size={isMobile ? 'medium' : 'large'}
                        margin={isMobile ? '2px' : '4px'}
                      >
                        {character.toUpperCase()}
                      </Heading>

                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: isMobile ? 18 : 26,
                        }}
                        margin={isMobile ? '2px' : '4px'}
                      >
                        {alphabet[character.toLowerCase()]}
                      </Text>
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
};

export default App;
