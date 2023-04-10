import SyntaxHighlighter from 'react-syntax-highlighter';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Fab from '@mui/material/Fab';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBox = ({children, lang}: any) => {
 
    return (
        <div style={{position: 'relative'}}>
            <CopyToClipboard text={children}>
                <Fab className="copy__btn" 
                    sx={{
                        position: 'absolute',
                        width: '3em',
                        height: '3em',
                        right: '1.5em',
                        top: '2em',
                        backgroundColor: 'transparent',
                        color: '#94a3b8',
                        border: '0.1em solid #94a3b8',
                        '&:hover': {
                            backgroundColor: '#11192e',
                            color: '#e2e8ef'
                        }
                    }} 
                    aria-label="add">
                    <ContentCopyIcon sx={{fontSize: '1.25em'}} /> 
                </Fab>  
            </CopyToClipboard>
            <SyntaxHighlighter language={lang} showLineNumbers wrapLongLines={true}/*  useInlineStyles={false} */ lineNumberStyle={{color: '#7d7d7d'}} style={androidstudio}>
                {children}
            </SyntaxHighlighter>
        </div>
    )
}

export default CodeBox

