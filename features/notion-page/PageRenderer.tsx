import React from "react";
import { NotionRenderer } from "react-notion";
import Link from "../../shared/Link";
import BlogLink from "./BlogLink";
import ImageRenderer from "./ImageRenderer";
import { isValidHttpUrl } from "./is-valid-url";
import VideoRenderer from "./VideoRenderer";

const PageRenderer = ({ page, blockMap }) => {
  return (
    <>
      <NotionRenderer
        blockMap={blockMap}
        customDecoratorComponents={{
          a: ({ decoratorValue, children }) => {
            const isUrl = isValidHttpUrl(decoratorValue);
            if (isUrl) {
              return <Link href={decoratorValue}>{children}</Link>;
            } else {
              return <BlogLink path={decoratorValue}>{children}</BlogLink>;
            }
          },
        }}
        customBlockComponents={{
          image: ({ blockValue, renderComponent: Image }) => {
            return <ImageRenderer blockValue={blockValue} />;
          },
          video: ({ blockValue }) => {
            return <VideoRenderer blockValue={blockValue} />;
          },
        }}
      />
      <style jsx global>{`
        div :global(.notion-list li) {
          padding: 2px 0px;
        }
      `}</style>
    </>
  );
};

export default PageRenderer;
