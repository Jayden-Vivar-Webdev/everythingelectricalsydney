// import { contentMap } from "./map-sections";
// import type { PortableTextBlock } from '@sanity/types';
// import { CustomBlock } from "@/app/sanity-blocks/sanity-types";

// type ContentProp = PortableTextBlock[] | CustomBlock;

// type BlockWithType = { _type: string; [key: string]: unknown };

// export default function RenderContent({ content }: { content: ContentProp }) {
//   // Normalize content to always be an array
//   const blocksArray = Array.isArray(content) ? content : [content];

//   return (
//     <>
//       {blocksArray.map((block, index) => {
//         const typedBlock = block as BlockWithType;
//         const Component = contentMap[typedBlock._type];
//         return Component ? Component(typedBlock, index) : null;
//       })}
//     </>
//   );
// }
