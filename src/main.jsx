import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';

const container = document.getElementById('root');

createRoot(container).render(
	<CssBaseline>
		<SnackbarProvider>
			<App />
		</SnackbarProvider>
	</CssBaseline>
);
