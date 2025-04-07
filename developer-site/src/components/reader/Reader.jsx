import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

export const Reader = () => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("/markdown.md")
      .then((res) => res.text())
      .then((md) => {
        setMarkdown(md);
      });
  }, []);

  return (
    <div
      className={`prose prose-base prose-h1:text-2xl prose-h1:text-green prose:text-dark prose-p:text-base prose-strong:text-blue prose-ul:list-decimal prose-ul:text-dark sm:mx-auto dark:prose-h1:text-foreground dark:prose-invert mx-5`}
    >
      <Markdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            const { children, className, _, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={atomDark}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};
