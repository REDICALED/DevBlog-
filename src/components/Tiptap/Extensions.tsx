import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import Image from '@tiptap/extension-image'
import HardBreak from '@tiptap/extension-hard-break'
import { common, createLowlight } from 'lowlight';
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight';

import { Node } from "@tiptap/core";

export const CustomCodeBlock = Node.create({
  name: "codeBlock",

  group: "block",

  content: "text*",

  marks: "",

  code: true,

  defining: true,

  addAttributes() {
    return {
      class: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "pre[class]",
        getAttrs: (node) => ({
          class: node.getAttribute("class"),
        }),
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["pre", HTMLAttributes, ["code", 0]];
  },

  addCommands() {
    return {
      setCodeBlock:
        () =>
        ({ commands }) => {
          return commands.setNode(this.name);
        },
    };
  },
});


const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      codeBlock: false
    }),
    CustomCodeBlock,
    CodeBlockLowlight.configure({
      lowlight: createLowlight(common)
  }),
    Image.configure({ inline: true, allowBase64: true}),
    TextAlign.configure({
      types: ['heading', 'paragraph'],
      alignments: ['left', 'center', 'right', 'justify'],
      defaultAlignment: 'left',
    }),
    HardBreak.extend({
      addKeyboardShortcuts () {
        return {
          Enter: () => this.editor.commands.setHardBreak(),
          "Shift-Enter": () => this.editor.commands.splitBlock(), 
        }}}),
  ]

  export default extensions;
