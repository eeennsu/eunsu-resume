import type { FC } from 'react'
import ReactMarkdown, { Options as ReactMarkdownProps } from 'react-markdown'
import remarkBreaks from 'remark-breaks'

export const Markdown: FC<ReactMarkdownProps> = (props) => {
    return (
        <ReactMarkdown
            remarkPlugins={[remarkBreaks]}
            {...props}
        />
    )
}
