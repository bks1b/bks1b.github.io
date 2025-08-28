import { createRoot } from 'react-dom/client';
import { AsciiMath, Parser } from 'react-documents/dist/src/parser/index.js';

const COMMENT = ['/*', '*/'];
const COMMENTS = { hs: ['{-', '-}'] };

const path = location.search.slice(1);
fetch('https://raw.githubusercontent.com/bks1b/puzzles/refs/heads/main/puzzles/' + path).then(async d => {
    const text = await d.text();
    if (!d.ok) throw 'Puzzle not found.';
    document.title = path;
    const comment = COMMENTS[path.split('.').at(-1)] || COMMENT;
    const startI = text.indexOf(comment[0]);
    if (startI < 0) throw 'Puzzle has no comments.';
    const endI = text.lastIndexOf(comment[1]);
    createRoot(root).render(<Parser text={text.slice(startI + comment[0].length, endI)} textOptions={{
        groupingChars: ['{', '}'],
        extended: x => {
            const math = x.match(/^@(.+?)@/);
            if (math) return [<AsciiMath inline text={math[1]}/>, math[0].length];
        },
    }} fallbacks={[['text'], ['math']]}/>);
}).catch(e => {
    console.error(e);
    createRoot(root).render(<div className='h1'>{e + ''}</div>);
});