'use client'
import { type Editor } from "@tiptap/react"
import { useCallback } from "react"
import {
    Bold,
    Strikethrough,
    Italic,
    List,
    ListOrdered,
    Heading2,
    Image
} from 'lucide-react'
import { Toggle } from "./ui/toggle"
type Props = { 
    editor : Editor | null
}
export default function Toolbar({editor} : Props) {

    const addImage = useCallback(() => {
        const url = window.prompt('URL')
    
        if (url) {
          editor?.chain().focus().setImage({ src: url }).run()
        }
    }, [editor])
    
    if(!editor) {
        return null
    }
  return (
    <div className="border border-input bg-transparent rounded-md inline-flex items-center">
        <Toggle
        size={'sm'}
        pressed={editor?.isActive('heading')}
        onPressedChange={() => {
            editor.chain().focus().toggleHeading({ level: 1 }).run()
        }}>
            <Heading2 className="w-4 h-4"/>
        </Toggle>
        <Toggle
        size={'sm'}
        pressed={editor?.isActive('bold')}
        onPressedChange={() => {
            editor.chain().focus().toggleBold().run()
        }}>
            <Bold className="w-4 h-4"/>
        </Toggle>
        <Toggle
        size={'sm'}
        pressed={editor?.isActive('italic')}
        onPressedChange={() => {
            editor.chain().focus().toggleItalic().run()
        }}>
            <Italic className="w-4 h-4"/>
        </Toggle>
        <Toggle
        size={'sm'}
        pressed={editor?.isActive('strike')}
        onPressedChange={() => {
            editor.chain().focus().toggleStrike().run()
        }}>
            <Strikethrough className="w-4 h-4"/>
        </Toggle>
        <Toggle
        size={'sm'}
        pressed={editor.isActive('bulletList')}
        onPressedChange={() => {
            editor.chain().focus().toggleBulletList().run()
        }}>
            <List className="w-4 h-4"/>
        </Toggle>
        <Toggle
        size={'sm'}
        pressed={editor.isActive('orderedList')}
        onPressedChange={() => {editor.chain().focus().toggleOrderedList().run()}}>
            <ListOrdered className="w-4 h-4"/>
        </Toggle>
        <Toggle
        size={'sm'}
        pressed={editor.isActive('setImage')}
        onPressedChange={addImage}>
            <Image className="w-4 h-4"/>
        </Toggle>
        
    </div>
  )
}
