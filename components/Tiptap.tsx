'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'
import { Heading } from '@tiptap/extension-heading'
import {OrderedList} from '@tiptap/extension-ordered-list'
import {BulletList} from '@tiptap/extension-bullet-list'
import {Image} from '@tiptap/extension-image'
export function Tiptap({description, onChange} : {description : string, onChange: (richText : string) => void}) {
    const editor = useEditor({
        extensions : [StarterKit.configure({}), Heading.configure({
            HTMLAttributes:{
                class:'text-2xl',
                levels:[2]
            }
        }),
        OrderedList.configure({
            HTMLAttributes:{
                class:'list-decimal pl-4',
                keepMarks: true,
            }
        }), 
        BulletList.configure({
            HTMLAttributes:{
                class:'list-disc pl-4'
            }
        }), Image.configure({
            HTMLAttributes:{
                class:'',
            },
            inline:true,
            allowBase64: true,
        })],
        content:description,
        editorProps: {
           attributes: {
            class:" rounded-md border min-h-[200px] p-2"
           }
        },
        onUpdate({editor}) {
            onChange(editor.getHTML())
        }
    })
    return (
        <div className=' flex flex-col justify-stretch min-h-[250px] gap-3'>
            <Toolbar editor={editor}/>
            <EditorContent editor={editor}/>
        </div>
    )
}