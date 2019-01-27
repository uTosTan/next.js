import { renderToString, renderToStaticMarkup } from 'react-dom/server'

process.on('message', message => {
    const result = renderToString(message.app)
    process.send(result)
})