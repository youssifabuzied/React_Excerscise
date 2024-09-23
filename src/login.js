import React, { useState } from 'react';
import { TextField, Button, Typography, Container, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark', 
    primary: {
      main: '#90caf9',  
    },
    background: {
      default: '#121212', 
      paper: '#1d1d1d',   
    },
    text: {
      primary: '#ffffff',  
      secondary: '#bdbdbd' 
    },
  },
});

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  


  const handleSubmit = () => {
    if (!username || !password) {
      setError("Both fields are required");
      return;
    }
    
    if (username === "admin" && password === "1234") {
      alert(`Welcome, ${username}!`);
      setError('');
      setUsername('');  
      setPassword('');
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {}
      <Container style={{ marginTop: '100px', textAlign: 'center', maxWidth: '400px', padding: '20px', backgroundColor: darkTheme.palette.background.paper, borderRadius: '10px' }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField 
          label="Username" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          error={!!error && !username} 
          helperText={!!error && !username ? "Username is required" : ""}
          InputProps={{
            style: { color: darkTheme.palette.text.primary },  
          }}
        />
        <TextField 
          label="Password" 
          type="password" 
          variant="outlined" 
          fullWidth 
          margin="normal" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          error={!!error && !password} 
          helperText={!!error && !password ? "Password is required" : ""}
          InputProps={{
            style: { color: darkTheme.palette.text.primary }, 
          }}
        />
        {/* Error message display */}
        {error && (
          <Typography color="error" style={{ marginTop: '10px' }}>
            {error}
          </Typography>
        )}
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          onClick={handleSubmit}
          style={{ marginTop: '20px' }}
        >
          Login
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default Login;

